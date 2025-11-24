#!/bin/bash

# Script para aplicar las migraciones de RLS
# Este script conecta directamente a Supabase y ejecuta las migraciones

echo "===================================="
echo "  Aplicando Migraciones de RLS"
echo "===================================="
echo ""

# Leer variables de entorno
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

SUPABASE_URL="${NEXT_PUBLIC_SUPABASE_URL}"
SUPABASE_KEY="${NEXT_PUBLIC_SUPABASE_ANON_KEY}"

if [ -z "$SUPABASE_URL" ] || [ -z "$SUPABASE_KEY" ]; then
    echo "❌ Error: Variables de entorno no configuradas"
    echo "Asegúrate de que NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY estén en .env"
    exit 1
fi

echo "📋 Migración 1: Agregar política INSERT a users"
echo "------------------------------------------------"
cat supabase/migrations/20251124_fix_users_insert_policy.sql
echo ""

echo "📋 Migración 2: Eliminar tabla messages"
echo "------------------------------------------------"
cat supabase/migrations/20251124_drop_messages_table.sql
echo ""

echo ""
echo "⚠️  IMPORTANTE:"
echo "Las migraciones están listas en:"
echo "  - supabase/migrations/20251124_fix_users_insert_policy.sql"
echo "  - supabase/migrations/20251124_drop_messages_table.sql"
echo ""
echo "Para aplicarlas, ve a tu panel de Supabase:"
echo "  1. Abre: ${SUPABASE_URL/https:\/\//https://supabase.com/dashboard/project/}"
echo "  2. Ve a 'SQL Editor'"
echo "  3. Copia y ejecuta cada migración"
echo ""
echo "O ejecuta este comando en tu terminal (si tienes Supabase CLI):"
echo "  supabase db push"
echo ""
