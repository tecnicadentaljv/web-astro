interface Props {
  titulo: string;
  entrada: string;
}

/**
 * Cabecera de página interior. Sin blob radial, sin rejilla decorativa y
 * sin eyebrow: el título ya dice de qué va la página, y el presupuesto de
 * eyebrows del sitio es cero.
 */
export default function CabeceraPagina({ titulo, entrada }: Props) {
  return (
    <section className="bg-oscuro">
      <div className="contenedor grid grid-cols-12 gap-x-6 pb-20 pt-16 md:pb-24 md:pt-20">
        <h1 className="entrada col-span-12 max-w-[18ch] font-display text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white lg:col-span-9">
          {titulo}
        </h1>
        <p
          className="entrada col-span-12 mt-7 max-w-[54ch] text-lg leading-relaxed text-white/70 md:text-xl lg:col-span-7"
          style={{ animationDelay: '90ms' }}
        >
          {entrada}
        </p>
      </div>
    </section>
  );
}
