const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ljvkiapwdedjcritnehf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqdmtpYXB3ZGVkamNyaXRuZWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMDI0MTMsImV4cCI6MjA0NzY3ODQxM30.YPW3gKtH7gVzU5c3mHgdB9V7P3XyhYxdPqCwP3Z3gzM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testDatabase() {
  console.log('🔍 Probando conexión a Supabase...\n');

  try {
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('count', { count: 'exact', head: true });

    if (usersError) throw usersError;
    console.log('✅ Tabla users: OK');

    const { data: services, error: servicesError } = await supabase
      .from('services')
      .select('count', { count: 'exact', head: true });

    if (servicesError) throw servicesError;
    console.log('✅ Tabla services: OK');

    const { data: reviews, error: reviewsError } = await supabase
      .from('reviews')
      .select('count', { count: 'exact', head: true });

    if (reviewsError) throw reviewsError;
    console.log('✅ Tabla reviews: OK');

    const { data: messages, error: messagesError } = await supabase
      .from('messages')
      .select('count', { count: 'exact', head: true });

    if (messagesError) throw messagesError;
    console.log('✅ Tabla messages: OK');

    console.log('\n🎉 ¡Todas las tablas funcionan correctamente!');
    console.log('✨ La base de datos está lista para usar');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Detalles:', error);
  }
}

testDatabase();
