import { motivos } from '@data/workflow';

/**
 * Familia de layout: lista editorial a dos columnas.
 *
 * Seis motivos son demasiados para una rejilla de tarjetas (era la cuarta
 * rejilla clonada de la home). Van como lista agrupada, con la hairline
 * separando filas y no encajonando cada elemento.
 */
export default function PorQue() {
  return (
    <section className="bg-fondo" id="por-que">
      <div className="contenedor py-20 md:py-28">
        <h2 className="reveal max-w-[20ch] font-display text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.05] text-tinta">
          Seis razones, ninguna de ellas un eslogan.
        </h2>

        <div className="mt-14 grid gap-x-14 md:grid-cols-2">
          {motivos.map((motivo, i) => (
            <div
              key={motivo.titulo}
              className="reveal border-t border-linea py-7"
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              <h3 className="font-display text-xl leading-snug text-tinta">{motivo.titulo}</h3>
              <p className="m-0 mt-3 max-w-[46ch] text-[16px] leading-relaxed text-tinta-suave">
                {motivo.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
