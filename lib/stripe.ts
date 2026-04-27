import Stripe from 'stripe';
import { getPlatformFeePercent } from './platform-settings';

let _stripe: Stripe | null = null;

export function getStripeClient(): Stripe {
  if (_stripe) return _stripe;

  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
  }

  _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-11-17.clover' as Stripe.LatestApiVersion,
    typescript: true,
  });

  return _stripe;
}

export const stripe = new Proxy({} as Stripe, {
  get(_target, prop, receiver) {
    const client = getStripeClient();
    const value = Reflect.get(client, prop, receiver);
    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  }
});

export async function calculatePlatformFee(amount: number): Promise<number> {
  const feePercent = await getPlatformFeePercent();
  return Math.round(amount * (feePercent / 100) * 100) / 100;
}

export async function calculateProviderAmount(amount: number): Promise<number> {
  const fee = await calculatePlatformFee(amount);
  return amount - fee;
}

export function toStripeAmount(euros: number): number {
  return Math.round(euros * 100);
}

export function fromStripeAmount(cents: number): number {
  return cents / 100;
}
