/**
 * Datos para el aviso legal y las políticas de privacidad y cookies.
 *
 * Los datos identificativos proceden de la documentación legal facilitada.
 * El texto de las páginas adapta esa documentación al funcionamiento real
 * de esta web; debe mantenerse validado por el asesor legal de la empresa.
 */
export const legal = {
  razonSocial: 'Técnica dental J.V. S.L.',
  nif: 'B25923574',
  irus: '1000465661885',
  domicilioFiscal: 'C. del Palleter, 23, BAJO, 46008 València',
  emailContacto: 'tecnicadentaljv@gmail.com',
  telefono: '699 979 387',
  titulacion: 'Técnico Superior en Prótesis Dental',
  numeroColegiado: '1593',
  actualizado: 'octubre de 2026',
};

export const datosPendientes = Object.values(legal).some((v) => v.startsWith('[TODO'));
