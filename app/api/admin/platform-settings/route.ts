import { NextRequest, NextResponse } from 'next/server';
import { getServiceRoleClient, getUser } from '@/lib/supabase-client';
import { getPlatformFeePercent } from '@/lib/platform-settings';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Missing authorization header' },
        { status: 401 }
      );
    }

    const token = authHeader.replace('Bearer ', '');
    const user = await getUser(token);

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabaseAdmin = getServiceRoleClient();
    const { data: userData, error: userError } = await supabaseAdmin
      .from('users')
      .select('user_type')
      .eq('id', user.id)
      .maybeSingle();

    if (userError || !userData || userData.user_type !== 'admin') {
      return NextResponse.json(
        { error: 'Access denied. Admin role required.' },
        { status: 403 }
      );
    }

    const platformFeePercent = await getPlatformFeePercent();

    return NextResponse.json({
      platform_fee_percent: platformFeePercent,
    });
  } catch (error: any) {
    console.error('Get platform settings error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
