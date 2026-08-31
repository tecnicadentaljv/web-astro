import { Link } from '@components/ui/Link';
import Foto from '@components/ui/Foto';
import { servicios } from '@data/services';
import type { FotoId } from '@data/photos';

/**
 * Familia de layout: bento asimétrico.
 * Tantas celdas como servicios, ni una vacía. Ritmo 4+2 / 2+4 sobre 6
 * columnas, de modo que ninguna fila se parece a la anterior.
 *
 * Diversidad de fondo: las celdas anchas llevan fotografía, las estrechas
 * van sobre panel tintado. No son seis tarjetas blancas iguales.
 */

const fotoDe: Record<string, FotoId> = {
  'protesis-fija': 'corona',
  implantes: 'implante',
  'trabajos-grandes': 'arcada',
  carillas: 'carillas',
  ferulas: 'ferula',
  estetica: 'manos',
};

/** Patrón de anchos sobre una rejilla de 6. Genera el ritmo del bento. */
const anchos = ['md:col-span-4', 'md:col-span-2', 'md:col-span-2', 'md:col-span-4'];

interface Props {
  soloDestacados?: boolean;
  conEnlace?: boolean;
}

export default function Especialidades({ soloDestacados = false, conEnlace = false }: Props) {
  const lista = soloDestacados ? servicios.filter((s) => s.destacado) : servicios;

  return (
    <section className="bg-fondo" id="especialidades">
      <div className="contenedor py-20 md:py-28">
        <h2 className="reveal max-w-[16ch] font-display text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.05] text-tinta">
          Lo que hacemos todos los días.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
          {lista.map((servicio, i) => {
            const ancho = anchos[i % anchos.length];
            const esAncha = ancho === 'md:col-span-4';

            return (
              <Link
                key={servicio.id}
                to={`/que-hacemos#${servicio.id}`}
                className={`reveal group flex flex-col overflow-hidden rounded-base border border-linea no-underline transition-colors hover:border-acento ${ancho} ${
                  esAncha ? 'bg-superficie' : 'bg-panel'
                }`}
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                {esAncha && <Foto id={fotoDe[servicio.id]} className="rounded-none" />}

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-display text-2xl leading-tight text-tinta transition-colors group-hover:text-acento">
                    {servicio.titulo}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-tinta-suave">
                    {servicio.resumen}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {conEnlace && (
          <Link
            to="/que-hacemos"
            className="reveal mt-10 inline-flex items-center rounded-base border border-linea bg-superficie px-6 py-3.5 text-[15px] font-medium text-tinta no-underline transition-colors hover:bg-panel hover:text-tinta"
          >
            Ver todas las especialidades
          </Link>
        )}
      </div>
    </section>
  );
}
