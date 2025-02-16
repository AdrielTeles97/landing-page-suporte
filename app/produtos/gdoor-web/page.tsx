"use client";

import ProductDetailLayout  from "@/components/layout/ProductDetailLayout";

export default function GdoorWebPage() {
    const productData = {
        name: "GDOOR WEB",
        description: "Sistema em nuvem para gestão comercial com acesso de qualquer lugar",
        features: [
            {
                title: "Acesso Universal",
                description: "Acesse seu sistema de qualquer dispositivo, em qualquer lugar com internet"
            },
            {
                title: "Backup Automático",
                description: "Seus dados sempre seguros com backup automático na nuvem"
            },
            {
                title: "Atualizações Instantâneas",
                description: "Sistema sempre atualizado sem necessidade de instalações"
            },
            {
                title: "Multiusuário",
                description: "Acesso simultâneo de múltiplos usuários com controle de permissões"
            },
            {
                title: "Integração Total",
                description: "Integre com e-commerce e outros sistemas de forma simples"
            },
            {
                title: "Relatórios em Tempo Real",
                description: "Acompanhe seu negócio em tempo real com relatórios detalhados"
            }
        ],
        benefits: [
            "Sem necessidade de servidor local",
            "Acesso de qualquer dispositivo",
            "Economia com infraestrutura",
            "Backups automáticos",
            "Atualizações automáticas",
            "Suporte técnico especializado",
            "Segurança avançada dos dados"
        ],
        requirements: [
            "Navegador moderno (Chrome, Firefox, Edge)",
            "Conexão com internet estável",
            "Dispositivo com acesso à internet",
            "Impressora compatível com o sistema"
        ],
        imagePath: "/images/produtos/gdoor/gweb.png" // Ajuste para a imagem correta
    };

    return <ProductDetailLayout product={productData} />;
}