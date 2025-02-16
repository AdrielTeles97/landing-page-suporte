"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    AlertCircle,
    Users,
    Download,
    Settings,
    LogOut,
    ArrowLeft
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";


export default function AdminDashboard() {
    const { toast } = useToast();
    const router = useRouter();

    // Logout handler
    const handleLogout = async () => {
        try {
            // Call logout API or remove cookies
            const response = await fetch('/api/auth/logout', {
                method: 'POST'
            });

            if (response.ok) {
                // Clear local storage or any client-side auth state
                localStorage.removeItem('admin-token');

                // Show success toast
                toast({
                    title: "Logout Realizado",
                    description: "Você foi desconectado com sucesso.",
                    variant: "default"
                });

                // Redirect to login page
                router.push('/admin/login');
            } else {
                throw new Error('Logout failed');
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast({
                title: "Erro de Logout",
                description: "Não foi possível realizar o logout.",
                variant: "destructive"
            });
        }
    };

    useEffect(() => {
        // Exibe toast de boas-vindas
        toast({
            title: "Bem-vindo ao Painel Administrativo",
            description: "Aqui você pode gerenciar diferentes aspectos do sistema.",
            variant: "default"
        });
    }, [toast]);

    const dashboardItems = [
        {
            icon: AlertCircle,
            title: "Gerenciar Alertas",
            description: "Crie e gerencie alertas do sistema",
            href: "/admin/alerts"
        },
        {
            icon: Users,
            title: "Gerenciar Clientes",
            description: "Visualize e edite informações de clientes",
            href: "/admin/customers"
        },
        {
            icon: Download,
            title: "Downloads",
            description: "Gerencie arquivos e downloads",
            href: "/admin/downloads"
        },
        {
            icon: Settings,
            title: "Configurações",
            description: "Configurações gerais do sistema",
            href: "/admin/settings"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Admin Navigation */}
            <div className="bg-zinc-900 border-b border-zinc-800">
                <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                        <Link 
                            href="/" 
                            className="flex items-center text-zinc-400 hover:text-white"
                            title="Voltar para o site"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Voltar ao Site
                        </Link>
                        <span className="text-zinc-600">|</span>
                        <nav className="flex items-center space-x-4">
                            <Link 
                                href="/admin/dashboard" 
                                className="text-zinc-400 hover:text-white"
                            >
                                Painel
                            </Link>
                        </nav>
                    </div>
                    
                    <button 
                        onClick={handleLogout}
                        className="flex items-center text-red-400 
                        hover:text-red-300 transition-colors"
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sair
                    </button>
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="max-w-4xl mx-auto p-8 my-10">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    Painel Administrativo
                </h1>

                <div className="grid grid-cols-2 gap-6">
                    {dashboardItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 
                            hover:bg-zinc-800/50 transition-colors group"
                        >
                            <div className="flex items-center mb-4">
                                <item.icon
                                    className="w-10 h-10 text-blue-500 mr-4 
                                    group-hover:text-blue-400 transition-colors"
                                />
                                <h2 className="text-xl font-semibold text-white">
                                    {item.title}
                                </h2>
                            </div>
                            <p className="text-zinc-400">
                                {item.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}