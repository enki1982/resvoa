import { NextRequest, NextResponse } from 'next/server';
import { getServiceRoleClient } from '@/lib/supabase-client';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET is not configured');
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return NextResponse.json(
        { error: `Webhook Error: ${err.message}` },
        { status: 400 }
      );
    }

    const supabaseAdmin = getServiceRoleClient();

    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        await supabaseAdmin
          .from('transactions')
          .update({
            status: 'captured',
            released_at: new Date().toISOString(),
          })
          .eq('stripe_payment_intent_id', paymentIntent.id);

        console.log(`PaymentIntent ${paymentIntent.id} succeeded`);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        await supabaseAdmin
          .from('transactions')
          .update({ status: 'failed' })
          .eq('stripe_payment_intent_id', paymentIntent.id);

        console.log(`PaymentIntent ${paymentIntent.id} failed`);
        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;

        await supabaseAdmin
          .from('transactions')
          .update({ status: 'refunded' })
          .eq('stripe_payment_intent_id', charge.payment_intent as string);

        console.log(`Charge ${charge.id} refunded`);
        break;
      }

      case 'account.updated': {
        const account = event.data.object as Stripe.Account;

        if (account.details_submitted) {
          await supabaseAdmin
            .from('provider_profiles')
            .update({ stripe_onboarding_completed: true })
            .eq('stripe_account_id', account.id);

          console.log(`Account ${account.id} onboarding completed`);
        }
        break;
      }

      case 'payment_intent.created': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`PaymentIntent ${paymentIntent.id} created`);
        break;
      }

      case 'payment_intent.canceled': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        await supabaseAdmin
          .from('transactions')
          .update({ status: 'refunded' })
          .eq('stripe_payment_intent_id', paymentIntent.id);

        console.log(`PaymentIntent ${paymentIntent.id} canceled`);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Stripe webhook error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
