import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Rotas que não precisam de autenticação
    const publicRoutes = ['/admin/login'];

    // Verificar se a rota atual está na lista de rotas públicas
    if (publicRoutes.includes(request.nextUrl.pathname)) {
        return NextResponse.next();
    }

    // Verifica se é uma rota administrativa
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // Verifica se tem o cookie de autenticação
        const token = request.cookies.get('admin-token');

        if (!token) {
            // Redireciona para a página de login se não estiver autenticado
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/admin/login'
    ]
};