/*
  # Añadir soporte para servicios recurrentes y suscripciones

  1. Nuevas Tablas
    - `subscriptions` - Suscripciones para servicios recurrentes
      - `id` (uuid, primary key)
      - `service_id` (uuid, referencia a services)
      - `user_id` (uuid, referencia a users - cliente)
      - `provider_id` (uuid, referencia a users - proveedor)
      - `frequency` (text) - diaria, semanal, quincenal, mensual
      - `start_date` (date) - fecha inicio
      - `end_date` (date) - fecha fin (opcional)
      - `next_occurrence` (date) - próxima ocurrencia
      - `price` (decimal) - precio por ocurrencia
      - `status` (text) - active, paused, cancelled, completed
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Cambios en tablas existentes
    - Añadir columna `is_recurring` a `services`
    - Añadir columna `recurrence_frequency` a `services`
    - Añadir columna `parent_subscription_id` a `services` para vincular ocurrencias

  3. Seguridad
    - RLS en subscriptions
    - Triggers para crear servicios automáticamente según recurrencia
*/

-- 1. Añadir columnas a services para soporte de recurrencia
ALTER TABLE services
ADD COLUMN IF NOT EXISTS is_recurring BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS recurrence_frequency TEXT,
ADD COLUMN IF NOT EXISTS parent_subscription_id UUID;

-- 2. Crear tabla de suscripciones
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  provider_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  frequency TEXT NOT NULL CHECK (frequency IN ('daily', 'weekly', 'biweekly', 'monthly')),
  start_date DATE NOT NULL,
  end_date DATE,
  next_occurrence DATE NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'paused', 'cancelled', 'completed')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Crear índices
CREATE INDEX IF NOT EXISTS idx_subscriptions_user ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_provider ON subscriptions(provider_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_next_occurrence ON subscriptions(next_occurrence);
CREATE INDEX IF NOT EXISTS idx_services_parent_subscription ON services(parent_subscription_id);

-- 4. Habilitar RLS
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- 5. Políticas RLS para subscriptions
CREATE POLICY "Users can view own subscriptions as client"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Providers can view own subscriptions"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (auth.uid() = provider_id);

CREATE POLICY "Users can create subscriptions"
  ON subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscriptions"
  ON subscriptions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id OR auth.uid() = provider_id)
  WITH CHECK (auth.uid() = user_id OR auth.uid() = provider_id);

CREATE POLICY "Users can cancel own subscriptions"
  ON subscriptions FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- 6. Función para actualizar updated_at
CREATE OR REPLACE FUNCTION update_subscription_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 7. Trigger para updated_at
DROP TRIGGER IF EXISTS subscriptions_updated_at ON subscriptions;
CREATE TRIGGER subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_subscription_updated_at();

-- 8. Función para calcular próxima ocurrencia
CREATE OR REPLACE FUNCTION calculate_next_occurrence(
  current_date DATE,
  frequency TEXT
)
RETURNS DATE AS $$
BEGIN
  RETURN CASE frequency
    WHEN 'daily' THEN current_date + INTERVAL '1 day'
    WHEN 'weekly' THEN current_date + INTERVAL '7 days'
    WHEN 'biweekly' THEN current_date + INTERVAL '14 days'
    WHEN 'monthly' THEN current_date + INTERVAL '1 month'
    ELSE current_date
  END;
END;
$$ LANGUAGE plpgsql;

-- 9. Función para crear servicios automáticamente de suscripciones
CREATE OR REPLACE FUNCTION create_recurring_service()
RETURNS void AS $$
DECLARE
  sub RECORD;
  new_service_id UUID;
  original_service RECORD;
BEGIN
  -- Buscar suscripciones activas que necesitan crear un nuevo servicio
  FOR sub IN
    SELECT * FROM subscriptions
    WHERE status = 'active'
      AND next_occurrence <= CURRENT_DATE
  LOOP
    -- Obtener datos del servicio original
    SELECT * INTO original_service FROM services WHERE id = sub.service_id;

    IF original_service IS NOT NULL THEN
      -- Crear nuevo servicio basado en la suscripción
      INSERT INTO services (
        user_id,
        title,
        description,
        category,
        location,
        location_lat,
        location_lng,
        scheduled_date,
        status,
        is_recurring,
        parent_subscription_id
      ) VALUES (
        sub.user_id,
        original_service.title || ' (Recurrente)',
        original_service.description,
        original_service.category,
        original_service.location,
        original_service.location_lat,
        original_service.location_lng,
        sub.next_occurrence::TEXT,
        'open',
        true,
        sub.id
      ) RETURNING id INTO new_service_id;

      -- Crear propuesta automática del proveedor asignado
      INSERT INTO service_proposals (
        service_id,
        provider_id,
        price,
        status,
        message
      ) VALUES (
        new_service_id,
        sub.provider_id,
        sub.price,
        'accepted',
        'Propuesta automática de suscripción'
      );

      -- Actualizar el servicio a 'assigned' ya que hay proveedor
      UPDATE services SET status = 'assigned' WHERE id = new_service_id;

      -- Actualizar próxima ocurrencia
      UPDATE subscriptions
      SET next_occurrence = calculate_next_occurrence(next_occurrence, frequency)
      WHERE id = sub.id;

      -- Si hay fecha de fin y ya pasó, marcar como completada
      IF sub.end_date IS NOT NULL AND sub.next_occurrence > sub.end_date THEN
        UPDATE subscriptions SET status = 'completed' WHERE id = sub.id;
      END IF;
    END IF;
  END LOOP;
END;
$$ LANGUAGE plpgsql;

-- 10. Comentarios
COMMENT ON TABLE subscriptions IS 'Suscripciones para servicios recurrentes';
COMMENT ON COLUMN services.is_recurring IS 'Indica si el servicio es parte de una recurrencia';
COMMENT ON COLUMN services.recurrence_frequency IS 'Frecuencia de recurrencia: daily, weekly, biweekly, monthly';
COMMENT ON COLUMN services.parent_subscription_id IS 'ID de la suscripción padre si es un servicio recurrente';
COMMENT ON FUNCTION create_recurring_service() IS 'Crea servicios automáticamente basados en suscripciones activas';
COMMENT ON FUNCTION calculate_next_occurrence(DATE, TEXT) IS 'Calcula la próxima fecha de ocurrencia según la frecuencia';
