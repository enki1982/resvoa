/*
  # Create Platform Settings Table

  1. New Table
    - `platform_settings` - Configuration values for the platform
      - `id` (uuid, PK)
      - `key` (text, unique) - Setting key name
      - `value` (numeric) - Setting value
      - `description` (text) - Human-readable description
      - `updated_at` (timestamptz) - Last update timestamp
      - `created_at` (timestamptz) - Creation timestamp

  2. Initial Data
    - Insert default platform fee of 15%

  3. Security
    - Enable RLS
    - Only admins can update settings
    - Everyone can read settings (for transparency)
*/

-- Create platform_settings table
CREATE TABLE IF NOT EXISTS platform_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value numeric NOT NULL DEFAULT 15,
  description text,
  updated_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE platform_settings ENABLE ROW LEVEL SECURITY;

-- Everyone can read settings (transparency)
CREATE POLICY "Anyone can view platform settings"
  ON platform_settings FOR SELECT
  TO authenticated
  USING (true);

-- Only admins can update settings
CREATE POLICY "Only admins can update settings"
  ON platform_settings FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND user_type = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND user_type = 'admin'
    )
  );

-- Only admins can insert settings
CREATE POLICY "Only admins can insert settings"
  ON platform_settings FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND user_type = 'admin'
    )
  );

-- Insert default platform fee
INSERT INTO platform_settings (key, value, description)
VALUES (
  'platform_fee_percent',
  15,
  'Platform commission percentage applied to each completed task'
)
ON CONFLICT (key) DO NOTHING;

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_platform_settings_key ON platform_settings(key);
