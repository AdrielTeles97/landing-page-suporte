"use client";

import { createContext, useContext, useEffect, useState } from "react";

type AlertType = "error" | "warning" | "info" | "success";

interface SystemAlert {
  type: AlertType;
  message: string;
  active: boolean;
}

interface AlertContextType {
  alert: SystemAlert | null;
  setAlert: (alert: SystemAlert | null) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function Providers({ children }: { children: React.ReactNode }) {
  const [alert, setAlert] = useState<SystemAlert | null>(null);

  useEffect(() => {
    const fetchAlert = async () => {
      try {
        const response = await fetch('/api/alerts');
        const data = await response.json();
        if (data && data.active) {
          setAlert({
            type: data.type,
            message: data.message,
            active: data.active
          });
        }
      } catch (error) {
        console.error('Erro ao buscar alerta:', error);
      }
    };

    fetchAlert();
    // Verifica a cada 5 minutos
    const interval = setInterval(fetchAlert, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlert must be used within a AlertProvider');
  }
  return context;
}