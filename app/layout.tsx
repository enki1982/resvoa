import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RESVOA – Pide ayuda para tus microtareas y conecta con personas cercanas',
  description: 'RESVOA es la plataforma que conecta a personas que necesitan ayuda con quienes pueden resolver microtareas del día a día: recados, compras, ayuda ligera en casa, cuidado de mascotas y más, con pagos seguros y reputación verificada.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
