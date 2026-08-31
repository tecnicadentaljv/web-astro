import { Link } from '@components/ui/Link';
import { noHacemos } from '@data/services';
import { evolucion } from '@data/technology';
import { fresado } from '@data/workflow';

/**
 * Familia de layout: declaración agrupada sobre panel tintado.
 *
 * Es la tesis de toda la web. Ninguno de los siete laboratorios de Valencia
 * que auditamos dice lo que no hace, admite que le falta una máquina ni
 * explica dónde produce lo que no produce él. Una empresa que responde ante
 * inversores no puede publicar esto. Vosotros sí, y es gratis.
 *
 * Sin tarjetas: tres admisiones separadas por una única hairline.
 */

const admisiones = [
  { titulo: noHacemos.titulo, texto: noHacemos.texto },
  { titulo: 'Todavía no fresamos aquí', texto: fresado.texto },
  { titulo: evolucion.titulo, texto: evolucion.texto },
];

export default function Honestidad() {
  return (
    <section className="bg-panel" id="honestidad">
      <div className="contenedor py-24 md:py-36">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-12">
          <h2 className="reveal col-span-12 m-0 max-w-[14ch] font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1] text-tinta md:col-span-5">
            Preferimos contarte los límites.
          </h2>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            {admisiones.map((item, i) => (
              <div
                key={item.titulo}
                className="reveal border-t border-[#ddd4c8] py-7 first:border-t-0 first:pt-0"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <h3 className="font-display text-xl leading-snug text-tinta">{item.titulo}</h3>
                <p className="m-0 mt-3 max-w-[52ch] text-[16px] leading-relaxed text-tinta-suave">
                  {item.texto}
                </p>
              </div>
            ))}

            <Link
              to="/tecnologia"
              className="mt-8 inline-block text-[16px] font-medium text-acento no-underline hover:text-tinta"
            >
              El estado completo del laboratorio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
