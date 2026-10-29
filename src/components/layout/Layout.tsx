import { useEffect, useState, type ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { useContactoTracking } from '@/hooks/useContactoTracking';
import {
  analiticaPermitida,
  guardarConsentimiento,
  leerConsentimiento,
  type ConsentimientoAnalitica,
} from '@/lib/consentimiento';
import Header from './Header';
import Footer from './Footer';
import ContactoFlotante from './ContactoFlotante';
import AvisoCookies from './AvisoCookies';

export default function Layout({ children }: { children: ReactNode }) {
  const [consentimiento, setConsentimiento] = useState<ConsentimientoAnalitica | null>(null);
  const [preferenciasAbiertas, setPreferenciasAbiertas] = useState(false);
  useContactoTracking();

  useEffect(() => {
    const guardado = leerConsentimiento();
    setConsentimiento(guardado);
    setPreferenciasAbiertas(guardado === null);
  }, []);

  function elegir(valor: ConsentimientoAnalitica) {
    const retirarConsentimiento = consentimiento === 'aceptado' && valor === 'rechazado';
    guardarConsentimiento(valor);
    setConsentimiento(valor);
    setPreferenciasAbiertas(false);

    // El SDK de Vercel deja su script en la página al desmontar Analytics.
    if (retirarConsentimiento) window.location.reload();
  }

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
      <Footer onAbrirPreferencias={() => setPreferenciasAbiertas(true)} />
      <ContactoFlotante />
      {consentimiento === 'aceptado' && (
        <Analytics beforeSend={(evento) => (analiticaPermitida() ? evento : null)} />
      )}
      {preferenciasAbiertas && (
        <AvisoCookies consentimiento={consentimiento} onElegir={elegir} />
      )}
    </div>
  );
}
