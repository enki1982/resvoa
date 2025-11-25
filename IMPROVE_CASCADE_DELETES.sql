/*
  # Mejorar políticas de eliminación en cascada

  1. Cambios
    - Agregar políticas DELETE para usuarios (para permitir baja de cuentas)
    - Verificar y asegurar que todas las FK tengan ON DELETE CASCADE
    - Agregar trigger para limpieza automática de propuestas huérfanas

  2. Seguridad
    - Los usuarios pueden eliminar su propia cuenta
    - Las eliminaciones en cascada mantienen integridad referencial
    - El trigger mantiene la base de datos limpia automáticamente
*/

-- 1. Agregar política DELETE para usuarios (pueden eliminar su propia cuenta)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'users'
    AND policyname = 'Users can delete own account'
  ) THEN
    CREATE POLICY "Users can delete own account"
      ON users FOR DELETE
      TO authenticated
      USING (auth.uid() = id);
  END IF;
END $$;

-- 2. Verificar y recrear FK con ON DELETE CASCADE si es necesario

-- Provider profiles -> users (ya debe tener CASCADE)
DO $$
BEGIN
  -- Verificar si existe la constraint
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'provider_profiles_user_id_fkey'
    AND table_name = 'provider_profiles'
  ) THEN
    ALTER TABLE provider_profiles
    DROP CONSTRAINT provider_profiles_user_id_fkey;
  END IF;

  ALTER TABLE provider_profiles
  ADD CONSTRAINT provider_profiles_user_id_fkey
  FOREIGN KEY (user_id)
  REFERENCES users(id)
  ON DELETE CASCADE;
END $$;

-- Services -> users (ya debe tener CASCADE)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'services_user_id_fkey'
    AND table_name = 'services'
  ) THEN
    ALTER TABLE services
    DROP CONSTRAINT services_user_id_fkey;
  END IF;

  ALTER TABLE services
  ADD CONSTRAINT services_user_id_fkey
  FOREIGN KEY (user_id)
  REFERENCES users(id)
  ON DELETE CASCADE;
END $$;

-- Service proposals -> services (ya debe tener CASCADE)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'service_proposals_service_id_fkey'
    AND table_name = 'service_proposals'
  ) THEN
    ALTER TABLE service_proposals
    DROP CONSTRAINT service_proposals_service_id_fkey;
  END IF;

  ALTER TABLE service_proposals
  ADD CONSTRAINT service_proposals_service_id_fkey
  FOREIGN KEY (service_id)
  REFERENCES services(id)
  ON DELETE CASCADE;
END $$;

-- Service proposals -> users (provider_id)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'service_proposals_provider_id_fkey'
    AND table_name = 'service_proposals'
  ) THEN
    ALTER TABLE service_proposals
    DROP CONSTRAINT service_proposals_provider_id_fkey;
  END IF;

  ALTER TABLE service_proposals
  ADD CONSTRAINT service_proposals_provider_id_fkey
  FOREIGN KEY (provider_id)
  REFERENCES users(id)
  ON DELETE CASCADE;
END $$;

-- Transactions -> services, users (ya deben tener CASCADE o no especificado)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'transactions_service_id_fkey'
    AND table_name = 'transactions'
  ) THEN
    ALTER TABLE transactions
    DROP CONSTRAINT transactions_service_id_fkey;
  END IF;

  ALTER TABLE transactions
  ADD CONSTRAINT transactions_service_id_fkey
  FOREIGN KEY (service_id)
  REFERENCES services(id)
  ON DELETE CASCADE;
END $$;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'transactions_user_id_fkey'
    AND table_name = 'transactions'
  ) THEN
    ALTER TABLE transactions
    DROP CONSTRAINT transactions_user_id_fkey;
  END IF;

  ALTER TABLE transactions
  ADD CONSTRAINT transactions_user_id_fkey
  FOREIGN KEY (user_id)
  REFERENCES users(id)
  ON DELETE CASCADE;
