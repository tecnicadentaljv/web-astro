# Técnica Dental JV, web pública

Web pública del laboratorio. **React + Vite + TypeScript + Tailwind CSS v4**, sin backend, sin base de datos y sin autenticación.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + cliente + SSR + prerender + sitemap
npm run preview
```

## Estructura

```
index.html              meta base y datos estructurados comunes
public/                 favicon, robots.txt, sitemap.xml, og-default.jpg
FOTOGRAFIA.md           guía de tomas para las 6 fotos pendientes
scripts/
  prerender.mjs         HTML estático por ruta + sitemap
  og.mjs                genera public/og-default.jpg
src/
  main.tsx              entrada de navegador + BrowserRouter
  entry-server.tsx      entrada de servidor, solo para el prerender
  App.tsx               rutas y scroll (respeta anclas)
  hooks/
    useSeo.ts           meta por página al navegar dentro de la SPA
    useReveal.ts        aparición al entrar en viewport (IntersectionObserver)
    useContactoTracking.ts  eventos de conversión, listener delegado
  lib/analytics.ts      analítica sin cookies, agnóstica de proveedor
  components/
    layout/             Layout, Header, Footer, ContactoFlotante
    sections/           Hero, Compromiso, Problema, Especialidades, Flujo,
                        Honestidad, Garantia, Tecnologia, PorQue, Faq,
                        CtaContacto, CabeceraPagina
    ui/                 Button, Section, Foto
  data/                 ← TODO EL TEXTO EDITABLE VIVE AQUÍ
    site.ts             nombre, navegación, WhatsApp, teléfono, dirección
    seo.ts              title y description por ruta (fuente única)
    services.ts         especialidades y "lo que no hacemos"
    workflow.ts         flujo, problemas, motivos, compromiso, fresado
    garantia.ts         cobertura, límites y política de repeticiones
    technology.ts       tecnología actual, parte artesanal, evolución, laboratorio
    faq.ts              seis preguntas frecuentes (alimenta también el schema)
    photos.ts           catálogo de fotografía con alt ya redactado
    legal.ts            datos fiscales para aviso legal y privacidad
  pages/                Home, QuienesSomos, QueHacemos, Tecnologia, Contacto,
                        Blog, Legal, NoEncontrada
  styles/global.css     tokens de color, tipografía y motion
```

La home son **diez secciones con diez familias de layout distintas**. Ninguna se repite, y el sitio no usa ni un solo eyebrow.

Rutas: `/`, `/quienes-somos`, `/que-hacemos`, `/tecnologia`, `/contacto`, `/blog` (vacío, `noindex`), `/aviso-legal`, `/privacidad`, `/cookies` y 404.

## Sistema de diseño

**Tipografía.** Archivo Variable para titulares, usando su eje de anchura (`font-stretch` 112-118%) para el carácter expandido. Instrument Sans para texto. Las dos son OFL y van autohospedadas con `@fontsource`. **No usar `<link>` a Google Fonts**: bloquea el render.

No hay fuente monoespaciada. Los números usan cifras tabulares de la propia sans (`font-variant-numeric: tabular-nums`).

**Color.** Un solo acento en toda la web, `#be441a`. Contrastes verificados y anotados en `global.css`. `#e8834f` es la variante para fondo oscuro y **no pasa contraste sobre fondo claro**, así que no usarla ahí.

**Forma.** Un solo radio, 4px, para todo. Nada es pastilla. La única excepción son los puntos del diagrama de flujo, que son círculos porque codifican información (máquina o mano).

**Motion.** Entrada del hero por CSS y aparición al hacer scroll con `useReveal()`. Sin librería de animación y sin listener de scroll. Todo se desactiva bajo `prefers-reduced-motion`.

## Reglas de contenido

Estas palabras están **vetadas** en textos visibles porque las usan los siete laboratorios de la competencia en Valencia: *vanguardia, integral, predictibilidad, precisión, excelencia, soluciones, personalizado, comunicación fluida, socio estratégico*.

Vetados también: guion largo y guion medio, punto medio como separador por defecto, eyebrows (etiquetas en mayúscula con tracking sobre los titulares), numeración decorativa de secciones y puntos de estado decorativos.

## Build

```bash
npm run build     # typecheck + cliente + SSR + prerender + sitemap
npm run og        # regenera public/og-default.jpg
```

