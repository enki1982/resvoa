const { execSync } = require('child_process');
const path = require('path');

console.log('╔════════════════════════════════════════════════════════╗');
console.log('║     🔍 VERIFICACIÓN COMPLETA DEL PROYECTO RESVOA      ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

const scripts = [
  {
    name: 'Variables de Entorno',
    file: 'verify-env.js',
    critical: true
  },
  {
    name: 'Base de Datos',
    file: 'verify-database.js',
    critical: true
  },
  {
    name: 'Stripe',
    file: 'verify-stripe.js',
    critical: true
  }
];

const results = [];

for (const script of scripts) {
  console.log('\n' + '─'.repeat(60));
  console.log(`🔍 Ejecutando: ${script.name}`);
  console.log('─'.repeat(60) + '\n');

  try {
    execSync(`node ${path.join(__dirname, script.file)}`, {
      stdio: 'inherit',
      cwd: __dirname
    });
    results.push({ name: script.name, status: 'success', critical: script.critical });
  } catch (err) {
    results.push({ name: script.name, status: 'failed', critical: script.critical });
  }
}

console.log('\n\n');
console.log('╔════════════════════════════════════════════════════════╗');
console.log('║              📊 RESUMEN FINAL DE VERIFICACIÓN          ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

let allPassed = true;
let criticalFailed = false;

results.forEach(result => {
  const icon = result.status === 'success' ? '✅' : '❌';
  const status = result.status === 'success' ? 'OK' : 'FALLÓ';
  const critical = result.critical ? '[CRÍTICO]' : '[OPCIONAL]';

  console.log(`${icon} ${result.name}: ${status} ${critical}`);

  if (result.status === 'failed') {
    allPassed = false;
    if (result.critical) {
      criticalFailed = true;
    }
  }
});

console.log('\n' + '─'.repeat(60) + '\n');

if (allPassed) {
  console.log('🎉 ¡TODAS LAS VERIFICACIONES PASARON EXITOSAMENTE!\n');
  console.log('✅ El proyecto está correctamente configurado.');
  console.log('✅ Puedes proceder a trabajar en las funcionalidades.');
  process.exit(0);
} else if (criticalFailed) {
  console.log('❌ VERIFICACIONES CRÍTICAS FALLARON\n');
  console.log('⚠️  Debes resolver los problemas críticos antes de continuar.');
  console.log('⚠️  Revisa los errores anteriores y corrígelos.\n');
  process.exit(1);
} else {
  console.log('⚠️  ALGUNAS VERIFICACIONES OPCIONALES FALLARON\n');
  console.log('✅ Las configuraciones críticas están OK.');
  console.log('ℹ️  Los problemas opcionales pueden resolverse más adelante.\n');
  process.exit(0);
}
