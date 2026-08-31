import { flushSync } from 'react-dom';

/**
 * Cruce entre páginas con la View Transitions API nativa del navegador.
 *
 * Por qué esto y no una librería: es una API del navegador, cero peso en el
 * bundle, y ya sabe hacer un cross-fade decente sin configurar nada. La
 * cabecera y el pie no cambian entre rutas, así que el navegador los ve
 * "iguales" en la foto de antes y después y no parpadean; solo el contenido
 * de <main> crossfadea de verdad.
 *
 * Por qué flushSync: startViewTransition necesita que el DOM ya esté
 * actualizado cuando su callback termina, para poder fotografiar el
 * "después". React aplica los cambios de forma asíncrona por defecto;
 * flushSync fuerza a que el cambio de ruta se pinte antes de que la promesa
 * del callback se resuelva.
 *
 * Sin soporte del navegador, o con "reducir movimiento" activado, no hace
 * nada especial: navega normal, sin efecto.
 */
export function navegarConTransicion(navegar: () => void): void {
  const soportado = typeof document !== 'undefined' && 'startViewTransition' in document;
  const reducido =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!soportado || reducido) {
    navegar();
    return;
  }

  document.startViewTransition(() => {
    flushSync(navegar);
  });
}
