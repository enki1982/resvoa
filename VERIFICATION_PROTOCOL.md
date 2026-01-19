# PROTOCOLO DE VERIFICACIÓN - RESVOA

**Fecha de creación:** 2026-01-19
**Estado del proyecto:** En desarrollo (60-70% completado)

Este documento establece un protocolo sistemático para verificar que todas las configuraciones y funcionalidades críticas del proyecto estén correctamente implementadas.

---

## 📋 CHECKLIST GENERAL

### ✅ Completado | ⚠️ Parcial | ❌ No funciona | ⏳ Pendiente

---

## 1️⃣ CONFIGURACIÓN DE ENTORNO

### Variables de Entorno (.env)
- [ ] `NEXT_PUBLIC_SUPABASE_URL` - URL de Supabase
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Clave pública de Supabase
- [ ] `SUPABASE_SERVICE_ROLE_KEY` - Clave privada de Supabase
- [ ] `STRIPE_SECRET_KEY` - Clave secreta de Stripe
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Clave pública de Stripe
- [ ] `STRIPE_WEBHOOK_SECRET` - Secret para webhooks
- [ ] `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - API key de Google Maps

**Verificación:**
```bash
cat .env | grep -E "SUPABASE_URL|STRIPE_SECRET|GOOGLE_MAPS"
```

---

## 2️⃣ BASE DE DATOS - SUPABASE

### Conexión
- [ ] Cliente de Supabase inicializado correctamente
- [ ] Conexión a base de datos establecida
- [ ] Service role key configurada para admin

**Test:**
```bash
node test-db-simple.js
```

### Tablas Requeridas
- [ ] `users` - Usuarios del sistema
- [ ] `provider_profiles` - Perfiles de proveedores
- [ ] `services` - Solicitudes de servicio
- [ ] `service_proposals` - Propuestas de proveedores
- [ ] `transactions` - Transacciones y pagos
- [ ] `reviews` - Calificaciones y reseñas
- [ ] `platform_settings` - Configuración de plataforma
- [ ] `admin_logs` - Logs de administración

**Verificación:**
```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name;
```

### Row Level Security (RLS)
- [ ] RLS habilitado en todas las tablas
- [ ] Políticas de SELECT implementadas
- [ ] Políticas de INSERT implementadas
- [ ] Políticas de UPDATE implementadas
- [ ] Políticas de DELETE implementadas

**Verificación:**
```sql
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public';
```

### Índices de Rendimiento
- [ ] `idx_users_email`
- [ ] `idx_users_type`
- [ ] `idx_provider_profiles_user_id`
- [ ] `idx_services_user_id`
- [ ] `idx_service_proposals_service_id`
- [ ] `idx_transactions_service_id`

**Verificación:**
```sql
SELECT indexname, tablename
FROM pg_indexes
WHERE schemaname = 'public'
ORDER BY tablename;
```

---

## 3️⃣ AUTENTICACIÓN - SUPABASE AUTH

### Configuración
- [ ] Email/Password habilitado
- [ ] Confirmación de email configurada
- [ ] OAuth Google configurado (opcional)
- [ ] OAuth Apple configurado (opcional)
- [ ] URL de redirección correcta

### Flujos a Probar
- [ ] Registro de usuario funciona
- [ ] Registro de proveedor funciona
- [ ] Login funciona
- [ ] Logout funciona
- [ ] Reset de contraseña funciona
- [ ] Confirmación de email funciona

**Test Manual:**
1. Ir a `/app/registro-usuario`
2. Registrar nuevo usuario
3. Verificar email recibido
4. Login con credenciales

---

## 4️⃣ STRIPE - SISTEMA DE PAGOS

### Configuración
- [ ] Cuenta de Stripe activa
- [ ] Keys en modo test configuradas
- [ ] Stripe Connect habilitado
- [ ] Webhooks endpoint configurado

### Stripe Connect
- [ ] Express Account creation funciona
- [ ] Onboarding link generation funciona
- [ ] Account status verification funciona
- [ ] Transfer to connected accounts funciona

### Webhooks
- [ ] Endpoint `/api/payments/stripe-webhook` accesible
- [ ] Signature verification implementada
- [ ] `payment_intent.succeeded` manejado
- [ ] `payment_intent.payment_failed` manejado
- [ ] `charge.refunded` manejado
- [ ] `account.updated` manejado

**Verificación:**
```bash
stripe listen --forward-to localhost:3000/api/payments/stripe-webhook
```

### Payment Intents
- [ ] Creación de payment intent funciona
- [ ] Captura manual habilitada
- [ ] Application fee calculada correctamente
- [ ] Transfer data a connected account

**Test Manual:**
1. Crear servicio como usuario
2. Enviar propuesta como proveedor
3. Aceptar propuesta
4. Verificar payment intent creado
5. Completar servicio
6. Verificar captura de pago

---

## 5️⃣ APIS Y ENDPOINTS

### Servicios
- [ ] GET - Listar servicios
- [ ] POST - Crear servicio
- [ ] PUT - Actualizar servicio
- [ ] DELETE - Eliminar servicio

### Propuestas
- [ ] GET - Listar propuestas
- [ ] POST - Crear propuesta
- [ ] PUT - Aceptar/rechazar propuesta

### Pagos
- [ ] `POST /api/payments/create-intent` - Crear payment intent
- [ ] `POST /api/payments/stripe-webhook` - Webhook de Stripe
- [ ] `POST /api/tasks/[id]/complete` - Completar tarea
- [ ] `POST /api/tasks/[id]/cancel` - Cancelar tarea

### Proveedores
- [ ] `GET /api/provider/status` - Estado de Stripe
- [ ] `POST /api/provider/onboarding-link` - Link de onboarding

### Admin
- [ ] `GET /api/admin/platform-settings` - Obtener configuración
- [ ] `PUT /api/admin/platform-settings/fee` - Actualizar comisión

### Público
- [ ] `GET /api/platform-settings/public` - Obtener comisión pública

**Test Automatizado:**
```bash
# Ejecutar script de verificación
node verify-apis.js
```

---

## 6️⃣ FUNCIONALIDADES CRÍTICAS

### Flujo de Usuario
- [ ] Crear solicitud de servicio
- [ ] Ver propuestas recibidas
- [ ] Aceptar propuesta
- [ ] Pagar servicio
- [ ] Certificar completación
- [ ] Dejar review

### Flujo de Proveedor
- [ ] Completar registro en 3 pasos
- [ ] Subir documentos (DNI + Selfie)
- [ ] Completar onboarding Stripe
- [ ] Ver solicitudes cercanas
- [ ] Enviar propuesta
- [ ] Marcar servicio como completado
- [ ] Recibir pago

### Flujo de Admin
- [ ] Acceder al panel de administración
- [ ] Ver estadísticas (mock data actualmente)
- [ ] Ajustar comisión de plataforma
- [ ] Ver verificaciones pendientes
- [ ] Aprobar/rechazar proveedores

---

## 7️⃣ STORAGE - SUPABASE STORAGE

### Buckets Configurados
- [ ] `provider-documents` - Documentos de proveedores
- [ ] `avatars` - Fotos de perfil (si existe)

### Políticas de Acceso
- [ ] Upload permitido para usuarios autenticados
- [ ] Download restringido (solo propietario o admin)
- [ ] Delete permitido (solo propietario)

**Verificación:**
```sql
SELECT * FROM storage.buckets;
SELECT * FROM storage.objects LIMIT 10;
```

---

## 8️⃣ SEGURIDAD

### RLS (Row Level Security)
- [ ] Todas las tablas tienen RLS habilitado
- [ ] Políticas restrictivas por defecto
- [ ] Uso de `auth.uid()` en políticas
- [ ] Admins tienen acceso completo

### Validación de Datos
- [ ] Validación en frontend con Zod
- [ ] Validación en backend
- [ ] Sanitización de inputs
- [ ] Protección contra SQL injection

### Autenticación
- [ ] Tokens JWT validados
- [ ] Sessions manejadas correctamente
- [ ] Logout limpia sesión

### Rate Limiting
- ⚠️ NO IMPLEMENTADO - Considerar para producción

---

## 9️⃣ UI/UX

### Páginas Públicas
- [ ] `/` - Landing page
- [ ] `/como-funciona` - Información
- [ ] `/para-usuarios` - Landing usuarios
- [ ] `/para-proveedores` - Landing proveedores
- [ ] `/categorias` - Categorías de servicios
- [ ] Páginas legales (7 páginas)

### Páginas Autenticadas
- [ ] `/app/login` - Login
- [ ] `/app/registro-usuario` - Registro usuario
- [ ] `/app/registro-proveedor` - Registro proveedor
- [ ] `/app/usuario/dashboard` - Dashboard usuario
- [ ] `/app/usuario/configuracion` - Configuración usuario
- [ ] `/app/proveedor/dashboard` - Dashboard proveedor
- [ ] `/app/admin` - Panel admin

### Responsive
- [ ] Mobile (< 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (> 1024px)

---

## 🔟 BUILD Y DEPLOYMENT

### Build Process
- [ ] `npm install` sin errores
- [ ] `npm run build` exitoso
- [ ] `npm run typecheck` sin errores
- [ ] No hay errores de TypeScript
- [ ] No hay warnings críticos

**Comandos:**
```bash
npm install
npm run build
npm run typecheck
```

### Environment Variables
- [ ] `.env.example` actualizado
- [ ] Todas las variables requeridas documentadas
- [ ] Valores de producción separados

---

## 🚨 PROBLEMAS CONOCIDOS

### Críticos
1. ❌ Notificaciones por email NO implementadas
2. ❌ Servicios recurrentes - lógica backend incompleta
3. ⚠️ Dashboard admin usa mock data
4. ⚠️ Sistema de wallet NO funcional

### Importantes
5. ⚠️ Búsqueda de servicios NO implementada
6. ⚠️ Geolocalización por distancia NO integrada
7. ⚠️ Sistema de disputas NO existe
8. ⚠️ Verificación de identidad manual

### Deseables
9. ⏳ Chat/mensajería eliminada
10. ⏳ Rating bidireccional (solo proveedores)
11. ⏳ 2FA preparado pero NO funcional
12. ⏳ Internacionalización NO implementada

---

## 📊 SCORING DE COMPLETITUD

### Por Módulo
- **Base de Datos:** 95% ✅
- **Autenticación:** 90% ✅
- **Pagos (Stripe):** 85% ⚠️
- **APIs:** 80% ⚠️
- **UI/UX:** 75% ⚠️
- **Seguridad:** 70% ⚠️
- **Notificaciones:** 10% ❌
- **Analytics:** 20% ❌

### General: **68%** - MVP Funcional pero Incompleto

---

## 🎯 PLAN DE ACCIÓN RECOMENDADO

### Prioridad ALTA (Bloqueantes para producción)
1. Implementar notificaciones críticas por email
2. Completar o eliminar servicios recurrentes de UI
3. Crear landing page real en `/`
4. Sistema básico de reportes/disputas
5. Fix dashboard admin con datos reales

### Prioridad MEDIA (Mejoran experiencia)
6. Búsqueda y filtros de servicios
7. Sistema wallet completo
8. Geolocalización por distancia
9. Rating bidireccional
10. Verificación de identidad automática

### Prioridad BAJA (Nice to have)
11. Chat/mensajería
12. 2FA
13. Internacionalización
14. Mobile apps
15. Programa de referidos

---

## 🔄 PROTOCOLO DE VERIFICACIÓN

### Ejecución Paso a Paso

1. **Verificar Variables de Entorno**
   ```bash
   node scripts/verify-env.js
   ```

2. **Probar Conexión a Base de Datos**
   ```bash
   node test-db-simple.js
   ```

3. **Verificar Estructura de Base de Datos**
   ```bash
   node scripts/verify-database.js
   ```

4. **Probar Autenticación**
   - Manual: Registrar usuario de prueba

5. **Verificar Stripe**
   ```bash
   node scripts/verify-stripe.js
   ```

6. **Probar APIs Críticas**
   ```bash
   node scripts/verify-apis.js
   ```

7. **Build del Proyecto**
   ```bash
   npm run build
   ```

8. **Revisión Manual de Flujos**
   - Crear servicio → Enviar propuesta → Pagar → Completar

---

## 📝 NOTAS

- Este protocolo debe ejecutarse antes de cada deploy a producción
- Los scripts de verificación deben automatizarse en CI/CD
- Cualquier check que falle debe ser investigado antes de continuar
- Mantener este documento actualizado con cada cambio mayor

---

**Última actualización:** 2026-01-19
**Próxima revisión:** Antes de producción
