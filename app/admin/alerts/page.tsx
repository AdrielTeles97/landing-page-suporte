"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { AlertCircle, Info, CheckCircle, Bell } from 'lucide-react';

export default function AlertsAdmin() {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('warning');

  const createAlert = async () => {
    // Primeiro, desativa todos os alertas ativos
    await supabase
      .from('system_alerts')
      .update({ active: false })
      .eq('active', true);

    // Cria novo alerta
    const { error } = await supabase
      .from('system_alerts')
      .insert([
        {
          type,
          message,
          active: true
        }
      ]);

    if (error) {
      alert('Erro ao criar alerta');
    } else {
      alert('Alerta criado com sucesso!');
      setMessage('');
    }
  };

  const clearAlerts = async () => {
    const { error } = await supabase
      .from('system_alerts')
      .update({ active: false })
      .eq('active', true);

    if (error) {
      alert('Erro ao limpar alertas');
    } else {
      alert('Alertas limpos com sucesso!');
    }
  };

  // Preview do ícone baseado no tipo selecionado
  const getAlertIcon = () => {
    switch (type) {
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(29,78,216,0.05),transparent)]" />
      
      <div className="relative max-w-2xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-12 my-20">
            <Bell className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-gradient-blue">
              Gerenciar Alertas do Sistema
            </h1>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-zinc-400 text-sm font-medium">
                Tipo do Alerta
              </label>
              <div className="flex items-center gap-4">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="flex-1 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                >
                  <option value="info">Informação</option>
                  <option value="warning">Aviso</option>
                  <option value="error">Erro</option>
                  <option value="success">Sucesso</option>
                </select>
                {getAlertIcon()}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-zinc-400 text-sm font-medium">
                Mensagem
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                rows={4}
                placeholder="Digite a mensagem do alerta..."
              />
            </div>

            {/* Preview do Alerta */}
            {message && (
              <div className="relative overflow-hidden rounded-lg p-4 bg-zinc-900/50 border border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent" />
                <div className="relative flex items-start gap-3">
                  {getAlertIcon()}
                  <p className="text-sm text-zinc-300">{message}</p>
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={createAlert}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-6 py-3 font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                Criar Alerta
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={clearAlerts}
                className="flex-1 bg-zinc-900 text-white border border-zinc-800 rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-500/50"
              >
                Limpar Alertas
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .text-gradient-blue {
          background: linear-gradient(to right, #60A5FA, #3B82F6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
}