# 🚀 GUÍA RÁPIDA DE INICIO - RESVOA

Esta guía te llevará de 0 a tener el proyecto funcionando en **menos de 30 minutos**.

---

## ✅ PREREQUISITOS

- Node.js 18+ instalado
- npm instalado
- Cuenta de GitHub (opcional)
- Editor de código (VS Code recomendado)

---

## 📦 PASO 1: Instalar Dependencias (2 minutos)

```bash
# Clonar el repositorio (si no lo has hecho)
git clone <repo-url>
cd resvoa

# Instalar dependencias
npm install

# Verificar que build funciona
npm run build
```

**Resultado esperado:** Build exitoso sin errores.

---

## 🔑 PASO 2: Configurar Supabase (10 minutos)

### 2.1 Crear Proyecto
1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta o inicia sesión
3. Click en "New Project"
4. Nombre: `resvoa` (o el que prefieras)
5. Password: guarda la contraseña (la necesitarás)
6. Region: Elige la más cercana a ti
7. Click "Create new project"
8. **Espera 2 minutos** mientras se crea

### 2.2 Obtener Keys
1. En el dashboard, ve a **Settings** → **API**
2. Copia:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`

### 2.3 Configurar .env
```bash
# Copia el archivo ejemplo
cp .env.example .env

# Edita .env y pega las keys de Supabase
nano .env  # o usa tu editor favorito
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

### 2.4 Aplicar Migraciones
1. En Supabase Dashboard → **SQL Editor**
2. Abre cada archivo de `supabase/migrations/` en orden:
   - `20251120103420_create_initial_schema.sql`
   - `20251120113012_fix_security_and_performance_issues.sql`
   - `20251124_create_platform_settings.sql`
   - `20251124_drop_messages_table.sql`
   - `20251124_fix_users_insert_policy.sql`
3. Copia el contenido y ejecuta cada uno

### 2.5 Configurar Storage
1. En Supabase Dashboard → **Storage**
2. Click "Create bucket"
3. Nombre: `provider-documents`
4. Public: **NO** (privado)
5. Click "Create bucket"
6. Click en el bucket → **Policies** → "New Policy"
7. Template: "Allow authenticated users to upload"
8. Modifica para que solo el dueño pueda acceder

### 2.6 Insertar Configuración Inicial
En SQL Editor, ejecuta:
```sql
INSERT INTO platform_settings (key, value, description)
VALUES ('platform_fee_percent', 15, 'Comisión de plataforma en porcentaje');
```

### 2.7 Verificar
```bash
npm run verify:db
```

**Resultado esperado:** ✅ Todas las tablas existen, RLS habilitado

---

## 💳 PASO 3: Configurar Stripe (10 minutos)

