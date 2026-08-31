import { Link } from '@components/ui/Link';
import { flujo } from '@data/workflow';

/**
 * LA ESPINA. Familia de layout: recorrido de dos carriles.
 *
 * No es adorno: el trazado sale de los datos. Cada paso ya venía etiquetado
 * como digital, manual o mixto en src/data/workflow.ts, y aquí eso decide su
 * posición vertical. El caso entra por el centro, sube al carril digital,
 * baja al carril manual y vuelve al centro para la entrega.
 *
 * Ese dibujo cuenta "diseño digital, acabado a mano" sin escribirlo, que es
 * justo lo que hace falta: CovalDent ya vende esa frase, así que decirla no
 * diferencia a nadie. Enseñarla sí.
 *
 * Motion: los pasos aparecen en secuencia de izquierda a derecha para que el
 * ojo recorra la línea en el orden del proceso. Justificación: narrativa.
 */

const carril: Record<string, { fila: string; punto: string }> = {
  digital: { fila: 'md:row-start-1 md:items-end', punto: 'bg-white' },
  mixto: { fila: 'md:row-start-2 md:items-center', punto: 'bg-white/50' },
  manual: { fila: 'md:row-start-3 md:items-start', punto: 'bg-acento-claro' },
};

/* Columna explícita por paso. Sin esto, el auto-placement de CSS Grid
   reparte las tarjetas donde quiere en cuanto cada una fija su fila. */
const columnas = [
  'md:col-start-1',
  'md:col-start-2',
  'md:col-start-3',
  'md:col-start-4',
  'md:col-start-5',
  'md:col-start-6',
];

export default function Flujo() {
  return (
    <section className="bg-oscuro" id="flujo">
      <div className="contenedor py-20 md:py-28">
        <h2 className="reveal max-w-[18ch] font-display text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.05] text-white">
          De tu archivo a la boca del paciente.
        </h2>
        <p className="reveal mt-6 max-w-[50ch] text-lg leading-relaxed text-white/70">
          Trabajamos con archivo digital o con modelo físico. Los dos caminos acaban en el mismo
          sitio: un caso revisado antes de empezar.
        </p>

        {/* Leyenda de los dos carriles: es la clave de lectura del diagrama,
            no una fila de puntos decorativos. */}
        <div className="reveal mt-14 flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-white/60">
          <span className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
            Máquina
          </span>
          <span className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-acento-claro" aria-hidden="true" />
            Mano
          </span>
        </div>

        <div className="relative mt-8">
          {/* El eje: base fija en gris tenue. */}
          <div
            className="absolute inset-x-0 top-1/2 hidden h-px bg-white/20 md:block"
            aria-hidden="true"
          />
          {/* Relleno en el acento que se dibuja con el scroll de la sección
              (ver .espina-relleno en global.css): la línea avanza al mismo
              ritmo que el caso avanza por el proceso. */}
          <div
            className="espina-relleno absolute inset-x-0 top-1/2 hidden h-px bg-acento-claro md:block"
            aria-hidden="true"
          />

          <ol className="relative m-0 grid list-none grid-cols-1 gap-4 p-0 md:auto-rows-fr md:grid-cols-6 md:grid-rows-3 md:gap-x-4 md:gap-y-0">
            {flujo.map((paso, i) => {
              const via = carril[paso.tipo];
              return (
                <li
                  key={paso.numero}
                  className={`reveal flex md:col-span-1 ${columnas[i]} ${via.fila}`}
                  style={{ transitionDelay: `${i * 110}ms` }}
                >
                  <div className="relative z-10 w-full rounded-base border border-white/15 bg-oscuro-hondo p-5">
                    <span
                      className={`mb-3 block h-2 w-2 rounded-full ${via.punto}`}
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-[17px] leading-snug text-white">
                      {paso.titulo}
                    </h3>
                    <p className="m-0 mt-2 text-[14px] leading-relaxed text-white/65">
                      {paso.texto}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <Link
          to="/tecnologia"
          className="reveal mt-14 inline-block text-[16px] font-medium text-acento-claro no-underline hover:text-white"
        >
          Ver con qué trabajamos en cada paso
        </Link>
      </div>
    </section>
  );
}
