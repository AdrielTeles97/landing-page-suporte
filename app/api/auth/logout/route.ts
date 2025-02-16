import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
    try {
        // Clear the admin token cookie
        cookies().delete('admin-token');

        return NextResponse.json({
            success: true,
            message: 'Logout realizado com sucesso'
        });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: 'Erro ao realizar logout'
            },
            { status: 500 }
        );
    }
}