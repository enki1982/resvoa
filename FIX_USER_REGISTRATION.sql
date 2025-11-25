/*
  # Fix User Registration Policy

  1. Problem
    - Current INSERT policy requires authenticated role
    - During registration via auth.signUp(), user is not yet authenticated
    - This causes "new row violates row-level security policy" error

  2. Solution
    - Drop the restrictive INSERT policy
    - Create new policy that allows INSERT for public/anon role during signup
    - The auth.uid() check ensures only the newly created auth user can insert their row

  3. Security
    - Policy checks that id = auth.uid() to prevent unauthorized inserts
    - This is safe because auth.uid() is only available during/after signup
    - Maintains security while allowing registration to work
*/

-- Drop ALL existing INSERT policies on users table
DROP POLICY IF EXISTS "Users can create own account" ON users;
DROP POLICY IF EXISTS "Allow user registration" ON users;
DROP POLICY IF EXISTS "Users can insert own record" ON users;

-- Create a new policy that allows INSERT during registration
-- TO public means it works for anonymous/unauthenticated users during signup
CREATE POLICY "Allow user registration"
  ON users FOR INSERT
  TO public
  WITH CHECK (id = auth.uid());

-- Verify policies
SELECT tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE tablename = 'users'
ORDER BY cmd, policyname;
