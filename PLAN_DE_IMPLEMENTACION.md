# 📋 PLAN DE IMPLEMENTACIÓN - RESVOA
**Versión:** 1.0
**Fecha de Creación:** 2026-01-19
**Estado Actual:** 68% completado
**Objetivo:** Llevar el proyecto a producción (100%)

---

## 📊 RESUMEN EJECUTIVO

Este documento es tu **roadmap completo** para llevar RESVOA de un MVP al 68% a un producto listo para producción. Está diseñado para ser ejecutado con tu equipo de asesores, con tareas claras, estimaciones de tiempo y criterios de éxito medibles.

### Métricas Clave
- **Estado Actual:** 68% completo
- **Tiempo Estimado Total:** 6-10 semanas
- **Inversión Técnica:** Media-Alta
- **Complejidad:** Media

---

## 🎯 OBJETIVOS POR FASE

| Fase | Objetivo | Tiempo | Prioridad |
|------|----------|--------|-----------|
| **Fase 0** | Configuración completa | 1-2 días | CRÍTICA |
| **Fase 1** | MVP listo para beta | 2-3 semanas | ALTA |
| **Fase 2** | Producto listo para producción | 3-4 semanas | ALTA |
| **Fase 3** | Optimización y crecimiento | 1-2 meses | MEDIA |

---

# FASE 0: CONFIGURACIÓN Y VERIFICACIÓN 🔧
**Duración:** 1-2 días
**Prioridad:** CRÍTICA
**Responsable Sugerido:** Tech Lead / DevOps

## Objetivo
Configurar todos los servicios externos y verificar que el proyecto funcione end-to-end.

---

## ✅ Tarea 0.1: Configurar Supabase

**Tiempo estimado:** 30-45 minutos

### Pasos:
- [ ] **0.1.1** Crear cuenta en [supabase.com](https://supabase.com)
- [ ] **0.1.2** Crear nuevo proyecto "RESVOA"
  - Región: Seleccionar la más cercana a tu mercado
  - Database Password: Guardar en gestor de contraseñas
- [ ] **0.1.3** Esperar a que el proyecto esté listo (~2 min)
- [ ] **0.1.4** Obtener credenciales en Settings → API:
  - `Project URL` → Variable `NEXT_PUBLIC_SUPABASE_URL`
  - `anon public key` → Variable `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `service_role key` → Variable `SUPABASE_SERVICE_ROLE_KEY`
- [ ] **0.1.5** Actualizar archivo `.env` con las credenciales

### Verificación:
```bash
npm run verify:env
```
**Criterio de Éxito:** ✅ Las 3 variables de Supabase están presentes y no vacías

---

## ✅ Tarea 0.2: Aplicar Migraciones de Base de Datos

**Tiempo estimado:** 15-20 minutos

### Pasos:
- [ ] **0.2.1** En Supabase Dashboard → SQL Editor
- [ ] **0.2.2** Ejecutar migraciones en orden:

  **Migración 1:** `20251120103420_create_initial_schema.sql`
  ```sql
  -- Copiar contenido completo del archivo y ejecutar
  ```

  **Migración 2:** `20251120113012_fix_security_and_performance_issues.sql`
  ```sql
  -- Copiar contenido completo del archivo y ejecutar
  ```

  **Migración 3:** `20251124_create_platform_settings.sql`
  ```sql
  -- Copiar contenido completo del archivo y ejecutar
  ```

  **Migración 4:** `20251124_drop_messages_table.sql`
  ```sql
  -- Copiar contenido completo del archivo y ejecutar
  ```

  **Migración 5:** `20251124_fix_users_insert_policy.sql`
  ```sql
  -- Copiar contenido completo del archivo y ejecutar
  ```

- [ ] **0.2.3** Verificar tablas creadas en Table Editor
- [ ] **0.2.4** Verificar RLS habilitado en cada tabla

### Verificación:
```bash
npm run verify:db
```
**Criterio de Éxito:** ✅ 8 tablas existen con RLS habilitado

---

## ✅ Tarea 0.3: Configurar Storage

**Tiempo estimado:** 10 minutos

### Pasos:
- [ ] **0.3.1** En Supabase Dashboard → Storage
- [ ] **0.3.2** Crear bucket "provider-documents"
  - Public: **NO** (mantener privado)
  - File size limit: 5MB
  - Allowed MIME types: `image/jpeg,image/png,application/pdf`
- [ ] **0.3.3** Configurar políticas de acceso:

```sql
-- Policy 1: Upload permitido para usuarios autenticados
CREATE POLICY "Users can upload their own documents"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'provider-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Policy 2: Download solo propietario o admin
CREATE POLICY "Users can read their own documents"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'provider-documents' AND (auth.uid()::text = (storage.foldername(name))[1] OR auth.jwt()->>'role' = 'admin'));

-- Policy 3: Delete solo propietario
CREATE POLICY "Users can delete their own documents"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'provider-documents' AND auth.uid()::text = (storage.foldername(name))[1]);
```

### Verificación:
- [ ] Verificar que el bucket aparece en Storage
- [ ] Verificar que tiene 3 políticas configuradas

**Criterio de Éxito:** ✅ Bucket creado con políticas de seguridad

---

## ✅ Tarea 0.4: Insertar Configuración Inicial

**Tiempo estimado:** 5 minutos

### Pasos:
- [ ] **0.4.1** En Supabase Dashboard → SQL Editor, ejecutar:

```sql
-- Configuración de comisión de plataforma
INSERT INTO platform_settings (key, value, description)
VALUES ('platform_fee_percent', 15, 'Comisión de plataforma en porcentaje')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- Crear usuario admin inicial (opcional)
-- Crea este usuario manualmente desde la UI y luego actualiza su rol:
-- UPDATE users SET user_type = 'admin' WHERE email = 'admin@resvoa.com';
```

### Verificación:
```bash
npm run verify:db
```
**Criterio de Éxito:** ✅ Configuración de plataforma existe

---

## ✅ Tarea 0.5: Configurar Stripe

**Tiempo estimado:** 20-30 minutos

### Pasos:
- [ ] **0.5.1** Crear cuenta en [stripe.com](https://stripe.com)
- [ ] **0.5.2** Activar cuenta (puede requerir verificación de identidad)
- [ ] **0.5.3** Habilitar Stripe Connect:
  - Dashboard → Connect → Get Started
  - Seleccionar tipo: **Express Account**
  - Completar configuración básica
- [ ] **0.5.4** Obtener claves en modo TEST:
  - Dashboard → Developers → API Keys
  - Toggle: **"View test data"** (esquina superior derecha)
  - Copiar:
    - Publishable key → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
    - Secret key → `STRIPE_SECRET_KEY`
- [ ] **0.5.5** Actualizar `.env` con las claves

### Configuración de Webhooks (Opcional para desarrollo):
- [ ] **0.5.6** Dashboard → Developers → Webhooks
- [ ] **0.5.7** Add endpoint: `https://tu-dominio.com/api/payments/stripe-webhook`
- [ ] **0.5.8** Seleccionar eventos:
  - `payment_intent.succeeded`
  - `payment_intent.payment_failed`
  - `payment_intent.canceled`
  - `charge.refunded`
  - `account.updated`
- [ ] **0.5.9** Copiar Signing Secret → `STRIPE_WEBHOOK_SECRET`

