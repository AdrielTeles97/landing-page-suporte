import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();

        // Aqui você pode adicionar sua própria lógica de autenticação
        // Por enquanto vamos usar um usuário fixo
        if (username === 'adriel' && password === '501596bel') {
            // Criar um cookie de sessão
            cookies().set('admin-token', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 // 24 horas
            });

            return NextResponse.json({ success: true });
        }

        return NextResponse.json(
            { error: 'Credenciais inválidas' },
            { status: 401 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Erro interno' },
            { status: 500 }
        );
    }
}