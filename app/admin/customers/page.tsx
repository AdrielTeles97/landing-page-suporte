"use client";

import { useState, useEffect } from 'react';
import { Search, Mail } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { CustomerModal } from '@/components/ui/customer-modal';
import { Edit, Trash2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

interface Customer {
    id: string;
    company_name: string;
    document_number: string;
    email: string;
    phone: string;
    status: string;
    payment_status: string;
    last_payment_date: string;
    next_payment_date: string;
}

export default function CustomersPage() {
    const { toast } = useToast();
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | undefined>();

    const handleAddCustomer = () => {
        setSelectedCustomer(undefined);
        setIsModalOpen(true);
    };

    const handleEditCustomer = (customer: Customer) => {
        setSelectedCustomer(customer);
        setIsModalOpen(true);
    };

    const handleSaveCustomer = async (customerData: Partial<Customer>) => {
        try {
            if (selectedCustomer) {
                // Editar
                const { error } = await supabase
                    .from('customers')
                    .update(customerData)
                    .eq('id', selectedCustomer.id);

                if (error) throw error;

                toast({
                    title: "Cliente Atualizado",
                    description: "Informações do cliente atualizadas com sucesso.",
                    variant: "default"
                });
            } else {
                // Adicionar
                const { error } = await supabase
                    .from('customers')
                    .insert([customerData]);

                if (error) throw error;

                toast({
                    title: "Cliente Adicionado",
                    description: "Novo cliente cadastrado com sucesso.",
                    variant: "default"
                });
            }

            fetchCustomers(); // Recarrega a lista
            setIsModalOpen(false);
        } catch (error) {
            console.error('Erro ao salvar cliente:', error);
            toast({
                title: "Erro",
                description: "Não foi possível salvar as informações do cliente.",
                variant: "destructive"
            });
        }
    };

    const handleDeleteCustomer = async (id: string) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este cliente?');
        
        if (!confirmDelete) return;

        try {
            const { error } = await supabase
                .from('customers')
                .delete()
                .eq('id', id);

            if (error) throw error;

            toast({
                title: "Cliente Excluído",
                description: "O cliente foi removido com sucesso.",
                variant: "default"
            });

            fetchCustomers(); // Recarrega a lista
        } catch (error) {
            console.error('Erro ao excluir cliente:', error);
            toast({
                title: "Erro",
                description: "Não foi possível excluir o cliente.",
                variant: "destructive"
            });
        }
    };

    const sendPaymentReminder = async (customerId: string, email: string) => {
        try {
            const response = await fetch('/api/send-reminder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ customerId, email }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Erro ao enviar lembrete');
            }

            toast({
                title: "Lembrete Enviado",
                description: "O lembrete de pagamento foi enviado com sucesso.",
                variant: "default"
            });
        } catch (error) {
            console.error('Erro ao enviar lembrete:', error);
            toast({
                title: "Erro",
                description: "Não foi possível enviar o lembrete de pagamento.",
                variant: "destructive"
            });
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const { data, error } = await supabase
                .from('customers')
                .select('*')
                .order('company_name');

            if (error) throw error;
            setCustomers(data || []);
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
            toast({
                title: "Erro de Carregamento",
                description: "Não foi possível carregar os clientes.",
                variant: "destructive"
            });
        } finally {
            
        }
    };

    const filteredCustomers = customers.filter(customer => {
        const searchLower = searchTerm.toLowerCase();
        return (
            customer.company_name.toLowerCase().includes(searchLower) ||
            customer.document_number.includes(searchTerm) ||
            customer.email.toLowerCase().includes(searchLower)
        );
    });

    return (
        <div className="min-h-screen bg-black text-white p-8">
            {/* Barra de Pesquisa */}
            <div className="max-w-7xl mx-auto mb-8 my-20">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                    <input
                        type="text"
                        placeholder="Buscar por nome, CPF/CNPJ ou email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto mb-6 flex justify-end">
                <Button
                    onClick={handleAddCustomer}
                    className="flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" />
                    Novo Cliente
                </Button>
            </div>

            {/* Lista de Clientes */}
            <div className="max-w-7xl mx-auto">
                <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-zinc-800">
                                    <th className="px-6 py-4 text-left text-zinc-400 font-medium">Empresa</th>
                                    <th className="px-6 py-4 text-left text-zinc-400 font-medium">CPF/CNPJ</th>
                                    <th className="px-6 py-4 text-left text-zinc-400 font-medium">Status Pagamento</th>
                                    <th className="px-6 py-4 text-left text-zinc-400 font-medium">Próximo Vencimento</th>
                                    <th className="px-6 py-4 text-left text-zinc-400 font-medium">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800">
                                {filteredCustomers.map((customer) => (
                                    <tr key={customer.id} className="hover:bg-zinc-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className="font-medium text-white">{customer.company_name}</div>
                                                <div className="text-sm text-zinc-400">{customer.email}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-zinc-300">{customer.document_number}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${customer.payment_status === 'up_to_date'
                                                ? 'bg-green-500/10 text-green-400'
                                                : 'bg-red-500/10 text-red-400'
                                                }`}>
                                                {customer.payment_status === 'up_to_date' ? 'Em dia' : 'Pendente'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-zinc-300">
                                            {new Date(customer.next_payment_date).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => handleEditCustomer(customer)}
                                                    className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                                                    title="Editar"
                                                >
                                                    <Edit className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteCustomer(customer.id)}
                                                    className="p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-800 rounded-lg transition-colors"
                                                    title="Excluir"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => sendPaymentReminder(customer.id, customer.email)}
                                                    className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                                                    title="Enviar lembrete"
                                                >
                                                    <Mail className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Adicione o modal ao final do componente */}
            <CustomerModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                customer={selectedCustomer}
                onSave={handleSaveCustomer}
            />
        </div>
    );
}

