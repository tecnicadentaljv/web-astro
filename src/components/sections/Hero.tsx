import Button from '@components/ui/Button';
import { whatsappUrl, telefonoUrl, CTA_WHATSAPP, CTA_TELEFONO } from '@data/site';

/**
 * Hero editorial asimétrico.
 *
 * El titular es el diferenciador estructural: 3Dental tiene 20 personas
 * repartidas en 5 departamentos, así que no puede prometer esto ni queriendo.
 * Y no es una promesa, es una descripción de cómo funciona el laboratorio.
 *
 * Disciplina de hero: exactamente 4 elementos de texto.
 * titular, subtítulo, CTA primario, CTA secundario. Sin eyebrow.
 */
export default function Hero() {
  return (
    <section className="bg-oscuro">
      <div className="contenedor grid grid-cols-12 gap-x-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <h1 className="entrada col-span-12 max-w-[15ch] font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white lg:col-span-9">
          Hablas con quien hace tu trabajo.
        </h1>

        <p
          className="entrada col-span-12 mt-7 max-w-[48ch] text-lg leading-relaxed text-white/75 md:text-xl lg:col-span-7"
          style={{ animationDelay: '90ms' }}
        >
          Prótesis fija, implantes y estética para clínicas de Valencia. Sin centralita, sin
          intermediarios y sin tener que insistir.
        </p>

        <div
          className="entrada col-span-12 mt-10 flex flex-wrap items-center gap-3 lg:col-span-8"
          style={{ animationDelay: '180ms' }}
        >
          <Button href={whatsappUrl()} externo>
            {CTA_WHATSAPP}
          </Button>
          <Button href={telefonoUrl} variante="oscuro">
            {CTA_TELEFONO}
          </Button>
        </div>
      </div>
    </section>
  );
}
