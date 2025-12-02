import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Aviso Importante - Sistema G6 | Bel Informática',
    description:
        'Aviso importante para usuários do Sistema G6. Sistema descontinuado desde agosto de 2021. Atualize imediatamente.',
    robots: 'noindex, nofollow'
}

export default function AvisoG6Layout({
    children
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
