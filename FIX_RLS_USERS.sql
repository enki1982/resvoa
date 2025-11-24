/*
  INSTRUCCIONES: Ejecuta este SQL en tu panel de Supabase
  
  Ve a: https://supabase.com/dashboard
  1. Abre tu proyecto
  2. Ve a "SQL Editor"
  3. Pega y ejecuta este código
*/

-- ========================================
-- FIX 1: Agregar política INSERT a users
-- ========================================
-- Esta política permite que nuevos usuarios se registren
CREATE POLICY "Users can create own account"
  ON users FOR INSERT
  TO authenticated
  WITH CHECK (id = (SELECT auth.uid()));

-- ========================================
-- FIX 2: Eliminar tabla de mensajes
-- ========================================
-- La comunicación directa no está permitida
DROP POLICY IF EXISTS "View own messages" ON messages;
DROP POLICY IF EXISTS "Send messages" ON messages;
DROP INDEX IF EXISTS idx_messages_sender_id;
DROP INDEX IF EXISTS idx_messages_receiver_id;
DROP INDEX IF EXISTS idx_messages_service_id;
DROP TABLE IF EXISTS messages;

-- ========================================
-- VERIFICACIÓN
-- ========================================
-- Ejecuta esto para verificar que las políticas están bien:
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE tablename = 'users';

-- Deberías ver estas políticas:
-- 1. "Users can view own data"
-- 2. "Users can update own data"
-- 3. "Users can create own account" <- NUEVA
