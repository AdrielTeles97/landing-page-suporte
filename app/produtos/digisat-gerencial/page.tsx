"use client";

import ProductDetailLayout from "@/components/layout/ProductDetailLayout";

export default function DigisatGerencialPage() {
    const productData = {
        name: "DIGISAT GERENCIAL",
        description: "Solução avançada para gestão empresarial com recursos completos de ERP",
        features: [
            {
                title: "Gestão Completa",
                description: "Controle total sobre todos os aspectos do seu negócio, desde vendas até relatórios gerenciais"
            },
            {
                title: "Múltiplas Empresas",
                description: "Gerencie várias empresas em uma única plataforma com controle separado"
            },
            {
                title: "Análise Avançada",
                description: "Relatórios detalhados e dashboards para tomada de decisão"
            }
        ],
        benefits: [
            "Controle completo das operações empresariais",
            "Integração total entre módulos",
            "Relatórios gerenciais avançados",
            "Suporte ao processo decisório",
            "Gestão financeira completa",
            "Controle de estoque multifilial"
        ],
        requirements: [
            "Sistema Operacional: Windows 8 ou superior",
            "Processador: Intel Core i5 ou superior",
            "Memória RAM: 8GB ou superior",
            "Espaço em Disco: 20GB de espaço livre",
            "Rede: Conexão estável para recursos online"
        ],
        imagePath: "/images/produtos/digisat/Gerencial.png"
    };

    return <ProductDetailLayout product={productData} />;
}