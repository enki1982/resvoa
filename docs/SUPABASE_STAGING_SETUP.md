# Supabase Staging Setup Guide

## Orden de Migraciones

Las migraciones deben aplicarse en este orden exacto en el SQL Editor de Supabase:

### Paso 1: Schema inicial
```
supabase/migrations/20251120103420_create_initial_schema.sql
```
Crea las tablas base:
- `users` — Usuarios del sistema
- `provider_profiles` — Perfiles de proveedores
- `services` — Solicitudes de servicios
- `service_proposals` — Propuestas de proveedores
- `transactions` — Transacciones financieras
- `reviews` — Valoraciones
- `messages` — Mensajes (se elimina en paso 4)
- `admin_logs` — Logs administrativos

### Paso 2: Seguridad y rendimiento
```
supabase/migrations/20251120113012_fix_security_and_performance_issues.sql
```
- Añade índices para foreign keys
- Optimiza políticas RLS con `(SELECT auth.uid())`
- Añade funciones `calculate_distance` y `find_nearby_providers`

### Paso 3: Platform settings
```
supabase/migrations/20251124_create_platform_settings.sql
```
- Crea tabla `platform_settings`
- Inserta comisión por defecto (15%)

### Paso 4: Eliminar mensajes
```
supabase/migrations/20251124_drop_messages_table.sql
```
- Elimina tabla `messages` (no se usa)

### Paso 5: Fix registro usuarios
```
supabase/migrations/20251124_fix_users_insert_policy.sql
```
- Añade política INSERT para que usuarios puedan registrarse

### Paso 6: Pagos y wallet (raíz del repo)
```
MIGRATION_PAYMENT_WALLET.sql
```
- Añade campos Stripe a `users` (`stripe_customer_id`, `has_payment_method`, `wallet_balance`)
- Añade campos Stripe Connect a `provider_profiles` (`stripe_account_id`, `stripe_account_status`, `iban`, `pending_balance`)
- Crea tabla `wallet_transactions`

### Paso 7: Storage para documentos (raíz del repo)
```
SETUP_STORAGE.sql
```
- Crea bucket `provider-documents` para documentos de proveedores
- Configura políticas RLS de storage

### Paso 8: Servicios recurrentes (raíz del repo)
```
ADD_RECURRING_SERVICES.sql
```
- Añade columnas `is_recurring`, `recurrence_frequency`, `parent_subscription_id` a `services`
- Crea tabla `subscriptions` con RLS
- El dashboard de usuario usa `is_recurring` y `recurrence_frequency`

### Paso 9: Cascade deletes (raíz del repo, opcional pero recomendado)
```
IMPROVE_CASCADE_DELETES.sql
```
- Añade política DELETE para que usuarios puedan eliminar su cuenta
- Verifica FK con ON DELETE CASCADE

### Paso 10: Columnas adicionales requeridas por el código

**IMPORTANTE:** El código referencia columnas que no están en ninguna migración existente. Deben añadirse manualmente:

```sql
-- Añadir stripe_onboarding_completed a provider_profiles
-- (el código usa esto en vez de stripe_account_status)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'provider_profiles' AND column_name = 'stripe_onboarding_completed'
  ) THEN
    ALTER TABLE provider_profiles ADD COLUMN stripe_onboarding_completed boolean DEFAULT false;
  END IF;
END $$;

-- Añadir stripe_payment_intent_id a transactions
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'transactions' AND column_name = 'stripe_payment_intent_id'
  ) THEN
    ALTER TABLE transactions ADD COLUMN stripe_payment_intent_id text;
  END IF;
END $$;

-- Añadir capture_method a transactions
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'transactions' AND column_name = 'capture_method'
  ) THEN
    ALTER TABLE transactions ADD COLUMN capture_method text;
  END IF;
END $$;

-- Actualizar CHECK constraint de transactions.status para incluir nuevos estados
-- El código usa: 'authorized', 'captured', 'failed' además de los originales
ALTER TABLE transactions DROP CONSTRAINT IF EXISTS transactions_status_check;
ALTER TABLE transactions ADD CONSTRAINT transactions_status_check
  CHECK (status IN ('pending', 'held', 'released', 'refunded', 'authorized', 'captured', 'failed'));

-- Índices para las nuevas columnas
CREATE INDEX IF NOT EXISTS idx_transactions_stripe_payment_intent_id
  ON transactions(stripe_payment_intent_id);
CREATE INDEX IF NOT EXISTS idx_provider_profiles_stripe_onboarding
  ON provider_profiles(stripe_onboarding_completed);
```

---

## Tablas Finales (9 tablas activas + 1 eliminada)

| Tabla | RLS | Descripción |
|-------|-----|-------------|
| `users` | Si | Usuarios, proveedores y admins |
| `provider_profiles` | Si | Perfiles extendidos de proveedores |
| `services` | Si | Solicitudes de servicios |
| `service_proposals` | Si | Propuestas de proveedores |
| `transactions` | Si | Pagos y transacciones |
| `reviews` | Si | Valoraciones 1-5 estrellas |
| `admin_logs` | Si | Logs de acciones admin |
| `platform_settings` | Si | Configuración (comisión, etc.) |
| `wallet_transactions` | Si | Historial de movimientos wallet |
| `subscriptions` | Si | Suscripciones para servicios recurrentes |

---

## Políticas RLS Resumen

- **users**: Lectura propia + admins ven todo. Escritura solo propia. INSERT solo con `id = auth.uid()`
- **provider_profiles**: Lectura propia + proveedores verificados visibles. Escritura solo propia
- **services**: Lectura propia + servicios abiertos visibles. Escritura solo propia
- **service_proposals**: Lectura por proveedor o dueño del servicio. INSERT solo proveedores
- **transactions**: Lectura por usuario o proveedor involucrado
- **reviews**: Lectura pública. INSERT solo por reviewer
- **admin_logs**: Solo admins
- **platform_settings**: Lectura por todos los autenticados. Escritura solo admins
- **wallet_transactions**: Lectura y escritura solo propia

---

## Storage Buckets

| Bucket | Público | Descripción |
|--------|---------|-------------|
| `provider-documents` | No | Documentos de verificación de proveedores (DNI, etc.) |

---

## Variables de Entorno para Vercel (Preview)

Ir a: https://vercel.com/miquels-projects-ca486332/resvoa/settings/environment-variables

| Variable | Dónde obtenerla | Entorno |
|----------|----------------|---------|
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Dashboard → Settings → API → `service_role` key | Solo Preview |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe Dashboard → Test mode → API keys → Publishable key | Solo Preview |
| `STRIPE_WEBHOOK_SECRET` | Stripe Dashboard → Webhooks → Crear endpoint → Signing secret | Solo Preview |
| `STRIPE_CONNECT_CLIENT_ID` | Stripe Dashboard → Settings → Connect → Platform settings | Solo Preview |
| `APP_BASE_URL` | URL de tu deployment en Vercel | Solo Preview |