### 3.1 Crear Cuenta
1. Ve a [stripe.com](https://stripe.com)
2. Crea cuenta o inicia sesión
3. Activa cuenta (puede requerir verificación)

### 3.2 Habilitar Stripe Connect
1. Dashboard → **Connect** → **Get Started**
2. Tipo: **Standard** o **Express** (recomendado Express)
3. Completa configuración básica

### 3.3 Obtener Keys (Modo TEST)
1. Dashboard → **Developers** → **API Keys**
2. Toggle: **"View test data"** (arriba a la derecha)
3. Copia:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`

### 3.4 Configurar Webhook (Opcional para desarrollo)
1. Dashboard → **Developers** → **Webhooks**
2. Click "Add endpoint"
3. URL: `https://tu-dominio/api/payments/stripe-webhook`
   - Para desarrollo local: usa [Stripe CLI](https://stripe.com/docs/stripe-cli)
4. Eventos a escuchar:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `payment_intent.canceled`
   - `charge.refunded`
   - `account.updated`
5. Copia **Signing secret** → `STRIPE_WEBHOOK_SECRET`

### 3.5 Actualizar .env
```env
STRIPE_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx  # opcional
```

### 3.6 Verificar
```bash
npm run verify:stripe
```

**Resultado esperado:** ✅ Conexión OK, Stripe Connect habilitado

---

## 🗺️ PASO 4: Configurar Google Maps (5 minutos)

### 4.1 Crear API Key
1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Crea un proyecto nuevo o selecciona uno existente
3. **APIs & Services** → **Library**
4. Busca "Places API" y habilítala
5. **APIs & Services** → **Credentials**
6. Click "Create Credentials" → "API Key"
7. **IMPORTANTE:** Restringir la key:
   - Application restrictions: HTTP referrers
   - Agrega: `localhost:*`, `tu-dominio.com/*`
   - API restrictions: Solo "Places API"

### 4.2 Actualizar .env
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyxxxxx
```

**Nota:** Si no quieres configurar Google Maps ahora, puedes usar el campo de dirección manual. El autocompletado simplemente no funcionará.

---

## ✅ PASO 5: Verificar Todo (2 minutos)

```bash
# Ejecuta el script de verificación completa
npm run verify
```

**Resultado esperado:**
```
✅ Variables de Entorno: OK
✅ Base de Datos: OK
✅ Stripe: OK

🎉 ¡TODAS LAS VERIFICACIONES PASARON EXITOSAMENTE!
```

Si algo falla:
- Revisa el error específico
- Ejecuta el script individual: `npm run verify:env`, `verify:db`, etc.
- Consulta `VERIFICATION_PROTOCOL.md` para solución de problemas

---

## 🎉 PASO 6: Iniciar Desarrollo

```bash
npm run dev
```

Abre tu navegador en: **http://localhost:3000**

---

## 🧪 PASO 7: Probar Flujos (10 minutos)

### Test 1: Registro de Usuario
1. Ve a http://localhost:3000/app/registro-usuario
2. Registra un usuario de prueba
3. Verifica email de confirmación en tu bandeja
4. Inicia sesión

### Test 2: Registro de Proveedor
1. Ve a http://localhost:3000/app/registro-proveedor
2. Completa los 3 pasos:
   - Datos personales
   - Servicios que ofreces
   - Subir DNI y selfie
3. Verifica que aparece en "Verificaciones pendientes" en admin

### Test 3: Crear Servicio
1. Como usuario, ve a Dashboard
2. Click "Crear Solicitud"
3. Rellena formulario:
   - Categoría, descripción, ubicación, fecha, precio
4. Guarda

### Test 4: Enviar Propuesta
1. Cierra sesión y entra como proveedor
2. Ve a Dashboard de Proveedor
3. Verás el servicio creado
4. Click "Ver detalles" → "Enviar propuesta"
5. Ingresa precio y mensaje
6. Envía

### Test 5: Aceptar y Pagar
1. Vuelve como usuario
2. Ve a "Mis Propuestas"
3. Click "Aceptar propuesta"
4. Usa tarjeta de prueba de Stripe:
   - Número: `4242 4242 4242 4242`
   - Fecha: cualquier futura
   - CVC: cualquier 3 dígitos
5. Confirmar pago

### Test 6: Completar Servicio
1. Como proveedor, ve al servicio en progreso
2. Click "Marcar como completado"
3. Como usuario, certifica que el trabajo está bien hecho
4. Verifica que el pago se libera al proveedor

---

## 🎯 QUÉ HACER DESPUÉS

Ahora que todo funciona, puedes:

### Opción A: Mejorar Funcionalidades
- Implementar landing page real
- Sistema de notificaciones
- Búsqueda y filtros
- Ver `ESTADO_ACTUAL.md` para plan completo

### Opción B: Configurar para Producción
- Cambiar de Stripe TEST a LIVE mode
- Configurar dominio personalizado
- Habilitar SSL/HTTPS
- Configurar webhooks en producción
- Deploy a Vercel/Netlify

### Opción C: Testing y Debugging
- Probar todos los flujos edge case
- Testing de errores
- Optimización de rendimiento
- Security audit

---

## 🆘 PROBLEMAS COMUNES

### "Cannot read properties of undefined"
→ Verifica que las keys de Supabase estén bien copiadas en .env

### "Invalid API key"
→ Asegúrate de usar la ANON key para `NEXT_PUBLIC_SUPABASE_ANON_KEY` y SERVICE ROLE key para `SUPABASE_SERVICE_ROLE_KEY`

### "Stripe API error"
→ Verifica que estés en modo TEST y las keys sean correctas

### "Tables don't exist"
→ Aplica las migraciones en Supabase Dashboard

### "Build fails"
→ Ejecuta `npm install` de nuevo, borra `.next` y vuelve a hacer build

### "RLS policy violation"
→ Verifica que las políticas RLS estén aplicadas correctamente

---

## 📚 RECURSOS ADICIONALES

- **Documentación Completa:** `VERIFICATION_PROTOCOL.md`
- **Estado del Proyecto:** `ESTADO_ACTUAL.md`
- **Scripts de Verificación:** `scripts/README.md`
- **Migraciones:** `supabase/migrations/`

---

## ✅ CHECKLIST FINAL

- [ ] Dependencias instaladas
- [ ] Supabase configurado
- [ ] Migraciones aplicadas
- [ ] Storage bucket creado
- [ ] Stripe configurado
- [ ] Google Maps API (opcional)
- [ ] `.env` completo
- [ ] `npm run verify` pasa
- [ ] `npm run dev` funciona
- [ ] Registro de usuario funciona
- [ ] Registro de proveedor funciona
- [ ] Crear servicio funciona
- [ ] Enviar propuesta funciona
- [ ] Pago funciona

---

**¡Listo! Tu proyecto RESVOA está funcionando.** 🎉

Si tienes problemas, revisa:
1. `VERIFICATION_PROTOCOL.md` - Diagnóstico detallado
2. `scripts/verify-all.js` - Verificación automatizada
3. Logs de consola del navegador
4. Logs de terminal

**¿Necesitas ayuda?** Consulta la documentación oficial:
- [Supabase](https://supabase.com/docs)
- [Stripe](https://stripe.com/docs)
- [Next.js](https://nextjs.org/docs)
