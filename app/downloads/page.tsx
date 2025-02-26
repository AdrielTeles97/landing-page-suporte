"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ArrowDown, Shield, Headphones, Settings } from 'lucide-react';
import Link from 'next/link';

const DownloadPage = () => {
  const downloads = [
    {
      category: "Acesso Remoto",
      icon: <Monitor className="w-6 h-6" />,
      items: [
        {
          name: "TeamViewer 12",
          description: "Controle remoto e reuniões online",
          version: "QS",
          size: "12.1 MB",
          link: "/downloads/acesso-remoto/TeamViewerQS.exe"
        }
      ]
    },
    {
      category: "Utilitários",
      icon: <Settings className="w-6 h-6" />,
      items: [
        {
          name: "Envio de Arquivos XML",
          description: "Envie os arquivo xml do sistema digisat de forma-automática",
          version: "1.0.0",
          size: "15.2 MB",
          link: "/downloads/utilitarios/Envio_Arquivo_XML_Instalador.exe"
        },
        {
          name: "Envio de Arquivos XML 2.0",
          description: "Envie os arquivo xml do sistema digisat de forma-automática.",
          version: "2.0.0",
          size: "15.2 MB",
          link: "/downloads/utilitarios/EnvioArquivosXML_Setup2.0.0.exe"
        },
        {
          name: "Cadeia de Certificados",
          description: "Conjunto de cadeias de certificados digitais",
          version: "JAN 2025",
          size: "673 KB",
          link: "/downloads/utilitarios/cadeias.zip"
        },
        {
          name: "Instalador Automatico Certificados",
          description: "Utilize para tentar reconher e instalar certificado A3",
          version: "JAN 2025",
          size: "825 KB",
          link: "/downloads/utilitarios/SafeInstallerV2.rar"
        },
        
      ]
    },
    {
      category: "Drivers e Impressoras",
      icon: <Shield className="w-6 h-6" />,
      items: [
        {
          name: "Driver ELGIN I7, ELGIN I9",
          description: "Driver para impressoras elgin i7 e I9",
          version: "1.6.3",
          size: "995 KB",
          link: "/downloads/utilitarios/ELGIN_i9_i7_Driver_v-1.6.3.rar"
        },
        {
          name: "Driver Darum DR700",
          description: "Driver para impressora Darum DR700",
          version: "DR700",
          size: "4.0 MB",
          link: "/downloads/utilitarios/IMPRESSORA-DARUMA-DR700.rar"
        },
        {
          name: "Driver Darum DR800",
          description: "Driver para impressora Darum DR800",
          version: "DR800",
          size: "11.4 MB",
          link: "/downloads/utilitarios/INSTALAÇÃO DR800.zip"
        }
      ]
    }
  ];

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
            Downloads
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60"
          >
            Programas e utilitários para suporte
          </motion.p>
        </div>

        {/* Downloads Sections */}
        <div className="space-y-12">
          {downloads.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  {category.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.1) }}
                    className="group relative bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {item.name}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {item.description}
                        </p>
                      </div>
                      <Link
                        href={item.link}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                      >
                        <ArrowDown className="w-5 h-5" />
                      </Link>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/40">
                      <span>Versão: {item.version}</span>
                      <span>Tamanho: {item.size}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 text-center"
        >
          <Headphones className="w-8 h-8 text-blue-400 mx-auto mb-4" />
          <p className="text-white/60">
            Precisa de ajuda com a instalação? Entre em contato com nosso suporte:
          </p>
          <Link
            href="/contato"
            className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 justify-center mt-2"
          >
            Ver contatos
            <ArrowDown className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadPage;