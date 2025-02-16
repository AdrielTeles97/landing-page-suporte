"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();

            if (result.success) {
                // Success toast
                toast({
                    title: "Login Bem-sucedido",
                    description: "Você será redirecionado para o painel administrativo.",
                    variant: "default"
                });

                // Redirect to dashboard or alerts
                router.push(result.redirectUrl || '/admin/dashboard');
            } else {
                // Error toast
                toast({
                    title: "Erro de Login",
                    description: result.message || "Credenciais inválidas",
                    variant: "destructive"
                });
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            // Network error toast
            toast({
                title: "Erro de Conexão",
                description: "Não foi possível realizar o login. Verifique sua conexão.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(29,78,216,0.05),transparent)]" />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-gradient-blue mb-6 text-center">
                        Login Administrativo
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                Usuário
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">
                                Senha
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Carregando...' : 'Entrar'}
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}