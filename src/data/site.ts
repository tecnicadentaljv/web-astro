/**
 * Datos globales del sitio.
 * Editar aquí antes de publicar: dominio y horario.
 */

export const site = {
  nombre: 'Técnica Dental JV',
  nombreCorto: 'JV',
  claim: 'Laboratorio de prótesis dentales en Valencia',
  descripcion:
    'Laboratorio de prótesis dentales en Valencia especializado en prótesis fija, implantes, arcadas completas, férulas y carillas. Trabajamos solo con clínicas.',
  // El .es redirige al .com mediante 301 en el hosting. El canonical es siempre el .com.
  url: 'https://www.tecnicadentaljv.com',
  idioma: 'es',
  localidad: 'València',
} as const;

export const contacto = {
  whatsapp: '34699979387',
  whatsappVisible: '699 979 387',
  whatsappMensaje:
    'Hola, somos una clínica dental y nos gustaría pedir información sobre un caso.',

  telefono: '+34963845522',
  telefonoVisible: '963 845 522',

  direccion: 'C. del Palleter, 23, BAJO',
  codigoPostal: '46008',
  ciudad: 'València',
  direccionCompleta: 'C. del Palleter, 23, BAJO, 46008 València',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=39.469691%2C-0.386899',

  horario: 'Lunes a jueves de 8:00 a 18:30, viernes de 8:30 a 14:30',
  horarioCorto: 'Lunes a viernes',
} as const;

/**
 * ETIQUETA ÚNICA para la intención "contactar por WhatsApp".
 * Se usa igual en hero, cabecera, pie y barra flotante.
 * No crear variantes ("Hablar por WhatsApp", "Escríbenos", "Contacta"):
 * una intención, una etiqueta.
 */
export const CTA_WHATSAPP = 'Escríbenos por WhatsApp';

/** Etiqueta única para la intención "llamar". */
export const CTA_TELEFONO = `Llamar ${contacto.telefonoVisible}`;

/**
 * WhatsApp con mensaje precargado según el contexto desde el que se pulsa.
 * Sin argumento devuelve el mensaje genérico.
 * Ej.: whatsappUrl('un caso de carillas')
 */
export function whatsappUrl(contexto?: string): string {
  const mensaje = contexto
    ? `Hola, somos una clínica dental y nos gustaría comentaros ${contexto}.`
    : contacto.whatsappMensaje;
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const telefonoUrl = `tel:${contacto.telefono}`;

export const navegacion = [
  { texto: 'Inicio', href: '/' },
  { texto: 'Quiénes somos', href: '/quienes-somos' },
  { texto: 'Qué hacemos', href: '/que-hacemos' },
  { texto: 'Tecnología', href: '/tecnologia' },
  { texto: 'Contacto', href: '/contacto' },
] as const;
