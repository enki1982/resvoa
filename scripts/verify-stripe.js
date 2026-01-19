require('dotenv').config();
const Stripe = require('stripe');

console.log('🔍 VERIFICACIÓN DE STRIPE\n');

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

if (!stripeSecretKey) {
  console.error('❌ STRIPE_SECRET_KEY no configurada');
  process.exit(1);
}

if (!stripePublishableKey) {
  console.error('❌ NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY no configurada');
  process.exit(1);
}

const stripe = new Stripe(stripeSecretKey);

async function checkStripeConnection() {
  console.log('🔗 VERIFICANDO CONEXIÓN A STRIPE:\n');

  try {
    const balance = await stripe.balance.retrieve();
    console.log('✅ Conexión a Stripe exitosa');
    console.log(`   Moneda: ${balance.available[0]?.currency || 'N/A'}`);
    console.log(`   Modo: ${stripeSecretKey.startsWith('sk_test') ? 'TEST' : 'LIVE'}`);
    return true;
  } catch (err) {
    console.log('❌ Error al conectar con Stripe');
    console.log(`   ${err.message}`);
    return false;
  }
}

async function checkStripeConnect() {
  console.log('\n💼 VERIFICANDO STRIPE CONNECT:\n');

  try {
    const account = await stripe.accounts.list({ limit: 1 });
    console.log('✅ Stripe Connect habilitado');

    if (account.data.length > 0) {
      console.log(`   Cuentas conectadas: ${account.data.length}`);
    } else {
      console.log('   ℹ️  No hay cuentas conectadas aún (normal en desarrollo)');
    }
    return true;
  } catch (err) {
    if (err.code === 'account_invalid') {
      console.log('❌ Stripe Connect NO habilitado en esta cuenta');
      console.log('   Debes habilitar Stripe Connect en el Dashboard');
      return false;
    }
    console.log('⚠️  No se pudo verificar Stripe Connect');
    console.log(`   ${err.message}`);
    return false;
  }
}

async function checkWebhookEndpoint() {
  console.log('\n🪝 VERIFICANDO WEBHOOKS:\n');

  if (!stripeWebhookSecret) {
    console.log('⚠️  STRIPE_WEBHOOK_SECRET no configurado');
    console.log('   Necesario para producción pero opcional en desarrollo');
    return false;
  }

  try {
    const webhooks = await stripe.webhookEndpoints.list({ limit: 10 });

    console.log(`✅ Webhook secret configurado`);
    console.log(`   Endpoints registrados: ${webhooks.data.length}`);

    if (webhooks.data.length === 0) {
      console.log('   ℹ️  No hay endpoints registrados');
      console.log('   En producción, registra: https://tu-dominio.com/api/payments/stripe-webhook');
    } else {
      webhooks.data.forEach((wh, index) => {
        console.log(`\n   Webhook ${index + 1}:`);
        console.log(`   - URL: ${wh.url}`);
        console.log(`   - Estado: ${wh.status}`);
        console.log(`   - Eventos: ${wh.enabled_events.join(', ')}`);
      });
    }

    return true;
  } catch (err) {
    console.log('⚠️  No se pudo verificar webhooks');
    console.log(`   ${err.message}`);
    return false;
  }
}

async function checkRequiredEvents() {
  console.log('\n📋 EVENTOS REQUERIDOS PARA LA APP:\n');

  const requiredEvents = [
    'payment_intent.succeeded',
    'payment_intent.payment_failed',
    'payment_intent.canceled',
    'charge.refunded',
    'account.updated'
  ];

  console.log('   Los siguientes eventos deben estar configurados en el webhook:');
  requiredEvents.forEach(event => {
    console.log(`   • ${event}`);
  });

  return true;
}

async function testPaymentIntent() {
  console.log('\n💳 TEST DE PAYMENT INTENT (modo test):\n');

  if (!stripeSecretKey.startsWith('sk_test')) {
    console.log('⚠️  Modo LIVE detectado - saltando test de Payment Intent');
    console.log('   Solo se hacen tests en modo TEST');
    return true;
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: 'eur',
      payment_method_types: ['card'],
      capture_method: 'manual',
      description: 'Test de verificación'
    });

    console.log('✅ Payment Intent de prueba creado exitosamente');
    console.log(`   ID: ${paymentIntent.id}`);
    console.log(`   Status: ${paymentIntent.status}`);
    console.log(`   Capture method: ${paymentIntent.capture_method}`);

    await stripe.paymentIntents.cancel(paymentIntent.id);
    console.log('✅ Payment Intent cancelado correctamente');

    return true;
  } catch (err) {
    console.log('❌ Error al crear Payment Intent de prueba');
    console.log(`   ${err.message}`);
    return false;
  }
}

async function main() {
  console.log('🔗 Iniciando verificación de Stripe...\n');

  try {
    const connectionOk = await checkStripeConnection();
    if (!connectionOk) {
      console.log('\n❌ No se pudo conectar a Stripe');
      process.exit(1);
    }

    const connectOk = await checkStripeConnect();
    const webhookOk = await checkWebhookEndpoint();
    await checkRequiredEvents();
    const testOk = await testPaymentIntent();

    console.log('\n' + '='.repeat(50));
    console.log('📊 RESUMEN DE VERIFICACIÓN STRIPE:');
    console.log('='.repeat(50));

    console.log(`\n✅ Conexión: OK`);
    console.log(`${connectOk ? '✅' : '❌'} Stripe Connect: ${connectOk ? 'OK' : 'PROBLEMA'}`);
    console.log(`${webhookOk ? '✅' : '⚠️ '} Webhooks: ${webhookOk ? 'OK' : 'Pendiente configurar'}`);
    console.log(`${testOk ? '✅' : '❌'} Payment Intents: ${testOk ? 'OK' : 'PROBLEMA'}`);

    if (connectionOk && connectOk && testOk) {
      console.log('\n✅ STRIPE CONFIGURADO CORRECTAMENTE');
      process.exit(0);
    } else {
      console.log('\n⚠️  ALGUNOS COMPONENTES REQUIEREN ATENCIÓN');
      process.exit(1);
    }
  } catch (err) {
    console.error('\n❌ ERROR FATAL:', err.message);
    process.exit(1);
  }
}

main();
