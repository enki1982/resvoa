const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ljvkiapwdedjcritnehf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqdmtpYXB3ZGVkamNyaXRuZWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMDI0MTMsImV4cCI6MjA0NzY3ODQxM30.YPW3gKtH7gVzU5c3mHgdB9V7P3XyhYxdPqCwP3Z3gzM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testDatabase() {
  console.log('🔍 Probando conexión a Supabase...\n');

  const { data, error } = await supabase
    .from('services')
    .select('*')
    .limit(1);

  console.log('Data:', data);
  console.log('Error:', error);
}

testDatabase();
