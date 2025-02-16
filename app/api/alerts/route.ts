// app/api/alerts/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server'; // Importa a versão do servidor

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('system_alerts')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}