/*
  # Fix Security and Performance Issues

  1. Missing Foreign Key Indexes
    - Add indexes for all foreign keys to improve query performance
    - admin_logs.admin_id
    - messages.service_id
    - reviews.reviewer_id
    - transactions.provider_id
    - transactions.user_id

  2. RLS Policy Optimization
    - Wrap all auth.uid() calls with SELECT to prevent re-evaluation per row
    - Significantly improves query performance at scale
    - Affects all tables: users, provider_profiles, services, service_proposals, transactions, reviews, messages, admin_logs

  3. Function Security
    - Fix search_path mutability for calculate_distance and find_nearby_providers
    - Add SECURITY DEFINER where appropriate
    - Set explicit search_path

  4. Notes
    - "Unused Index" warnings are false positives in development/staging
    - Indexes will be used in production with real data
    - Keeping all indexes for production performance
*/

-- ============================================
-- 1. ADD MISSING FOREIGN KEY INDEXES
-- ============================================

CREATE INDEX IF NOT EXISTS idx_admin_logs_admin_id 
  ON admin_logs(admin_id);

CREATE INDEX IF NOT EXISTS idx_messages_service_id 
  ON messages(service_id);

CREATE INDEX IF NOT EXISTS idx_reviews_reviewer_id 
  ON reviews(reviewer_id);

CREATE INDEX IF NOT EXISTS idx_transactions_provider_id 
  ON transactions(provider_id);

CREATE INDEX IF NOT EXISTS idx_transactions_user_id 
  ON transactions(user_id);

-- ============================================
-- 2. OPTIMIZE RLS POLICIES - USERS TABLE
-- ============================================

DROP POLICY IF EXISTS "Users can view own data" ON users;
CREATE POLICY "Users can view own data"
  ON users FOR SELECT
  TO authenticated
  USING (id = (SELECT auth.uid()));

DROP POLICY IF EXISTS "Users can update own data" ON users;
CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  TO authenticated
  USING (id = (SELECT auth.uid()))
  WITH CHECK (id = (SELECT auth.uid()));

-- ============================================
-- 3. OPTIMIZE RLS POLICIES - PROVIDER_PROFILES
-- ============================================

DROP POLICY IF EXISTS "Providers can view own profile" ON provider_profiles;
CREATE POLICY "Providers can view own profile"
  ON provider_profiles FOR SELECT
  TO authenticated
  USING (user_id = (SELECT auth.uid()));

DROP POLICY IF EXISTS "Providers can update own profile" ON provider_profiles;
CREATE POLICY "Providers can update own profile"
  ON provider_profiles FOR UPDATE
  TO authenticated
  USING (user_id = (SELECT auth.uid()))
  WITH CHECK (user_id = (SELECT auth.uid()));

DROP POLICY IF EXISTS "Providers can create own profile" ON provider_profiles;
CREATE POLICY "Providers can create own profile"
  ON provider_profiles FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (SELECT auth.uid()));

-- ============================================
-- 4. OPTIMIZE RLS POLICIES - SERVICES
-- ============================================

DROP POLICY IF EXISTS "Users can view own services" ON services;
CREATE POLICY "Users can view own services"
  ON services FOR SELECT
  TO authenticated
  USING (user_id = (SELECT auth.uid()));

DROP POLICY IF EXISTS "Users can create services" ON services;
CREATE POLICY "Users can create services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (SELECT auth.uid()));

DROP POLICY IF EXISTS "Users can update own services" ON services;
CREATE POLICY "Users can update own services"
  ON services FOR UPDATE
  TO authenticated
  USING (user_id = (SELECT auth.uid()))
  WITH CHECK (user_id = (SELECT auth.uid()));

-- ============================================
-- 5. OPTIMIZE RLS POLICIES - SERVICE_PROPOSALS
-- ============================================

DROP POLICY IF EXISTS "View proposals" ON service_proposals;
CREATE POLICY "View proposals"
  ON service_proposals FOR SELECT
  TO authenticated
  USING (
    provider_id = (SELECT auth.uid()) OR 
    service_id IN (
      SELECT id FROM services WHERE user_id = (SELECT auth.uid())
    )
  );

DROP POLICY IF EXISTS "Providers can create proposals" ON service_proposals;
CREATE POLICY "Providers can create proposals"
  ON service_proposals FOR INSERT
  TO authenticated
  WITH CHECK (provider_id = (SELECT auth.uid()));

-- ============================================
-- 6. OPTIMIZE RLS POLICIES - TRANSACTIONS
-- ============================================

DROP POLICY IF EXISTS "View own transactions" ON transactions;
CREATE POLICY "View own transactions"
  ON transactions FOR SELECT
  TO authenticated
  USING (
    user_id = (SELECT auth.uid()) OR 
    provider_id = (SELECT auth.uid())
  );

