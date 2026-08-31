/**
 * Genera public/og-default.jpg (1200x630), la tarjeta que se ve al compartir
 * la web por WhatsApp, LinkedIn o Facebook.
 *
 * Hasta ahora el fichero no existía pero sí estaba referenciado en el HTML,
 * así que compartir la web daba tarjeta rota.
 *
 * LIMITACIÓN CONOCIDA: el renderizador de SVG usa fuentes instaladas en el
 * sistema, y Archivo no lo está. El texto sale en una grotesca neutra de
 * sistema, no en la tipografía de marca. La composición, el color y la
 * proporción sí son los correctos. Cuando haya un .ttf de Archivo a mano se
 * puede afinar; a tamaño de vista previa en un chat la diferencia es mínima.
 *
 * Uso: npm run og
 */
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');

const OSCURO = '#14294a';
const ACENTO = '#be441a';
const ACENTO_CLARO = '#e8834f';
const PILA = 'Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${OSCURO}"/>

  <!-- Barra de acento a sangre por la izquierda -->
  <rect x="0" y="0" width="14" height="630" fill="${ACENTO}"/>

  <!-- Monograma -->
  <rect x="96" y="86" width="70" height="70" rx="4" fill="none" stroke="#ffffff" stroke-opacity="0.35" stroke-width="2"/>
  <text x="131" y="132" text-anchor="middle" font-family="${PILA}" font-size="30" font-weight="700" fill="${ACENTO_CLARO}">JV</text>

  <text x="186" y="131" font-family="${PILA}" font-size="27" font-weight="600" fill="#ffffff">Técnica Dental JV</text>

  <!-- Mensaje principal -->
  <text x="96" y="322" font-family="${PILA}" font-size="76" font-weight="700" fill="#ffffff" letter-spacing="-2">Hablas con quien</text>
  <text x="96" y="408" font-family="${PILA}" font-size="76" font-weight="700" fill="#ffffff" letter-spacing="-2">hace tu trabajo.</text>

  <!-- Compromiso -->
  <text x="96" y="486" font-family="${PILA}" font-size="30" font-weight="400" fill="${ACENTO_CLARO}">Atendemos tu caso en menos de 24 horas.</text>

  <!-- Pie -->
  <rect x="96" y="534" width="1008" height="1" fill="#ffffff" fill-opacity="0.18"/>
  <text x="96" y="578" font-family="${PILA}" font-size="23" font-weight="400" fill="#ffffff" fill-opacity="0.65">Prótesis fija, implantes y estética. Solo para clínicas dentales.</text>
  <text x="1104" y="578" text-anchor="end" font-family="${PILA}" font-size="23" font-weight="400" fill="#ffffff" fill-opacity="0.65">València</text>
</svg>`;

const destino = join(raiz, 'public', 'og-default.jpg');

await sharp(Buffer.from(svg)).jpeg({ quality: 90, chromaSubsampling: '4:4:4' }).toFile(destino);

// Copia del SVG por si hay que retocarlo o regenerarlo con otra tipografía.
writeFileSync(join(raiz, 'scripts', 'og-default.svg'), svg);

const meta = await sharp(destino).metadata();
console.log(`og-default.jpg generado: ${meta.width}x${meta.height}, ${meta.format}`);
