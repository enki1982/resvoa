import { createClient } from '@supabase/supabase-js';

const DEFAULT_PLATFORM_FEE = 15;

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables');
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export async function getPlatformFeePercent(): Promise<number> {
  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { data, error } = await supabaseAdmin
      .from('platform_settings')
      .select('value')
      .eq('key', 'platform_fee_percent')
      .maybeSingle();

    if (error) {
      console.error('Error reading platform fee:', error);
      return DEFAULT_PLATFORM_FEE;
    }

    if (!data || typeof data.value !== 'number') {
      console.warn('Platform fee not found in database, using default:', DEFAULT_PLATFORM_FEE);
      return DEFAULT_PLATFORM_FEE;
    }

    const feePercent = Number(data.value);

    if (isNaN(feePercent) || feePercent < 0 || feePercent > 50) {
      console.warn('Invalid platform fee value, using default:', DEFAULT_PLATFORM_FEE);
      return DEFAULT_PLATFORM_FEE;
    }

    return feePercent;
  } catch (err) {
    console.error('Exception reading platform fee:', err);
    return DEFAULT_PLATFORM_FEE;
  }
}

export async function updatePlatformFeePercent(newPercent: number): Promise<{ success: boolean; value?: number; error?: string }> {
  try {
    if (typeof newPercent !== 'number' || isNaN(newPercent)) {
      return { success: false, error: 'Invalid value: must be a number' };
    }

    if (newPercent < 0 || newPercent > 50) {
      return { success: false, error: 'Value must be between 0 and 50' };
    }

    const supabaseAdmin = getSupabaseAdmin();
    const { data, error } = await supabaseAdmin
      .from('platform_settings')
      .update({
        value: newPercent,
        updated_at: new Date().toISOString()
      })
      .eq('key', 'platform_fee_percent')
      .select('value')
      .single();

    if (error) {
      console.error('Error updating platform fee:', error);
      return { success: false, error: 'Failed to update platform fee' };
    }

    return { success: true, value: Number(data.value) };
  } catch (err) {
    console.error('Exception updating platform fee:', err);
    return { success: false, error: 'Internal error updating platform fee' };
  }
}
