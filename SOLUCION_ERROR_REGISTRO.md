# Solución al Error "Database error saving new user"

## Problema

El error "Database error saving new user" ocurre cuando Supabase Auth intenta enviar un email de confirmación pero no hay un proveedor SMTP configurado.

## Soluciones

Tienes dos opciones para resolver este problema:

### Opción 1: Deshabilitar Confirmación de Email (RECOMENDADO PARA DESARROLLO)

Esta es la solución más rápida para hacer que el registro funcione inmediatamente:

1. Ve a tu proyecto de Supabase: https://supabase.com/dashboard
2. Selecciona tu proyecto: `ljvkiapwdedjcritnehf`
3. En el menú lateral, haz clic en **Authentication** → **Providers**
4. Busca el proveedor **Email**
5. Desactiva la opción **"Confirm email"**
6. Haz clic en **Save**

**Resultado**: Los usuarios podrán registrarse y acceder inmediatamente sin necesidad de confirmar su email.

### Opción 2: Configurar Proveedor SMTP (RECOMENDADO PARA PRODUCCIÓN)

Si quieres mantener la confirmación de email activa, necesitas configurar un proveedor SMTP:

#### Paso 1: Configurar SMTP en Supabase

1. Ve a tu proyecto de Supabase: https://supabase.com/dashboard
2. Selecciona tu proyecto: `ljvkiapwdedjcritnehf`
3. En el menú lateral, haz clic en **Project Settings** → **Auth**
4. Busca la sección **SMTP Settings**
5. Haz clic en **Enable Custom SMTP**
6. Configura los siguientes campos:

   - **SMTP Host**: El servidor SMTP (ej: smtp.gmail.com para Gmail)
   - **SMTP Port**: Puerto (587 para TLS, 465 para SSL)
   - **SMTP Username**: Tu email o usuario SMTP
   - **SMTP Password**: Tu contraseña o contraseña de aplicación
   - **Sender Email**: Email que aparecerá como remitente
   - **Sender Name**: Nombre que aparecerá como remitente (ej: "Resvoa")

7. Haz clic en **Save**

#### Ejemplo con Gmail

Si usas Gmail, necesitas crear una "contraseña de aplicación":

1. Ve a tu cuenta de Google: https://myaccount.google.com/
2. Ve a **Seguridad** → **Verificación en dos pasos** (debes activarla primero)
3. Busca **Contraseñas de aplicaciones**
4. Genera una nueva contraseña para "Correo"
5. Usa esa contraseña en el campo SMTP Password de Supabase

Configuración para Gmail:
- SMTP Host: `smtp.gmail.com`
- SMTP Port: `587`
- SMTP Username: tu-email@gmail.com
- SMTP Password: (contraseña de aplicación generada)

#### Otros Proveedores SMTP Recomendados

- **SendGrid**: Gratis hasta 100 emails/día
  - Host: smtp.sendgrid.net
  - Port: 587
  - [Crear cuenta](https://sendgrid.com/)

- **Mailgun**: Gratis hasta 5,000 emails/mes
  - Host: smtp.mailgun.org
  - Port: 587
  - [Crear cuenta](https://www.mailgun.com/)

- **AWS SES**: Muy económico para alto volumen
  - Host: (depende de tu región)
  - Port: 587
  - [Más información](https://aws.amazon.com/ses/)

## Verificar que Funciona

Después de aplicar cualquiera de las soluciones:

1. Intenta registrar un nuevo usuario
2. Si deshabilitaste la confirmación: deberías poder acceder inmediatamente
3. Si configuraste SMTP: deberías recibir un email de confirmación

## Estado de la Aplicación

La aplicación ya está configurada para manejar ambos escenarios:
- Si la confirmación está deshabilitada: el usuario accede inmediatamente
- Si la confirmación está habilitada: muestra mensaje para revisar el email

## Notas Importantes

- Para DESARROLLO: Recomiendo deshabilitar la confirmación de email
- Para PRODUCCIÓN: Debes configurar SMTP y activar la confirmación de email
- Las URLs de redirección ya están configuradas correctamente en tu proyecto
