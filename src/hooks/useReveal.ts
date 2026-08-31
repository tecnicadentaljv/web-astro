import { useEffect } from 'react';

/**
 * Aparición al entrar en viewport.
 *
 * Justificación de la animación: escalona la lectura de la sección para que
 * el ojo llegue al titular antes que al detalle. No es decoración.
 *
 * Implementado con IntersectionObserver, no con listener de scroll: no se
 * ejecuta en cada frame y no re-renderiza React. Un solo observador para
 * toda la página. Bajo `prefers-reduced-motion` no hace nada, porque el CSS
 * ya deja los elementos visibles.
 */
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elementos = document.querySelectorAll<HTMLElement>('.reveal:not(.visible)');

    if (reduce) {
      elementos.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    elementos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  });
}
