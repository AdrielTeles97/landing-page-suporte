"use client";

import React from 'react';
import ProductDetailLayout from '@/components/layout/ProductDetailLayout';

const DigisatComercialPage = () => {
  const productData = {
    name: "DIGISAT COMERCIAL",
    description: "Sistema completo de automação comercial desenvolvido para otimizar a gestão do seu negócio, oferecendo controle total sobre vendas, estoque e financeiro.",
    features: [
      {
        title: "Gestão de Vendas",
        description: "PDV intuitivo com suporte a touch screen, múltiplas formas de pagamento, e emissão de NFC-e integrada"
      },
      {
        title: "Controle de Estoque",
        description: "Gestão completa de produtos, controle de entrada e saída, múltiplos depósitos e alertas de estoque mínimo"
      },
      {
        title: "Gestão Financeira",
        description: "Controle de contas a pagar e receber, fluxo de caixa, e relatórios gerenciais detalhados"
      },
      {
        title: "Fiscal",
        description: "Emissão de NFC-e, NF-e, SAT e MFE, totalmente adaptado à legislação vigente"
      },
      {
        title: "CRM",
        description: "Cadastro completo de clientes, histórico de compras e sistema de fidelidade"
      },
      {
        title: "Relatórios",
        description: "Mais de 100 relatórios gerenciais personalizáveis para análise completa do seu negócio"
      }
    ],
    benefits: [
      "Aumento da eficiência operacional com processos automatizados",
      "Redução de erros e perdas com controle preciso de estoque",
      "Conformidade fiscal garantida com atualizações constantes",
      "Melhor experiência do cliente com atendimento ágil",
      "Tomada de decisão facilitada com relatórios detalhados",
      "Integração com e-commerce e marketplaces",
      "Suporte técnico especializado e treinamento completo",
      "Backup automático e segurança dos dados"
    ],
    requirements: [
      "Sistema Operacional: Windows 8 ou superior",
      "Processador: Intel Core i3 ou superior",
      "Memória RAM: 4GB ou superior",
      "Espaço em Disco: 10GB de espaço livre",
      "Monitor: Resolução mínima de 1366x768",
      "Internet: Conexão estável para atualizações e emissão de documentos fiscais"
    ],
    imagePath: "/images/produtos/digisat/home_digisat.png"
  };

  return <ProductDetailLayout product={productData} />;
};

export default DigisatComercialPage;