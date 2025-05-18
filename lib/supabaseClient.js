import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gtmufzhlcnukqhleajxr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0bXVmemhsY251a3FobGVhanhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1ODQ1NzIsImV4cCI6MjA2MzE2MDU3Mn0.b02HxGDVs3A__nGtyk_3mHof8bvvkojED2xrdAVIW1g'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
