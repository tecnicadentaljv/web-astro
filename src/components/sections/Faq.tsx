import { faq } from '@data/faq';

/**
 * Familia de layout: acordeón editorial.
 *
 * Usa <details>/<summary> nativos: accesibles por teclado, funcionan sin
 * JavaScript y no requieren estado en React. El marcador por defecto se
 * sustituye por un signo propio.
 */
export default function Faq() {
  return (
    <section className="border-y border-linea bg-superficie" id="preguntas">
      <div className="contenedor py-20 md:py-28">
        <h2 className="reveal max-w-[16ch] font-display text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.05] text-tinta">
          Lo que suelen preguntarnos antes del primer caso.
        </h2>

        <div className="mt-14 max-w-[68ch]">
          {faq.map((item, i) => (
            <details
              key={item.pregunta}
              className="reveal group border-t border-linea last:border-b"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 font-display text-[19px] leading-snug text-tinta marker:content-none [&::-webkit-details-marker]:hidden">
                {item.pregunta}
                <span
                  className="shrink-0 text-2xl font-normal leading-none text-acento transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="m-0 max-w-[60ch] pb-7 text-[16px] leading-relaxed text-tinta-suave">
                {item.respuesta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
