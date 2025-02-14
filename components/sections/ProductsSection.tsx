// components/sections/ProductsSection.tsx
"use client";

import React from "react";
import { Store, Building, ShoppingBag, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const ProductsSection = () => {
  const products = [
    {
      icon: <Store className="w-8 h-8 text-cyan-500" />,
      title: "Varejo",
      description: "Sistema completo para gestão de lojas, controle de estoque e vendas",
      link: "/produtos/varejo",
    },
    {
      icon: <Building className="w-8 h-8 text-cyan-500" />,
      title: "Indústria",
      description: "ERP focado em processos industriais e controle de produção",
      link: "/produtos/industria",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-cyan-500" />,
      title: "Atacado",
      description: "Solução para distribuidoras e empresas de atacado",
      link: "/produtos/atacado",
    }
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
            Software para cada segmento
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70"
          >
            Soluções especializadas para seu negócio crescer
          </motion.p>
        </div>

        <HoverEffect items={products} />
      </div>
    </section>
  );
};

export default ProductsSection;