**Nota:** Para desarrollo local, usa [Stripe CLI](https://stripe.com/docs/stripe-cli) para escuchar webhooks.

### Verificación:
```bash
npm run verify:stripe
```
**Criterio de Éxito:** ✅ Conexión OK, Stripe Connect habilitado, Payment Intent test exitoso

---

## ✅ Tarea 0.6: Configurar Google Maps API

**Tiempo estimado:** 15 minutos

### Pasos:
- [ ] **0.6.1** Ir a [Google Cloud Console](https://console.cloud.google.com)
- [ ] **0.6.2** Crear nuevo proyecto "RESVOA" (o usar existente)
- [ ] **0.6.3** Habilitar APIs & Services → Library
- [ ] **0.6.4** Buscar y habilitar "Places API"
- [ ] **0.6.5** Crear credenciales:
  - APIs & Services → Credentials
  - Create Credentials → API Key
- [ ] **0.6.6** **IMPORTANTE:** Restringir la API key:
  - Application restrictions: **HTTP referrers**
  - Website restrictions:
    - `localhost:*`
    - `tu-dominio.com/*`
    - `*.tu-dominio.com/*`
  - API restrictions: Solo **"Places API"**
- [ ] **0.6.7** Copiar API Key → `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- [ ] **0.6.8** Actualizar `.env`

### Verificación:
```bash
npm run verify:env
```
**Criterio de Éxito:** ✅ Variable GOOGLE_MAPS_API_KEY presente

**Nota:** Si prefieres posponer Google Maps, puedes dejarlo para más adelante. El campo de dirección seguirá funcionando en modo manual.

---

## ✅ Tarea 0.7: Verificación Final de Configuración

**Tiempo estimado:** 5 minutos

### Pasos:
- [ ] **0.7.1** Ejecutar verificación completa:
```bash
npm run verify
```

- [ ] **0.7.2** Verificar que todos los checks pasan:
  - ✅ Variables de entorno
  - ✅ Base de datos y tablas
  - ✅ Stripe

- [ ] **0.7.3** Ejecutar build del proyecto:
```bash
npm run build
```

- [ ] **0.7.4** Iniciar servidor de desarrollo:
```bash
npm run dev
```

- [ ] **0.7.5** Abrir http://localhost:3000 y verificar que carga

### Criterio de Éxito:
- ✅ `npm run verify` pasa sin errores críticos
- ✅ `npm run build` completa exitosamente
- ✅ La aplicación carga en el navegador

---

## ✅ Tarea 0.8: Testing de Flujos Básicos

**Tiempo estimado:** 20-30 minutos

### Test 1: Registro de Usuario
- [ ] Ir a `/app/registro-usuario`
- [ ] Registrar usuario: `test-usuario@example.com`
- [ ] Verificar email (si está habilitado)
- [ ] Login exitoso
- [ ] Ver dashboard de usuario

### Test 2: Registro de Proveedor
- [ ] Ir a `/app/registro-proveedor`
- [ ] Completar 3 pasos del registro
- [ ] Subir documentos de verificación
- [ ] Verificar que aparece en pendientes

### Test 3: Crear Servicio
- [ ] Como usuario, crear nueva solicitud
- [ ] Categoría: "Recados y mandados"
- [ ] Ubicación: Madrid
- [ ] Precio estimado: €50
- [ ] Guardar servicio

### Test 4: Enviar Propuesta
- [ ] Logout y login como proveedor
- [ ] Ver servicio en dashboard
- [ ] Enviar propuesta de €45
- [ ] Verificar que aparece en "Propuestas enviadas"

### Test 5: Pagar (Stripe Test)
- [ ] Login como usuario original
- [ ] Aceptar propuesta
- [ ] Usar tarjeta de prueba:
  - Número: `4242 4242 4242 4242`
  - Fecha: Cualquier futura (ej: 12/30)
  - CVC: 123
  - ZIP: 12345
- [ ] Verificar pago exitoso
- [ ] Servicio pasa a estado "assigned"

### Criterio de Éxito:
- ✅ Todos los flujos funcionan sin errores
- ✅ Los datos se guardan correctamente en Supabase
- ✅ El pago de prueba se procesa en Stripe

---

## 📊 RESULTADO DE FASE 0

Al completar esta fase debes tener:
- ✅ Supabase completamente configurado con todas las tablas
- ✅ Stripe funcionando en modo TEST
- ✅ Google Maps API configurada (opcional)
- ✅ Todos los flujos básicos operativos
- ✅ Build del proyecto exitoso

**Tiempo Total:** 1-2 días
**Progreso:** 68% → 75%

---

# FASE 1: MVP LISTO PARA BETA 🚀
**Duración:** 2-3 semanas
**Prioridad:** ALTA
**Responsable Sugerido:** Equipo completo

## Objetivo
Implementar funcionalidades críticas que bloquean el lanzamiento de una versión beta privada.

---

## ✅ Tarea 1.1: Landing Page Profesional

**Tiempo estimado:** 3-4 días
**Responsable:** Frontend Developer + Diseñador

### Contexto
Actualmente `/` solo muestra el logo. Necesitas una landing page que explique el valor de RESVOA y convierta visitantes en usuarios.

### Especificaciones:

#### Hero Section
- [ ] **1.1.1** Título principal: "Encuentra el servicio que necesitas, cuando lo necesitas"
- [ ] **1.1.2** Subtítulo con propuesta de valor
- [ ] **1.1.3** CTA principal: "Solicitar Servicio" (va a registro usuario)
- [ ] **1.1.4** CTA secundario: "Convertirme en Proveedor"
- [ ] **1.1.5** Hero image o ilustración atractiva
- [ ] **1.1.6** Barra de búsqueda rápida por categoría (opcional)

#### Sección "Cómo Funciona"
- [ ] **1.1.7** 3 pasos visuales para usuarios:
  1. Describe lo que necesitas
  2. Recibe propuestas de proveedores
  3. Elige y paga de forma segura
- [ ] **1.1.8** 3 pasos para proveedores:
  1. Regístrate gratis
  2. Ofrece tus servicios
  3. Cobra directamente

#### Categorías de Servicios
- [ ] **1.1.9** Grid de 6 categorías con iconos:
  - Recados y mandados
  - Paseo de perros
  - Ayuda doméstica
  - Limpieza de vehículos
  - Soporte en el hogar
  - Recogida y entrega de llaves
- [ ] **1.1.10** Cada categoría enlaza a `/categorias/[slug]`

#### Sección de Confianza
- [ ] **1.1.11** Badges de:
  - Pagos seguros (Stripe)
  - Proveedores verificados
  - Satisfacción garantizada
- [ ] **1.1.12** Testimonios (pueden ser mock inicialmente)
- [ ] **1.1.13** Estadísticas clave (mock o reales):
  - "X proveedores verificados"
  - "X servicios completados"
  - "4.8★ satisfacción promedio"

#### Sección CTA Final
- [ ] **1.1.14** "¿Listo para empezar?"
- [ ] **1.1.15** Botones para ambos tipos de usuario
- [ ] **1.1.16** Links a ayuda y contacto

#### Footer
- [ ] **1.1.17** Ya existe, verificar que funciona

### Diseño:
- [ ] **1.1.18** Responsive: Mobile, tablet, desktop
- [ ] **1.1.19** Animaciones sutiles (scroll reveal, hover effects)
- [ ] **1.1.20** Paleta de colores consistente (evitar púrpura)
- [ ] **1.1.21** Tipografía legible y jerarquía clara
- [ ] **1.1.22** Imágenes optimizadas (WebP, lazy loading)

### Verificación:
- [ ] **1.1.23** Test en 3 dispositivos diferentes
- [ ] **1.1.24** Lighthouse Score > 90
- [ ] **1.1.25** Todos los CTAs funcionan
- [ ] **1.1.26** Revisión con stakeholders

**Archivo:** `app/page.tsx`

**Criterio de Éxito:** ✅ Landing page profesional que comunica claramente la propuesta de valor

---

## ✅ Tarea 1.2: Sistema de Notificaciones Email

**Tiempo estimado:** 4-5 días
**Responsable:** Backend Developer

### Contexto
Actualmente no hay notificaciones por email. Los usuarios no se enteran de eventos críticos.

### Decisión Técnica:
**Opción A (Recomendada):** Usar Supabase Email Templates + Triggers
**Opción B:** Integrar SendGrid/Mailgun

### Implementación con Supabase:

#### Setup Base
- [ ] **1.2.1** Configurar SMTP en Supabase:
  - Dashboard → Project Settings → Auth
  - SMTP Settings (o usar Supabase built-in)
- [ ] **1.2.2** Personalizar templates en Auth Templates

#### Emails Críticos a Implementar:

**Email 1: Nueva Propuesta Recibida**
- [ ] **1.2.3** Trigger cuando `service_proposals.status = 'pending'`
- [ ] **1.2.4** Enviar a `services.user_id`
- [ ] **1.2.5** Contenido:
  - "Tienes una nueva propuesta para [servicio]"
  - Precio propuesto
  - Rating del proveedor
  - Link directo a ver propuesta
- [ ] **1.2.6** CTA: "Ver Propuesta"

**Email 2: Propuesta Aceptada**
- [ ] **1.2.7** Trigger cuando propuesta cambia a `accepted`
- [ ] **1.2.8** Enviar al proveedor
- [ ] **1.2.9** Contenido:
  - "Tu propuesta fue aceptada"
  - Detalles del servicio
  - Información de contacto del usuario
  - Próximos pasos
- [ ] **1.2.10** CTA: "Ver Detalles"

**Email 3: Servicio Completado**
- [ ] **1.2.11** Trigger cuando servicio pasa a `completed`
- [ ] **1.2.12** Enviar al usuario
- [ ] **1.2.13** Contenido:
  - "El proveedor ha marcado el servicio como completado"
  - Solicitud de certificación
  - Recordatorio de dejar review
- [ ] **1.2.14** CTA: "Certificar y Calificar"

**Email 4: Pago Procesado**
- [ ] **1.2.15** Trigger desde webhook de Stripe
- [ ] **1.2.16** Enviar al proveedor
- [ ] **1.2.17** Contenido:
  - "Tu pago ha sido procesado"
  - Monto recibido (después de comisión)
  - Tiempo estimado de transferencia
  - Recibo adjunto (PDF)
- [ ] **1.2.18** CTA: "Ver Detalles"

**Email 5: Bienvenida - Usuario**
- [ ] **1.2.19** Trigger: Registro exitoso
- [ ] **1.2.20** Contenido:
  - Bienvenida a RESVOA
  - Cómo funciona la plataforma
  - Primeros pasos
- [ ] **1.2.21** CTA: "Crear Primera Solicitud"

**Email 6: Bienvenida - Proveedor**
- [ ] **1.2.22** Trigger: Registro exitoso
- [ ] **1.2.23** Contenido:
  - Bienvenida a RESVOA
  - Completar perfil y verificación
  - Configurar cuenta de Stripe
- [ ] **1.2.24** CTA: "Completar Perfil"

**Email 7: Recordatorio de Pago Pendiente**
- [ ] **1.2.25** Cronjob diario
- [ ] **1.2.26** Para servicios en estado `assigned` > 24h sin pagar
- [ ] **1.2.27** Contenido: Recordatorio amigable
- [ ] **1.2.28** CTA: "Completar Pago"

#### Implementación:

**Opción A: Database Triggers + Edge Functions**

Archivo: `supabase/migrations/add_email_notifications.sql`
```sql
-- Función para enviar email mediante Edge Function
CREATE OR REPLACE FUNCTION notify_new_proposal()
RETURNS TRIGGER AS $$
BEGIN
  -- Llamar a Edge Function que envía el email
  PERFORM net.http_post(
    url := concat(current_setting('app.settings.api_url'), '/api/notifications/proposal-received'),
    body := json_build_object(
      'service_id', NEW.service_id,
      'proposal_id', NEW.id
    )::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger
CREATE TRIGGER on_proposal_created
  AFTER INSERT ON service_proposals
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_proposal();
```

Archivo: `app/api/notifications/proposal-received/route.ts`
- [ ] **1.2.29** Crear endpoint
- [ ] **1.2.30** Obtener datos del servicio y usuario
- [ ] **1.2.31** Formatear email
- [ ] **1.2.32** Enviar con servicio de email

**Opción B: Application-Level (más simple para empezar)**

- [ ] **1.2.33** En cada action que requiere notificación, agregar:
```typescript
// Ejemplo en aceptar propuesta
await acceptProposal(proposalId);
await sendEmail({
  to: providerEmail,
  template: 'proposal-accepted',
  data: { ... }
});
```

### Template de Email Base:
- [ ] **1.2.34** Header con logo RESVOA
- [ ] **1.2.35** Contenido principal centrado
- [ ] **1.2.36** Botón CTA destacado
- [ ] **1.2.37** Footer con links y unsuscribe
- [ ] **1.2.38** Responsive (móvil-friendly)

### Testing:
- [ ] **1.2.39** Probar cada tipo de email
- [ ] **1.2.40** Verificar en Gmail, Outlook, Apple Mail
- [ ] **1.2.41** Verificar que links funcionan
- [ ] **1.2.42** Test de spam score
- [ ] **1.2.43** Verificar opción de unsuscribe

**Criterio de Éxito:** ✅ Emails críticos se envían automáticamente en tiempo real

---

## ✅ Tarea 1.3: Sistema Básico de Reportes

**Tiempo estimado:** 3-4 días
**Responsable:** Full-stack Developer

### Contexto
Actualmente no existe forma de reportar problemas o disputas. Necesitas un sistema básico para mediación.

### Especificaciones:

#### Base de Datos
- [ ] **1.3.1** Crear migración: `add_reports_system.sql`

```sql
-- Tabla de reportes
CREATE TABLE IF NOT EXISTS service_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id UUID NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  reporter_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  reported_user_id UUID NOT NULL REFERENCES users(id) ON DELETE SET NULL,
  report_type TEXT NOT NULL CHECK (report_type IN (
    'service_not_completed',
    'payment_issue',
    'unprofessional_conduct',
    'safety_concern',
    'fraud',
    'other'
  )),
  description TEXT NOT NULL,
  evidence_urls TEXT[], -- URLs de capturas de pantalla, etc
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN (
    'pending',
    'under_review',
    'resolved',
    'dismissed'
  )),
  admin_notes TEXT,
  resolution TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  resolved_at TIMESTAMPTZ
);

-- Índices
CREATE INDEX idx_reports_service ON service_reports(service_id);
CREATE INDEX idx_reports_status ON service_reports(status);
CREATE INDEX idx_reports_reporter ON service_reports(reporter_id);

-- RLS
ALTER TABLE service_reports ENABLE ROW LEVEL SECURITY;

-- Políticas
CREATE POLICY "Users can create reports for their services"
  ON service_reports FOR INSERT
  TO authenticated
  WITH CHECK (
    reporter_id = auth.uid() AND
    EXISTS (
      SELECT 1 FROM services
      WHERE id = service_id
      AND (user_id = auth.uid() OR provider_id = auth.uid())
    )
  );

CREATE POLICY "Users can view their own reports"
  ON service_reports FOR SELECT
  TO authenticated
  USING (
    reporter_id = auth.uid() OR
    reported_user_id = auth.uid() OR
    (SELECT user_type FROM users WHERE id = auth.uid()) = 'admin'
  );

CREATE POLICY "Admins can update reports"
  ON service_reports FOR UPDATE
  TO authenticated
  USING ((SELECT user_type FROM users WHERE id = auth.uid()) = 'admin')
  WITH CHECK ((SELECT user_type FROM users WHERE id = auth.uid()) = 'admin');
```

- [ ] **1.3.2** Aplicar migración

#### Frontend - Formulario de Reporte

Archivo: `app/app/usuario/servicios/[id]/reportar/page.tsx`

- [ ] **1.3.3** Crear página de reporte
- [ ] **1.3.4** Formulario con campos:
  - Tipo de problema (dropdown)
  - Descripción detallada (textarea)
  - Subir evidencia (imágenes, opcional)
  - Checkbox: "He intentado resolver esto directamente"
- [ ] **1.3.5** Validación con Zod
- [ ] **1.3.6** Botón: "Enviar Reporte"
- [ ] **1.3.7** Confirmación después de envío
- [ ] **1.3.8** Email de confirmación al usuario

#### Backend - API de Reportes

Archivo: `app/api/reports/create/route.ts`

- [ ] **1.3.9** Endpoint POST para crear reporte
- [ ] **1.3.10** Validar que el usuario es parte del servicio
- [ ] **1.3.11** Subir evidencia a Supabase Storage
- [ ] **1.3.12** Insertar en `service_reports`
- [ ] **1.3.13** Enviar email a admin
- [ ] **1.3.14** Enviar confirmación a usuario

#### Panel de Admin - Gestión de Reportes

Archivo: `app/app/admin/reportes/page.tsx`

- [ ] **1.3.15** Listar todos los reportes con filtros:
  - Por estado (pending, under_review, resolved)
  - Por tipo
  - Por fecha
- [ ] **1.3.16** Vista detallada de cada reporte:
  - Información del servicio
  - Datos del reporter y reportado
  - Descripción completa
  - Evidencia (imágenes)
  - Timeline de eventos
- [ ] **1.3.17** Acciones del admin:
  - Cambiar estado
  - Agregar notas internas
  - Escribir resolución
  - Contactar partes involucradas
  - Cerrar reporte
- [ ] **1.3.18** Emitir reembolso si aplica (integrar con Stripe)

#### Flujo de Resolución

- [ ] **1.3.19** Admin recibe notificación de nuevo reporte
- [ ] **1.3.20** Admin marca como "under_review"
- [ ] **1.3.21** Admin contacta a ambas partes
- [ ] **1.3.22** Admin toma decisión:
  - Reembolso completo
  - Reembolso parcial
  - Sin reembolso (servicio OK)
  - Suspensión de cuenta
- [ ] **1.3.23** Sistema ejecuta acción (ej: refund en Stripe)
- [ ] **1.3.24** Ambas partes reciben email con resolución
- [ ] **1.3.25** Reporte se marca como "resolved"

### Verificación:
- [ ] **1.3.26** Usuario puede reportar problema
- [ ] **1.3.27** Admin ve reporte en panel
- [ ] **1.3.28** Admin puede actualizar y resolver
- [ ] **1.3.29** Emails se envían correctamente
- [ ] **1.3.30** Reembolso funciona (test con Stripe)

**Criterio de Éxito:** ✅ Sistema básico de reportes operativo con flujo de resolución

---

## ✅ Tarea 1.4: Fix Servicios Recurrentes

**Tiempo estimado:** 2-3 días
**Responsable:** Full-stack Developer

### Contexto
La UI tiene campos para servicios recurrentes (frecuencia, fecha de inicio, etc.) pero el backend no hace nada con ellos. Debes decidir: implementar o eliminar.

### **OPCIÓN A: Implementar (Recomendado para el futuro)**

#### Base de Datos
- [ ] **1.4.1** Crear migración: `add_recurring_services.sql`

```sql
CREATE TABLE IF NOT EXISTS recurring_schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  original_service_id UUID NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  provider_id UUID REFERENCES users(id) ON DELETE SET NULL,
  frequency TEXT NOT NULL CHECK (frequency IN ('weekly', 'biweekly', 'monthly')),
  start_date DATE NOT NULL,
  end_date DATE,
  next_occurrence DATE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Relación: servicio → recurring_schedule
ALTER TABLE services ADD COLUMN recurring_schedule_id UUID REFERENCES recurring_schedules(id);

CREATE INDEX idx_recurring_active ON recurring_schedules(is_active, next_occurrence);
CREATE INDEX idx_recurring_user ON recurring_schedules(user_id);

-- RLS
ALTER TABLE recurring_schedules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their recurring schedules"
  ON recurring_schedules FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create recurring schedules"
  ON recurring_schedules FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their recurring schedules"
  ON recurring_schedules FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());
