// app/admin/layout.tsx
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/toaster"

export default function AdminLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className="bg-black text-white">
                <Navbar />
                {children}
                <Toaster />
            </body>
        </html>
    );
}