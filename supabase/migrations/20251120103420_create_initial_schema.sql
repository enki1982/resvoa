/*
  # Esquema inicial de Resvoa

  1. Nuevas Tablas
    - `users` - Usuarios y proveedores del sistema
      - `id` (uuid, PK) - ID único del usuario
      - `email` (text) - Email único
      - `full_name` (text) - Nombre completo
      - `phone` (text) - Teléfono
      - `user_type` (text) - 'user' o 'provider'
      - `avatar_url` (text) - URL del avatar
      - `created_at` (timestamptz) - Fecha de creación
      - `last_login` (timestamptz) - Último acceso

    - `provider_profiles` - Información adicional de proveedores
      - `id` (uuid, PK)
      - `user_id` (uuid, FK) - Referencia a users
      - `bio` (text) - Biografía
      - `address` (text) - Dirección
      - `city` (text) - Ciudad
      - `postal_code` (text) - Código postal
      - `verification_status` (text) - 'pending', 'verified', 'rejected'
      - `verification_date` (timestamptz) - Fecha de verificación
      - `dni_verified` (boolean) - DNI verificado
      - `phone_verified` (boolean) - Teléfono verificado
      - `level` (text) - 'aspirante', 'bronce', 'plata', 'oro'
      - `rating` (numeric) - Valoración promedio
      - `total_services` (int) - Servicios completados
      - `active` (boolean) - Activo en plataforma

    - `services` - Solicitudes de servicios
      - `id` (uuid, PK)
      - `user_id` (uuid, FK) - Usuario que solicita
      - `title` (text) - Título del servicio
      - `description` (text) - Descripción detallada
      - `category` (text) - Categoría del servicio
      - `location` (text) - Ubicación
      - `city` (text) - Ciudad
      - `price_min` (numeric) - Precio mínimo esperado
      - `price_max` (numeric) - Precio máximo esperado
      - `scheduled_date` (timestamptz) - Fecha programada
      - `status` (text) - 'open', 'assigned', 'in_progress', 'completed', 'cancelled'
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `service_proposals` - Propuestas de proveedores
      - `id` (uuid, PK)
      - `service_id` (uuid, FK) - Servicio
      - `provider_id` (uuid, FK) - Proveedor
      - `price` (numeric) - Precio propuesto
      - `message` (text) - Mensaje al usuario
      - `status` (text) - 'pending', 'accepted', 'rejected'
      - `created_at` (timestamptz)

    - `transactions` - Transacciones financieras
      - `id` (uuid, PK)
      - `service_id` (uuid, FK)
      - `user_id` (uuid, FK) - Usuario que paga
      - `provider_id` (uuid, FK) - Proveedor que cobra
      - `amount` (numeric) - Monto total
      - `commission` (numeric) - Comisión de Resvoa
      - `provider_amount` (numeric) - Monto para proveedor
      - `status` (text) - 'pending', 'held', 'released', 'refunded'
      - `payment_method` (text) - Método de pago
      - `created_at` (timestamptz)
      - `released_at` (timestamptz) - Fecha de liberación

    - `reviews` - Valoraciones de servicios
      - `id` (uuid, PK)
      - `service_id` (uuid, FK)
      - `reviewer_id` (uuid, FK) - Quien valora
      - `reviewed_id` (uuid, FK) - Quien es valorado
      - `rating` (int) - 1-5 estrellas
      - `comment` (text) - Comentario
      - `created_at` (timestamptz)

    - `messages` - Mensajes entre usuarios
      - `id` (uuid, PK)
      - `service_id` (uuid, FK)
      - `sender_id` (uuid, FK)
      - `receiver_id` (uuid, FK)
      - `message` (text)
      - `read` (boolean)
      - `created_at` (timestamptz)

    - `admin_logs` - Logs de acciones administrativas
      - `id` (uuid, PK)
      - `admin_id` (uuid, FK)
      - `action` (text) - Acción realizada
      - `details` (jsonb) - Detalles en JSON
      - `created_at` (timestamptz)

  2. Seguridad
    - Habilitar RLS en todas las tablas
    - Políticas para usuarios, proveedores y administradores
*/

-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  phone text,
  user_type text NOT NULL CHECK (user_type IN ('user', 'provider', 'admin')),
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Crear tabla de perfiles de proveedores
CREATE TABLE IF NOT EXISTS provider_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  bio text,
  address text,
  city text,
  postal_code text,
  verification_status text DEFAULT 'pending' CHECK (verification_status IN ('pending', 'verified', 'rejected')),
  verification_date timestamptz,
  dni_verified boolean DEFAULT false,
  phone_verified boolean DEFAULT false,
  level text DEFAULT 'aspirante' CHECK (level IN ('aspirante', 'bronce', 'plata', 'oro')),
  rating numeric(3,2) DEFAULT 0,
  total_services int DEFAULT 0,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE provider_profiles ENABLE ROW LEVEL SECURITY;

