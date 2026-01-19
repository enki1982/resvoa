const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

console.log('🔍 VERIFICACIÓN DE BASE DE DATOS\n');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ ERROR: Variables de Supabase no configuradas');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const requiredTables = [
  'users',
  'provider_profiles',
  'services',
  'service_proposals',
  'transactions',
  'reviews',
  'platform_settings',
  'admin_logs'
];

async function verifyTables() {
  console.log('📋 VERIFICANDO TABLAS:\n');
  let allTablesExist = true;

  for (const tableName of requiredTables) {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .select('*', { count: 'exact', head: true });

      if (error) {
        console.log(`❌ ${tableName}: NO EXISTE o no accesible`);
        console.log(`   Error: ${error.message}`);
        allTablesExist = false;
      } else {
        console.log(`✅ ${tableName}: Existe`);
      }
    } catch (err) {
      console.log(`❌ ${tableName}: ERROR - ${err.message}`);
      allTablesExist = false;
    }
  }

  return allTablesExist;
}

async function verifyRLS() {
  console.log('\n🔒 VERIFICANDO ROW LEVEL SECURITY:\n');

  try {
    const { data, error } = await supabase.rpc('exec_sql', {
      query: `
        SELECT tablename, rowsecurity
        FROM pg_tables
        WHERE schemaname = 'public'
        ORDER BY tablename;
      `
    });

    if (error) {
      console.log('⚠️  No se pudo verificar RLS (requiere función personalizada)');
      console.log('   Puedes verificarlo manualmente en Supabase Dashboard');
      return false;
    }

    for (const table of data) {
      if (table.rowsecurity) {
        console.log(`✅ ${table.tablename}: RLS habilitado`);
      } else {
        console.log(`❌ ${table.tablename}: RLS DESHABILITADO`);
      }
    }

    return true;
  } catch (err) {
    console.log('⚠️  No se pudo verificar RLS automáticamente');
    console.log('   Verifica manualmente en Supabase Dashboard → Authentication → Policies');
    return false;
  }
}

async function checkPlatformSettings() {
  console.log('\n⚙️  VERIFICANDO CONFIGURACIÓN DE PLATAFORMA:\n');

  try {
    const { data, error } = await supabase
      .from('platform_settings')
      .select('*')
      .eq('key', 'platform_fee_percent')
      .maybeSingle();

    if (error) {
      console.log('❌ Error al obtener configuración de plataforma');
      console.log(`   ${error.message}`);
      return false;
    }

    if (!data) {
      console.log('⚠️  Configuración de comisión NO encontrada');
      console.log('   Debes crear el registro inicial con comisión por defecto');
      return false;
    }

    console.log(`✅ Comisión de plataforma: ${data.value}%`);
    return true;
  } catch (err) {
    console.log(`❌ Error: ${err.message}`);
    return false;
  }
}

async function checkStorageBuckets() {
  console.log('\n📦 VERIFICANDO STORAGE BUCKETS:\n');

  try {
    const { data, error } = await supabase.storage.listBuckets();

    if (error) {
      console.log('❌ Error al listar buckets');
      console.log(`   ${error.message}`);
      return false;
    }

    const requiredBuckets = ['provider-documents'];
    let allBucketsExist = true;

    for (const bucketName of requiredBuckets) {
      const exists = data.some(b => b.name === bucketName);
      if (exists) {
        console.log(`✅ ${bucketName}: Existe`);
      } else {
        console.log(`❌ ${bucketName}: NO EXISTE`);
        allBucketsExist = false;
      }
    }

    return allBucketsExist;
  } catch (err) {
    console.log(`❌ Error: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log('🔗 Conectando a Supabase...\n');

  try {
    const tablesOk = await verifyTables();
    await verifyRLS();
    const settingsOk = await checkPlatformSettings();
    const storageOk = await checkStorageBuckets();

    console.log('\n' + '='.repeat(50));
    console.log('📊 RESUMEN DE VERIFICACIÓN:');
    console.log('='.repeat(50));

    if (tablesOk && settingsOk && storageOk) {
      console.log('\n✅ BASE DE DATOS CORRECTAMENTE CONFIGURADA');
      process.exit(0);
    } else {
      console.log('\n⚠️  PROBLEMAS DETECTADOS EN LA CONFIGURACIÓN');
      console.log('   Revisa los errores anteriores y corrígelos');
      process.exit(1);
    }
  } catch (err) {
    console.error('\n❌ ERROR FATAL:', err.message);
    process.exit(1);
  }
}

main();
