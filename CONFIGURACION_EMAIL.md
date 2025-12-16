# Configuración de Confirmación de Email en Supabase

## Configuración Necesaria

Para que la confirmación de email funcione correctamente, debes configurar las URLs de redirección en Supabase Dashboard.

### Paso 1: Configurar URL de Redirección en Supabase

1. Ve a tu proyecto de Supabase: https://supabase.com/dashboard
2. Selecciona tu proyecto: `ljvkiapwdedjcritnehf`
3. En el menú lateral, haz clic en **Authentication** → **URL Configuration**
4. En la sección **Redirect URLs**, agrega las siguientes URLs:
   - Para desarrollo local: `http://localhost:3000/auth/confirm`
   - Para producción: `https://resvoa-test-website.bolt.host/auth/confirm`
5. Guarda los cambios

### Paso 2: Configurar las Plantillas de Email (Opcional)

Si quieres personalizar el email de confirmación:

1. En Supabase Dashboard, ve a **Authentication** → **Email Templates**
2. Selecciona **Confirm signup**
3. Personaliza el contenido del email
4. Asegúrate de que el enlace de confirmación apunte a: `{{ .ConfirmationURL }}`

## Flujo de Confirmación de Email

### Cómo Funciona:

1. **Usuario se registra**:
   - El usuario completa el formulario de registro
   - La aplicación muestra un mensaje indicando que debe revisar su email

2. **Usuario recibe email**:
   - Supabase envía un email con un enlace de confirmación
   - El enlace contiene un token único de confirmación

3. **Usuario hace clic en el enlace**:
   - El usuario es redirigido a `/auth/confirm`
   - La aplicación verifica el token automáticamente
   - Si es válido, el email queda confirmado

4. **Redirección final**:
   - El usuario es redirigido a la página de inicio de sesión
   - Ya puede acceder a su cuenta con sus credenciales

## Estado Actual de la Aplicación

La aplicación está completamente configurada para manejar la confirmación de email:

1. **Página de registro**:
   - Detecta si se requiere confirmación de email
   - Muestra mensaje apropiado al usuario
   - No se queda cargando indefinidamente

2. **Página de confirmación** (`/auth/confirm`):
   - Procesa automáticamente el token de confirmación
   - Muestra feedback visual del estado (cargando/éxito/error)
   - Redirige automáticamente al login después de confirmar

3. **Manejo de errores**:
   - Tokens inválidos o expirados muestran mensaje de error
   - Opciones para reintentar o volver al inicio

## Alternativa: Deshabilitar Confirmación de Email

Si prefieres que los usuarios puedan registrarse sin confirmar email (útil para desarrollo):

1. Ve a **Authentication** → **Providers** en Supabase Dashboard
2. Busca la sección **Email**
3. Desactiva la opción **"Confirm email"**
4. Guarda los cambios

**Nota**: La aplicación funciona perfectamente en ambos modos (con o sin confirmación).
