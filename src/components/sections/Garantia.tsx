import { garantia } from '@data/garantia';

/**
 * Familia de layout: libro de garantía.
 *
 * Los plazos van a escala display porque son el argumento, no un dato de
 * apoyo. Dos filas separadas por hairline, sin tarjetas y sin tabla con
 * borde en cada celda.
 *
 * Fondo oscuro a propósito: es el segundo momento de peso de la home
 * después de la espina, y aquí el contraste sirve para que el dentista que
 * baja rápido se pare justo en el dato que le importa.
 *
 * Textura de fondo: generada con IA, deliberadamente abstracta hasta ser
 * irreconocible como ninguna pieza dental concreta (ver FOTOGRAFIA.md sobre
 * por qué las 6 fotos de producto NUNCA son generadas: esta no es una de
 * ellas, es ambiente puro, sin ninguna pretensión documental).
 *
 * Primer intento: imagen a sangre completa con velo de opacidad creciente
 * hacia la derecha, para proteger el texto "Asumimos el X%" que vive justo
 * ahí. Funcionaba (contraste verificado en navegador real, 5.89:1), pero el
 * velo necesario para proteger ESE texto tapaba también el único trozo con
 * color de la imagen: quedaba invisible. Protegido, pero inútil.
 *
 * Solución real: en vez de calcular cuánto velo hace falta para que la
 * imagen no estropee el texto, se coloca donde NUNCA hay texto. El titular
 * (max-w-[15ch]) y el subtítulo (max-w-[52ch]) son cortos y dejan vacía la
 * franja superior derecha de la sección; las filas de cobertura empiezan
 * bastante más abajo (mt-16 tras el subtítulo). Un contenedor con altura
 * fija ahí arriba garantiza por geometría, no por opacidad, que la imagen
 * jamás se solape con ningún texto. Por eso puede llevar más presencia
 * (opacity-60) sin ningún velo de contraste.
 *
 * Solo en escritorio (lg:): en móvil no hay margen lateral limpio donde
 * meterla sin arriesgar solape, y es decoración opcional, no imprescindible.
 */
export default function Garantia() {
  return (
    <section className="relative overflow-hidden bg-oscuro" id="garantia">
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-[300px] w-[44%] overflow-hidden lg:block"
        aria-hidden="true"
      >
        <img
          src="/fotos/garantia-textura.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-60"
          style={{ objectPosition: '82% 45%' }}
        />
        {/* Funde los bordes del recorte hacia el navy, para que no se lea
            como una foto pegada sino como luz ambiental de la sección. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to left, transparent 55%, #14294A 100%), ' +
              'linear-gradient(to bottom, transparent 55%, #14294A 100%), ' +
              'linear-gradient(to top, transparent 85%, #14294A 100%)',
          }}
        />
      </div>

      <div className="contenedor relative py-24 md:py-32">
        <h2 className="reveal display-ancho max-w-[15ch] text-[clamp(2.25rem,6.5vw,5rem)] leading-[0.98] text-white">
          {garantia.titular}
        </h2>
        <p className="reveal mt-7 max-w-[52ch] text-lg leading-relaxed text-white/70">
          {garantia.entrada}
        </p>

        <div className="mt-16">
          {garantia.coberturas.map((cobertura, i) => (
            <div
              key={cobertura.plazo}
              className="reveal grid items-baseline gap-x-10 gap-y-3 border-t border-white/20 py-8 md:grid-cols-12"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="display-ancho col-span-12 m-0 text-[clamp(2.5rem,6vw,4rem)] leading-none text-acento-claro md:col-span-3">
                {cobertura.plazo}
              </p>
              <p className="col-span-12 m-0 max-w-[34ch] text-[17px] leading-relaxed text-white md:col-span-5">
                {cobertura.alcance}
              </p>
              <p className="col-span-12 m-0 text-[17px] font-medium leading-relaxed text-white md:col-span-4">
                {cobertura.asumimos}
              </p>
            </div>
          ))}

          <p className="reveal m-0 border-t border-white/20 pt-7 text-[15px] leading-relaxed text-white/60 md:max-w-[68ch]">
            {garantia.limite}
          </p>
        </div>

        <div className="mt-20 grid gap-x-10 md:grid-cols-3">
          {garantia.compromisos.map((compromiso, i) => (
            <div
              key={compromiso.titulo}
              className="reveal border-t border-white/20 py-7"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <h3 className="font-display text-lg leading-snug text-white">{compromiso.titulo}</h3>
              <p className="m-0 mt-3 max-w-[36ch] text-[15px] leading-relaxed text-white/65">
                {compromiso.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
