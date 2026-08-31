import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { useContactoTracking } from '@/hooks/useContactoTracking';
import Header from './Header';
import Footer from './Footer';
import ContactoFlotante from './ContactoFlotante';

export default function Layout({ children }: { children: ReactNode }) {
  useContactoTracking();

  return (
    <div className="min-h-dvh bg-fondo pb-14 text-tinta antialiased md:pb-0">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-acento focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">{children}</main>
      <Footer />
      <ContactoFlotante />
      <Analytics />
    </div>
  );
}
