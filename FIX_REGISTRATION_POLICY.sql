/*
  # Fix Users Registration Policy

  This SQL fixes the registration issue by allowing public signups
  while maintaining security through auth.uid() checks.

  INSTRUCTIONS:
  1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/ljvkiapwdedjcritnehf
  2. Click on "SQL Editor" in the left sidebar
  3. Create a new query
  4. Copy and paste this entire SQL script
  5. Click "Run" to execute
*/

-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Users can create own account" ON users;
DROP POLICY IF EXISTS "Allow user registration" ON users;

-- Create a new policy that allows public signup but enforces id = auth.uid()
CREATE POLICY "Allow user registration"
  ON users FOR INSERT
  TO public
  WITH CHECK (id = auth.uid());

-- Verify the policy was created
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE tablename = 'users'
  AND cmd = 'INSERT';
