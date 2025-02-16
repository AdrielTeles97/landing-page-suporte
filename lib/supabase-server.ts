import { createClient } from '@supabase/supabase-js'

// Note que não usamos "use client" aqui
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Chave service role para operações do servidor
)