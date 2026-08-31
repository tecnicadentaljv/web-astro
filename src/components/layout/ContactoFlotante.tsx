import { whatsappUrl, telefonoUrl, contacto, CTA_WHATSAPP } from '@data/site';

/**
 * WhatsApp y teléfono siempre a mano: barra fija en móvil, botón flotante
 * en escritorio. Usa la etiqueta canónica de site.ts, de modo que en toda
 * la web hay una sola forma de nombrar esta acción.
 */
export default function ContactoFlotante() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-linea bg-superficie/95 backdrop-blur md:hidden">
        <div className="grid grid-cols-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-acento py-4 text-[15px] font-medium text-white no-underline"
          >
            WhatsApp
          </a>
          <a
            href={telefonoUrl}
            className="flex items-center justify-center py-4 text-[15px] font-medium text-tinta no-underline"
          >
            Llamar {contacto.telefonoVisible}
          </a>
        </div>
      </div>

      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 hidden rounded-base bg-acento px-6 py-4 text-[15px] font-medium text-white no-underline transition-transform hover:-translate-y-0.5 active:translate-y-0 md:inline-flex"
      >
        {CTA_WHATSAPP}
      </a>
    </>
  );
}
