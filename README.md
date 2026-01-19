# RESVOA - Plataforma de Servicios Bajo Demanda

<div align="center">

![RESVOA](public/logo.png)

**Conectando usuarios con proveedores de servicios confiables**

[🚀 Quick Start](QUICK_START.md) • [📋 Verificación](VERIFICATION_PROTOCOL.md) • [📊 Estado Actual](ESTADO_ACTUAL.md)

</div>

---

## 📖 Descripción

RESVOA es una **plataforma marketplace** que conecta usuarios que necesitan servicios con proveedores verificados. Similar a TaskRabbit o Thumbtack, pero enfocado en el mercado español.

### Servicios Disponibles
- 🏃 Recados y mandados
- 🐕 Paseo de perros
- 🏠 Ayuda doméstica
- 🚗 Limpieza de vehículos
- 🔧 Soporte en el hogar
- 🔑 Recogida y entrega de llaves

---

## ⚡ Inicio Rápido

```bash
# 1. Clonar repositorio
git clone <repo-url>
cd resvoa

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Edita .env con tus keys

# 4. Verificar configuración
npm run verify

# 5. Iniciar desarrollo
npm run dev
```

**📖 [Guía Completa de Inicio](QUICK_START.md)** - Setup paso a paso en 30 minutos

---

## 🏗️ Stack Tecnológico

- **Frontend:** Next.js 13 + React 18 + TypeScript
- **UI:** Tailwind CSS + Shadcn/ui + Radix UI
- **Backend:** Next.js API Routes
- **Base de Datos:** PostgreSQL (Supabase)
- **Autenticación:** Supabase Auth
- **Pagos:** Stripe Connect
- **Mapas:** Google Maps Places API
- **Hosting:** Vercel (recomendado)

---

## 📊 Estado del Proyecto

**Versión:** 0.1.0 (MVP en desarrollo)
**Completitud:** 68%
**Estado:** ✅ Funcional en desarrollo | ⚠️ Requiere configuración

### ✅ Implementado
- Sistema de autenticación completo
- CRUD de servicios y propuestas
- Integración Stripe Connect
- Dashboards usuario/proveedor/admin
- Sistema de reviews
- Verificación de proveedores
- 30+ páginas y rutas

### ⚠️ Requiere Configuración
- Claves de Supabase
- Claves de Stripe
- API key de Google Maps

### ❌ Pendiente
- Notificaciones por email
- Búsqueda avanzada
- Landing page completa
- Sistema de reportes

**📊 [Análisis Completo del Estado](ESTADO_ACTUAL.md)**

---

## 📁 Estructura del Proyecto

```
resvoa/
├── app/                          # Páginas y rutas Next.js
│   ├── api/                      # API endpoints
│   ├── app/                      # Rutas autenticadas
│   │   ├── usuario/             # Dashboard usuario
│   │   ├── proveedor/           # Dashboard proveedor
│   │   └── admin/               # Panel admin
│   ├── legal/                    # Páginas legales
│   └── ...                       # Páginas públicas
├── components/                   # Componentes React
│   └── ui/                       # Componentes Shadcn/ui
├── lib/                          # Librerías y utilidades
│   ├── supabase-client.ts       # Cliente Supabase
│   ├── stripe.ts                # Integración Stripe
│   └── auth-context.tsx         # Context de autenticación
├── supabase/migrations/          # Migraciones de BD
├── scripts/                      # Scripts de verificación
│   ├── verify-all.js            # Verificación completa
│   ├── verify-env.js            # Verificar .env
│   ├── verify-database.js       # Verificar Supabase
│   └── verify-stripe.js         # Verificar Stripe
├── types/                        # Tipos TypeScript
├── .env                          # Variables de entorno
├── QUICK_START.md               # Guía de inicio rápido
├── VERIFICATION_PROTOCOL.md     # Protocolo de verificación
├── ESTADO_ACTUAL.md             # Estado detallado
└── README.md                     # Este archivo
```

---

## 🔧 Scripts Disponibles

```bash
npm run dev           # Iniciar servidor de desarrollo
npm run build         # Build de producción
npm run start         # Iniciar servidor de producción
npm run lint          # Linting del código
npm run typecheck     # Verificar tipos TypeScript
npm run verify        # Verificación completa de configuración
npm run verify:env    # Solo variables de entorno
npm run verify:db     # Solo base de datos
npm run verify:stripe # Solo Stripe
```

---

## 🗄️ Base de Datos

### Tablas Principales
- `users` - Usuarios del sistema
- `provider_profiles` - Perfiles de proveedores
- `services` - Solicitudes de servicios
- `service_proposals` - Propuestas de proveedores
- `transactions` - Transacciones y pagos
- `reviews` - Calificaciones
- `platform_settings` - Configuración
- `admin_logs` - Logs de administración

### Migraciones
Todas las migraciones están en `supabase/migrations/` y deben aplicarse en orden:

