import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-11-17.clover',
  typescript: true,
});

export const PLATFORM_FEE_PERCENTAGE = 0.15;

export function calculatePlatformFee(amount: number): number {
  return Math.round(amount * PLATFORM_FEE_PERCENTAGE);
}

export function calculateProviderAmount(amount: number): number {
  return amount - calculatePlatformFee(amount);
}

export function toStripeAmount(euros: number): number {
  return Math.round(euros * 100);
}

export function fromStripeAmount(cents: number): number {
  return cents / 100;
}
