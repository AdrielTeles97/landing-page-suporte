// app/providers.tsx
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
  const [mounted, setMounted] = useState(false);
  const [alert, setAlert] = useState<SystemAlert | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchAlert = async () => {
      try {
        const response = await fetch('/api/alerts');
        if (!response.ok) return;
        
        const data = await response.json();
        if (data && data.active) {
          setAlert({
            type: data.type || 'info',
            message: data.message || '',
            active: true
          });
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Erro ao buscar alertas:', error);
        }
      }
    };

    fetchAlert();
    const interval = setInterval(fetchAlert, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

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