"use client";

import { useState, useEffect } from 'react';
import { Button } from './button';

interface Customer {
    id?: string;
    company_name: string;
    document_number: string;
    email: string;
    phone: string;
    status?: string;
    payment_status: string;
    last_payment_date?: string;
    next_payment_date: string;
}

interface CustomerModalProps {
    isOpen: boolean;
    onClose: () => void;
    customer?: Customer;
    onSave: (customerData: Partial<Customer>) => void;
}

export function CustomerModal({ 
    isOpen, 
    onClose, 
    customer, 
    onSave 
}: CustomerModalProps) {
    const [formData, setFormData] = useState<Partial<Customer>>({
        company_name: '',
        document_number: '',
        email: '',
        phone: '',
        payment_status: 'up_to_date',
        next_payment_date: ''
    });

    // Reset form when modal opens/closes or customer changes
    useEffect(() => {
        if (customer) {
            // Populate form with existing customer data
            setFormData({
                id: customer.id,
                company_name: customer.company_name || '',
                document_number: customer.document_number || '',
                email: customer.email || '',
                phone: customer.phone || '',
                payment_status: customer.payment_status || 'up_to_date',
                next_payment_date: customer.next_payment_date 
                    ? new Date(customer.next_payment_date).toISOString().split('T')[0] 
                    : ''
            });
        } else {
            // Reset form for new customer
            setFormData({
                company_name: '',
                document_number: '',
                email: '',
                phone: '',
                payment_status: 'up_to_date',
                next_payment_date: ''
            });
        }
    }, [customer, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate required fields
        if (!formData.company_name || !formData.email) {
            alert('Por favor, preencha os campos obrigatórios');
            return;
        }

        // Call onSave with form data
        onSave(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">
                        {customer ? 'Editar Cliente' : 'Novo Cliente'}
                    </h2>
                    <button 
                        onClick={onClose}
                        className="text-zinc-400 hover:text-white"
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                            Nome da Empresa
                        </label>
                        <input
                            type="text"
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleChange}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                            CPF/CNPJ
                        </label>
                        <input
                            type="text"
                            name="document_number"
                            value={formData.document_number}
                            onChange={handleChange}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                            Telefone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                            placeholder="Preencha este campo."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                            Status do Pagamento
                        </label>
                        <select
                            name="payment_status"
                            value={formData.payment_status}
                            onChange={handleChange}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                        >
                            <option value="up_to_date">Em dia</option>
                            <option value="pending">Pendente</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                            Próximo Vencimento
                        </label>
                        <input
                            type="date"
                            name="next_payment_date"
                            value={formData.next_payment_date}
                            onChange={handleChange}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                        />
                    </div>

                    <div className="flex justify-end space-x-4 pt-4">
                        <Button 
                            type="button" 
                            variant="outline" 
                            onClick={onClose}
                        >
                            Cancelar
                        </Button>
                        <Button type="submit">
                            Salvar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}