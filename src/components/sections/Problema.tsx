import { problemas } from '@data/workflow';

/**
 * Familia de layout: contraste pareado.
 * Sin tarjetas y sin split-header. Una sola hairline entre pares.
 * No se repite en ninguna otra sección de la home.
 */
export default function Problema() {
  return (
    <section className="border-y border-linea bg-superficie" id="problema">
      <div className="contenedor py-20 md:py-28">
        <h2 className="reveal max-w-[20ch] font-display text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.05] text-tinta">
          Casi ningún problema con un laboratorio es técnico.
        </h2>
        <p className="reveal mt-6 max-w-[52ch] text-lg leading-relaxed text-tinta-suave">
          Es de comunicación. Nadie coge el teléfono, nadie avisa a tiempo, nadie te dice qué está
          pasando con el caso.
        </p>

        <div className="mt-16 flex flex-col">
          {problemas.map((item, i) => (
            <div
              key={item.problema}
              className="reveal grid gap-x-10 gap-y-3 border-t border-linea py-8 md:grid-cols-12"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <p className="col-span-12 m-0 max-w-[46ch] text-[17px] leading-relaxed text-tinta-suave md:col-span-5">
                {item.problema}
              </p>
              <p className="col-span-12 m-0 max-w-[46ch] border-l-2 border-acento pl-6 text-[17px] font-medium leading-relaxed text-tinta md:col-span-6 md:col-start-7">
                {item.solucion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