```

- [ ] **1.4.2** Edge Function o Cron Job para generar instancias:

Archivo: `supabase/functions/generate-recurring-services/index.ts`

```typescript
// Ejecutar diariamente a las 00:00
// Busca recurring_schedules donde next_occurrence <= hoy
// Crea nueva instancia de servicio
// Actualiza next_occurrence según frecuencia
```

- [ ] **1.4.3** Configurar cron en Supabase:
  - Dashboard → Database → Cron Jobs
  - Schedule: `0 0 * * *` (diaria a medianoche)

#### Frontend
- [ ] **1.4.4** Mantener campos de recurrencia en formulario
- [ ] **1.4.5** Agregar sección "Mis Servicios Recurrentes" en dashboard
- [ ] **1.4.6** Permitir pausar/cancelar recurrencia
- [ ] **1.4.7** Mostrar próximas ocurrencias

#### Backend
- [ ] **1.4.8** Al crear servicio recurrente, crear `recurring_schedule`
- [ ] **1.4.9** Vincular servicio inicial con schedule
- [ ] **1.4.10** Generar instancias automáticamente
- [ ] **1.4.11** Notificar al usuario antes de cada ocurrencia

### **OPCIÓN B: Eliminar (Más rápido, menos completo)**

- [ ] **1.4.12** Eliminar campos de recurrencia del formulario de servicio:
  - `app/app/usuario/dashboard/page.tsx` (sección crear servicio)
  - Eliminar: is_recurring, frequency, start_date, end_date

- [ ] **1.4.13** Actualizar tipo TypeScript `Service` en `types/index.ts`:
  - Eliminar propiedades de recurrencia

- [ ] **1.4.14** Documentar en README que recurrencia no está implementada

### Recomendación:
**Implementar solo si tienes tiempo.** Si no, eliminar de UI para evitar confusión.

**Criterio de Éxito (Opción A):** ✅ Servicios recurrentes se generan automáticamente
**Criterio de Éxito (Opción B):** ✅ UI no muestra opciones de recurrencia

---

## ✅ Tarea 1.5: Dashboard Admin con Datos Reales

**Tiempo estimado:** 3-4 días
**Responsable:** Full-stack Developer

### Contexto
Actualmente `app/app/admin/page.tsx` usa datos mock. Necesitas conectar con la base de datos real.

### Especificaciones:

#### Métricas a Mostrar

**Panel Principal:**
- [ ] **1.5.1** Usuarios totales (count)
- [ ] **1.5.2** Proveedores activos (count where user_type='provider' AND verificado)
- [ ] **1.5.3** Servicios este mes (count where created_at > inicio_mes)
- [ ] **1.5.4** Ingresos totales (sum transactions donde status='completed')
- [ ] **1.5.5** Comisión ganada (ingresos * platform_fee_percent)

**Gráficos:**
- [ ] **1.5.6** Servicios por día (últimos 30 días)
- [ ] **1.5.7** Ingresos por mes (últimos 12 meses)
- [ ] **1.5.8** Distribución por categoría (pie chart)
- [ ] **1.5.9** Tasa de conversión (propuestas → servicios completados)

**Actividad Reciente:**
- [ ] **1.5.10** Últimos 10 servicios creados
- [ ] **1.5.11** Últimas 10 transacciones
- [ ] **1.5.12** Últimas 10 propuestas
- [ ] **1.5.13** Últimos 5 reportes

**Verificaciones Pendientes:**
- [ ] **1.5.14** Proveedores esperando verificación
- [ ] **1.5.15** Documentos subidos (DNI, selfie)
- [ ] **1.5.16** Botones: Aprobar / Rechazar
- [ ] **1.5.17** Modal para ver documentos

#### Implementación

Archivo: `app/api/admin/dashboard-stats/route.ts`

```typescript
// GET /api/admin/dashboard-stats
// Verificar que usuario es admin
// Ejecutar queries:
// - COUNT users
// - COUNT providers WHERE verified=true
// - COUNT services WHERE created_at >= this_month
// - SUM transactions WHERE status='completed'
// - Services por día (GROUP BY DATE)
// - Ingresos por mes (GROUP BY month)
// - Distribución categorías (GROUP BY category)
// - Recent activity (ORDER BY created_at DESC LIMIT 10)
// - Pending verifications (WHERE verification_status='pending')
// Retornar JSON con todas las stats
```

- [ ] **1.5.18** Crear endpoint
- [ ] **1.5.19** Agregar cache (revalidar cada 5 minutos)
- [ ] **1.5.20** Optimizar queries (usar JOINs eficientes)

Archivo: `app/app/admin/page.tsx`

- [ ] **1.5.21** Fetch datos de `/api/admin/dashboard-stats`
- [ ] **1.5.22** Reemplazar mock data con datos reales
- [ ] **1.5.23** Agregar loading states
- [ ] **1.5.24** Agregar error handling
- [ ] **1.5.25** Actualizar gráficos con Recharts
- [ ] **1.5.26** Formatear números (moneda, fechas)

#### Acciones del Admin
- [ ] **1.5.27** Verificar proveedor:
  - Ver documentos en modal
  - Aprobar → `provider_profiles.verification_status = 'approved'`
  - Rechazar → `verification_status = 'rejected'` + enviar email
- [ ] **1.5.28** Ajustar comisión:
  - Ya existe en `app/api/admin/platform-settings/fee/route.ts`
  - Verificar que funciona
- [ ] **1.5.29** Ver detalles de cualquier servicio
- [ ] **1.5.30** Ver detalles de cualquier usuario
- [ ] **1.5.31** Ver todos los reportes (Tarea 1.3)

### Verificación:
- [ ] **1.5.32** Stats muestran datos reales
- [ ] **1.5.33** Gráficos se actualizan con datos de BD
- [ ] **1.5.34** Verificación de proveedores funciona
- [ ] **1.5.35** Performance es aceptable (<2s carga inicial)

**Criterio de Éxito:** ✅ Dashboard admin usa solo datos reales de la base de datos

---

## ✅ Tarea 1.6: Testing End-to-End y Bug Fixes

**Tiempo estimado:** 3-4 días
**Responsable:** Todo el equipo

### Objetivo
Probar todos los flujos principales y corregir bugs encontrados antes de beta.

### Flujos a Probar:

#### Flujo 1: Usuario Completo
- [ ] **1.6.1** Registro → Confirmación → Login
- [ ] **1.6.2** Crear solicitud de servicio
- [ ] **1.6.3** Recibir propuesta (email)
- [ ] **1.6.4** Aceptar propuesta y pagar
- [ ] **1.6.5** Certificar completación
- [ ] **1.6.6** Dejar review
- [ ] **1.6.7** Ver historial de servicios

#### Flujo 2: Proveedor Completo
- [ ] **1.6.8** Registro → Completar perfil → Subir docs
- [ ] **1.6.9** Onboarding Stripe Connect
- [ ] **1.6.10** Ver solicitudes disponibles
- [ ] **1.6.11** Enviar propuesta
- [ ] **1.6.12** Recibir notificación de aceptación
- [ ] **1.6.13** Marcar como completado
- [ ] **1.6.14** Recibir pago

#### Flujo 3: Admin
- [ ] **1.6.15** Login como admin
- [ ] **1.6.16** Ver dashboard con stats
- [ ] **1.6.17** Verificar proveedor
- [ ] **1.6.18** Revisar reporte
- [ ] **1.6.19** Resolver disputa
- [ ] **1.6.20** Ajustar comisión

### Testing por Dispositivo:
- [ ] **1.6.21** Desktop (Chrome, Firefox, Safari)
- [ ] **1.6.22** Mobile (iOS Safari, Android Chrome)
- [ ] **1.6.23** Tablet

### Testing de Casos Edge:
- [ ] **1.6.24** Usuario sin verificar email intenta crear servicio
- [ ] **1.6.25** Proveedor sin Stripe intenta marcar completado
- [ ] **1.6.26** Pago falla (tarjeta rechazada)
- [ ] **1.6.27** Usuario cancela servicio después de pagar
- [ ] **1.6.28** Múltiples propuestas para mismo servicio

### Performance:
- [ ] **1.6.29** Lighthouse score > 85 en todas las páginas principales
- [ ] **1.6.30** Tiempo de carga inicial < 3s
- [ ] **1.6.31** Queries de BD optimizadas (< 500ms)

### Seguridad:
- [ ] **1.6.32** Intentar acceder a datos de otro usuario (debe fallar)
- [ ] **1.6.33** Intentar API de admin sin ser admin (debe fallar)
- [ ] **1.6.34** Verificar que RLS bloquea accesos no autorizados

### Documentar Bugs:
- [ ] **1.6.35** Crear lista de bugs encontrados
- [ ] **1.6.36** Priorizar: Crítico, Alto, Medio, Bajo
- [ ] **1.6.37** Asignar responsables
- [ ] **1.6.38** Fijar bugs críticos antes de continuar

**Criterio de Éxito:** ✅ Todos los flujos críticos funcionan sin bugs bloqueantes

---

## 📊 RESULTADO DE FASE 1

Al completar esta fase debes tener:
- ✅ Landing page profesional
- ✅ Notificaciones email funcionando
- ✅ Sistema de reportes operativo
- ✅ Servicios recurrentes implementados o eliminados
- ✅ Dashboard admin con datos reales
- ✅ Todos los flujos principales testeados

**Tiempo Total:** 2-3 semanas
**Progreso:** 75% → 85%

**Estado:** ✅ Listo para beta privada con usuarios reales

---

# FASE 2: PRODUCCIÓN READY 🎯
**Duración:** 3-4 semanas
**Prioridad:** ALTA
**Responsable Sugerido:** Equipo completo

## Objetivo
Implementar funcionalidades que mejoran significativamente la experiencia y preparan el producto para lanzamiento público.

---

## ✅ Tarea 2.1: Búsqueda y Filtros de Servicios

**Tiempo estimado:** 5-6 días
**Responsable:** Full-stack Developer

### Especificaciones:

#### Base de Datos
- [ ] **2.1.1** Agregar índices de búsqueda:

```sql
-- Full-text search en servicios
CREATE INDEX idx_services_search ON services
USING gin(to_tsvector('spanish', title || ' ' || description));

