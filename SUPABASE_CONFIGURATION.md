# Configuración de Supabase

## 1. Arreglar el Error de Registro de Usuarios

### Problema
```
new row violates row-level security policy for table "users"
```

### Solución
Ejecuta el archivo `FIX_REGISTRATION_POLICY.sql` en tu dashboard de Supabase:

1. Ve a: https://supabase.com/dashboard/project/ljvkiapwdedjcritnehf
2. Haz clic en "SQL Editor" en el menú izquierdo
3. Crea una nueva query
4. Copia y pega el contenido de `FIX_REGISTRATION_POLICY.sql`
5. Haz clic en "Run"

---

## 2. Configurar Confirmación de Email

### Problema
Los links de confirmación apuntan a `localhost:3000` en lugar de tu dominio de producción.

### Solución

1. Ve a tu proyecto en Supabase: https://supabase.com/dashboard/project/ljvkiapwdedjcritnehf

2. Ve a **Authentication** → **URL Configuration**

3. Configura las siguientes URLs:

   **Site URL:**
   ```
   https://resvoa-test-website.bolt.host
   ```

   **Redirect URLs** (añade ambas):
   ```
   https://resvoa-test-website.bolt.host/**
   https://resvoa-test-website.bolt.host/app/login
   ```

4. Ve a **Authentication** → **Email Templates**

5. Para cada plantilla (Confirm signup, Magic Link, etc.), busca la variable `{{ .ConfirmationURL }}` y verifica que esté presente.

6. **IMPORTANTE:** Si estás en desarrollo local, también añade:
   ```
   http://localhost:3000/**
   ```

### Deshabilitar confirmación de email (opcional para testing)

Si quieres probar sin confirmación de email:

1. Ve a **Authentication** → **Providers** → **Email**
2. Desmarca "Enable email confirmations"
3. Guarda los cambios

---

## 3. Obtener Service Role Key

Necesitas actualizar tu `.env` con el Service Role Key:

1. Ve a: https://supabase.com/dashboard/project/ljvkiapwdedjcritnehf/settings/api
2. Copia el **service_role key** (¡NUNCA compartas esta key!)
3. Actualiza tu archivo `.env`:
   ```
   SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key_aqui
   ```

---

## 4. Variables de Entorno en Vercel

Asegúrate de tener estas variables configuradas en Vercel:

1. Ve a tu proyecto en Vercel: https://vercel.com/dashboard
2. Ve a **Settings** → **Environment Variables**
3. Añade/actualiza:

```
NEXT_PUBLIC_SUPABASE_URL=https://ljvkiapwdedjcritnehf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqdmtpYXB3ZGVkamNyaXRuZWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMDI0MTMsImV4cCI6MjA0NzY3ODQxM30.YPW3gKtH7gVzU5c3mHgdB9V7P3XyhYxdPqCwP3Z3gzM
SUPABASE_SERVICE_ROLE_KEY=[tu service role key]
APP_BASE_URL=https://tu-dominio.vercel.app
NEXT_PUBLIC_APP_URL=https://tu-dominio.vercel.app
```

4. Marca las tres opciones: **Production**, **Preview**, y **Development**
5. Haz un redeploy después de añadir las variables
