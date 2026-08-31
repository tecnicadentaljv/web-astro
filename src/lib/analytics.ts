import { track as vercelTrack } from '@vercel/analytics';

/**
 * Analítica sin cookies y agnóstica de proveedor.
 *
 * Por qué no Google Analytics: GA4 en España obliga a banner de
 * consentimiento con bloqueo previo. Lo primero que vería un dentista al
 * entrar sería un modal, en una web cuyo argumento es la limpieza y la
 * franqueza. Y con el consentimiento denegado te quedas sin dato igualmente.
 *
 * Vercel Analytics es el proveedor por defecto. Si algún día se cambia a
 * Plausible o Umami, basta con cargar su script: las ramas de abajo lo
 * detectan solas y no hay que tocar ningún componente.
 */

type Datos = Record<string, string | number | boolean>;

interface OtrosProveedores {
  plausible?: (nombre: string, opciones?: { props: Datos }) => void;
  umami?: { track: (nombre: string, datos?: Datos) => void };
}

export function track(nombre: string, datos?: Datos): void {
  if (typeof window === 'undefined') return;
  const w = window as unknown as OtrosProveedores;

  try {
    vercelTrack(nombre, datos);
    w.plausible?.(nombre, datos ? { props: datos } : undefined);
    w.umami?.track(nombre, datos);
  } catch {
    // La analítica nunca debe romper la navegación.
  }
}

/**
 * LA conversión de esta web. No son las visitas: es que una clínica pulse
 * WhatsApp o el teléfono. Sin este evento, la analítica no dice nada útil.
 */
export const EVENTO_WHATSAPP = 'contacto_whatsapp';
export const EVENTO_TELEFONO = 'contacto_telefono';
