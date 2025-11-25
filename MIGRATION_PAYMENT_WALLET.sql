/*
  # Add Payment Method and Wallet Support

  INSTRUCTIONS:
  1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/ljvkiapwdedjcritnehf
  2. Click on "SQL Editor" in the left sidebar
  3. Create a new query
  4. Copy and paste this entire SQL script
  5. Click "Run" to execute

  This migration adds:
  - Payment method tracking for users
  - Wallet balance system
  - Stripe Connect integration for providers
  - IBAN support for providers
  - Wallet transactions audit trail
*/

-- Add payment and wallet fields to users table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'stripe_customer_id'
  ) THEN
    ALTER TABLE users ADD COLUMN stripe_customer_id text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'has_payment_method'
  ) THEN
    ALTER TABLE users ADD COLUMN has_payment_method boolean DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'wallet_balance'
  ) THEN
    ALTER TABLE users ADD COLUMN wallet_balance numeric(10,2) DEFAULT 0;
  END IF;
END $$;

-- Add Stripe Connect fields to provider_profiles table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'provider_profiles' AND column_name = 'stripe_account_id'
  ) THEN
    ALTER TABLE provider_profiles ADD COLUMN stripe_account_id text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'provider_profiles' AND column_name = 'stripe_account_status'
  ) THEN
    ALTER TABLE provider_profiles ADD COLUMN stripe_account_status text DEFAULT 'not_started'
      CHECK (stripe_account_status IN ('not_started', 'pending', 'enabled', 'disabled'));
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'provider_profiles' AND column_name = 'iban'
  ) THEN
    ALTER TABLE provider_profiles ADD COLUMN iban text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'provider_profiles' AND column_name = 'pending_balance'
  ) THEN
    ALTER TABLE provider_profiles ADD COLUMN pending_balance numeric(10,2) DEFAULT 0;
  END IF;
END $$;

-- Create wallet_transactions table
CREATE TABLE IF NOT EXISTS wallet_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  transaction_type text NOT NULL CHECK (transaction_type IN ('deposit', 'withdrawal', 'payment', 'refund', 'earning', 'transfer')),
  amount numeric(10,2) NOT NULL,
  balance_before numeric(10,2) NOT NULL,
  balance_after numeric(10,2) NOT NULL,
  description text,
  reference_id uuid,
  reference_type text CHECK (reference_type IN ('service', 'transaction', 'withdrawal', 'deposit')),
  status text DEFAULT 'completed' CHECK (status IN ('pending', 'completed', 'failed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE wallet_transactions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for wallet_transactions
DROP POLICY IF EXISTS "Users can view own wallet transactions" ON wallet_transactions;
CREATE POLICY "Users can view own wallet transactions"
  ON wallet_transactions FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS "System can insert wallet transactions" ON wallet_transactions;
CREATE POLICY "System can insert wallet transactions"
  ON wallet_transactions FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_wallet_transactions_user_id ON wallet_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_wallet_transactions_created_at ON wallet_transactions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_users_stripe_customer_id ON users(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_provider_profiles_stripe_account_id ON provider_profiles(stripe_account_id);

-- Add helpful comments
COMMENT ON COLUMN users.stripe_customer_id IS 'Stripe Customer ID for payment processing';
COMMENT ON COLUMN users.has_payment_method IS 'Quick check if user has added a payment method';
COMMENT ON COLUMN users.wallet_balance IS 'User wallet balance for pending payments and refunds';
COMMENT ON COLUMN provider_profiles.stripe_account_id IS 'Stripe Connect Account ID for receiving payments';
COMMENT ON COLUMN provider_profiles.stripe_account_status IS 'Status of Stripe Connect onboarding';
COMMENT ON COLUMN provider_profiles.iban IS 'Bank account IBAN for direct transfers';
COMMENT ON COLUMN provider_profiles.pending_balance IS 'Earnings pending IBAN setup';
COMMENT ON TABLE wallet_transactions IS 'Tracks all wallet balance changes with full audit trail';
