import { useSeo } from '@/hooks/useSeo';
import { seoRutas } from '@data/seo';
import { useReveal } from '@/hooks/useReveal';
import CabeceraPagina from '@components/sections/CabeceraPagina';
import CtaContacto from '@components/sections/CtaContacto';

/**
 * Estructura base del blog, todavía sin artículos y en noindex.
 * Cuando se empiece a publicar: crear src/data/posts.ts y la ruta
 * /blog/:slug, y quitar el noindex.
 */
const temasPrevistos = [
  'Cómo enviarnos un caso digital sin errores',
  'Qué revisamos antes de empezar un trabajo sobre implantes',
  'Cerámica a mano frente a producción en serie',
  'Preguntas frecuentes de clínicas que empiezan con nosotros',
];

export default function Blog() {
  useSeo(seoRutas['/blog']);
  useReveal();

  return (
    <>
      <CabeceraPagina
        titulo="Estamos preparando esta sección."
        entrada="Iremos publicando notas prácticas para clínicas sobre flujo digital, casos sobre implantes y trabajo de laboratorio."
      />

      <section className="bg-fondo">
        <div className="contenedor py-20 md:py-28">
          <h2 className="reveal max-w-[20ch] font-display text-[clamp(1.6rem,3.5vw,2.25rem)] leading-tight text-tinta">
            Sobre lo que vamos a escribir.
          </h2>
          <div className="mt-10 max-w-[60ch]">
            {temasPrevistos.map((tema, i) => (
              <p
                key={tema}
                className="reveal m-0 border-t border-linea py-6 text-[17px] leading-relaxed text-tinta-suave"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {tema}
              </p>
            ))}
          </div>
        </div>
      </section>

      <CtaContacto />
    </>
  );
}
