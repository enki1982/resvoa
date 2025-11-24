/*
  # Fix Users Table - Add INSERT Policy

  1. Changes
    - Add INSERT policy to users table
    - Allow authenticated users to create their own record during registration

  2. Security
    - User can only insert a record with their own auth.uid()
    - This fixes the registration flow where new users couldn't be created
    - Maintains data security by ensuring users can only create their own account

  3. Important Notes
    - This policy is CRITICAL for user registration to work
    - Without it, the RLS blocks all INSERT operations on users table
*/

-- Add INSERT policy for users table
CREATE POLICY "Users can create own account"
  ON users FOR INSERT
  TO authenticated
  WITH CHECK (id = auth.uid());
