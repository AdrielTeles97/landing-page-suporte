import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sua Empresa - Soluções em ERP",
  description: "Soluções completas em ERP para pequenas, médias e grandes empresas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      
      <body className={inter.className}>
        <Navbar />
          {children}
        <Footer />
      </body>  
    </html>
  );
}