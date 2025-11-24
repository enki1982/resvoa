import { NextRequest, NextResponse } from 'next/server';
import { getServiceRoleClient, getUser } from '@/lib/supabase-client';
import { stripe } from '@/lib/stripe';

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

    const { data: providerData, error: providerError } = await supabaseAdmin
      .from('provider_profiles')
      .select('stripe_account_id, stripe_onboarding_completed')
      .eq('user_id', user.id)
      .maybeSingle();

    if (providerError) {
      return NextResponse.json(
        { error: 'Error fetching provider profile' },
        { status: 500 }
      );
    }

    if (!providerData || !providerData.stripe_account_id) {
      return NextResponse.json({
        hasStripeAccount: false,
        onboardingCompleted: false,
        detailsSubmitted: false,
        chargesEnabled: false,
        payoutsEnabled: false,
      });
    }

    const account = await stripe.accounts.retrieve(providerData.stripe_account_id);

    return NextResponse.json({
      hasStripeAccount: true,
      onboardingCompleted: providerData.stripe_onboarding_completed,
      detailsSubmitted: account.details_submitted,
      chargesEnabled: account.charges_enabled,
      payoutsEnabled: account.payouts_enabled,
    });
  } catch (error: any) {
    console.error('Provider status error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