El build **prerenderiza las 9 rutas**. Sin eso, los crawlers de WhatsApp, LinkedIn y Facebook solo veían la tarjeta de la home, porque no ejecutan JavaScript. Cada ruta sale con su title, description, canonical, `og:*` y robots correctos, y con los datos estructurados que le tocan: `FAQPage` solo en `/` y `/contacto`, `BreadcrumbList` solo en las rutas interiores.

El sitemap se regenera desde `src/data/seo.ts` en cada build. No editarlo a mano.

## Analítica

Vercel Analytics, sin cookies según el proveedor. La política de `/cookies` informa sobre la medición; cualquier herramienta nueva que necesite consentimiento deberá bloquearse hasta recogerlo. La conversión que importa no son las visitas: son los clics a WhatsApp y teléfono. Se registran con un único listener delegado (`src/hooks/useContactoTracking.ts`), así que un CTA nuevo se mide solo, sin tener que acordarse de instrumentarlo.

Cambiar a Plausible o Umami no requiere tocar componentes: `src/lib/analytics.ts` los detecta si se carga su script.

## Pendiente antes de publicar

Bloqueantes:

1. **Confirmar el alcance de la garantía**: el campo `limite` en `src/data/garantia.ts`. Publicar "2 años al 100%" es **la única frase de toda la web que genera responsabilidad real**, así que tiene que decir exactamente lo que el laboratorio está dispuesto a sostener. La redacción actual es una asunción razonable, no una confirmación.
2. **Las 6 fotografías.** Ver `FOTOGRAFIA.md`. Dejar los archivos en `public/fotos/` y rellenar `src` en `src/data/photos.ts`. Las medidas ya están reservadas: sustituirlas no mueve el layout.
3. **Validar los textos legales** con Sigma Consultoría Legal antes de publicar cambios: atribución del dato profesional del colegiado, tratamiento internacional de Vercel y WhatsApp, base jurídica y plazos de conservación. Los textos adaptan los documentos recibidos a esta web, pero requieren su conformidad.
4. **Comprobar `public/og-default.jpg`** a ojo. Se genera con `npm run og`, y el renderizador de SVG usa fuentes del sistema, no Archivo.
5. **Redirección 301 del `.es` al `.com`** en el hosting. El canonical ya apunta siempre al `.com`.

Sin hacer todavía:

- **Sección de casos** (`/casos`). Falta escribir 2 o 3 casos reales.
- **Trazabilidad de materiales**: marcas de cerámica y zirconio. El laboratorio no puede consultarlas hasta septiembre.
- **Reseñas de Google.** Silicom tiene 19 verificadas; 3Dental, 2. Es tarea operativa, no de web, pero es la más rentable.
- **Testimonios.** Se retiró la sección porque mostraba corchetes vacíos. Vuelve cuando haya valoraciones reales con nombre.

## Decisiones ya tomadas en el código

- **Garantía**: 2 años al 100% en prótesis fija, implantes, arcadas y carillas; 1 año al 50% en férulas. Es el dato más fuerte de la web y ningún competidor de Valencia publica el suyo. Va con cifras porque las cifras son verificables.
- **Compromiso de respuesta**: "Atendemos tu caso en menos de 24 horas". La aclaración que lo acompaña **no es opcional**: separa respuesta de plazo de fabricación (que es el terreno de PincelArt) y avisa de que el contador corre en horario de laboratorio, para que la promesa no se rompa cada viernes por la tarde.
- **No se nombra al centro de fresado**: se dice abiertamente que se fresa fuera, sin exponer a un tercero que no lo ha autorizado.
- Contacto solo por **WhatsApp (699 979 387)**, **teléfono fijo (963 845 522)** y dirección física. Sin formulario y sin email visible.
- `whatsappUrl(contexto)` precarga el mensaje según desde dónde se pulse. La etiqueta del botón es siempre `CTA_WHATSAPP`: **una intención, una etiqueta**.
- **No se publican nombres del equipo**, por decisión del laboratorio. Sí el número de personas y los oficios.
- **No hay mapa embebido**: el iframe de Google Maps mete cookies de terceros, pesa y hunde el LCP. En su lugar, enlace al mapa más indicaciones reales de llegada.
- No se destaca prótesis removible; se explica abiertamente que no se hace.
- Blog creado como estructura vacía, en `noindex` hasta que haya artículos.
