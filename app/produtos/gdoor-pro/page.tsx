"use client";

import ProductDetailLayout from "@/components/layout/ProductDetailLayout";

export default function GdoorProPage() {
    const productData = {
        name: "GDOOR PRO",
        description: "Solução profissional com recursos avançados para gestão comercial",
        features: [
            {
                title: "PDV Avançado",
                description: "Sistema completo de frente de caixa com recursos avançados"
            },
            {
                title: "Gestão Financeira",
                description: "Controle completo de contas a pagar e receber, fluxo de caixa e DRE"
            },
            {
                title: "Controle de Estoque",
                description: "Gestão avançada de estoque com múltiplos depósitos e controle de lotes"
            }
        ],
        benefits: [
            "Interface intuitiva e moderna",
            "Controle financeiro completo",
            "Gestão fiscal automatizada",
            "Relatórios personalizáveis",
            "Controle de vendedores e comissões",
            "Integração com e-commerce"
        ],
        requirements: [
            "Sistema Operacional: Windows 8 ou superior",
            "Processador: Intel Core i3 ou superior",
            "Memória RAM: 4GB ou superior",
            "Espaço em Disco: 10GB de espaço livre",
            "Monitor: Resolução mínima 1366x768"
        ],
        imagePath: "/images/produtos/gdoor/folder_gpro.png"
    };

    return <ProductDetailLayout product={productData} />;
}