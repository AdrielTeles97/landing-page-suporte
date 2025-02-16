// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/app/providers";
import { AlertBanner } from "@/components/ui/alert-banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suporte Bel Informática - Soluções em automação Comercial",
  description: "Soluções completas em ERP para pequenas, médias e grandes empresas",
  icons: {
    icon: [
      { url: '/bel.ico', sizes: 'any'},
      { url: '/favicon.png', sizes: '32x32', type: 'image/png'},
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>
          <AlertBanner />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}