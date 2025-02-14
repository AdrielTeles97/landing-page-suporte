"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Award, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
    const stats = [
        {
            number: "20+",
            label: "Anos de mercado",
            icon: <Building2 className="w-6 h-6 text-blue-500" />
        },
        {
            number: "1000+",
            label: "Clientes atendidos",
            icon: <Users className="w-6 h-6 text-blue-500" />
        },
        {
            number: "4",
            label: "Parceiros estratégicos",
            icon: <HeartHandshake className="w-6 h-6 text-blue-500" />
        },
        {
            number: "24/7",
            label: "Suporte especializado",
            icon: <Award className="w-6 h-6 text-blue-500" />
        }
    ];

    const partners = [
        {
            name: "Zucchetti",
            logo: "/api/placeholder/200/80", // Substituir pela logo real
            description: "Líder em soluções de software empresarial"
        },
        {
            name: "GDOOR",
            logo: "/api/placeholder/200/80", // Substituir pela logo real
            description: "Especialista em sistemas de gestão"
        },
        {
            name: "DIGISAT TECNOLOGIA",
            logo: "/api/placeholder/200/80", // Substituir pela logo real
            description: "Referência em soluções tecnológicas"
        },
        {
            name: "IDEALSOFT",
            logo: "/api/placeholder/200/80", // Substituir pela logo real
            description: "Inovação em software empresarial"
        }
    ];

    return (
        <div className="bg-zinc-950 min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520,transparent_1px),linear-gradient(to_bottom,#4f46e520,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(56,189,248,0.05),transparent)]" />

                <div className="relative max-w-6xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-center text-white mb-8"
                    >
                        Bel Informática
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/60 text-center max-w-3xl mx-auto"
                    >
                        Há mais de duas décadas transformando empresas através da tecnologia,
                        com soluções inovadoras e suporte especializado.
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-white/60">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-20 bg-zinc-900/50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nossa História</h2>
                            <p className="text-white/60 mb-4">
                                Fundada com o propósito de trazer inovação e eficiência para empresas de todos os portes,
                                a Bel Informática se estabeleceu como referência no mercado de software de gestão.
                            </p>
                            <p className="text-white/60">
                                Nossa jornada é marcada pelo compromisso com a excelência e pela busca constante
                                por soluções que realmente façam a diferença no dia a dia de nossos clientes.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-xl overflow-hidden"
                        >
                            <Image
                                src="/api/placeholder/600/400"
                                alt="Bel Informática História"
                                className="w-full h-full object-cover"
                                height={600}
                                width={400}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
                    >
                        Nossos Parceiros
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-zinc-900/50 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="w-full h-20 object-contain mb-4"
                                    height={100}
                                    width={100}
                                />
                                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                                <p className="text-white/60 text-sm">{partner.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-20 bg-zinc-900/50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Conheça nossa empresa
                        </h2>
                        <p className="text-white/60">
                            Veja como transformamos negócios através da tecnologia
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="aspect-video rounded-2xl overflow-hidden bg-zinc-800"
                    >
                        {/* Substitua pelo iframe do seu vídeo */}
                        <iframe
                            className="w-full h-full"
                            src="SEU_LINK_DO_VIDEO"
                            title="Vídeo Institucional"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </motion.div>
                </div>
            </section>

            
            {/* Values Section */}
            <section className="py-20 bg-zinc-900/50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-12"
                    >
                        Nossos Valores
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Inovação",
                                description: "Buscamos constantemente as melhores soluções tecnológicas para nossos clientes"
                            },
                            {
                                title: "Compromisso",
                                description: "Dedicação total ao sucesso e crescimento de cada cliente"
                            },
                            {
                                title: "Excelência",
                                description: "Qualidade superior em produtos e atendimento"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6"
                            >
                                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                                <p className="text-white/60">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Acompanhe nossas redes sociais
                        </h2>

                        <div className="flex items-center justify-center gap-8">
                            <Link
                                href="https://facebook.com/belinformatica"
                                target="_blank"
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative flex items-center justify-center w-16 h-16 bg-zinc-900 rounded-full hover:bg-zinc-800 transition duration-300">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="text-blue-500"
                                    >
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </Link>

                            <Link
                                href="https://instagram.com/belinformatica"
                                target="_blank"
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative flex items-center justify-center w-16 h-16 bg-zinc-900 rounded-full hover:bg-zinc-800 transition duration-300">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="text-pink-500"
                                    >
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </Link>
                        </div>

                        <div className="mt-8 text-white/60">
                            <p>Fique por dentro das novidades e atualizações</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;