/*
  INSTRUCCIONES: Ejecuta este SQL en tu panel de Supabase

  Ve a: https://supabase.com/dashboard
  1. Abre tu proyecto
  2. Ve a "SQL Editor"
  3. Pega y ejecuta este código
*/

-- ========================================
-- CREAR BUCKET PARA DOCUMENTOS
-- ========================================
-- Crear bucket para almacenar documentos de proveedores
INSERT INTO storage.buckets (id, name, public)
VALUES ('provider-documents', 'provider-documents', false)
ON CONFLICT (id) DO NOTHING;

-- ========================================
-- HABILITAR RLS EN STORAGE
-- ========================================
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- ========================================
-- POLÍTICAS DE SEGURIDAD PARA STORAGE
-- ========================================

-- Eliminar políticas existentes si existen
DROP POLICY IF EXISTS "Users can upload own documents" ON storage.objects;
DROP POLICY IF EXISTS "Users can view own documents" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete own documents" ON storage.objects;
DROP POLICY IF EXISTS "Users can update own documents" ON storage.objects;

-- Política: Los usuarios pueden subir sus propios documentos
CREATE POLICY "Users can upload own documents"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'provider-documents'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- Política: Los usuarios pueden ver sus propios documentos
CREATE POLICY "Users can view own documents"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'provider-documents'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- Política: Los usuarios pueden eliminar sus propios documentos
CREATE POLICY "Users can delete own documents"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'provider-documents'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- Política: Los usuarios pueden actualizar sus propios documentos
CREATE POLICY "Users can update own documents"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'provider-documents'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- ========================================
-- VERIFICACIÓN
-- ========================================
-- Ejecuta esto para verificar que el bucket fue creado:
SELECT id, name, public FROM storage.buckets WHERE id = 'provider-documents';

-- Ejecuta esto para ver las políticas de storage:
SELECT schemaname, tablename, policyname
FROM pg_policies
WHERE tablename = 'objects' AND schemaname = 'storage';
