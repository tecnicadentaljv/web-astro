/**
 * Datos para aviso legal y política de privacidad.
 *
 * Obligatorio en España: aviso legal (LSSI-CE 34/2002) y política de
 * privacidad (RGPD + LOPDGDD). No hace falta política de cookies porque la
 * analítica elegida no usa cookies.
 *
 * Los textos de las páginas son una base redactada, no asesoramiento
 * jurídico: que los valide vuestro asesor antes de publicar.
 */
export const legal = {
  razonSocial: 'Tecnica Dental J.V., S.L.',
  // Desde 2008 las personas jurídicas tienen NIF, no CIF. La B es de S.L.
  nif: 'B25923574',
  domicilioFiscal: 'C. del Palleter, 23, BAJO, 46008 València',
  emailContacto: 'tecnicadentaljv@gmail.com',
  actualizado: 'agosto de 2026',
};

export const datosPendientes = Object.values(legal).some((v) => v.startsWith('[TODO'));
