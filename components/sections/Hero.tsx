"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden font-['Inter'] flex items-center justify-center">
      {/* Background gradient with improved grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-blue-400/10 to-sky-400/5" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(255,255,255,0.03)_1.5px,transparent_1.5px)] bg-[size:35px_35px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(56,189,248,0.08),transparent)]" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
        <div className="text-center">
          {/* Announcement badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-blue-200 font-light">✨ Sua empresa no próximo nível</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white"
          >
            <span className="block font-light">Suporte Técnico</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent font-medium">
              Bel Informática
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed px-4"
          >
            Soluções completas em automação comercial para pequenas, médias e grandes empresas.
            Implantação, treinamento e suporte especializado para impulsionar seu negócio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <Link
              href="/downloads/acesso-remoto/TeamViewerQS.exe"
              className="group px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
              download
            >
              Baixar Teamviewer 12
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Link>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;