-- Crear tabla de servicios
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  location text NOT NULL,
  city text NOT NULL,
  price_min numeric(10,2),
  price_max numeric(10,2),
  scheduled_date timestamptz,
  status text DEFAULT 'open' CHECK (status IN ('open', 'assigned', 'in_progress', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Crear tabla de propuestas
CREATE TABLE IF NOT EXISTS service_proposals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id uuid REFERENCES services(id) ON DELETE CASCADE NOT NULL,
  provider_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  price numeric(10,2) NOT NULL,
  message text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE service_proposals ENABLE ROW LEVEL SECURITY;

-- Crear tabla de transacciones
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id uuid REFERENCES services(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES users(id) NOT NULL,
  provider_id uuid REFERENCES users(id) NOT NULL,
  amount numeric(10,2) NOT NULL,
  commission numeric(10,2) NOT NULL,
  provider_amount numeric(10,2) NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'held', 'released', 'refunded')),
  payment_method text,
  created_at timestamptz DEFAULT now(),
  released_at timestamptz
);

ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Crear tabla de reviews
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id uuid REFERENCES services(id) ON DELETE CASCADE NOT NULL,
  reviewer_id uuid REFERENCES users(id) NOT NULL,
  reviewed_id uuid REFERENCES users(id) NOT NULL,
  rating int NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(service_id, reviewer_id)
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Crear tabla de mensajes
CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id uuid REFERENCES services(id) ON DELETE CASCADE,
  sender_id uuid REFERENCES users(id) NOT NULL,
  receiver_id uuid REFERENCES users(id) NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Crear tabla de logs administrativos
CREATE TABLE IF NOT EXISTS admin_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id uuid REFERENCES users(id) NOT NULL,
  action text NOT NULL,
  details jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admin_logs ENABLE ROW LEVEL SECURITY;

-- POLÍTICAS RLS

-- Users: pueden ver su propia info, admins ven todo
CREATE POLICY "Users can view own data"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id OR EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND user_type = 'admin'
  ));

CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Provider profiles: proveedores ven el suyo, usuarios ven proveedores verificados
CREATE POLICY "Providers can view own profile"
  ON provider_profiles FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR 
    verification_status = 'verified' OR
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND user_type = 'admin')
  );

CREATE POLICY "Providers can update own profile"
  ON provider_profiles FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Providers can create own profile"
  ON provider_profiles FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Services: usuarios ven sus servicios y proveedores ven servicios abiertos
CREATE POLICY "Users can view own services"
  ON services FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR 
    status = 'open' OR
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND user_type = 'admin')
  );

CREATE POLICY "Users can create services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own services"
  ON services FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Proposals: proveedores y usuarios del servicio pueden ver
CREATE POLICY "View proposals"
  ON service_proposals FOR SELECT
  TO authenticated
  USING (
    provider_id = auth.uid() OR
    EXISTS (SELECT 1 FROM services WHERE id = service_id AND user_id = auth.uid()) OR
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND user_type = 'admin')
  );

CREATE POLICY "Providers can create proposals"
  ON service_proposals FOR INSERT
  TO authenticated
  WITH CHECK (provider_id = auth.uid());

-- Transactions: solo partes involucradas y admins
CREATE POLICY "View own transactions"
  ON transactions FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR 
    provider_id = auth.uid() OR
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND user_type = 'admin')
  );

-- Reviews: todos pueden ver, solo involucrados pueden crear
CREATE POLICY "Anyone can view reviews"
  ON reviews FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (reviewer_id = auth.uid());

-- Messages: solo sender y receiver
CREATE POLICY "View own messages"
  ON messages FOR SELECT
  TO authenticated
  USING (sender_id = auth.uid() OR receiver_id = auth.uid());

CREATE POLICY "Send messages"
  ON messages FOR INSERT
  TO authenticated
  WITH CHECK (sender_id = auth.uid());

-- Admin logs: solo admins
CREATE POLICY "Admins can view logs"
  ON admin_logs FOR SELECT
  TO authenticated
  USING (EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND user_type = 'admin'));

CREATE POLICY "Admins can create logs"
  ON admin_logs FOR INSERT
  TO authenticated
  WITH CHECK (admin_id = auth.uid() AND EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND user_type = 'admin'
  ));

-- Crear índices para mejorar performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_type ON users(user_type);
CREATE INDEX IF NOT EXISTS idx_provider_profiles_user_id ON provider_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_provider_profiles_city ON provider_profiles(city);
CREATE INDEX IF NOT EXISTS idx_provider_profiles_verification ON provider_profiles(verification_status);
CREATE INDEX IF NOT EXISTS idx_services_user_id ON services(user_id);
CREATE INDEX IF NOT EXISTS idx_services_status ON services(status);
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_services_city ON services(city);
CREATE INDEX IF NOT EXISTS idx_proposals_service_id ON service_proposals(service_id);
CREATE INDEX IF NOT EXISTS idx_proposals_provider_id ON service_proposals(provider_id);
CREATE INDEX IF NOT EXISTS idx_transactions_service_id ON transactions(service_id);
CREATE INDEX IF NOT EXISTS idx_transactions_status ON transactions(status);
CREATE INDEX IF NOT EXISTS idx_reviews_reviewed_id ON reviews(reviewed_id);
CREATE INDEX IF NOT EXISTS idx_messages_sender_id ON messages(sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_receiver_id ON messages(receiver_id);
