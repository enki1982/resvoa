const fs = require('fs');
const path = require('path');

console.log('🔍 VERIFICACIÓN DE VARIABLES DE ENTORNO\n');

const envPath = path.join(__dirname, '..', '.env');

if (!fs.existsSync(envPath)) {
  console.error('❌ ERROR: Archivo .env no encontrado');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf-8');

const requiredVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'STRIPE_SECRET_KEY',
  'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY',
  'STRIPE_WEBHOOK_SECRET',
  'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'
];

let allPresent = true;
let results = [];

for (const varName of requiredVars) {
  const regex = new RegExp(`^${varName}=.+`, 'm');
  const isPresent = regex.test(envContent);

  if (isPresent) {
    const match = envContent.match(new RegExp(`^${varName}=(.+)`, 'm'));
    const value = match ? match[1].trim() : '';
    const isEmpty = !value || value === '' || value === 'your_key_here';

    if (isEmpty) {
      console.log(`⚠️  ${varName}: Presente pero vacío`);
      results.push({ var: varName, status: 'empty' });
      allPresent = false;
    } else {
      const preview = value.length > 20 ? value.substring(0, 20) + '...' : value;
      console.log(`✅ ${varName}: ${preview}`);
      results.push({ var: varName, status: 'ok' });
    }
  } else {
    console.log(`❌ ${varName}: NO ENCONTRADA`);
    results.push({ var: varName, status: 'missing' });
    allPresent = false;
  }
}

console.log('\n📊 RESUMEN:');
const ok = results.filter(r => r.status === 'ok').length;
const empty = results.filter(r => r.status === 'empty').length;
const missing = results.filter(r => r.status === 'missing').length;

console.log(`✅ Correctas: ${ok}/${requiredVars.length}`);
console.log(`⚠️  Vacías: ${empty}/${requiredVars.length}`);
console.log(`❌ Faltantes: ${missing}/${requiredVars.length}`);

if (allPresent) {
  console.log('\n✅ TODAS LAS VARIABLES ESTÁN CONFIGURADAS');
  process.exit(0);
} else {
  console.log('\n❌ FALTAN VARIABLES O ESTÁN VACÍAS');
  process.exit(1);
}
