import { NextRequest, NextResponse } from 'next/server';
import { getServiceRoleClient, getUser } from '@/lib/supabase-client';
import { stripe, calculatePlatformFee, calculateProviderAmount, toStripeAmount } from '@/lib/stripe';

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

    const body = await request.json();
    const { taskId, paymentMethodId } = body;

    if (!taskId || !paymentMethodId) {
      return NextResponse.json(
        { error: 'Missing taskId or paymentMethodId' },
        { status: 400 }
      );
    }

    const supabaseAdmin = getServiceRoleClient();

    const { data: task, error: taskError } = await supabaseAdmin
      .from('services')
      .select(`
        id,
        user_id,
        title,
        price_max,
        status,
        service_proposals!inner(
          provider_id,
          status,
          price
        )
      `)
      .eq('id', taskId)
      .eq('service_proposals.status', 'accepted')
      .maybeSingle();

    if (taskError || !task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }

    if (task.user_id !== user.id) {
      return NextResponse.json(
        { error: 'You are not authorized to pay for this task' },
        { status: 403 }
      );
    }

    const proposal = task.service_proposals[0];
    if (!proposal || !proposal.provider_id) {
      return NextResponse.json(
        { error: 'No accepted provider for this task' },
        { status: 400 }
      );
    }

    const { data: providerProfile, error: providerError } = await supabaseAdmin
      .from('provider_profiles')
      .select('stripe_account_id, stripe_onboarding_completed')
      .eq('user_id', proposal.provider_id)
      .maybeSingle();

    if (providerError || !providerProfile || !providerProfile.stripe_account_id) {
      return NextResponse.json(
        { error: 'Provider has not completed Stripe onboarding' },
        { status: 400 }
      );
    }

    if (!providerProfile.stripe_onboarding_completed) {
      return NextResponse.json(
        { error: 'Provider onboarding is not complete' },
        { status: 400 }
      );
    }

    const amountTotal = parseFloat(proposal.price || task.price_max);
    const platformFeeEuros = await calculatePlatformFee(amountTotal);
    const providerAmountEuros = await calculateProviderAmount(amountTotal);

    const amountCents = toStripeAmount(amountTotal);
    const platformFeeCents = toStripeAmount(platformFeeEuros);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency: 'eur',
      payment_method: paymentMethodId,
      confirmation_method: 'automatic',
      capture_method: 'manual',
      confirm: true,
      application_fee_amount: platformFeeCents,
      transfer_data: {
        destination: providerProfile.stripe_account_id,
      },
      metadata: {
        task_id: taskId,
        client_id: user.id,
        provider_id: proposal.provider_id,
      },
    });

    const { error: transactionError } = await supabaseAdmin
      .from('transactions')
      .insert({
        service_id: taskId,
        user_id: user.id,
        provider_id: proposal.provider_id,
        amount: amountTotal,
        commission: platformFeeEuros,
        provider_amount: providerAmountEuros,
        stripe_payment_intent_id: paymentIntent.id,
        status: 'authorized',
        payment_method: 'card',
        capture_method: 'manual',
      });

    if (transactionError) {
      console.error('Error creating transaction record:', transactionError);
    }

    await supabaseAdmin
      .from('services')
      .update({ status: 'assigned' })
      .eq('id', taskId);

    return NextResponse.json({
      success: true,
      paymentIntentId: paymentIntent.id,
      status: paymentIntent.status,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    console.error('Create payment intent error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
