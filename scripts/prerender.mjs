/**
 * Prerender de todas las rutas públicas.
 *
 * POR QUÉ EXISTE: los crawlers de WhatsApp, LinkedIn y Facebook no ejecutan
 * JavaScript. Sin esto, compartir /que-hacemos por WhatsApp mostraba la
 * tarjeta de la home. Para un laboratorio cuyo único canal de entrada es
 * WhatsApp, eso no es un detalle de SEO: es un fallo de producto.
 *
 * Qué hace, por ruta:
 *   1. Renderiza el árbol de React a HTML estático.
 *   2. Escribe title, description, canonical, og:* y robots correctos.
 *   3. Reparte los datos estructurados (FAQPage solo donde hay FAQ,
 *      BreadcrumbList solo en las rutas interiores).
 *
 * Además regenera public/sitemap.xml a partir del mismo mapa de rutas, para
 * que no puedan desincronizarse.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(raiz, 'dist');

// En Windows, import() dinámico exige una URL file://, no una ruta absoluta.
const { render, seoRutas, faq } = await import(
  pathToFileURL(join(dist, 'server', 'entry-server.js')).href,
);

const SITIO = 'https://www.tecnicadentaljv.com';
const NOMBRE = 'Técnica Dental JV';

/** Rutas que muestran el bloque de FAQ y por tanto llevan FAQPage. */
const CON_FAQ = new Set(['/', '/contacto']);

const plantilla = readFileSync(join(dist, 'index.html'), 'utf8');

/** Extrae el @graph de la plantilla para poder filtrarlo por ruta. */
const bloqueLd = plantilla.match(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
);
const grafoCompleto = JSON.parse(bloqueLd[1])['@graph'];

/**
 * FAQPage generado desde src/data/faq.ts. Antes estaba copiado a mano en
 * index.html, con lo que tocar una respuesta dejaba el schema mintiendo.
 */
function nodoFaq() {
  return {
    '@type': 'FAQPage',
    '@id': SITIO + '/#faq',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: item.respuesta },
    })),
  };
}

function migaDePan(ruta, titulo) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITIO + '/' },
      { '@type': 'ListItem', position: 2, name: titulo, item: SITIO + ruta },
    ],
  };
}

function datosEstructurados(ruta, seo) {
  const grafo = grafoCompleto.filter((nodo) => nodo['@type'] !== 'FAQPage');
  if (CON_FAQ.has(ruta)) grafo.push(nodoFaq());
  // Sin miga de pan en el 404 (ruta === null): no hay una URL real que enlazar.
  if (ruta !== '/' && ruta !== null) grafo.push(migaDePan(ruta, seo.titulo));
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo }, null, 2);
}

/**
 * ruta === null identifica al 404: no tiene una URL propia que publicar
 * (se sirve para cualquier dirección inexistente), así que se omiten
 * canonical y og:url en vez de inventar una.
 */
function sustituirMeta(html, ruta, seo) {
  const tituloCompleto = seo.titulo.includes(NOMBRE)
    ? seo.titulo
    : `${seo.titulo} | ${NOMBRE}`;
  const robots = seo.noindex ? 'noindex, nofollow' : 'index, follow';

  let salida = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapar(tituloCompleto)}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${escapar(seo.descripcion)}" />`,
    )
    .replace(
      /<meta name="robots"[^>]*\/>/,
      `<meta name="robots" content="${robots}" />`,
    )
    .replace(
      /<meta property="og:title"[^>]*\/>/,
      `<meta property="og:title" content="${escapar(tituloCompleto)}" />`,
    )
    .replace(
      /<meta property="og:description"[^>]*\/>/,
      `<meta property="og:description" content="${escapar(seo.descripcion)}" />`,
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n${datosEstructurados(ruta, seo)}\n</script>`,
    );

  if (ruta === null) {
    salida = salida
      .replace(/\s*<link rel="canonical"[^>]*\/>\n/, '\n')
      .replace(/\s*<meta property="og:url"[^>]*\/>\n/, '\n');
  } else {
    const url = ruta === '/' ? `${SITIO}/` : `${SITIO}${ruta}`;
    salida = salida
      .replace(/<link rel="canonical"[^>]*\/>/, `<link rel="canonical" href="${url}" />`)
      .replace(/<meta property="og:url"[^>]*\/>/, `<meta property="og:url" content="${url}" />`);
  }

  return salida;
}

function escapar(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

let escritas = 0;
for (const [ruta, seo] of Object.entries(seoRutas)) {
  const cuerpo = render(ruta);
  let html = sustituirMeta(plantilla, ruta, seo);
  html = html.replace('<div id="root"></div>', `<div id="root">${cuerpo}</div>`);

  const destino =
    ruta === '/' ? join(dist, 'index.html') : join(dist, ruta.slice(1), 'index.html');
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, html);
  escritas++;
  console.log(`  ${ruta.padEnd(16)} -> ${destino.replace(dist, 'dist')}`);
}

/**
 * 404 real, con status HTTP 404 de verdad.
 *
 * vercel.json ya no reescribe todo a /index.html (sobraba: cada ruta real
 * tiene ahora su propio HTML gracias al prerender). Eso deja que Vercel
 * sirva de forma nativa este dist/404.html, con código 404, para cualquier
 * dirección que no exista. Antes de este cambio, una URL rota devolvía 200
 * con el contenido de la home: un "soft 404" que Google penaliza y que
 * además mentía sobre qué había en esa dirección.
 *
 * Se renderiza pidiendo una ruta que no existe en ninguna parte, así que
 * cae en el `path="*"` de App.tsx y sale la página NoEncontrada de verdad.
 */
const seo404 = {
  titulo: 'Página no encontrada',
  descripcion: 'Esta página no existe.',
  noindex: true,
};
const cuerpo404 = render('/__no-existe__');
let html404 = sustituirMeta(plantilla, null, seo404);
html404 = html404.replace('<div id="root"></div>', `<div id="root">${cuerpo404}</div>`);
writeFileSync(join(dist, '404.html'), html404);
console.log(`  404              -> dist/404.html`);

// Sitemap desde la misma fuente, sin las rutas noindex.
const urls = Object.entries(seoRutas)
  .filter(([, seo]) => !seo.noindex)
  .map(([ruta]) => {
    const prioridad = ruta === '/' ? '1.0' : ruta === '/contacto' ? '0.9' : '0.7';
    return `  <url><loc>${ruta === '/' ? SITIO + '/' : SITIO + ruta}</loc><priority>${prioridad}</priority></url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generado por scripts/prerender.mjs. No editar a mano. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);
if (existsSync(join(raiz, 'public'))) {
  writeFileSync(join(raiz, 'public', 'sitemap.xml'), sitemap);
}

console.log(`\nPrerender completo: ${escritas} rutas, sitemap regenerado.`);
