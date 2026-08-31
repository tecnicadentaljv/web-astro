import { useSeo } from '@/hooks/useSeo';
import { seoRutas } from '@data/seo';
import { useReveal } from '@/hooks/useReveal';
import CabeceraPagina from '@components/sections/CabeceraPagina';
import Foto from '@components/ui/Foto';
import PorQue from '@components/sections/PorQue';
import Honestidad from '@components/sections/Honestidad';
import CtaContacto from '@components/sections/CtaContacto';
import { laboratorio, clinicas } from '@data/technology';

export default function QuienesSomos() {
  useSeo(seoRutas['/quienes-somos']);
  useReveal();

  return (
    <>
      <CabeceraPagina
        titulo={laboratorio.titulo}
        entrada="Empresa nueva, laboratorio de siempre. Esto es lo que hay detrás de Técnica Dental JV."
      />

      {/* Cifras a escala display. Son datos reales, no adorno. */}
      <section className="bg-fondo">
        <div className="contenedor py-20 md:py-28">
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {laboratorio.datos.map((dato, i) => (
              <div
                key={dato.etiqueta}
                className="reveal border-t border-linea pt-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="display-ancho m-0 text-[clamp(2.5rem,6vw,4rem)] leading-none text-acento">
                  {dato.valor}
                </p>
                <p className="m-0 mt-4 max-w-[22ch] text-[15px] leading-relaxed text-tinta-suave">
                  {dato.etiqueta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-linea bg-superficie">
        <div className="contenedor grid gap-x-12 gap-y-14 py-20 md:py-28 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            {laboratorio.parrafos.map((parrafo, i) => (
              <p
                key={parrafo.slice(0, 24)}
                className="reveal m-0 max-w-[62ch] text-lg leading-relaxed text-tinta-suave"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {parrafo}
              </p>
            ))}
            <p className="reveal m-0 mt-4 max-w-[56ch] border-l-2 border-acento pl-6 font-display text-2xl leading-snug text-tinta">
              Siempre buscamos lo mismo: que te fíes de nosotros y que tus problemas se resuelvan.
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Foto id="manos" className="reveal" />
          </div>
        </div>
      </section>

      {/* Con quién trabajamos: lista editorial, no rejilla de tarjetas. */}
      <section className="bg-fondo">
        <div className="contenedor py-20 md:py-28">
          <h2 className="reveal max-w-[18ch] font-display text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.05] text-tinta">
            Solo con clínicas. Y no con todas.
          </h2>
          <p className="reveal mt-6 max-w-[52ch] text-lg leading-relaxed text-tinta-suave">
            No atendemos a pacientes. Preferimos pocas clínicas y mucho volumen con cada una: así
            conocemos cómo trabaja cada equipo y nos adelantamos a los problemas.
          </p>
          <div className="mt-12 grid gap-x-12 md:grid-cols-2">
            {clinicas.map((tipo, i) => (
              <p
                key={tipo}
                className="reveal m-0 border-t border-linea py-6 text-[17px] leading-relaxed text-tinta"
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                {tipo}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Honestidad />
      <PorQue />
      <CtaContacto />
    </>
  );
}
