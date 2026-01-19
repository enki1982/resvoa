# Scripts de Verificación - RESVOA

Esta carpeta contiene scripts automatizados para verificar que todas las configuraciones del proyecto estén correctamente implementadas.

## 📋 Scripts Disponibles

### 1. `verify-all.js` - Verificación Completa
**Ejecuta todos los scripts de verificación en secuencia.**

```bash
node scripts/verify-all.js
```

Este es el script maestro que debes ejecutar para hacer una verificación completa del proyecto. Ejecuta todos los demás scripts en orden y proporciona un resumen final.

---

### 2. `verify-env.js` - Variables de Entorno
**Verifica que todas las variables de entorno requeridas estén configuradas.**

```bash
node scripts/verify-env.js
```

**Verifica:**
- ✅ `NEXT_PUBLIC_SUPABASE_URL`
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- ✅ `SUPABASE_SERVICE_ROLE_KEY`
- ✅ `STRIPE_SECRET_KEY`
- ✅ `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- ✅ `STRIPE_WEBHOOK_SECRET`
- ✅ `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

**Salida:**
- ✅ Verde: Variable presente y con valor
- ⚠️ Amarillo: Variable presente pero vacía
- ❌ Rojo: Variable no encontrada

---

### 3. `verify-database.js` - Base de Datos
**Verifica la conexión y estructura de la base de datos Supabase.**

```bash
node scripts/verify-database.js
```

**Verifica:**
- ✅ Conexión a Supabase establecida
- ✅ Todas las tablas requeridas existen:
  - `users`
  - `provider_profiles`
  - `services`
  - `service_proposals`
  - `transactions`
  - `reviews`
  - `platform_settings`
  - `admin_logs`
- ✅ Row Level Security (RLS) habilitado
- ✅ Configuración de plataforma (`platform_fee_percent`)
- ✅ Storage buckets creados (`provider-documents`)

**Requisitos:**
- Variables de Supabase configuradas en `.env`
- Migraciones aplicadas

---

### 4. `verify-stripe.js` - Integración Stripe
**Verifica la configuración de Stripe y Stripe Connect.**

```bash
node scripts/verify-stripe.js
```

**Verifica:**
- ✅ Conexión a Stripe API
- ✅ Modo (TEST o LIVE)
- ✅ Stripe Connect habilitado
- ✅ Webhook secret configurado
- ✅ Webhooks endpoints registrados
- ✅ Payment Intents funcionando (solo en modo TEST)

**Requisitos:**
- `STRIPE_SECRET_KEY` configurada
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` configurada
- Cuenta de Stripe activa

**Nota:** En modo TEST, crea y cancela un Payment Intent de prueba para verificar que todo funciona.

---

## 🚀 Uso Recomendado

### Primera vez configurando el proyecto:
```bash
# 1. Clonar el repositorio
git clone <repo-url>

# 2. Instalar dependencias
npm install

# 3. Copiar .env.example a .env
cp .env.example .env

# 4. Configurar variables en .env
# (editar manualmente con tus keys)

# 5. Ejecutar verificación completa
node scripts/verify-all.js
```

### Antes de cada deploy:
```bash
# Verificar que todo esté OK
node scripts/verify-all.js

# Si todo pasa, hacer build
npm run build
```

### Diagnóstico de problemas:
```bash
# Si algo no funciona, ejecutar scripts individuales:

# Problema con env vars
node scripts/verify-env.js

# Problema con base de datos
node scripts/verify-database.js

# Problema con pagos
node scripts/verify-stripe.js
```

---

## 📊 Interpretación de Resultados

### ✅ Exitoso (Exit Code 0)
Todo está correctamente configurado. Puedes proceder.

### ❌ Fallido (Exit Code 1)
Hay problemas críticos que deben resolverse antes de continuar.

### ⚠️ Advertencia
Configuraciones opcionales faltan pero el proyecto puede funcionar.

---

## 🔧 Solución de Problemas Comunes

### Variables de entorno no encontradas
```bash
# Asegúrate de tener el archivo .env en la raíz
ls -la .env

# Verifica que tenga el formato correcto
cat .env
```

### Error de conexión a Supabase
1. Verifica que las URLs no tengan espacios al final
2. Asegúrate de usar el service role key (no el anon key) para SUPABASE_SERVICE_ROLE_KEY
3. Verifica que el proyecto de Supabase esté activo

### Error de conexión a Stripe
1. Verifica que estés usando la key correcta (test vs live)
2. Asegúrate de que Stripe Connect esté habilitado en tu cuenta
3. Si usas webhooks, verifica que el secret sea correcto

### Tablas no encontradas
```bash
# Aplica las migraciones
# Desde Supabase Dashboard → SQL Editor, ejecuta los archivos en:
# supabase/migrations/
```

---

## 🔄 Integración con CI/CD

Estos scripts pueden integrarse en tu pipeline de CI/CD:

```yaml
# GitHub Actions example
- name: Verify Configuration
  run: node scripts/verify-all.js

- name: Build
  run: npm run build
  if: success()
```

---

## 📝 Mantenimiento

Cuando agregues nuevas funcionalidades que requieran configuración:

1. Actualiza `VERIFICATION_PROTOCOL.md`
2. Agrega checks al script correspondiente
3. Actualiza este README
4. Ejecuta `verify-all.js` para confirmar

---

## 🆘 Obtener Ayuda

Si encuentras problemas que los scripts no pueden diagnosticar:

1. Revisa `VERIFICATION_PROTOCOL.md` para verificación manual
2. Consulta los logs de cada script individual
3. Verifica la documentación oficial de:
   - [Supabase](https://supabase.com/docs)
   - [Stripe](https://stripe.com/docs)
   - [Next.js](https://nextjs.org/docs)

---

**Última actualización:** 2026-01-19