-- Índices para filtros
CREATE INDEX idx_services_category ON services(category);
CREATE INDEX idx_services_price ON services(estimated_price);
CREATE INDEX idx_services_city ON services(city);
CREATE INDEX idx_services_date ON services(service_date);
CREATE INDEX idx_services_status ON services(status);
```

#### Backend - API de Búsqueda

Archivo: `app/api/services/search/route.ts`

- [ ] **2.1.2** Endpoint GET con parámetros:
  - `q` - Texto de búsqueda
  - `category` - Filtro por categoría
  - `city` - Filtro por ciudad
  - `min_price` / `max_price` - Rango de precio
  - `date_from` / `date_to` - Rango de fechas
  - `sort` - Ordenamiento (reciente, precio_asc, precio_desc)
  - `page` - Paginación
  - `limit` - Resultados por página

- [ ] **2.1.3** Query con todos los filtros:
```typescript
let query = supabase
  .from('services')
  .select('*, users(full_name, avatar_url)', { count: 'exact' })
  .eq('status', 'open');

if (q) {
  query = query.textSearch('fts', q, { config: 'spanish' });
}
if (category) {
  query = query.eq('category', category);
}
if (city) {
  query = query.ilike('city', `%${city}%`);
}
if (min_price) {
  query = query.gte('estimated_price', min_price);
}
if (max_price) {
  query = query.lte('estimated_price', max_price);
}
// ... etc
```

- [ ] **2.1.4** Implementar paginación
- [ ] **2.1.5** Retornar metadata (total, páginas, etc)

#### Frontend - Página de Búsqueda

Archivo: `app/servicios/buscar/page.tsx`

- [ ] **2.1.6** Barra de búsqueda principal
- [ ] **2.1.7** Sidebar con filtros:
  - Categoría (checkboxes)
  - Ciudad (autocomplete)
  - Rango de precio (slider)
  - Fecha (date picker)
  - Estado verificado (toggle)
- [ ] **2.1.8** Grid de resultados:
  - Card de servicio
  - Título, descripción (truncada)
  - Precio, ciudad, fecha
  - Usuario que solicita
  - # de propuestas
  - Botón "Ver Detalles"
- [ ] **2.1.9** Paginación al final
- [ ] **2.1.10** Sorting:
  - Más reciente
  - Precio: menor a mayor
  - Precio: mayor a menor
  - Más propuestas
- [ ] **2.1.11** Empty state: "No se encontraron servicios"
- [ ] **2.1.12** Loading skeleton mientras carga

#### Página de Categoría

Archivo: `app/categorias/[slug]/page.tsx`

- [ ] **2.1.13** Pre-filtrar por categoría
- [ ] **2.1.14** Reutilizar componente de búsqueda
- [ ] **2.1.15** Hero section específica de categoría
- [ ] **2.1.16** Mostrar proveedores populares de esa categoría

#### Integración en Dashboard Proveedor
- [ ] **2.1.17** En dashboard de proveedor, usar búsqueda para mostrar:
  - Servicios en mi ciudad
  - De mi categoría
  - Ordenados por más reciente
- [ ] **2.1.18** Permitir cambiar filtros

### Verificación:
- [ ] **2.1.19** Búsqueda por texto funciona
- [ ] **2.1.20** Todos los filtros funcionan individualmente
- [ ] **2.1.21** Filtros combinados funcionan
- [ ] **2.1.22** Paginación funciona
- [ ] **2.1.23** Performance < 1s con 1000+ servicios
- [ ] **2.1.24** Responsive en móvil

**Criterio de Éxito:** ✅ Proveedores pueden descubrir servicios fácilmente con búsqueda y filtros

---

## ✅ Tarea 2.2: Geolocalización por Distancia

**Tiempo estimado:** 4-5 días
**Responsable:** Full-stack Developer

### Especificaciones:

#### Base de Datos
- [ ] **2.2.1** Agregar coordenadas geográficas:

```sql
-- Agregar columnas de geolocalización
ALTER TABLE services
ADD COLUMN latitude DECIMAL(10, 8),
ADD COLUMN longitude DECIMAL(11, 8);

