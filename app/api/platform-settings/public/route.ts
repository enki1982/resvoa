import { NextRequest, NextResponse } from 'next/server';
import { getPlatformFeePercent } from '@/lib/platform-settings';

export async function GET(request: NextRequest) {
  try {
    const platformFeePercent = await getPlatformFeePercent();

    return NextResponse.json({
      platform_fee_percent: platformFeePercent,
    });
  } catch (error: any) {
    console.error('Get public platform settings error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
