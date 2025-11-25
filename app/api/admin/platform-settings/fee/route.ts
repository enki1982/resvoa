import { NextRequest, NextResponse } from 'next/server';
import { getServiceRoleClient, getUser } from '@/lib/supabase-client';
import { updatePlatformFeePercent } from '@/lib/platform-settings';

export const dynamic = 'force-dynamic';

export async function PUT(request: NextRequest) {
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

    const body = await request.json();
    const { platform_fee_percent } = body;

    if (typeof platform_fee_percent !== 'number') {
      return NextResponse.json(
        { error: 'Invalid input. platform_fee_percent must be a number.' },
        { status: 400 }
      );
    }

    if (platform_fee_percent < 0 || platform_fee_percent > 50) {
      return NextResponse.json(
        { error: 'Invalid percentage. Must be between 0 and 50.' },
        { status: 400 }
      );
    }

    const result = await updatePlatformFeePercent(platform_fee_percent);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to update platform fee' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      platform_fee_percent: platform_fee_percent,
      message: 'Platform fee updated successfully',
    });
  } catch (error: any) {
    console.error('Update platform fee error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
