import { track as vercelTrack } from '@vercel/analytics';
import { analiticaPermitida } from './consentimiento';

/** Envía eventos únicamente cuando se ha aceptado la analítica opcional. */

type Datos = Record<string, string | number | boolean>;

interface OtrosProveedores {
  plausible?: (nombre: string, opciones?: { props: Datos }) => void;
  umami?: { track: (nombre: string, datos?: Datos) => void };
}

export function track(nombre: string, datos?: Datos): void {
  if (typeof window === 'undefined' || !analiticaPermitida()) return;
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
