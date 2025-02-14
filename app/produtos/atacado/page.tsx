"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, Store, BarChart3, Users, ShoppingCart, Phone } from 'lucide-react';
import Link from 'next/link';

const VarejoPage = () => {
  const features = [
    {
      icon: <Store className="w-6 h-6" />,
      title: "PDV Completo",
      description: "Sistema de vendas intuitivo com controle de caixa, TEF e impressão de cupom fiscal"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Gestão de Estoque",
      description: "Controle total do seu estoque com alertas de reposição e gestão de fornecedores"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Fidelização",
      description: "Programa de pontos, descontos e campanhas para fidelizar seus clientes"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce Integrado",
      description: "Integração completa com sua loja virtual, controle de múltiplos canais"
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520,transparent_1px),linear-gradient(to_bottom,#4f46e520,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(56,189,248,0.05),transparent)]" />
        
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6"
            >
              Sistema para Atacado
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 mb-8 max-w-3xl mx-auto"
            >
              Solução completa para gestão do seu negócio, desde o PDV até o controle financeiro. 
              Transforme sua operação com tecnologia de ponta.
            </motion.p>
          </div>

          {/* Hero Image/Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 relative rounded-xl overflow-hidden"
          >
            <div className="aspect-video bg-zinc-800 rounded-xl">
              {/* Aqui você pode adicionar um vídeo ou imagem do sistema */}
              <img 
                src="/api/placeholder/1920/1080" 
                alt="Sistema em ação" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10"
              >
                <div className="inline-flex p-3 rounded-xl bg-blue-500/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Por que escolher nossa solução?
          </h2>
          <div className="space-y-6">
            {[
              "Mais de 1000 clientes satisfeitos em todo Brasil",
              "Suporte técnico especializado 24/7",
              "Atualizações constantes e novas funcionalidades",
              "Integração com principais meios de pagamento",
              "Treinamento completo para sua equipe",
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-white/60 mb-8">
            Entre em contato agora mesmo e solicite uma demonstração gratuita
          </p>
          <Link 
            href="https://wa.me/SEUNUMERO" 
            target="_blank"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Falar com consultor
            <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VarejoPage;