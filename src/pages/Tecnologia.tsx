import { useSeo } from '@/hooks/useSeo';
import { seoRutas } from '@data/seo';
import { useReveal } from '@/hooks/useReveal';
import CabeceraPagina from '@components/sections/CabeceraPagina';
import TecnologiaSection from '@components/sections/Tecnologia';
import Flujo from '@components/sections/Flujo';
import Honestidad from '@components/sections/Honestidad';
import CtaContacto from '@components/sections/CtaContacto';

const envios = [
  {
    titulo: 'Tienes escáner intraoral',
    texto:
      'Mándanos el archivo por el canal que uses habitualmente y lo revisamos ese mismo día. Nos adaptamos a tu software.',
  },
  {
    titulo: 'Trabajas con modelo físico',
    texto:
      'Nos llega el modelo y lo digitalizamos aquí con el escáner de sobremesa. El resto del proceso es idéntico.',
  },
  {
    titulo: 'No lo tienes claro',
    texto:
      'Escríbenos y lo hablamos antes de que empieces. Es más rápido que rehacerlo después.',
  },
];

export default function Tecnologia() {
  useSeo(seoRutas['/tecnologia']);
  useReveal();

  return (
    <>
      <CabeceraPagina
        titulo="Contamos lo que tenemos, no lo que queda bien."
        entrada="Estamos en plena modernización del laboratorio. Preferimos enseñarte el punto exacto en el que estamos."
      />

      <TecnologiaSection />
      <Flujo />
      <Honestidad />

      <section className="bg-fondo">
        <div className="contenedor py-20 md:py-28">
          <h2 className="reveal max-w-[18ch] font-display text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.05] text-tinta">
            Digital o modelo físico. Como te venga bien.
          </h2>
          <div className="mt-12 grid gap-x-12 md:grid-cols-3">
            {envios.map((item, i) => (
              <div
                key={item.titulo}
                className="reveal border-t border-linea py-7"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="font-display text-xl text-tinta">{item.titulo}</h3>
                <p className="m-0 mt-3 max-w-[38ch] text-[15px] leading-relaxed text-tinta-suave">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaContacto />
    </>
  );
}
