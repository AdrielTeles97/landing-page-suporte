"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="bg-zinc-950 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        {/* Emoji Animado */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="text-8xl mb-8"
        >
          😢
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Oops!
        </motion.h1>

        {/* Mensagem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 mb-8"
        >
          <p className="text-xl text-white/60">
            Parece que esta página se perdeu no ciberespaço...
          </p>
          <p className="text-white/40">
            Erro 404 - Página não encontrada
          </p>
        </motion.div>

        {/* Animação de "procurando" */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="mb-8"
        >
          <Search className="w-16 h-16 text-blue-400 mx-auto" />
        </motion.div>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Voltar para o início
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors"
          >
            Falar com suporte
          </Link>
        </motion.div>

        {/* Easter Egg - Aparece depois de um tempo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 text-white/30 text-sm"
        >
          Até as melhores páginas às vezes tiram um dia de folga... 🌴
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;