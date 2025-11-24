import { NextRequest, NextResponse } from 'next/server';
import { getServiceRoleClient, getUser } from '@/lib/supabase-client';
import { stripe } from '@/lib/stripe';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const taskId = params.id;
    const supabaseAdmin = getServiceRoleClient();

    const { data: task, error: taskError } = await supabaseAdmin
      .from('services')
      .select(`
        id,
        status,
        service_proposals!inner(
          provider_id,
          status
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

    const proposal = task.service_proposals[0];
    if (!proposal || proposal.provider_id !== user.id) {
      return NextResponse.json(
        { error: 'You are not the assigned provider for this task' },
        { status: 403 }
      );
    }

    const { data: transaction, error: transactionError } = await supabaseAdmin
      .from('transactions')
      .select('id, stripe_payment_intent_id, status')
      .eq('service_id', taskId)
      .maybeSingle();

    if (transactionError || !transaction) {
      return NextResponse.json(
        { error: 'Payment not found for this task' },
        { status: 404 }
      );
    }

    if (!transaction.stripe_payment_intent_id) {
      return NextResponse.json(
        { error: 'No Stripe payment intent found' },
        { status: 400 }
      );
    }

    if (transaction.status === 'captured' || transaction.status === 'released') {
      return NextResponse.json(
        { error: 'Payment already captured' },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.capture(
      transaction.stripe_payment_intent_id
    );

    await supabaseAdmin
      .from('transactions')
      .update({
        status: 'captured',
        released_at: new Date().toISOString(),
      })
      .eq('id', transaction.id);

    await supabaseAdmin
      .from('services')
      .update({ status: 'completed' })
      .eq('id', taskId);

    return NextResponse.json({
      success: true,
      paymentIntentId: paymentIntent.id,
      status: paymentIntent.status,
    });
  } catch (error: any) {
    console.error('Complete task error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
