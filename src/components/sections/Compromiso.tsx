import { compromiso } from '@data/workflow';
import { contacto } from '@data/site';

/**
 * Familia de layout: declaración a ancho completo.
 * Aparece una sola vez en la home y no se repite en ninguna otra sección.
 *
 * Es el argumento que ningún competidor de Valencia puede copiar sin dejar
 * de ser lo que es, así que se le da escala tipográfica de verdad en lugar
 * de enterrarlo en una tarjeta.
 *
 * El horario y la letra pequeña van AQUÍ, junto a la promesa, no escondidos
 * en el pie. Una promesa con la excepción a la vista se cumple siempre; una
 * promesa con asterisco al final de la página se rompe el primer sábado.
 */
export default function Compromiso() {
  return (
    <section className="bg-fondo" id="compromiso">
      <div className="contenedor py-24 md:py-36">
        <h2 className="reveal display-ancho max-w-[13ch] text-[clamp(2.75rem,8.5vw,7rem)] leading-[0.95] text-tinta">
          {compromiso.titular}
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-12">
          <p
            className="reveal col-span-12 m-0 max-w-[42ch] text-xl leading-relaxed text-tinta md:col-span-6 md:col-start-1"
            style={{ transitionDelay: '80ms' }}
          >
            {compromiso.cuerpo}
          </p>

          <div
            className="reveal col-span-12 border-l-2 border-acento pl-6 md:col-span-5 md:col-start-8"
            style={{ transitionDelay: '160ms' }}
          >
            <p className="m-0 max-w-[42ch] text-[15px] leading-relaxed text-tinta-suave">
              {compromiso.aclaracion}
            </p>
            <p className="m-0 mt-4 max-w-[42ch] text-[15px] leading-relaxed text-tinta-suave">
              {compromiso.cuandoNo}
            </p>
            <p className="m-0 mt-5 max-w-[42ch] text-[15px] font-medium leading-relaxed text-tinta">
              {contacto.horario}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
