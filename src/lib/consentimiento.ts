export type ConsentimientoAnalitica = 'aceptado' | 'rechazado';

const CLAVE = 'tdjv_analitica';
let consentimientoEnMemoria: ConsentimientoAnalitica | null = null;

export function leerConsentimiento(): ConsentimientoAnalitica | null {
  if (typeof window === 'undefined') return null;
  if (consentimientoEnMemoria) return consentimientoEnMemoria;

  try {
    const valor = window.localStorage.getItem(CLAVE);
    return valor === 'aceptado' || valor === 'rechazado' ? valor : null;
  } catch {
    return null;
  }
}

export function guardarConsentimiento(valor: ConsentimientoAnalitica): void {
  consentimientoEnMemoria = valor;
  try {
    window.localStorage.setItem(CLAVE, valor);
  } catch {
    // La elección sigue vigente durante esta visita si el almacenamiento está bloqueado.
  }
}

export function analiticaPermitida(): boolean {
  return leerConsentimiento() === 'aceptado';
}
