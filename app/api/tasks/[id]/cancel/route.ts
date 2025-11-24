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
      .select('id, user_id, status')
      .eq('id', taskId)
      .maybeSingle();

    if (taskError || !task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }

    if (task.user_id !== user.id) {
      return NextResponse.json(
        { error: 'You are not authorized to cancel this task' },
        { status: 403 }
      );
    }

    if (task.status === 'completed') {
      return NextResponse.json(
        { error: 'Cannot cancel a completed task' },
        { status: 400 }
      );
    }

    if (task.status === 'cancelled') {
      return NextResponse.json(
        { error: 'Task is already cancelled' },
        { status: 400 }
      );
    }

    const { data: transaction, error: transactionError } = await supabaseAdmin
      .from('transactions')
      .select('id, stripe_payment_intent_id, status')
      .eq('service_id', taskId)
      .maybeSingle();

    if (transaction && transaction.stripe_payment_intent_id) {
      if (transaction.status === 'authorized' || transaction.status === 'held') {
        await stripe.paymentIntents.cancel(transaction.stripe_payment_intent_id);

        await supabaseAdmin
          .from('transactions')
          .update({ status: 'refunded' })
          .eq('id', transaction.id);
      } else if (transaction.status === 'captured' || transaction.status === 'released') {
        const refund = await stripe.refunds.create({
          payment_intent: transaction.stripe_payment_intent_id,
        });

        await supabaseAdmin
          .from('transactions')
          .update({ status: 'refunded' })
          .eq('id', transaction.id);
      }
    }

    await supabaseAdmin
      .from('services')
      .update({ status: 'cancelled' })
      .eq('id', taskId);

    return NextResponse.json({
      success: true,
      message: 'Task cancelled successfully',
    });
  } catch (error: any) {
    console.error('Cancel task error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
