# RESVOA - Guía de Configuración

Esta guía explica cómo configurar el sistema completo de autenticación y pagos de RESVOA.

## Requisitos Previos

- Node.js 18+
- Cuenta de Supabase
- Cuenta de Stripe (con Stripe Connect habilitado)

## 1. Configuración de Supabase

### 1.1 Obtener credenciales

1. Ve a tu proyecto en [Supabase Dashboard](https://supabase.com/dashboard)
2. Ve a Settings > API
3. Copia los siguientes valores:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (¡NUNCA expongas esta clave en el frontend!)

### 1.2 Configurar OAuth Providers

#### Google OAuth

1. Ve a Authentication > Providers en Supabase Dashboard
2. Habilita "Google" provider
3. Configura las credenciales de Google Cloud Console:
   - Ve a [Google Cloud Console](https://console.cloud.google.com/)
   - Crea un nuevo proyecto o selecciona uno existente
   - Habilita Google+ API
   - Ve a Credentials > Create Credentials > OAuth 2.0 Client ID
   - Añade redirect URI: `https://[your-project-ref].supabase.co/auth/v1/callback`
   - Copia Client ID y Client Secret a Supabase

#### Apple OAuth

1. Ve a Authentication > Providers en Supabase Dashboard
2. Habilita "Apple" provider
3. Configura las credenciales de Apple Developer:
   - Ve a [Apple Developer Console](https://developer.apple.com/)
   - Crea un Service ID
   - Configura Sign in with Apple
   - Añade redirect URI: `https://[your-project-ref].supabase.co/auth/v1/callback`
   - Copia Service ID y Key a Supabase

### 1.3 Aplicar migraciones de base de datos

Las migraciones ya están en `/supabase/migrations/`. El esquema existente ya tiene las tablas básicas.

Para añadir soporte de Stripe, necesitas ejecutar estas consultas SQL en el SQL Editor de Supabase:

```sql
-- Añadir campos de Stripe a provider_profiles
ALTER TABLE provider_profiles
ADD COLUMN IF NOT EXISTS stripe_account_id text,
ADD COLUMN IF NOT EXISTS stripe_onboarding_completed boolean DEFAULT false NOT NULL;

-- Añadir campos de Stripe a transactions
ALTER TABLE transactions
ADD COLUMN IF NOT EXISTS stripe_payment_intent_id text,
ADD COLUMN IF NOT EXISTS capture_method text DEFAULT 'manual';

-- Crear índices
CREATE INDEX IF NOT EXISTS idx_provider_profiles_stripe_account
ON provider_profiles(stripe_account_id);

CREATE INDEX IF NOT EXISTS idx_transactions_stripe_pi
ON transactions(stripe_payment_intent_id);
```

## 2. Configuración de Stripe

### 2.1 Obtener credenciales básicas

1. Ve a [Stripe Dashboard](https://dashboard.stripe.com/)
2. Asegúrate de estar en modo "Test" para desarrollo
3. Ve a Developers > API keys
4. Copia:
   - `Publishable key` → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `Secret key` → `STRIPE_SECRET_KEY`

### 2.2 Configurar Stripe Connect

1. Ve a [Connect Settings](https://dashboard.stripe.com/settings/connect)
2. Habilita "Express accounts"
3. Configura:
   - Business name: "RESVOA"
   - Customer support email
   - Business website URL
4. Copia el `Connect Client ID` → `STRIPE_CONNECT_CLIENT_ID`

### 2.3 Configurar Webhook

1. Ve a Developers > Webhooks
2. Clic en "Add endpoint"
3. URL del endpoint: `https://tu-dominio.com/api/payments/stripe-webhook`
4. Selecciona estos eventos:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `payment_intent.canceled`
   - `charge.refunded`
   - `account.updated`
5. Copia el `Signing secret` → `STRIPE_WEBHOOK_SECRET`

## 3. Variables de Entorno

Copia `.env.example` a `.env` y completa todas las variables:

```bash
cp .env.example .env
```

Edita `.env` con tus valores reales:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key

# Stripe
STRIPE_SECRET_KEY=sk_test_tu_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_tu_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_tu_webhook_secret
STRIPE_CONNECT_CLIENT_ID=ca_tu_client_id

# URLs
APP_BASE_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 4. Instalar dependencias

```bash
npm install
```

## 5. Ejecutar el proyecto

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`

## 6. Flujo de Autenticación

### Login con Email/Password

1. El usuario ingresa email y contraseña
2. Se llama a `supabase.auth.signInWithPassword()`
3. Se obtiene la sesión del usuario
4. Se redirige al dashboard correspondiente

### Login con Google/Apple

1. El usuario hace clic en el botón de OAuth
2. Se llama a `supabase.auth.signInWithOAuth({ provider: 'google' })`
3. Se redirige a la página de autorización
4. Después de autorizar, vuelve a la app con la sesión activa

## 7. Flujo de Pagos

### Para Proveedores

1. **Onboarding de Stripe Connect**
   - El proveedor va a su dashboard
   - Hace clic en "Configurar cuenta de cobros"
   - Se llama a `POST /api/provider/onboarding-link`
   - Se redirige a Stripe para completar el onboarding
   - Stripe redirige de vuelta con parámetro `?onboarding=success`

2. **Recibir Pagos**
   - Cuando un proveedor completa una tarea
   - Se llama a `POST /api/tasks/[id]/complete`
   - Stripe captura el pago autorizado
   - El dinero se transfiere a la cuenta Connect del proveedor (menos la comisión)

### Para Clientes

1. **Crear Tarea**
   - El cliente publica una solicitud de servicio
   - Un proveedor acepta la tarea

2. **Autorizar Pago**
   - Se llama a `POST /api/payments/create-intent`
   - Se crea un PaymentIntent con `capture_method: 'manual'`
   - El pago se autoriza pero NO se captura
   - Se guarda en la base de datos con estado `authorized`

3. **Completar y Capturar**
   - Cuando el proveedor marca la tarea como completada
   - Se captura el pago automáticamente
   - El estado cambia a `captured`
   - Se libera el dinero al proveedor

4. **Cancelar y Reembolsar**
   - Si se cancela antes de capturar: se cancela la autorización
   - Si se cancela después de capturar: se crea un refund

## 8. Estructura de Comisiones

- **Comisión de plataforma**: 15% del total
- **Proveedor recibe**: 85% del total
- Ejemplo con tarea de 100€:
  - Comisión RESVOA: 15€
  - Proveedor recibe: 85€

## 9. Seguridad

### Row Level Security (RLS)

Todas las tablas tienen RLS habilitado con políticas que garantizan:

- Los usuarios solo ven sus propios datos
- Los proveedores solo ven tareas asignadas a ellos
- Los pagos solo son visibles para las partes involucradas
- Los administradores tienen acceso completo

### Protección de Endpoints

Todos los endpoints de API:

1. Verifican el token JWT en el header `Authorization`
2. Validan que el usuario tenga los permisos necesarios
3. Usan el `service_role` de Supabase para operaciones privilegiadas
4. Validan los datos de entrada

### Webhooks

El webhook de Stripe:

1. Verifica la firma del webhook con `STRIPE_WEBHOOK_SECRET`
2. Solo procesa eventos válidos de Stripe
3. Actualiza la base de datos de forma atómica

## 10. Testing en Desarrollo

### Tarjetas de prueba de Stripe

- **Pago exitoso**: `4242 4242 4242 4242`
- **Requiere autenticación**: `4000 0025 0000 3155`
- **Pago rechazado**: `4000 0000 0000 9995`

Usa cualquier fecha futura para expiración y cualquier CVC de 3 dígitos.

### Cuentas de prueba Connect

Stripe proporciona datos de prueba automáticos durante el onboarding en modo test.

## 11. Despliegue a Producción

### Checklist

- [ ] Cambiar todas las claves de Stripe de `test` a `live`
- [ ] Actualizar `APP_BASE_URL` con el dominio de producción
- [ ] Configurar el webhook en Stripe con la URL de producción
- [ ] Verificar que las OAuth redirect URIs estén configuradas para producción
- [ ] Habilitar confirmación de email en Supabase si es necesario
- [ ] Configurar límites de rate limiting
- [ ] Revisar políticas RLS en producción
- [ ] Configurar monitoreo de errores (Sentry, etc.)

## 12. Mantenimiento

### Monitorear eventos de Stripe

Ve a Stripe Dashboard > Developers > Events para ver todos los webhooks procesados

### Revisar logs de errores

Revisa los logs de tu plataforma para detectar errores en:
- Creación de cuentas Connect
- Procesamiento de pagos
- Webhooks fallidos

### Actualizar tasas de comisión

Si necesitas cambiar la comisión del 15%, edita:
- `lib/stripe.ts` → constante `PLATFORM_FEE_PERCENTAGE`

## Soporte

Para problemas con:
- **Supabase**: [Supabase Docs](https://supabase.com/docs)
- **Stripe**: [Stripe Docs](https://stripe.com/docs)
- **RESVOA**: Contacta al equipo de desarrollo
