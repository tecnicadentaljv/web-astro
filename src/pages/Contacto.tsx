import { useSeo } from '@/hooks/useSeo';
import { seoRutas } from '@data/seo';
import { useReveal } from '@/hooks/useReveal';
import CabeceraPagina from '@components/sections/CabeceraPagina';
import Button from '@components/ui/Button';
import Faq from '@components/sections/Faq';
import { contacto, whatsappUrl, telefonoUrl } from '@data/site';

/**
 * Cómo llegar: instrucciones reales, no un iframe de Google Maps.
 * El iframe mete cookies de terceros (obligaría a banner de consentimiento),
 * pesa y hunde el LCP. Un enlace al mapa más indicaciones útiles resuelve
 * mejor el problema de quien va a dejar un trabajo.
 */
const comoLlegar = [
  'Estamos en el barrio de Abastos, en el bajo. La entrada está a pie de calle.',
  'Si vienes en coche, la zona es de aparcamiento regulado. Hay parking público a pocos minutos andando.',
  'Antes de acercarte a traer o recoger un trabajo, avísanos por WhatsApp y lo tenemos preparado.',
];

export default function Contacto() {
  useSeo(seoRutas['/contacto']);
  useReveal();

  return (
    <>
      <CabeceraPagina
        titulo="Cuéntanos el caso y te decimos cómo lo haríamos."
        entrada="Sin formularios ni tickets. WhatsApp o teléfono, y hablas directamente con el laboratorio."
      />

      <section className="bg-fondo">
        <div className="contenedor py-20 md:py-28">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="reveal flex flex-col justify-between gap-8 rounded-base border border-linea bg-superficie p-8 md:p-10">
              <div>
                <h2 className="m-0 font-display text-xl text-tinta">WhatsApp</h2>
                <p className="display-ancho m-0 mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-none text-tinta">
                  {contacto.whatsappVisible}
                </p>
                <p className="mt-5 max-w-[38ch] text-[16px] leading-relaxed text-tinta-suave">
                  La vía más rápida. Puedes mandarnos fotos del caso, dudas sobre un archivo o una
                  urgencia.
                </p>
              </div>
              <Button href={whatsappUrl()} externo className="self-start">
                Abrir WhatsApp
              </Button>
            </div>

            <div className="reveal flex flex-col justify-between gap-8 rounded-base border border-linea bg-superficie p-8 md:p-10">
              <div>
                <h2 className="m-0 font-display text-xl text-tinta">Teléfono fijo</h2>
                <p className="display-ancho m-0 mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-none text-tinta">
                  {contacto.telefonoVisible}
                </p>
                <p className="mt-5 max-w-[38ch] text-[16px] leading-relaxed text-tinta-suave">
                  Si prefieres hablarlo, llama. {contacto.horario}.
                </p>
              </div>
              <Button href={telefonoUrl} variante="secundario" className="self-start">
                Llamar al laboratorio
              </Button>
            </div>
          </div>

          <div className="reveal mt-16 grid gap-x-12 gap-y-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="m-0 font-display text-[clamp(1.6rem,3.5vw,2.25rem)] leading-tight text-tinta">
                Cómo llegar
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-tinta">
                {contacto.direccion}
                <br />
                {contacto.codigoPostal} {contacto.ciudad}
              </p>
              <a
                href={contacto.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-[16px] font-medium text-acento no-underline hover:text-tinta"
              >
                Abrir en Google Maps
              </a>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              {comoLlegar.map((linea) => (
                <p
                  key={linea.slice(0, 20)}
                  className="m-0 border-t border-linea py-5 text-[16px] leading-relaxed text-tinta-suave"
                >
                  {linea}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
