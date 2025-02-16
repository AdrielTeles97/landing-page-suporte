"use client";

import  ProductDetailLayout  from "@/components/layout/ProductDetailLayout";

export default function ShopControl9Page() {
    const productData = {
        name: "SHOP CONTROL9",
        description: "Sistema completo para controle e gestão do seu negócio",
        features: [
            {
                title: "Gestão Comercial Completa",
                description: "Controle total de vendas, estoque, financeiro e fiscal"
            },
            {
                title: "PDV Intuitivo",
                description: "Frente de caixa moderno e fácil de usar com suporte a touch screen"
            },
            {
                title: "Controle de Estoque",
                description: "Gestão completa de produtos com controle de múltiplos depósitos"
            },
            {
                title: "Gestão Financeira",
                description: "Controle de contas a pagar e receber, fluxo de caixa e DRE"
            },
            {
                title: "Fiscal Completo",
                description: "Emissão de NFC-e, NF-e e demais documentos fiscais"
            },
            {
                title: "Relatórios Gerenciais",
                description: "Diversos relatórios para análise completa do seu negócio"
            }
        ],
        benefits: [
            "Interface moderna e intuitiva",
            "Controle completo das operações",
            "Conformidade fiscal garantida",
            "Relatórios personalizáveis",
            "Multi-empresa e multi-usuário",
            "Backup automático",
            "Suporte especializado",
            "Atualizações constantes"
        ],
        requirements: [
            "Sistema Operacional: Windows 8 ou superior",
            "Processador: Intel Core i5 ou superior",
            "Memória RAM: 8GB ou superior",
            "Espaço em Disco: 20GB de espaço livre",
            "Monitor: Resolução mínima 1366x768",
            "Internet: Conexão estável para recursos online"
        ],
        imagePath: "/images/produtos/idealsoft/shop9.jpg" // Ajuste para a imagem correta
    };

    return <ProductDetailLayout product={productData} />;
}