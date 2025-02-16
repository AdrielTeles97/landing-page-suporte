"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  CheckCircle2,
  HeadphonesIcon,
  MessageCircle,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Interfaces
interface Feature {
  title: string;
  description: string;
}

interface ProductPageProps {
  product: {
    name: string;
    description: string;
    features: Feature[];
    benefits: string[];
    requirements: string[];
    imagePath: string;
  }
}

const GradientBackground = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-black" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-950/10 to-black" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(29,78,216,0.05),transparent)]" />
    <div className="absolute inset-0 bg-grid opacity-[0.02]" />
  </div>
);

const SystemPreviewCard = ({ imagePath, name }: { imagePath: string; name: string }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-blue-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
      <motion.div
        style={{ y }}
        className="relative bg-zinc-900 rounded-2xl p-2 border border-white/10 overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <Image
          src={imagePath}
          alt={name}
          className="rounded-xl w-full h-auto"
          width={500}
          height={500}
        />
      </motion.div>
    </motion.div>
  );
};

const handleDemoWhatsAppClick = () => {
  window.open(`https://wa.me/559185445267?text=Olá! Gostaria de agendar uma demonstração do sistema.`, '_blank');
};

const HeroSection = ({ name, description, imagePath }: {
  name: string;
  description: string;
  imagePath: string;
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <GradientBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-blue-300">
                Automação Comercial
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-blue mb-8 leading-tight">
              {name}
            </h1>
            <p className="text-xl text-zinc-300 mb-12 leading-relaxed max-w-xl">
              {description}
            </p>
            
            <div className="flex items-center gap-6">
              <Button
                onClick={handleDemoWhatsAppClick}
                className="group relative overflow-hidden rounded-lg bg-blue-500 px-8 py-6 text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 transition-opacity group-hover:opacity-100"
                  initial={false}
                />
                <span className="relative flex items-center text-lg font-medium">
                  <HeadphonesIcon className="w-5 h-5 mr-2" />
                  Agendar Demonstração
                  <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </motion.div>

          <div className="relative hidden md:block">
            <SystemPreviewCard imagePath={imagePath} name={name} />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }: Feature) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="relative group rounded-2xl p-8 bg-gradient-to-b from-white/[0.1] to-transparent border border-blue-500/20 backdrop-blur-sm"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
    <h3 className="text-2xl font-semibold text-white mb-4 relative z-10">
      {title}
    </h3>
    <p className="text-lg text-zinc-300 relative z-10">
      {description}
    </p>
  </motion.div>
);

const FeaturesSection = ({ features }: { features: Feature[] }) => (
  <section className="relative py-32 overflow-hidden">
    <GradientBackground />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-blue mb-6">
          Recursos Principais
        </h2>
        <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
          Funcionalidades poderosas que transformam seu negócio
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BenefitsSection = ({ benefits }: { benefits: string[] }) => (
  <section className="relative py-32 overflow-hidden">
    <GradientBackground />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-blue mb-6">
          Benefícios
        </h2>
        <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
          Vantagens que transformam seu negócio
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="group p-6 rounded-xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-zinc-300 group-hover:text-white transition-colors">
                  {benefit}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const RequirementsSection = ({ requirements }: { requirements: string[] }) => (
  <section className="relative py-32 overflow-hidden">
    <GradientBackground />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-blue mb-6">
          Requisitos do Sistema
        </h2>
        <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
          Configurações necessárias para o melhor desempenho
        </p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto rounded-2xl p-8 bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <ul className="space-y-6">
          {requirements.map((req, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <span className="text-lg text-zinc-300">
                {req}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/559185445267?text=Olá! Gostaria de saber mais sobre o sistema.`, '_blank');
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <GradientBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-blue mb-8">
            Ficou com alguma dúvida?
          </h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
            Entre em contato com um de nossos consultores pelo WhatsApp e descubra como podemos ajudar seu negócio a crescer
          </p>

          <Button
            onClick={handleWhatsAppClick}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-12 py-8 text-xl font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 transition-opacity group-hover:opacity-100"
              initial={false}
            />
            <span className="relative flex items-center">
              <MessageCircle className="w-6 h-6 mr-3" />
              Falar com Consultor
              <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const ProductDetailLayout = ({ product }: ProductPageProps) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style jsx global>{`
        .text-gradient-blue {
          background: linear-gradient(to right, #60A5FA, #3B82F6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .bg-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(59,130,246,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59,130,246,0.05) 1px, transparent 1px);
        }
      `}</style>
      
      <HeroSection
        name={product.name}
        description={product.description}
        imagePath={product.imagePath}
      />
      <FeaturesSection features={product.features} />
      <BenefitsSection benefits={product.benefits} />
      <RequirementsSection requirements={product.requirements} />
      <CTASection />
    </div>
  );
};

export default ProductDetailLayout;