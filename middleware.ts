import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Verifica se é uma rota administrativa
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // Ignora a rota de login
        if (request.nextUrl.pathname === '/admin/login') {
            return NextResponse.next();
        }

        // Verifica se tem o cookie de autenticação
        const token = request.cookies.get('admin-token');

        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};