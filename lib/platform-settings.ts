import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const DEFAULT_PLATFORM_FEE_PERCENT = 15;

export async function getPlatformFeePercent(): Promise<number> {
  try {
    const { data, error } = await supabase
      .from('platform_settings')
      .select('value')
      .eq('key', 'platform_fee_percent')
      .maybeSingle();

    if (error) {
      console.error('Error reading platform fee from database:', error);
      return DEFAULT_PLATFORM_FEE_PERCENT;
    }

    if (!data || typeof data.value !== 'number') {
      console.warn('Platform fee not found in database, using default');
      return DEFAULT_PLATFORM_FEE_PERCENT;
    }

    return data.value;
  } catch (error) {
    console.error('Exception reading platform fee:', error);
    return DEFAULT_PLATFORM_FEE_PERCENT;
  }
}

export async function updatePlatformFeePercent(newPercent: number): Promise<{ success: boolean; error?: string }> {
  try {
    if (typeof newPercent !== 'number' || newPercent < 0 || newPercent > 50) {
      return { success: false, error: 'Invalid percentage value. Must be between 0 and 50.' };
    }

    const { error } = await supabase
      .from('platform_settings')
      .update({
        value: newPercent,
        updated_at: new Date().toISOString()
      })
      .eq('key', 'platform_fee_percent');

    if (error) {
      console.error('Error updating platform fee:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Exception updating platform fee:', error);
    return { success: false, error: error.message };
  }
}
