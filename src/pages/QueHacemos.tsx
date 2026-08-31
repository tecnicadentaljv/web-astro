import { useSeo } from '@/hooks/useSeo';
import { seoRutas } from '@data/seo';
import { useReveal } from '@/hooks/useReveal';
import CabeceraPagina from '@components/sections/CabeceraPagina';
import Especialidades from '@components/sections/Especialidades';
import Foto from '@components/ui/Foto';
import Garantia from '@components/sections/Garantia';
import Flujo from '@components/sections/Flujo';
import CtaContacto from '@components/sections/CtaContacto';
import { servicios } from '@data/services';
import type { FotoId } from '@data/photos';

/**
 * Antes esta página eran SEIS splits imagen+texto consecutivos alternando
 * lado. El tope es dos. Ahora: bento de resumen arriba y detalle en bloque
 * editorial de una sola columna, con foto solo en dos de los seis para
 * romper el ritmo.
 */

const fotoDe: Record<string, FotoId> = {
  'protesis-fija': 'corona',
  implantes: 'implante',
  'trabajos-grandes': 'arcada',
  carillas: 'carillas',
  ferulas: 'ferula',
  estetica: 'manos',
};

/** Solo estos dos llevan foto en el detalle. El resto respira. */
const conFoto = new Set(['implantes', 'carillas']);

export default function QueHacemos() {
  useSeo(seoRutas['/que-hacemos']);
  useReveal();

  return (
    <>
      <CabeceraPagina
        titulo="Prótesis fija, implantes y estética."
        entrada="Estas son las especialidades del laboratorio, con lo que puedes esperar de cada una."
      />

      <Especialidades />

      <section className="border-y border-linea bg-superficie">
        <div className="contenedor py-20 md:py-28">
          {servicios.map((servicio, i) => (
            <article
              key={servicio.id}
              id={servicio.id}
              className="reveal grid gap-x-12 gap-y-8 border-t border-linea py-12 first:border-t-0 first:pt-0 md:grid-cols-12"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <div className={conFoto.has(servicio.id) ? 'md:col-span-7' : 'md:col-span-9'}>
                <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.5rem)] leading-[1.05] text-tinta">
                  {servicio.titulo}
                </h2>
                <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-tinta">
                  {servicio.resumen}
                </p>
                <p className="mt-4 max-w-[56ch] text-[16px] leading-relaxed text-tinta-suave">
                  {servicio.detalle}
                </p>
                <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-tinta-suave">
                  {servicio.puntos.join('. ')}.
                </p>
              </div>

              {conFoto.has(servicio.id) && (
                <div className="md:col-span-4 md:col-start-9">
                  <Foto id={fotoDe[servicio.id]} />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <Garantia />
      <Flujo />
      <CtaContacto />
    </>
  );
}
