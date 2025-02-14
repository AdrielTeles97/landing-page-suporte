"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, BookOpen, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Segurança e Confiabilidade",
      description: "Software robusto e seguro para proteger seus dados empresariais com backups automáticos."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Suporte Especializado",
      description: "Equipe técnica dedicada para auxiliar sua empresa 24/7 em todas as etapas."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: "Treinamento Completo",
      description: "Capacitação personalizada para sua equipe aproveitar ao máximo as funcionalidades."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-blue-400" />,
      title: "Tecnologia Avançada",
      description: "Soluções modernas e atualizadas para manter sua empresa sempre à frente."
    }
  ];

  return (
    <section className="relative py-20 bg-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520,transparent_1px),linear-gradient(to_bottom,#4f46e520,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(56,189,248,0.05),transparent)]" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Experiência e Inovação em Gestão
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            Há mais de uma década transformando empresas através da tecnologia, 
            oferecendo soluções personalizadas para cada segmento do mercado.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mb-4 inline-block p-3 rounded-xl bg-blue-500/10">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 max-w-3xl mx-auto">
            Nossa missão é impulsionar o crescimento do seu negócio através de tecnologia 
            e inovação, fornecendo ferramentas poderosas e suporte especializado para 
            sua empresa alcançar o próximo nível.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;