-- ============================================
-- 7. OPTIMIZE RLS POLICIES - REVIEWS
-- ============================================

DROP POLICY IF EXISTS "Users can create reviews" ON reviews;
CREATE POLICY "Users can create reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (reviewer_id = (SELECT auth.uid()));

-- ============================================
-- 8. OPTIMIZE RLS POLICIES - MESSAGES
-- ============================================

DROP POLICY IF EXISTS "View own messages" ON messages;
CREATE POLICY "View own messages"
  ON messages FOR SELECT
  TO authenticated
  USING (
    sender_id = (SELECT auth.uid()) OR 
    receiver_id = (SELECT auth.uid())
  );

DROP POLICY IF EXISTS "Send messages" ON messages;
CREATE POLICY "Send messages"
  ON messages FOR INSERT
  TO authenticated
  WITH CHECK (sender_id = (SELECT auth.uid()));

-- ============================================
-- 9. OPTIMIZE RLS POLICIES - ADMIN_LOGS
-- ============================================

DROP POLICY IF EXISTS "Admins can view logs" ON admin_logs;
CREATE POLICY "Admins can view logs"
  ON admin_logs FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = (SELECT auth.uid()) 
      AND user_type = 'admin'
    )
  );

DROP POLICY IF EXISTS "Admins can create logs" ON admin_logs;
CREATE POLICY "Admins can create logs"
  ON admin_logs FOR INSERT
  TO authenticated
  WITH CHECK (
    admin_id = (SELECT auth.uid()) AND
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = (SELECT auth.uid()) 
      AND user_type = 'admin'
    )
  );

-- ============================================
-- 10. FIX FUNCTION SECURITY - calculate_distance
-- ============================================

CREATE OR REPLACE FUNCTION calculate_distance(
  lat1 numeric,
  lon1 numeric,
  lat2 numeric,
  lon2 numeric
)
RETURNS numeric
LANGUAGE plpgsql
IMMUTABLE
PARALLEL SAFE
SECURITY INVOKER
SET search_path = public, pg_temp
AS $$
DECLARE
  earth_radius numeric := 6371;
  dlat numeric;
  dlon numeric;
  a numeric;
  c numeric;
BEGIN
  dlat := radians(lat2 - lat1);
  dlon := radians(lon2 - lon1);
  
  a := sin(dlat/2) * sin(dlat/2) + 
       cos(radians(lat1)) * cos(radians(lat2)) * 
       sin(dlon/2) * sin(dlon/2);
  c := 2 * atan2(sqrt(a), sqrt(1-a));
  
  RETURN earth_radius * c;
END;
$$;

-- ============================================
-- 11. FIX FUNCTION SECURITY - find_nearby_providers
-- ============================================

CREATE OR REPLACE FUNCTION find_nearby_providers(
  service_latitude numeric,
  service_longitude numeric,
  max_distance_km numeric DEFAULT 20
)
RETURNS TABLE (
  provider_id uuid,
  provider_name text,
  distance_km numeric,
  rating numeric,
  level text
)
LANGUAGE plpgsql
STABLE
SECURITY INVOKER
SET search_path = public, pg_temp
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    pp.user_id,
    u.full_name,
    calculate_distance(service_latitude, service_longitude, pp.latitude, pp.longitude) as distance,
    pp.rating,
    pp.level
  FROM provider_profiles pp
  JOIN users u ON u.id = pp.user_id
  WHERE 
    pp.verification_status = 'verified'
    AND pp.active = true
    AND pp.location_enabled = true
    AND pp.latitude IS NOT NULL
    AND pp.longitude IS NOT NULL
    AND calculate_distance(service_latitude, service_longitude, pp.latitude, pp.longitude) <= 
        LEAST(max_distance_km, pp.service_radius_km)
  ORDER BY distance ASC;
END;
$$;

-- ============================================
-- 12. ADD COMMENTS FOR DOCUMENTATION
-- ============================================

COMMENT ON INDEX idx_admin_logs_admin_id IS 'Improves performance for admin log queries';
COMMENT ON INDEX idx_messages_service_id IS 'Improves performance for service message queries';
COMMENT ON INDEX idx_reviews_reviewer_id IS 'Improves performance for reviewer queries';
COMMENT ON INDEX idx_transactions_provider_id IS 'Improves performance for provider transaction queries';
COMMENT ON INDEX idx_transactions_user_id IS 'Improves performance for user transaction queries';

-- ============================================
-- 13. ANALYZE TABLES FOR STATISTICS
-- ============================================

ANALYZE users;
ANALYZE provider_profiles;
ANALYZE services;
ANALYZE service_proposals;
ANALYZE transactions;
ANALYZE reviews;
ANALYZE messages;
ANALYZE admin_logs;
