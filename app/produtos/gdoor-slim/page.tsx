"use client";

import ProductDetailLayout  from "@/components/layout/ProductDetailLayout";

export default function GdoorSlimPage() {
    const productData = {
        name: "GDOOR SLIM",
        description: "Versão otimizada para pequenos negócios com funcionalidades essenciais",
        features: [
            {
                title: "PDV Simplificado",
                description: "Interface intuitiva para vendas rápidas e eficientes"
            },
            {
                title: "Controle Básico",
                description: "Gestão essencial de estoque e financeiro para pequenos negócios"
            },
            {
                title: "Emissão Fiscal",
                description: "Emissão de NFC-e e cupom fiscal de forma simplificada"
            }
        ],
        benefits: [
            "Fácil de usar e aprender",
            "Ideal para pequenos comércios",
            "Controle financeiro simplificado",
            "Emissão de notas fiscais",
            "Relatórios essenciais",
            "Suporte técnico especializado"
        ],
        requirements: [
            "Sistema Operacional: Windows 8 ou superior",
            "Processador: Intel Core i3 ou superior",
            "Memória RAM: 4GB",
            "Espaço em Disco: 5GB de espaço livre",
            "Monitor: Resolução mínima 1366x768"
        ],
        imagePath: "/images/produtos/gdoor/folder_gslim.png"
    };

    return <ProductDetailLayout product={productData} />;
}