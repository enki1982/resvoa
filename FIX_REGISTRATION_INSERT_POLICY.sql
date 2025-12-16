/*
  # Fix Users Registration - Allow INSERT During Signup

  1. Changes
    - Drop existing INSERT policy that requires authentication
    - Create new INSERT policy that works during registration
    - Allow users to insert their own record using auth.uid()
    - This policy works even when email confirmation is enabled

  2. Security
    - Users can only insert a record with their own auth.uid()
    - The auth.uid() is available even during signup before email confirmation
    - Prevents users from creating records for other users
    - Maintains data integrity and security

  3. Important Notes
    - This policy is CRITICAL for user registration to work with email confirmation
    - The policy uses auth.uid() which is available during the signup process
    - Without this, users cannot register when email confirmation is enabled

  4. How to Apply
    - Go to Supabase Dashboard: https://supabase.com/dashboard
    - Select your project: ljvkiapwdedjcritnehf
    - Go to SQL Editor
    - Paste this entire script
    - Click "Run" or press Cmd/Ctrl + Enter
*/

-- Drop existing INSERT policy if exists
DROP POLICY IF EXISTS "Users can create own account" ON users;

-- Create new INSERT policy that works during registration
-- Note: auth.uid() is available during signup, even before email confirmation
CREATE POLICY "Allow user creation during signup"
  ON users FOR INSERT
  WITH CHECK (id = auth.uid());

-- Verify the policy was created
SELECT
  schemaname,
  tablename,
  policyname,
  cmd
FROM pg_policies
WHERE tablename = 'users' AND cmd = 'INSERT';
