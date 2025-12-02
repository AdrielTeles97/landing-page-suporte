import { AlertTriangle, Calendar, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function AvisoG6() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-zinc-950 py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Card Principal */}
                    <div className="bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-red-500/20">
                        {/* Header com Alerta */}
                        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 text-center">
                            <div className="flex justify-center mb-4">
                                <div className="bg-white/20 p-4 rounded-full">
                                    <AlertTriangle className="w-16 h-16" />
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold mb-2">
                                Aviso Importante
                            </h1>
                            <p className="text-xl text-red-100">
                                Para usuários do Sistema G6
                            </p>
                        </div>

                        {/* Conteúdo */}
                        <div className="p-8 md:p-12">
                            {/* Mensagem Principal */}
                            <div className="bg-red-500/10 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
                                <h2 className="text-2xl font-bold text-red-400 mb-3">
                                    Sistema G6 Descontinuado
                                </h2>
                                <p className="text-zinc-300 text-lg leading-relaxed">
                                    Informamos que o Sistema G6 não recebe
                                    atualizações desde{' '}
                                    <strong className="text-red-400">
                                        agosto de 2021
                                    </strong>{' '}
                                    e foi oficialmente descontinuado.
                                </p>
                            </div>

                            {/* Informação de Data */}
                            <div className="flex items-start gap-4 mb-8 bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                                <div className="bg-yellow-500/20 p-3 rounded-lg flex-shrink-0">
                                    <Calendar className="w-8 h-8 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                                        Última Atualização
                                    </h3>
                                    <p className="text-zinc-300 text-lg">
                                        Agosto de 2021 - Há mais de 3 anos sem
                                        suporte ou correções de segurança
                                    </p>
                                </div>
                            </div>

                            {/* Ação Necessária */}
                            <div className="bg-blue-500/10 p-8 rounded-xl mb-8 border border-blue-500/20">
                                <h3 className="text-2xl font-bold text-blue-400 mb-4">
                                    Ação Necessária
                                </h3>
                                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                                    É{' '}
                                    <strong className="text-blue-400">
                                        essencial
                                    </strong>{' '}
                                    que você atualize seu sistema imediatamente
                                    para continuar operando com segurança e
                                    conformidade.
                                </p>
                                <p className="text-zinc-300 text-lg leading-relaxed">
                                    O valor da migração{' '}
                                    <strong className="text-blue-400">
                                        varia de acordo com a versão
                                    </strong>{' '}
                                    atual do seu sistema e necessidades
                                    específicas.
                                </p>
                            </div>

                            {/* Riscos */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-zinc-100 mb-4">
                                    Riscos de continuar com o G6:
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 text-2xl flex-shrink-0">
                                            •
                                        </span>
                                        <span className="text-zinc-300 text-lg">
                                            Vulnerabilidades de segurança não
                                            corrigidas
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 text-2xl flex-shrink-0">
                                            •
                                        </span>
                                        <span className="text-zinc-300 text-lg">
                                            Incompatibilidade com legislações
                                            fiscais atualizadas
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 text-2xl flex-shrink-0">
                                            •
                                        </span>
                                        <span className="text-zinc-300 text-lg">
                                            Perda de suporte técnico
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 text-2xl flex-shrink-0">
                                            •
                                        </span>
                                        <span className="text-zinc-300 text-lg">
                                            Risco de parada total do sistema
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Call to Action */}
                            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold mb-3">
                                    Entre em Contato Agora
                                </h3>
                                <p className="text-green-100 text-lg mb-6">
                                    Consulte o valor da migração para o seu caso
                                    específico
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href="https://wa.me/5549999999999?text=Olá, preciso migrar do sistema G6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        WhatsApp
                                    </a>

                                    <a
                                        href="tel:+554999999999"
                                        className="flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all border-2 border-white"
                                    >
                                        <Phone className="w-6 h-6" />
                                        Ligar Agora
                                    </a>
                                </div>
                            </div>

                            {/* Rodapé */}
                            <div className="mt-8 text-center">
                                <Link
                                    href="/"
                                    className="text-blue-400 hover:text-blue-300 font-semibold text-lg underline"
                                >
                                    ← Voltar para o site
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
