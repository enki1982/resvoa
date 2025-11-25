/*
  # Fix Service Proposals Foreign Key Issue

  1. Problem
    - service_proposals.provider_id foreign key constraint is failing
    - The error "insert or update on table service_proposals violates foreign key constraint"
      means the provider_id being inserted doesn't exist in the users table

  2. Root Cause
    - When a provider tries to create a proposal, their user_id might not exist in the users table
    - This happens during signup when the auth.users record is created but the public.users record is not

  3. Solution
    - First, check for orphaned proposals
    - Then verify all providers exist in the users table
    - The real fix is in the application code to ensure users are created properly
*/

-- Step 1: Check for orphaned proposals (proposals with non-existent providers)
SELECT
  sp.id as proposal_id,
  sp.provider_id,
  sp.service_id,
  'Orphaned - provider does not exist' as issue
FROM service_proposals sp
LEFT JOIN users u ON sp.provider_id = u.id
WHERE u.id IS NULL;

-- Step 2: Check for missing user records in public.users that exist in auth.users
SELECT
  au.id,
  au.email,
  au.raw_user_meta_data->>'full_name' as name,
  'User exists in auth but not in public.users' as issue
FROM auth.users au
LEFT JOIN users u ON au.id = u.id
WHERE u.id IS NULL;

-- Step 3: Create missing user records from auth.users
-- This ensures all authenticated users have a record in public.users
INSERT INTO users (id, email, full_name, phone, user_type)
SELECT
  au.id,
  au.email,
  COALESCE(au.raw_user_meta_data->>'full_name', 'Usuario') as full_name,
  COALESCE(au.raw_user_meta_data->>'phone', '') as phone,
  COALESCE(au.raw_user_meta_data->>'user_type', 'user') as user_type
FROM auth.users au
LEFT JOIN users u ON au.id = u.id
WHERE u.id IS NULL
ON CONFLICT (id) DO NOTHING;

-- Step 4: Delete any truly orphaned proposals (if provider still doesn't exist)
DELETE FROM service_proposals
WHERE provider_id NOT IN (SELECT id FROM users);

-- Step 5: Verify the foreign key constraint exists and is correct
SELECT
  tc.constraint_name,
  tc.table_name,
  kcu.column_name,
  ccu.table_name AS foreign_table_name,
  ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
  ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
  ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
  AND tc.table_name = 'service_proposals'
  AND kcu.column_name = 'provider_id';

-- Step 6: Summary - show all proposals with their providers
SELECT
  sp.id as proposal_id,
  sp.provider_id,
  u.full_name as provider_name,
  u.user_type,
  s.title as service_title,
  sp.status
FROM service_proposals sp
LEFT JOIN users u ON sp.provider_id = u.id
LEFT JOIN services s ON sp.service_id = s.id
ORDER BY sp.created_at DESC;
