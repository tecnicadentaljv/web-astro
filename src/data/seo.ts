/**
 * SEO por ruta, en un único sitio.
 *
 * Lo leen dos consumidores:
 *   1. useSeo(), que lo aplica en cliente al navegar dentro de la SPA.
 *   2. scripts/prerender.mjs, que lo escribe en el HTML estático de cada ruta.
 *
 * Ese segundo consumidor es el importante: los crawlers de WhatsApp, LinkedIn
 * y Facebook no ejecutan JavaScript. Sin prerender, compartir cualquier ruta
 * que no sea la home mostraba la tarjeta de la home.
 */

export interface SeoRuta {
  titulo: string;
  descripcion: string;
  noindex?: boolean;
}

export const seoRutas: Record<string, SeoRuta> = {
  '/': {
    titulo: 'Laboratorio de prótesis dentales en Valencia',
    descripcion:
      'Laboratorio dental en Valencia especializado en prótesis fija, implantes, arcadas y carillas. Trabajamos solo con clínicas y atendemos tu caso en menos de 24 horas.',
  },
  '/quienes-somos': {
    titulo: 'Quiénes somos',
    descripcion:
      'Un laboratorio dental nuevo en Valencia con más de treinta años de recorrido detrás. Seis personas y un interlocutor directo para tu clínica.',
  },
  '/que-hacemos': {
    titulo: 'Qué hacemos',
    descripcion:
      'Prótesis fija, implantes, arcadas completas, férulas de descarga y carillas. Laboratorio dental en Valencia para clínicas.',
  },
  '/tecnologia': {
    titulo: 'Tecnología y flujo de trabajo',
    descripcion:
      'Escáner de sobremesa, CAD/CAM, impresión 3D y acabado manual de cerámica y férulas. Así trabajamos los casos en Técnica Dental JV.',
  },
  '/contacto': {
    titulo: 'Contacto',
    descripcion:
      'Contacta con Técnica Dental JV por WhatsApp o teléfono. Laboratorio dental en C. del Palleter 23, 46008 València. Solo trabajamos con clínicas.',
  },
  '/blog': {
    titulo: 'Blog',
    descripcion:
      'Notas prácticas para clínicas sobre flujo digital, casos sobre implantes y trabajo de laboratorio.',
    noindex: true,
  },
  '/aviso-legal': {
    titulo: 'Aviso legal',
    descripcion: 'Aviso legal e información del titular del sitio web de Técnica Dental JV.',
  },
  '/privacidad': {
    titulo: 'Política de privacidad',
    descripcion:
      'Cómo trata Técnica Dental JV los datos personales de las clínicas con las que trabaja.',
  },
};

/** Rutas que se prerenderizan y que van al sitemap. */
export const rutasPublicas = Object.keys(seoRutas);
