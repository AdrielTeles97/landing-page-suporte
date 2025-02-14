"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp-effect";
import {
  Clock,
  Users,
  Laptop,
  Wrench,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    title: "Análise Inicial",
    description: "Entendemos suas necessidades e processos atuais",
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    content: "Nossa equipe realiza um diagnóstico completo do seu negócio, identificando pontos de melhoria e oportunidades de otimização através do software."
  },
  {
    title: "Planejamento",
    description: "Desenvolvemos um plano personalizado de implantação",
    icon: <Laptop className="w-6 h-6 text-blue-500" />,
    content: "Criamos um cronograma detalhado, definindo etapas, prazos e responsabilidades para garantir uma transição suave."
  },
  {
    title: "Configuração",
    description: "Instalação e configuração do sistema",
    icon: <Wrench className="w-6 h-6 text-blue-500" />,
    content: "Realizamos a instalação do software, configurando-o de acordo com as particularidades do seu negócio."
  },
  {
    title: "Treinamento",
    description: "Capacitação completa da sua equipe",
    icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
    content: "Treinamos sua equipe em todas as funcionalidades do sistema, garantindo o máximo aproveitamento da ferramenta."
  },
  {
    title: "Acompanhamento",
    description: "Suporte contínuo pós-implantação",
    icon: <HeartHandshake className="w-6 h-6 text-blue-500" />,
    content: "Oferecemos suporte técnico especializado e acompanhamento próximo para garantir o sucesso da operação."
  }
];

const HowItWorks = () => {
  return (
    <section className="relative py-20 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520,transparent_1px),linear-gradient(to_bottom,#4f46e520,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <LampContainer>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >
            Como funciona a implantação
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center text-neutral-200 text-lg mt-4"
          >
            Processo simplificado e eficiente para sua empresa
          </motion.p>
        </LampContainer>

        <div className="mt-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-center mb-4">
                <div className="relative">
                  {/* Timeline line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute top-10 left-5 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-transparent" />
                  )}
                  
                  {/* Icon container */}
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center relative z-10 border border-blue-500/20">
                    {step.icon}
                  </div>
                </div>

                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="ml-16 pl-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="bg-zinc-900/50 p-6 rounded-xl border border-white/10"
                >
                  <p className="text-white/70">
                    {step.content}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;