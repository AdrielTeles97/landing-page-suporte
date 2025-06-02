"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, ChevronRight, Tag, Box, Printer, ShieldCheck, Monitor, Server, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const SolucoesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const sistemas = [
        {
            id: "gdoor",
            name: "Sistemas Gdoor",
            icon: <Box className="w-6 h-6" />,
            description: "Soluções para sistemas de gestão Gdoor Pro, Gdoor Slim e Gdoor Web",
            categories: [
                {
                    id: "instalacao",
                    name: "Instalação e Configuração",
                    articles: [
                        {
                            id: "gdoor-pro-instalacao",
                            title: "Como instalar o Gdoor Pro",
                            description: "Guia passo-a-passo para instalação do sistema Gdoor Pro",
                            slug: "/solucoes/gdoor/instalacao-gdoor-pro",
                            tags: ["instalação", "primeiros passos"]
                        },
                        {
                            id: "gdoor-web-configuracao",
                            title: "Configuração inicial do Gdoor Web",
                            description: "Aprenda a configurar o sistema Gdoor Web pela primeira vez",
                            slug: "/solucoes/gdoor/configuracao-gdoor-web",
                            tags: ["configuração", "web"]
                        },
                    ]
                },
                {
                    id: "erros-comuns",
                    name: "Erros Comuns",
                    articles: [
                        {
                            id: "erro-conexao-banco",
                            title: "Erro de conexão com banco de dados",
                            description: "Como resolver problemas de conexão com o banco de dados no Gdoor Pro",
                            slug: "/solucoes/gdoor/erro-conexao-banco",
                            tags: ["banco de dados", "erro", "conexão"]
                        },
                        {
                            id: "erro-atualizacao",
                            title: "Erro durante atualização",
                            description: "Soluções para erros durante a atualização do sistema",
                            slug: "/solucoes/gdoor/erro-atualizacao",
                            tags: ["atualização", "erro"]
                        },
                    ]
                },
            ]
        },
        {
            id: "digisat",
            name: "Sistemas Digisat",
            icon: <Monitor className="w-6 h-6" />,
            description: "Soluções para Digisat Comercial e Gerencial",
            categories: [
                {
                    id: "nfe",
                    name: "Nota Fiscal Eletrônica",
                    articles: [
                        {
                            id: "rejeicoes-nfe",
                            title: "Resolvendo rejeições de NF-e",
                            description: "Como resolver os principais códigos de rejeição na emissão de notas fiscais",
                            slug: "/solucoes/digisat/rejeicoes-nfe",
                            tags: ["nf-e", "rejeição", "fiscal"]
                        },
                        {
                            id: "certificado-digital",
                            title: "Configurar Certificado Digital",
                            description: "Como instalar e configurar seu certificado digital no sistema",
                            slug: "/solucoes/digisat/certificado-digital",
                            tags: ["certificado", "a1", "a3"]
                        },
                    ]
                },
                {
                    id: "terminal",
                    name: "Terminais e Estações",
                    articles: [
                        {
                            id: "instalacao-terminal",
                            title: "Instalação de Terminal",
                            description: "Como configurar um novo terminal na rede",
                            slug: "/solucoes/digisat/instalacao-terminal",
                            tags: ["terminal", "rede"]
                        },
                        {
                            id: "erros-comunicacao",
                            title: "Problemas de Comunicação",
                            description: "Resolva problemas de comunicação entre servidor e terminais",
                            slug: "/solucoes/digisat/erros-comunicacao",
                            tags: ["rede", "comunicação", "terminal"]
                        }
                    ]
                }
            ]
        },
        {
            id: "shopcontrol",
            name: "Shop Control 9",
            icon: <Database className="w-6 h-6" />,
            description: "Soluções para o sistema Shop Control 9",
            categories: [
                {
                    id: "erros-comuns",
                    name: "Erros Comuns",
                    articles: [
                        {
                            id: "erro-banco-dados-shop",
                            title: "Erro de banco de dados",
                            description: "Resolva problemas com o banco de dados no Shop Control",
                            slug: "/solucoes/shopcontrol/erro-banco-dados",
                            tags: ["banco de dados", "erro"]
                        },
                        {
                            id: "licenciamento",
                            title: "Problemas de licenciamento",
                            description: "Como resolver problemas com o licenciamento do sistema",
                            slug: "/solucoes/shopcontrol/licenciamento",
                            tags: ["licença", "ativação"]
                        },
                    ]
                }
            ]
        },
        {
            id: "hardware",
            name: "Hardware e Impressoras",
            icon: <Printer className="w-6 h-6" />,
            description: "Soluções para problemas de hardware e impressoras",
            categories: [
                {
                    id: "impressoras-fiscais",
                    name: "Impressoras Fiscais",
                    articles: [
                        {
                            id: "elgin-i9",
                            title: "Configuração Elgin I9",
                            description: "Como instalar e configurar a impressora Elgin I9",
                            slug: "/solucoes/hardware/elgin-i9",
                            tags: ["elgin", "impressora"]
                        },
                        {
                            id: "daruma-dr700",
                            title: "Problemas com Daruma DR700",
                            description: "Resolva os problemas mais comuns com a impressora Daruma DR700",
                            slug: "/solucoes/hardware/daruma-dr700",
                            tags: ["daruma", "impressora"]
                        },
                    ]
                }
            ]
        }
    ];

    // Filtrar os sistemas com base no termo de pesquisa
    const filteredSistemas = sistemas.map(sistema => {
        const filteredCategories = sistema.categories.map(category => {
            const filteredArticles = category.articles.filter(article =>
                article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );

            return {
                ...category,
                articles: filteredArticles
            };
        }).filter(category => category.articles.length > 0);

        return {
            ...sistema,
            categories: filteredCategories
        };
    }).filter(sistema => sistema.categories.length > 0);

    return (
        <div className="bg-zinc-950 min-h-screen pt-20">
            <div className="max-w-6xl mx-auto px-4 py-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Base de Conhecimento
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/60 max-w-2xl mx-auto"
                    >
                        Explore nossa base de soluções técnicas para resolver problemas comuns,
                        instalar e configurar nossos sistemas, e otimizar seu uso.
                    </motion.p>
                </div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
                        <input
                            type="text"
                            placeholder="Buscar soluções, erros ou dicas..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </motion.div>

                {/* Systems List */}
                <div className="space-y-16">
                    {filteredSistemas.map((sistema, index) => (
                        <motion.div
                            key={sistema.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (index * 0.1) }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400">
                                    {sistema.icon}
                                </div>
                                <h2 className="text-2xl font-semibold text-white">
                                    {sistema.name}
                                </h2>
                            </div>

                            <p className="text-white/60 mb-6">
                                {sistema.description}
                            </p>

                            <div className="space-y-8">
                                {sistema.categories.map((category) => (
                                    <div key={category.id} className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800">
                                        <h3 className="text-xl font-medium text-white mb-4">
                                            {category.name}
                                        </h3>
                                        <div className="divide-y divide-zinc-800">
                                            {category.articles.map((article) => (
                                                <Link
                                                    key={article.id}
                                                    href={article.slug}
                                                    className="block py-4 group"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="text-white group-hover:text-blue-400 transition-colors font-medium">
                                                                {article.title}
                                                            </h4>
                                                            <p className="text-white/60 text-sm mt-1">
                                                                {article.description}
                                                            </p>
                                                            <div className="flex flex-wrap gap-2 mt-2">
                                                                {article.tags.map((tag) => (
                                                                    <span
                                                                        key={tag}
                                                                        className="inline-flex items-center text-xs bg-zinc-800 text-white/60 px-2 py-1 rounded-md"
                                                                    >
                                                                        <Tag className="w-3 h-3 mr-1" />
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-blue-400 transition-colors" />
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Need Help Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 text-center"
                >
                    <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <p className="text-white font-medium text-lg mb-2">
                        Não encontrou uma solução?
                    </p>
                    <p className="text-white/60">
                        Entre em contato com nosso suporte para obter ajuda personalizada.
                    </p>
                    <Link
                        href="/contato"
                        className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 justify-center mt-4 font-medium"
                    >
                        Falar com suporte
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default SolucoesPage;