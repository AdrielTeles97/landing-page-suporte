"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, XCircle, Info, CheckCircle } from 'lucide-react';
import { useAlert } from '@/app/providers';
import { cn } from "@/lib/utils";

type AlertType = 'error' | 'warning' | 'info' | 'success';

interface SystemAlert {
  type: AlertType;
  message: string;
  active: boolean;
}

const getAlertStyles = (type: AlertType) => {
  const baseStyles = "backdrop-blur-md border";
  
  const typeStyles = {
    error: "bg-red-500/10 border-red-500/50 text-red-200",
    warning: "bg-yellow-500/10 border-yellow-500/50 text-yellow-200",
    info: "bg-blue-500/10 border-blue-500/50 text-blue-200",
    success: "bg-green-500/10 border-green-500/50 text-green-200"
  };

  return cn(baseStyles, typeStyles[type]);
};

const getAlertIcon = (type: AlertType) => {
  const iconProps = {
    className: "w-5 h-5",
    "aria-hidden": true
  };

  switch (type) {
    case 'error':
      return <AlertCircle {...iconProps} />;
    case 'warning':
      return <AlertCircle {...iconProps} />;
    case 'info':
      return <Info {...iconProps} />;
    case 'success':
      return <CheckCircle {...iconProps} />;
  }
};

export const AlertBanner = () => {
  const { alert, setAlert } = useAlert();

  if (!alert || !alert.active) return null;

  const handleClose = () => {
    setAlert(null);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pt-safe-top">
      <AnimatePresence>
        <motion.div
          role="alert"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "relative w-full shadow-lg",
            getAlertStyles(alert.type)
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {getAlertIcon(alert.type)}
                <p className="text-sm font-medium">
                  {alert.message}
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="p-1 rounded-full hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-label="Fechar alerta"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export type { SystemAlert, AlertType };