1. `create_initial_schema.sql` - Esquema base
2. `fix_security_and_performance_issues.sql` - RLS e índices
3. `create_platform_settings.sql` - Configuración
4. `drop_messages_table.sql` - Limpieza
5. `fix_users_insert_policy.sql` - Políticas de registro

**Ver:** [Documentación de Migraciones](supabase/migrations/)

---

## 💳 Sistema de Pagos

### Flujo de Pago
1. Usuario crea solicitud de servicio
2. Proveedor envía propuesta con precio
3. Usuario acepta y paga con Stripe
4. Dinero se retiene (captura manual)
5. Proveedor completa servicio
6. Usuario certifica trabajo
7. Dinero se libera al proveedor (menos comisión)

### Comisión de Plataforma
- **Configurable:** 0-50% (por defecto 15%)
- **Editable:** Desde panel de admin
- **Aplicación:** Automática en cada transacción

### Stripe Connect
Usamos Stripe Connect con cuentas Express para:
- Onboarding simplificado de proveedores
- Pagos directos a cuentas de proveedores
- Manejo automático de compliance
- Splits de pago con comisión

---

## 👥 Roles y Permisos

### Usuario
- Crear solicitudes de servicios
- Ver y aceptar propuestas
- Pagar servicios
- Certificar completación
- Dejar reviews

### Proveedor
- Completar perfil y verificación
- Ver solicitudes disponibles
- Enviar propuestas
- Ejecutar servicios
- Marcar como completado
- Recibir pagos

### Admin
- Ver todas las operaciones
- Verificar proveedores
- Gestionar disputas
- Configurar comisión
- Ver estadísticas

---

## 🔒 Seguridad

### Row Level Security (RLS)
Todas las tablas tienen RLS habilitado con políticas restrictivas:
- Usuarios solo ven sus propios datos
- Proveedores solo ven servicios asignados
- Admins tienen acceso completo
- Uso de `auth.uid()` en todas las políticas

### Autenticación
- Email/Password (Supabase Auth)
- OAuth Google/Apple (opcional)
- JWT tokens
- Sessions seguras

### Pagos
- PCI DSS compliant (delegado a Stripe)
- No almacenamos información de tarjetas
- Captura manual para mayor control
- Webhooks con signature verification

---

## 📚 Documentación

| Documento | Descripción |
|-----------|-------------|
| [QUICK_START.md](QUICK_START.md) | Guía de inicio en 30 minutos |
| [VERIFICATION_PROTOCOL.md](VERIFICATION_PROTOCOL.md) | Protocolo completo de verificación |
| [ESTADO_ACTUAL.md](ESTADO_ACTUAL.md) | Estado detallado y plan de acción |
| [scripts/README.md](scripts/README.md) | Guía de scripts de verificación |

---

## 🐛 Problemas Conocidos

### Críticos
- [ ] Notificaciones por email no implementadas
- [ ] Servicios recurrentes - backend incompleto
- [ ] Landing page solo muestra logo
- [ ] Sistema de reportes no existe

### Importantes
- [ ] Dashboard admin usa mock data
- [ ] Búsqueda de servicios no implementada
- [ ] Sistema wallet no funcional
- [ ] Geolocalización no integrada

**Ver:** [Lista Completa de Issues](ESTADO_ACTUAL.md#-funcionalidades-incompletas)

---

## 🎯 Roadmap

### Fase 1: MVP Mejorado (2-3 semanas)
- [ ] Landing page real
- [ ] Notificaciones email críticas
- [ ] Sistema básico de reportes
- [ ] Fix servicios recurrentes
- [ ] Dashboard admin con datos reales

### Fase 2: Producción (3-4 semanas)
- [ ] Búsqueda y filtros
- [ ] Geolocalización por distancia
- [ ] Sistema wallet completo
- [ ] Rating bidireccional

### Fase 3: Crecimiento (1-2 meses)
- [ ] Chat en tiempo real
- [ ] Cupones y referidos
- [ ] 2FA
- [ ] Mobile apps
- [ ] Internacionalización

**Ver:** [Plan Completo](ESTADO_ACTUAL.md#-plan-de-acción-recomendado)

---

## 🤝 Contribuir

### Antes de Empezar
1. Lee [ESTADO_ACTUAL.md](ESTADO_ACTUAL.md)
2. Ejecuta `npm run verify` para asegurar que todo funciona
3. Crea un branch para tu feature

### Guidelines
- Usa TypeScript estricto
- Sigue las convenciones de código existentes
- Escribe tests cuando sea posible
- Actualiza documentación relevante
- Haz commits descriptivos

### Pull Requests
1. Fork el repositorio
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es privado y propietario. Todos los derechos reservados.

---

## 📞 Soporte

- **Documentación:** [Ver archivos .md en raíz]
- **Issues:** [Crear issue en GitHub]
- **Email:** [contacto@resvoa.com]

---

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Stripe](https://stripe.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

---

<div align="center">

**Hecho con ❤️ en España**

[Inicio](#resvoa---plataforma-de-servicios-bajo-demanda) • [Quick Start](QUICK_START.md) • [Documentación](VERIFICATION_PROTOCOL.md)

</div>