ALTER TABLE provider_profiles
ADD COLUMN latitude DECIMAL(10, 8),
ADD COLUMN longitude DECIMAL(11, 8),
ADD COLUMN service_radius_km INTEGER DEFAULT 10;

-- Habilitar PostGIS (si está disponible en Supabase)
-- O usar fórmula Haversine en aplicación

-- Índice espacial
CREATE INDEX idx_services_location ON services USING gist (
  ll_to_earth(latitude, longitude)
);
```

#### Backend - Cálculo de Distancia

Archivo: `lib/distance-utils.ts`

- [ ] **2.2.2** Función Haversine:
```typescript
export function calculateDistance(
  lat1: number, lon1: number,
  lat2: number, lon2: number
): number {
  // Implementar fórmula Haversine
  // Retornar distancia en km
}
```

Archivo: `app/api/services/nearby/route.ts`

- [ ] **2.2.3** Endpoint GET:
  - Parámetros: `lat`, `lon`, `radius` (km)
  - Filtrar servicios dentro del radio
  - Ordenar por distancia
  - Retornar con distancia calculada

#### Frontend - Obtener Ubicación

- [ ] **2.2.4** Al crear servicio, obtener coordenadas:
  - De Google Maps Autocomplete
  - O de Geolocation API del navegador
- [ ] **2.2.5** Guardar lat/lng junto con dirección

- [ ] **2.2.6** En perfil de proveedor, agregar campo "Radio de servicio":
  - Slider: 5km - 50km
  - Guardar en `provider_profiles.service_radius_km`

#### Dashboard Proveedor - Servicios Cercanos

Archivo: `app/app/proveedor/dashboard/page.tsx`

- [ ] **2.2.7** Obtener ubicación del proveedor
- [ ] **2.2.8** Fetch servicios dentro de su radio
- [ ] **2.2.9** Mostrar distancia en cada card:
  - "A 2.5 km de ti"
  - Icono de ubicación
- [ ] **2.2.10** Ordenar por distancia por defecto
- [ ] **2.2.11** Permitir expandir radio temporalmente

#### Búsqueda con Geolocalización

- [ ] **2.2.12** En página de búsqueda, agregar filtro "Cerca de mí"
- [ ] **2.2.13** Al activar, solicitar permiso de geolocalización
- [ ] **2.2.14** Filtrar servicios dentro de X km
- [ ] **2.2.15** Mostrar en mapa (opcional)

### Mapa (Opcional pero recomendado)

Archivo: `components/service-map.tsx`

- [ ] **2.2.16** Integrar Google Maps
- [ ] **2.2.17** Mostrar pins de servicios cercanos
- [ ] **2.2.18** Click en pin abre modal con detalles
- [ ] **2.2.19** Círculo mostrando radio del proveedor

### Verificación:
- [ ] **2.2.20** Servicios se ordenan por distancia
- [ ] **2.2.21** Proveedores solo ven servicios en su radio
- [ ] **2.2.22** Distancia calculada es precisa (±100m)
- [ ] **2.2.23** Performance no se degrada con muchos servicios

**Criterio de Éxito:** ✅ Proveedores ven solo servicios cercanos ordenados por distancia

---

## ✅ Tarea 2.3: Sistema Wallet Completo

**Tiempo estimado:** 5-6 días
**Responsable:** Backend Developer + Stripe Expert

### Contexto
Actualmente la tabla `wallets` existe pero no es funcional. Implementar sistema completo.

### Especificaciones:

#### Funcionalidades:
1. **Recarga de Wallet:** Usuario añade fondos (Stripe Payment Method guardado)
2. **Pago desde Wallet:** Usar balance en lugar de tarjeta
3. **Retiro a cuenta bancaria:** Proveedor retira ganancias
4. **Historial:** Ver todos los movimientos

#### Base de Datos

- [ ] **2.3.1** Actualizar migración:

```sql
-- Ya existe tabla wallets, verificar estructura:
-- user_id, balance, currency, status

