import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";
import { AlertBanner } from "@/components/ui/alert-banner";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Suporte Bel - Sistemas de Automação Comercial",
    description: "Revenda autorizada de sistemas de automação comercial. Suporte técnico especializado, treinamento e implementação para seu negócio.",
    icons: {
        icon: [
            { url: '/bel.ico', sizes: 'any' },
            { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
        ],
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />
            </head>
            <body className={`${inter.className} min-h-screen flex flex-col bg-black`}>
                <Providers>
                    <div className="flex flex-col min-h-screen">
                        <AlertBanner />
                        <Navbar />
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </div>
                    <Toaster />
                </Providers>
            </body>
        </html>
    );
}