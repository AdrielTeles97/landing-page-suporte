"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="bg-zinc-950 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Entre em Contato
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60"
          >
            Estamos aqui para ajudar você
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-6">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <Link 
              href="mailto:belinformática2019@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              belinformática2019@gmail.com
            </Link>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 mb-6">
              <Phone className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">WhatsApp Suporte</h3>
            <Link 
              href="https://wa.me/5591985445267"
              target="_blank"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              (91) 98544-5267
            </Link>
          </motion.div>

          {/* Working Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 mb-6">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Horário de Atendimento</h3>
            <ul className="text-white/60 space-y-2">
              <li>Segunda a Sexta</li>
              <li>08:30 às 12:00</li>
              <li>13:00 às 18:00</li>
            </ul>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="https://wa.me/5591985445267"
            target="_blank"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Falar com suporte
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;