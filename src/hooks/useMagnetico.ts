import { useEffect, useRef } from 'react';

/**
 * Tira sutilmente de un elemento hacia el cursor al pasar por encima.
 * Se usa solo en los CTA principales: es donde queremos que se note la
 * respuesta táctil de la web, no en todo, que sería ruido.
 *
 * Sin Motion ni ninguna librería de animación: un ref con listeners
 * nativos que escriben el transform directamente en el DOM, sin pasar por
 * el ciclo de render de React. Es el patrón correcto para un valor continuo
 * de puntero: usar useState aquí re-renderizaría en cada pixel de
 * movimiento del ratón.
 *
 * Se desactiva solo, sin comprobarlo en cada evento, cuando el dispositivo
 * no tiene puntero fino con hover (móvil, tablet) o cuando el usuario pide
 * reducir el movimiento.
 */
export function useMagnetico<T extends HTMLElement>(fuerza = 0.25) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    function mover(e: PointerEvent) {
      const r = el!.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * fuerza;
      const y = (e.clientY - r.top - r.height / 2) * fuerza;
      el!.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    }

    function salir() {
      el!.style.transform = '';
    }

    el.addEventListener('pointermove', mover);
    el.addEventListener('pointerleave', salir);
    return () => {
      el.removeEventListener('pointermove', mover);
      el.removeEventListener('pointerleave', salir);
    };
  }, [fuerza]);

  return ref;
}
