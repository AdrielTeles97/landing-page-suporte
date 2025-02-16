"use client";

import React from "react";
import { Settings, Store, CloudCog, Database } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const ProductsSection = () => {
  const products = [
    {
      icon: <Store className="w-8 h-8 text-cyan-500" />,
      title: "DIGISAT COMERCIAL",
      description: "Sistema completo para automação comercial com foco em vendas e gestão do dia a dia",
      link: "/produtos/digisat-comercial",
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: "DIGISAT GERENCIAL",
      description: "Solução avançada para gestão empresarial com recursos completos de ERP",
      link: "/produtos/digisat-gerencial",
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-500" />,
      title: "GDOOR PRO",
      description: "Solução profissional com recursos avançados para gestão comercial",
      link: "/produtos/gdoor-pro",
    },
    {
      icon: <Store className="w-8 h-8 text-cyan-500" />,
      title: "GDOOR SLIM",
      description: "Versão otimizada para pequenos negócios com funcionalidades essenciais",
      link: "/produtos/gdoor-slim",
    },
    {
      icon: <CloudCog className="w-8 h-8 text-cyan-500" />,
      title: "GDOOR WEB",
      description: "Sistema em nuvem para gestão comercial com acesso de qualquer lugar",
      link: "/produtos/gdoor-web",
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: "SHOP CONTROL9",
      description: "Sistema completo para controle e gestão do seu negócio",
      link: "/produtos/shop-control9",
    },
  ];

  return (
    <section className="relative py-20 bg-zinc-950">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520,transparent_1px),linear-gradient(to_bottom,#4f46e520,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(56,189,248,0.05),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Nossas Soluções em Automação
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70"
          >
            Escolha o sistema ideal para as necessidades do seu negócio
          </motion.p>
        </div>

        <HoverEffect items={products} />
      </div>
    </section>
  );
};

export default ProductsSection;