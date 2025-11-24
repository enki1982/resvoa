import { NextRequest, NextResponse } from 'next/server';
import { getServiceRoleClient, getUser } from '@/lib/supabase-client';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
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

    if (userError || !userData) {
      return NextResponse.json(
        { error: 'User not found in database' },
        { status: 404 }
      );
    }

    if (userData.user_type !== 'provider') {
      return NextResponse.json(
        { error: 'User is not a provider' },
        { status: 403 }
      );
    }

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

    let stripeAccountId = providerData?.stripe_account_id;

    if (!stripeAccountId) {
      const account = await stripe.accounts.create({
        type: 'express',
        country: 'ES',
        email: user.email,
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true },
        },
      });

      stripeAccountId = account.id;

      if (providerData) {
        await supabaseAdmin
          .from('provider_profiles')
          .update({ stripe_account_id: stripeAccountId })
          .eq('user_id', user.id);
      } else {
        await supabaseAdmin
          .from('provider_profiles')
          .insert({
            user_id: user.id,
            stripe_account_id: stripeAccountId,
            stripe_onboarding_completed: false,
          });
      }
    }

    const appBaseUrl = process.env.APP_BASE_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const accountLink = await stripe.accountLinks.create({
      account: stripeAccountId,
      refresh_url: `${appBaseUrl}/app/proveedor/dashboard?onboarding=refresh`,
      return_url: `${appBaseUrl}/app/proveedor/dashboard?onboarding=success`,
      type: 'account_onboarding',
    });

    return NextResponse.json({ url: accountLink.url });
  } catch (error: any) {
    console.error('Provider onboarding error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
