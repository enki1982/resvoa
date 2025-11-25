/*
  # Limpiar base de datos de propuestas huérfanas

  Este script limpia:
  1. Propuestas sin servicio asociado
  2. Propuestas sin proveedor asociado
  3. Propuestas en estado pendiente de servicios cancelados/completados
  4. Sincroniza usuarios de auth.users a public.users
*/

-- PASO 1: Ver qué propuestas están huérfanas
SELECT
  sp.id as proposal_id,
  sp.service_id,
  sp.provider_id,
  sp.status as proposal_status,
  s.id as service_exists,
  s.status as service_status,
  u.id as provider_exists,
  CASE
    WHEN s.id IS NULL THEN 'SERVICIO NO EXISTE'
    WHEN u.id IS NULL THEN 'PROVEEDOR NO EXISTE'
    WHEN s.status IN ('completed', 'cancelled') AND sp.status = 'pending' THEN 'SERVICIO YA CERRADO'
    ELSE 'OK'
  END as issue
FROM service_proposals sp
LEFT JOIN services s ON sp.service_id = s.id
LEFT JOIN users u ON sp.provider_id = u.id
WHERE s.id IS NULL
   OR u.id IS NULL
   OR (s.status IN ('completed', 'cancelled') AND sp.status = 'pending');

-- PASO 2: Sincronizar usuarios de auth.users a public.users
-- (esto asegura que todos los usuarios autenticados tengan registro en public.users)
INSERT INTO users (id, email, full_name, phone, user_type)
SELECT
  au.id,
  au.email,
  COALESCE(au.raw_user_meta_data->>'full_name', 'Usuario') as full_name,
  COALESCE(au.raw_user_meta_data->>'phone', '') as phone,
  COALESCE(au.raw_user_meta_data->>'user_type', 'user') as user_type
FROM auth.users au
LEFT JOIN users u ON au.id = u.id
WHERE u.id IS NULL
ON CONFLICT (id) DO NOTHING;

-- PASO 3: Eliminar propuestas sin servicio asociado
DELETE FROM service_proposals
WHERE service_id NOT IN (SELECT id FROM services);

-- PASO 4: Eliminar propuestas sin proveedor asociado
DELETE FROM service_proposals
WHERE provider_id NOT IN (SELECT id FROM users);

-- PASO 5: Eliminar propuestas pendientes de servicios ya cerrados
DELETE FROM service_proposals
WHERE status = 'pending'
  AND service_id IN (
    SELECT id FROM services
    WHERE status IN ('completed', 'cancelled')
  );

-- PASO 6: Marcar como rechazadas las propuestas no aceptadas de servicios asignados
UPDATE service_proposals
SET status = 'rejected'
WHERE status = 'pending'
  AND service_id IN (
    SELECT id FROM services
    WHERE status IN ('assigned', 'in_progress')
  )
  AND id NOT IN (
    -- Mantener solo la propuesta aceptada
    SELECT sp1.id
    FROM service_proposals sp1
    INNER JOIN services s ON sp1.service_id = s.id
    WHERE sp1.status = 'accepted'
  );

-- PASO 7: Verificar que todo está limpio ahora
SELECT
  'Propuestas totales' as tipo,
  COUNT(*) as cantidad
FROM service_proposals

UNION ALL

SELECT
  'Propuestas pendientes' as tipo,
  COUNT(*) as cantidad
FROM service_proposals
WHERE status = 'pending'

UNION ALL

SELECT
  'Propuestas aceptadas' as tipo,
  COUNT(*) as cantidad
FROM service_proposals
WHERE status = 'accepted'

UNION ALL

SELECT
  'Propuestas rechazadas' as tipo,
  COUNT(*) as cantidad
FROM service_proposals
WHERE status = 'rejected'

UNION ALL

SELECT
  'Servicios abiertos' as tipo,
  COUNT(*) as cantidad
FROM services
WHERE status = 'open'

UNION ALL

SELECT
  'Servicios asignados' as tipo,
  COUNT(*) as cantidad
FROM services
WHERE status = 'assigned'

UNION ALL

SELECT
  'Servicios en progreso' as tipo,
  COUNT(*) as cantidad
FROM services
WHERE status = 'in_progress'

UNION ALL

SELECT
  'Servicios completados' as tipo,
  COUNT(*) as cantidad
FROM services
WHERE status = 'completed';

-- PASO 8: Ver estado final de propuestas con sus servicios
SELECT
  sp.id,
  s.title as servicio,
  s.status as estado_servicio,
  u.full_name as proveedor,
  sp.price as precio,
  sp.status as estado_propuesta,
  sp.created_at
FROM service_proposals sp
INNER JOIN services s ON sp.service_id = s.id
INNER JOIN users u ON sp.provider_id = u.id
ORDER BY sp.created_at DESC
LIMIT 20;
