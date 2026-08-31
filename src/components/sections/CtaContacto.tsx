import Button from '@components/ui/Button';
import { whatsappUrl, telefonoUrl, contacto, CTA_WHATSAPP, CTA_TELEFONO } from '@data/site';
import { clinicas } from '@data/technology';

/**
 * Familia de layout: cierre a dos columnas.
 * Fuera el blob radial, la rejilla decorativa y los puntos de viñeta.
 */
export default function CtaContacto() {
  return (
    <section className="bg-oscuro" id="contacto">
      <div className="contenedor grid gap-x-10 gap-y-14 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="reveal max-w-[14ch] font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] text-white">
            ¿Tienes un caso? Cuéntanoslo.
          </h2>
          <p className="reveal mt-6 max-w-[46ch] text-lg leading-relaxed text-white/70">
            Si es tu primer trabajo con nosotros, te explicamos cómo enviarnos el caso en dos
            minutos.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-3">
            <Button href={whatsappUrl()} externo>
              {CTA_WHATSAPP}
            </Button>
            <Button href={telefonoUrl} variante="oscuro">
              {CTA_TELEFONO}
            </Button>
          </div>

          <p className="reveal mt-7 text-[15px] text-white/55">
            Solo trabajamos con clínicas dentales. {contacto.horario}.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9">
          <div className="reveal rounded-base border border-white/15 p-6">
            <h3 className="font-display text-lg text-white">Dónde estamos</h3>
            <p className="m-0 mt-3 text-[16px] leading-relaxed text-white/70">
              {contacto.direccion}
              <br />
              {contacto.codigoPostal} {contacto.ciudad}
            </p>
            <a
              href={contacto.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[15px] font-medium text-acento-claro no-underline hover:text-white"
            >
              Cómo llegar
            </a>
          </div>

          <div className="reveal rounded-base border border-white/15 p-6">
            <h3 className="font-display text-lg text-white">Encajamos bien contigo si</h3>
            <ul className="m-0 mt-4 flex list-none flex-col gap-3 p-0">
              {clinicas.map((tipo) => (
                <li key={tipo} className="text-[15px] leading-relaxed text-white/70">
                  {tipo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
