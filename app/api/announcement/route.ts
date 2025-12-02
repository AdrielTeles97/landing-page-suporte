import { NextResponse } from 'next/server'

export async function GET() {
    // Configuração do banner - edite aqui para alterar a mensagem
    const announcement = {
        enabled: false, // Mude para true para ativar o banner
        message:
            '🔧 Manutenção programada: Nossos sistemas estarão em manutenção dia 05/12 das 00h às 06h.',
        type: 'info', // 'info', 'warning', ou 'alert'
        dismissible: true, // Se o usuário pode fechar o banner
        link: {
            text: 'Saiba mais',
            url: '/sobre'
        }
    }

    return NextResponse.json(announcement)
}