-- Tabla de transacciones de wallet
CREATE TABLE IF NOT EXISTS wallet_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_id UUID NOT NULL REFERENCES wallets(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN (
    'deposit',      -- Recarga
    'withdraw',     -- Retiro
    'payment',      -- Pago por servicio
    'earning',      -- Ganancia por servicio
    'refund',       -- Reembolso
    'fee'           -- Comisión de plataforma
  )),
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'EUR',
  description TEXT,
  reference_type TEXT, -- 'service', 'transaction', etc
  reference_id UUID,
  stripe_payment_intent_id TEXT,
  status TEXT DEFAULT 'completed' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_wallet_transactions_wallet ON wallet_transactions(wallet_id);
CREATE INDEX idx_wallet_transactions_type ON wallet_transactions(type);

-- RLS
ALTER TABLE wallet_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their wallet transactions"
  ON wallet_transactions FOR SELECT
  TO authenticated
  USING (
    wallet_id IN (SELECT id FROM wallets WHERE user_id = auth.uid())
  );
```

#### Backend - API de Wallet

Archivo: `app/api/wallet/balance/route.ts`
- [ ] **2.3.2** GET: Retornar balance actual

Archivo: `app/api/wallet/deposit/route.ts`
- [ ] **2.3.3** POST: Recargar wallet
  - Crear Payment Intent en Stripe
  - Al completar, incrementar balance
  - Crear registro en `wallet_transactions`

Archivo: `app/api/wallet/withdraw/route.ts`
- [ ] **2.3.4** POST: Retirar fondos
  - Verificar balance suficiente
  - Crear Transfer a Stripe Connect account
  - Decrementar balance
  - Crear registro en `wallet_transactions`

Archivo: `app/api/wallet/transactions/route.ts`
- [ ] **2.3.5** GET: Historial de transacciones

Archivo: `app/api/wallet/pay-service/route.ts`
- [ ] **2.3.6** POST: Pagar servicio desde wallet
  - Verificar balance suficiente
  - Decrementar de usuario
  - Incrementar a proveedor (después de comisión)
  - Crear transaction records

#### Frontend - Página de Wallet

Archivo: `app/app/usuario/wallet/page.tsx`

- [ ] **2.3.7** Header con balance actual destacado
- [ ] **2.3.8** Botones principales:
  - "Recargar Wallet"
  - "Historial Completo"
- [ ] **2.3.9** Lista de últimas 10 transacciones
- [ ] **2.3.10** Modal de recarga:
  - Input: monto a recargar
  - Selección de método de pago (Stripe)
  - Botón: "Recargar €X"
- [ ] **2.3.11** Confirmación después de recarga

Archivo: `app/app/proveedor/wallet/page.tsx`

- [ ] **2.3.12** Balance disponible
- [ ] **2.3.13** Botón "Retirar Fondos"
- [ ] **2.3.14** Modal de retiro:
  - Monto a retirar
  - Cuenta de destino (Stripe Connect)
  - Tiempo estimado (2-3 días hábiles)
  - Botón: "Retirar €X"
- [ ] **2.3.15** Historial de retiros

#### Integración con Pagos

- [ ] **2.3.16** Al pagar servicio, ofrecer opción:
  - "Pagar con tarjeta"
  - "Pagar con wallet" (si balance suficiente)
- [ ] **2.3.17** Si elige wallet:
  - Descontar de balance
  - No crear Payment Intent
  - Marcar transaction como "wallet_payment"

#### Lógica de Ganancias

- [ ] **2.3.18** Cuando servicio se completa:
  - Si pagó con tarjeta: Transfer de Stripe → Proveedor
  - Si pagó con wallet: Incrementar wallet del proveedor
- [ ] **2.3.19** Descontar comisión de plataforma automáticamente

### Verificación:
- [ ] **2.3.20** Usuario puede recargar wallet
- [ ] **2.3.21** Usuario puede pagar con wallet
- [ ] **2.3.22** Proveedor recibe pago en wallet
- [ ] **2.3.23** Proveedor puede retirar a banco
- [ ] **2.3.24** Historial muestra todos los movimientos
- [ ] **2.3.25** Balance es siempre correcto (nunca negativo)

**Criterio de Éxito:** ✅ Sistema wallet completo y funcional

---

## ✅ Tarea 2.4: Rating Bidireccional

**Tiempo estimado:** 3-4 días
**Responsable:** Full-stack Developer

### Contexto
Actualmente solo proveedores tienen rating. Implementar sistema bidireccional.

### Especificaciones:

#### Base de Datos

- [ ] **2.4.1** Actualizar tabla reviews:

```sql
-- Verificar que tabla reviews permite rating bidireccional
-- Debería tener:
-- - reviewer_id (quien califica)
-- - reviewed_user_id (quien es calificado)
-- - service_id
-- - rating (1-5)
-- - comment

-- Agregar restricción: solo 1 review por usuario por servicio
ALTER TABLE reviews ADD CONSTRAINT unique_review_per_service
UNIQUE (service_id, reviewer_id, reviewed_user_id);
```

- [ ] **2.4.2** Agregar campo rating en users:

```sql
ALTER TABLE users
ADD COLUMN rating_average DECIMAL(3, 2) DEFAULT 0,
ADD COLUMN rating_count INTEGER DEFAULT 0;

-- Función para actualizar rating
CREATE OR REPLACE FUNCTION update_user_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE users
  SET
    rating_average = (
      SELECT AVG(rating)
      FROM reviews
      WHERE reviewed_user_id = NEW.reviewed_user_id
    ),
    rating_count = (
      SELECT COUNT(*)
      FROM reviews
      WHERE reviewed_user_id = NEW.reviewed_user_id
    )
  WHERE id = NEW.reviewed_user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_review_created
  AFTER INSERT ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_user_rating();
