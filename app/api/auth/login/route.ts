import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();

        // Hardcoded authentication for now
        if (username === 'adriel' && password === '501596bel') {
            // Create a session cookie
            cookies().set('admin-token', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 // 24 hours
            });

            // Return success and explicit dashboard redirect
            return NextResponse.json({ 
                success: true,
                message: 'Login realizado com sucesso',
                redirectUrl: '/admin/dashboard'
            });
        }

        // Authentication failed
        return NextResponse.json(
            { 
                success: false, 
                message: 'Credenciais inválidas' 
            },
            { status: 401 }
        );
    } catch (error) {
        console.error('Erro no login:', error);
        return NextResponse.json(
            { 
                success: false, 
                message: 'Erro interno do servidor' 
            },
            { status: 500 }
        );
    }
}