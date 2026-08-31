import { useEffect } from 'react';
import { track, EVENTO_WHATSAPP, EVENTO_TELEFONO } from '@/lib/analytics';

/**
 * Registra los clics a WhatsApp y teléfono con un único listener delegado en
 * document, en lugar de un onClick en cada uno de los enlaces repartidos por
 * la web. Así no hay forma de añadir un CTA nuevo y olvidarse de medirlo.
 *
 * `origen` guarda la ruta desde la que se pulsó, que es lo que permite saber
 * qué página convierte.
 */
export function useContactoTracking() {
  useEffect(() => {
    function alPulsar(evento: MouseEvent) {
      const destino = (evento.target as HTMLElement | null)?.closest?.('a');
      if (!destino) return;

      const href = destino.getAttribute('href') ?? '';
      const origen = window.location.pathname;

      if (href.startsWith('https://wa.me/')) {
        track(EVENTO_WHATSAPP, { origen });
      } else if (href.startsWith('tel:')) {
        track(EVENTO_TELEFONO, { origen });
      }
    }

    document.addEventListener('click', alPulsar);
    return () => document.removeEventListener('click', alPulsar);
  }, []);
}
