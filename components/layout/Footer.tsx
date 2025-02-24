// Footer.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [year, setYear] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setYear(new Date().getFullYear().toString());
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm text-center md:text-left">
            © {year} Bel Informática LTDA. Todos os direitos reservados.
          </div>
          
          <div className="text-white/60 text-sm flex items-center gap-2">
            Desenvolvido por 
            <Link 
              href="https://github.com/adrielteles97" 
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
            >
              Adriel Teles
              <span className="text-xs ordinal">Web Developer</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;