END $$;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'transactions_provider_id_fkey'
    AND table_name = 'transactions'
  ) THEN
    ALTER TABLE transactions
    DROP CONSTRAINT transactions_provider_id_fkey;
  END IF;

  ALTER TABLE transactions
  ADD CONSTRAINT transactions_provider_id_fkey
  FOREIGN KEY (provider_id)
  REFERENCES users(id)
  ON DELETE CASCADE;
END $$;

-- Reviews -> services, users
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'reviews_service_id_fkey'
    AND table_name = 'reviews'
  ) THEN
    ALTER TABLE reviews
    DROP CONSTRAINT reviews_service_id_fkey;
  END IF;

  ALTER TABLE reviews
  ADD CONSTRAINT reviews_service_id_fkey
  FOREIGN KEY (service_id)
  REFERENCES services(id)
  ON DELETE CASCADE;
END $$;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'reviews_reviewer_id_fkey'
    AND table_name = 'reviews'
  ) THEN
    ALTER TABLE reviews
    DROP CONSTRAINT reviews_reviewer_id_fkey;
  END IF;

  ALTER TABLE reviews
  ADD CONSTRAINT reviews_reviewer_id_fkey
  FOREIGN KEY (reviewer_id)
  REFERENCES users(id)
  ON DELETE CASCADE;
END $$;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'reviews_reviewed_id_fkey'
    AND table_name = 'reviews'
  ) THEN
    ALTER TABLE reviews
    DROP CONSTRAINT reviews_reviewed_id_fkey;
  END IF;

  ALTER TABLE reviews
  ADD CONSTRAINT reviews_reviewed_id_fkey
  FOREIGN KEY (reviewed_id)
  REFERENCES users(id)
  ON DELETE CASCADE;
END $$;

-- Admin logs -> users
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'admin_logs_admin_id_fkey'
    AND table_name = 'admin_logs'
  ) THEN
    ALTER TABLE admin_logs
    DROP CONSTRAINT admin_logs_admin_id_fkey;
  END IF;

  ALTER TABLE admin_logs
  ADD CONSTRAINT admin_logs_admin_id_fkey
  FOREIGN KEY (admin_id)
  REFERENCES users(id)
  ON DELETE CASCADE;
END $$;

-- 3. Crear función para limpieza automática de propuestas inválidas
CREATE OR REPLACE FUNCTION cleanup_invalid_proposals()
RETURNS trigger AS $$
BEGIN
  -- Eliminar propuestas pendientes cuando un servicio se completa o cancela
  IF NEW.status IN ('completed', 'cancelled') AND OLD.status != NEW.status THEN
    DELETE FROM service_proposals
    WHERE service_id = NEW.id
      AND status = 'pending';
  END IF;

  -- Marcar como rechazadas las propuestas no aceptadas cuando se asigna un servicio
  IF NEW.status IN ('assigned', 'in_progress') AND OLD.status = 'open' THEN
    UPDATE service_proposals
    SET status = 'rejected'
    WHERE service_id = NEW.id
      AND status = 'pending'
      AND id NOT IN (
        SELECT id FROM service_proposals
        WHERE service_id = NEW.id AND status = 'accepted'
      );
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 4. Crear trigger para limpieza automática
DROP TRIGGER IF EXISTS cleanup_proposals_on_service_update ON services;
CREATE TRIGGER cleanup_proposals_on_service_update
  AFTER UPDATE ON services
  FOR EACH ROW
  EXECUTE FUNCTION cleanup_invalid_proposals();

-- 5. Crear índice para mejorar performance de limpiezas
CREATE INDEX IF NOT EXISTS idx_service_proposals_status_service
  ON service_proposals(status, service_id);

-- 6. Comentarios finales
COMMENT ON FUNCTION cleanup_invalid_proposals() IS
  'Limpia automáticamente propuestas inválidas cuando un servicio cambia de estado';

COMMENT ON TRIGGER cleanup_proposals_on_service_update ON services IS
  'Trigger que mantiene la integridad de las propuestas al cambiar el estado de un servicio';