```

#### Backend - API de Reviews

Archivo: `app/api/reviews/create/route.ts`

- [ ] **2.4.3** Endpoint POST para crear review
- [ ] **2.4.4** Validar que el servicio está completado
- [ ] **2.4.5** Validar que el reviewer es parte del servicio
- [ ] **2.4.6** Validar que no existe review previa
- [ ] **2.4.7** Insertar review
- [ ] **2.4.8** Trigger actualiza rating automáticamente

#### Frontend - Modal de Review Bidireccional

Componente: `components/mutual-review-modal.tsx`

- [ ] **2.4.9** Después de certificar servicio, mostrar modal:
  - "Califica tu experiencia"
  - Tab 1: Calificar al proveedor (si eres usuario)
  - Tab 2: Calificar al usuario (si eres proveedor)
- [ ] **2.4.10** Formulario:
  - Rating 1-5 estrellas
  - Comentario (opcional)
  - Aspectos específicos:
    - Usuario: Comunicación, claridad, puntualidad
    - Proveedor: Calidad, profesionalismo, puntualidad
- [ ] **2.4.11** Botón: "Enviar Calificación"
- [ ] **2.4.12** Confirmar que ambos reviews se guardaron

#### Mostrar Rating

- [ ] **2.4.13** En cards de usuario, mostrar:
  - ⭐ 4.8 (23 reviews)
- [ ] **2.4.14** En perfil de usuario:
  - Rating promedio grande
  - Total de reviews
  - Lista de reviews recibidos
  - Posibilidad de responder (opcional)
- [ ] **2.4.15** En perfil de proveedor (ya existe):
  - Verificar que funciona con nuevo sistema

#### Filtros por Rating

- [ ] **2.4.16** En búsqueda de servicios, filtrar por rating del usuario:
  - "Usuarios con rating > 4.0"
- [ ] **2.4.17** Al listar proveedores, ordenar por rating

### Verificación:
- [ ] **2.4.18** Usuario puede calificar a proveedor
- [ ] **2.4.19** Proveedor puede calificar a usuario
- [ ] **2.4.20** Rating promedio se calcula correctamente
- [ ] **2.4.21** Reviews aparecen en perfiles
- [ ] **2.4.22** No se puede dejar review duplicado

**Criterio de Éxito:** ✅ Sistema de rating bidireccional completo

---

## ✅ Tarea 2.5: Optimización y Performance

**Tiempo estimado:** 3-4 días
**Responsable:** Full-stack Developer

### Objetivo
Optimizar performance para manejar carga de usuarios reales.

### Backend

#### Optimización de Queries
- [ ] **2.5.1** Identificar queries lentas (> 500ms)
- [ ] **2.5.2** Agregar índices faltantes
- [ ] **2.5.3** Usar `select` específico (no `select *`)
- [ ] **2.5.4** Implementar paginación en todas las listas
- [ ] **2.5.5** Usar JOINs eficientes

#### Caching
- [ ] **2.5.6** Implementar cache para:
  - Platform settings (revalidar cada hora)
  - Stats del admin dashboard (revalidar cada 5 min)
  - Lista de categorías (revalidar diario)
- [ ] **2.5.7** Usar Next.js revalidate:
```typescript
export const revalidate = 300; // 5 minutos
```

#### Rate Limiting
- [ ] **2.5.8** Implementar rate limiting en APIs críticas:
  - `/api/services/create` - max 10/hora por usuario
  - `/api/proposals/create` - max 20/hora por proveedor
  - `/api/auth/*` - max 5/minuto por IP

### Frontend

#### Code Splitting
- [ ] **2.5.9** Dynamic imports para componentes pesados:
```typescript
const AdminDashboard = dynamic(() => import('./admin-dashboard'), {
  loading: () => <Skeleton />
});
```

#### Imágenes
- [ ] **2.5.10** Usar Next.js Image component en todas partes
- [ ] **2.5.11** Optimizar imágenes existentes:
  - WebP format
  - Múltiples sizes
  - Lazy loading
- [ ] **2.5.12** Implementar placeholder blur

#### Optimización de Bundle
- [ ] **2.5.13** Analizar bundle: `npm run build -- --analyze`
- [ ] **2.5.14** Eliminar dependencias no usadas
- [ ] **2.5.15** Tree-shaking efectivo

### Lighthouse Scores

- [ ] **2.5.16** Landing page: > 95
- [ ] **2.5.17** Dashboards: > 85
- [ ] **2.5.18** Forms: > 90

### Monitoring

- [ ] **2.5.19** Configurar Sentry o similar para error tracking
- [ ] **2.5.20** Configurar Google Analytics
- [ ] **2.5.21** Dashboard de métricas:
  - Tiempo de respuesta promedio
  - Error rate
  - Usuarios activos

### Verificación:
- [ ] **2.5.22** Todas las páginas cargan < 3s
- [ ] **2.5.23** Queries de BD < 500ms
- [ ] **2.5.24** Lighthouse scores alcanzados
- [ ] **2.5.25** Sin memory leaks
- [ ] **2.5.26** Build size < 300kb (first load)

**Criterio de Éxito:** ✅ Aplicación rápida y optimizada

---

## ✅ Tarea 2.6: Testing y QA Final

**Tiempo estimado:** 4-5 días
**Responsable:** QA + Todo el equipo

### Testing Funcional

#### Smoke Tests
- [ ] **2.6.1** Todas las páginas cargan sin error 500
- [ ] **2.6.2** Login/logout funciona
- [ ] **2.6.3** Crear servicio funciona
- [ ] **2.6.4** Pago funciona

#### Regression Tests
- [ ] **2.6.5** Re-probar todos los flujos de Fase 1
- [ ] **2.6.6** Verificar que nuevas features no rompieron nada

#### Edge Cases
- [ ] **2.6.7** Campos con caracteres especiales
- [ ] **2.6.8** Inputs muy largos (XSS prevention)
- [ ] **2.6.9** Múltiples tabs abiertos
- [ ] **2.6.10** Sesión expirada
- [ ] **2.6.11** Conexión lenta/inestable
- [ ] **2.6.12** Sin JavaScript habilitado

### Testing de Seguridad

- [ ] **2.6.13** SQL Injection attempts (deben fallar)
- [ ] **2.6.14** XSS attempts (deben escaparse)
- [ ] **2.6.15** CSRF protection (verificar)
- [ ] **2.6.16** RLS bypass attempts (deben fallar)
- [ ] **2.6.17** API authentication (sin token = error)
- [ ] **2.6.18** Admin endpoints sin ser admin (error)

### Testing de Performance

- [ ] **2.6.19** 100 usuarios concurrentes (load test)
- [ ] **2.6.20** 1000+ servicios en BD (performance)
- [ ] **2.6.21** Múltiples propuestas simultáneas

### Compatibility Testing

- [ ] **2.6.22** Chrome (últimas 2 versiones)
- [ ] **2.6.23** Firefox (últimas 2 versiones)
- [ ] **2.6.24** Safari (últimas 2 versiones)
- [ ] **2.6.25** Edge
- [ ] **2.6.26** iOS Safari
- [ ] **2.6.27** Android Chrome

### Accessibility (A11y)

- [ ] **2.6.28** Navegación por teclado funciona
- [ ] **2.6.29** Screen reader compatible
- [ ] **2.6.30** Contraste de colores suficiente
- [ ] **2.6.31** Labels en todos los forms
- [ ] **2.6.32** ARIA attributes correctos

### Documentar Issues

- [ ] **2.6.33** Crear issues en GitHub/Jira
- [ ] **2.6.34** Priorizar y asignar
- [ ] **2.6.35** Fix antes de producción

**Criterio de Éxito:** ✅ Sin bugs críticos o de alta prioridad

---

## ✅ Tarea 2.7: Preparación para Deploy

**Tiempo estimado:** 2-3 días
**Responsable:** DevOps / Tech Lead

### Configuración de Producción

#### Stripe - Modo LIVE
- [ ] **2.7.1** Completar activación de cuenta Stripe
- [ ] **2.7.2** Obtener keys de producción (LIVE mode)
- [ ] **2.7.3** Actualizar `.env.production`:
```env
STRIPE_SECRET_KEY=sk_live_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
```
- [ ] **2.7.4** Configurar webhook de producción
- [ ] **2.7.5** Testear pago real con cantidad pequeña (€0.50)

#### Supabase - Producción
- [ ] **2.7.6** Proyecto de Supabase ya en producción o crear nuevo
- [ ] **2.7.7** Aplicar migraciones en producción
- [ ] **2.7.8** Configurar backups automáticos
- [ ] **2.7.9** Configurar SMTP para emails (o usar Supabase built-in)

#### Dominio y Hosting
- [ ] **2.7.10** Registrar dominio (ej: resvoa.com)
- [ ] **2.7.11** Deploy a Vercel/Netlify:
  - Conectar repo de GitHub
  - Configurar variables de entorno
  - Deploy automático en push a main
- [ ] **2.7.12** Configurar DNS:
  - A record → IP de hosting
  - CNAME www → dominio principal
- [ ] **2.7.13** Configurar SSL/HTTPS (automático en Vercel)
- [ ] **2.7.14** Testear en producción

#### Configuración de Emails
- [ ] **2.7.15** Configurar dominio de email (ej: @resvoa.com)
- [ ] **2.7.16** Configurar SPF, DKIM, DMARC
- [ ] **2.7.17** Testear envío de emails
- [ ] **2.7.18** Verificar que no van a spam

#### Monitoring y Analytics
- [ ] **2.7.19** Configurar Sentry para error tracking
- [ ] **2.7.20** Configurar Google Analytics
- [ ] **2.7.21** Configurar Supabase Analytics
- [ ] **2.7.22** Configurar uptime monitoring (UptimeRobot)

#### Legal y Compliance
- [ ] **2.7.23** Verificar que todas las páginas legales están completas
- [ ] **2.7.24** Implementar cookie consent banner
- [ ] **2.7.25** Verificar GDPR compliance
- [ ] **2.7.26** Política de privacidad actualizada
- [ ] **2.7.27** Términos y condiciones finales

### Verificación Final
- [ ] **2.7.28** Smoke test en producción
- [ ] **2.7.29** Transacción real de €1 (usuario test → proveedor test)
- [ ] **2.7.30** Todos los emails llegan
- [ ] **2.7.31** Performance en producción OK
- [ ] **2.7.32** Error tracking funciona

**Criterio de Éxito:** ✅ Aplicación desplegada y funcionando en producción

---

## 📊 RESULTADO DE FASE 2

Al completar esta fase debes tener:
- ✅ Búsqueda y filtros avanzados
- ✅ Geolocalización por distancia
- ✅ Sistema wallet completo
- ✅ Rating bidireccional
- ✅ Aplicación optimizada
- ✅ Testing exhaustivo completado
- ✅ Desplegado en producción

**Tiempo Total:** 3-4 semanas
**Progreso:** 85% → 95%

**Estado:** ✅ Listo para lanzamiento público

---

# FASE 3: OPTIMIZACIÓN Y CRECIMIENTO 📈
**Duración:** 1-2 meses
**Prioridad:** MEDIA-BAJA
**Responsable Sugerido:** Equipo completo + Product Manager

## Objetivo
Features adicionales para mejorar retención, engagement y escalabilidad.

---

## ✅ Tarea 3.1: Chat en Tiempo Real

**Tiempo estimado:** 1-2 semanas

- [ ] **3.1.1** Decisión: Implementar o usar Supabase Realtime
- [ ] **3.1.2** Tabla `conversations` y `messages`
- [ ] **3.1.3** UI de chat entre usuario y proveedor
- [ ] **3.1.4** Notificaciones push de nuevos mensajes
- [ ] **3.1.5** Historial de conversaciones

---

## ✅ Tarea 3.2: Cupones y Programa de Referidos

**Tiempo estimado:** 1 semana

- [ ] **3.2.1** Tabla `coupons` (código, descuento, expiración)
- [ ] **3.2.2** Aplicar cupón al pagar
- [ ] **3.2.3** Programa de referidos:
  - Cada usuario tiene código único
  - Referido obtiene descuento
  - Referidor obtiene crédito
- [ ] **3.2.4** Tracking de referidos

---

## ✅ Tarea 3.3: Two-Factor Authentication (2FA)

**Tiempo estimado:** 3-4 días

- [ ] **3.3.1** Habilitar 2FA en Supabase Auth
- [ ] **3.3.2** UI para configurar 2FA en perfil
- [ ] **3.3.3** Verificación durante login
- [ ] **3.3.4** Recovery codes

---

## ✅ Tarea 3.4: Mobile Apps (React Native)

**Tiempo estimado:** 4-6 semanas

- [ ] **3.4.1** Setup React Native project
- [ ] **3.4.2** Reutilizar lógica de APIs
- [ ] **3.4.3** UI mobile-first
- [ ] **3.4.4** Push notifications
- [ ] **3.4.5** Publicar en App Store / Play Store

---

## ✅ Tarea 3.5: Internacionalización (i18n)

**Tiempo estimado:** 1-2 semanas

- [ ] **3.5.1** Implementar next-i18next o similar
- [ ] **3.5.2** Extraer todos los strings
- [ ] **3.5.3** Traducir a inglés (mínimo)
- [ ] **3.5.4** Selector de idioma
- [ ] **3.5.5** Detectar idioma del navegador

---

## ✅ Tarea 3.6: Analytics Avanzado

**Tiempo estimado:** 1 semana

- [ ] **3.6.1** Implementar event tracking:
  - Registro completado
  - Servicio creado
  - Propuesta enviada
  - Pago completado
  - Review dejado
- [ ] **3.6.2** Funnels de conversión
- [ ] **3.6.3** Cohort analysis
- [ ] **3.6.4** Dashboard para stakeholders

---

## ✅ Tarea 3.7: Integración con Calendario

**Tiempo estimado:** 3-4 días

- [ ] **3.7.1** Agregar servicio a Google Calendar
- [ ] **3.7.2** Recordatorios automáticos
- [ ] **3.7.3** Sincronización de disponibilidad

---

## ✅ Tarea 3.8: Sistema de Certificaciones

**Tiempo estimado:** 1 semana

- [ ] **3.8.1** Proveedores pueden subir certificados
- [ ] **3.8.2** Badge de "Certificado" en perfil
- [ ] **3.8.3** Filtro de búsqueda por certificados
- [ ] **3.8.4** Mayor visibilidad para certificados

---

## 📊 RESULTADO DE FASE 3

**Tiempo Total:** 1-2 meses
**Progreso:** 95% → 100%

**Estado:** ✅ Producto completo y maduro

---

# 📋 CHECKLIST GENERAL DE PROGRESO

## Fase 0: Configuración ⚙️
- [ ] Supabase configurado
- [ ] Migraciones aplicadas
- [ ] Storage configurado
- [ ] Stripe configurado
- [ ] Google Maps configurado
- [ ] Verificación completa pasa
- [ ] Testing básico exitoso

## Fase 1: MVP Beta 🚀
- [ ] Landing page completa
- [ ] Emails críticos funcionando
- [ ] Sistema de reportes
- [ ] Servicios recurrentes (implementado o eliminado)
- [ ] Dashboard admin con datos reales
- [ ] Testing end-to-end completo

## Fase 2: Producción 🎯
- [ ] Búsqueda y filtros
- [ ] Geolocalización
- [ ] Sistema wallet
- [ ] Rating bidireccional
- [ ] Optimización de performance
- [ ] Testing y QA
- [ ] Desplegado en producción

## Fase 3: Crecimiento 📈
- [ ] Chat en tiempo real
- [ ] Cupones y referidos
- [ ] 2FA
- [ ] Mobile apps
- [ ] Internacionalización
- [ ] Analytics avanzado
- [ ] Integraciones adicionales

---

# 📊 MÉTRICAS DE ÉXITO

## KPIs por Fase

### Fase 0:
- ✅ `npm run verify` pasa sin errores
- ✅ Build exitoso
- ✅ 3 flujos principales probados

### Fase 1:
- ✅ Landing page con bounce rate < 70%
- ✅ Tasa de conversión registro > 5%
- ✅ Emails con open rate > 40%
- ✅ 0 bugs críticos

### Fase 2:
- ✅ 100 usuarios activos en beta
- ✅ Lighthouse score > 90
- ✅ Uptime > 99%
- ✅ Tiempo respuesta API < 500ms
- ✅ 0 bugs de alta prioridad

### Fase 3:
- ✅ 1000+ usuarios registrados
- ✅ 100+ transacciones/mes
- ✅ NPS score > 50
- ✅ Churn rate < 10%

---

# 🎯 RECOMENDACIONES PARA EJECUTAR EL PLAN

## 1. Organización del Equipo

### Roles Sugeridos:
- **Tech Lead:** Supervisar arquitectura, decisiones técnicas
- **Frontend Developer:** UI/UX, componentes
- **Backend Developer:** APIs, base de datos, Stripe
- **QA / Tester:** Testing, documentación de bugs
- **Product Manager:** Priorización, feedback de usuarios
- **Diseñador:** UI/UX, landing page, branding

### Metodología:
- **Sprints de 2 semanas**
- **Daily standups** (15 min)
- **Sprint planning** al inicio
- **Sprint review** al final
- **Retrospectiva** para mejorar

## 2. Herramientas

- **Project Management:** Jira, Trello, Linear
- **Git:** GitHub (con branches por feature)
- **CI/CD:** GitHub Actions
- **Monitoring:** Sentry, Google Analytics
- **Comunicación:** Slack, Discord
- **Documentación:** Notion, Confluence

## 3. Git Workflow

```bash
main (producción)
├── develop (desarrollo)
    ├── feature/landing-page
    ├── feature/email-notifications
    └── feature/search-filters
```

- Crear branch por cada tarea
- Pull Request con review obligatorio
- Tests deben pasar antes de merge
- Deploy automático de `main` a producción

## 4. Priorización

Si tienes recursos limitados, prioriza así:

**Imprescindible (no negociable):**
- Fase 0 completa
- Landing page (Fase 1.1)
- Emails críticos (Fase 1.2)
- Dashboard admin real (Fase 1.5)

**Muy importante:**
- Sistema de reportes (Fase 1.3)
- Búsqueda (Fase 2.1)
- Testing exhaustivo (Fase 2.6)

**Importante:**
- Geolocalización (Fase 2.2)
- Rating bidireccional (Fase 2.4)
- Optimización (Fase 2.5)

**Deseable:**
- Sistema wallet (Fase 2.3)
- Servicios recurrentes (Fase 1.4)
- Todo de Fase 3

## 5. Estimaciones de Costo

### Servicios Mensuales:
- Supabase (Free tier hasta 50k usuarios)
- Stripe (2.9% + €0.25 por transacción)
- Google Maps ($7 por 1000 requests)
- Vercel (Free tier o $20/mes Pro)
- Dominio (~€15/año)
- Email service (Free tier o $10-30/mes)

**Total mensual:** €50-100 en fase beta, €200-500 en producción

### Equipo:
- **Mínimo viable:** 2 developers full-time (6-8 semanas)
- **Recomendado:** 3-4 developers + 1 QA (4-6 semanas más rápido)
- **Ideal:** Equipo completo (ver roles arriba)

---

# ✅ PRÓXIMOS PASOS INMEDIATOS

## Esta Semana:
1. [ ] Revisar este plan con tu equipo
2. [ ] Decidir qué fases/tareas son prioritarias
3. [ ] Asignar responsables a cada tarea
4. [ ] Configurar herramientas (Jira, Slack, etc)
5. [ ] Ejecutar Fase 0 completa

## Próximas 2 Semanas:
6. [ ] Sprint 1: Tareas 1.1, 1.2, 1.3
7. [ ] Daily standups
8. [ ] Review al final del sprint

## Próximo Mes:
9. [ ] Completar Fase 1
10. [ ] Beta privada con 10-20 usuarios
11. [ ] Recopilar feedback
12. [ ] Iterar y mejorar

---

**Este plan es tu roadmap completo de 0 a 100%. Marca cada checkbox conforme avances y ajusta según tus necesidades y recursos.**

**¡Éxito con RESVOA! 🚀**
