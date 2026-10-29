import { Link } from '@components/ui/Link';
import { site, contacto, navegacion, whatsappUrl, telefonoUrl } from '@data/site';

const legales = [
  { texto: 'Aviso legal', href: '/aviso-legal' },
  { texto: 'Privacidad', href: '/privacidad' },
  { texto: 'Cookies', href: '/cookies' },
];

export default function Footer({ onAbrirPreferencias }: { onAbrirPreferencias: () => void }) {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-oscuro-hondo">
      <div className="contenedor grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-base border border-white/25 font-display text-[15px] font-semibold text-white">
              JV
            </span>
            <span className="font-display text-[15px] font-semibold text-white">
              Técnica Dental JV
            </span>
          </div>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/60">
            {site.claim}. Prótesis fija, implantes, arcadas, férulas y carillas.{' '}
            <span className="text-white">Trabajamos solo con clínicas dentales.</span>
          </p>
        </div>

        <div>
          <h2 className="m-0 text-[15px] font-semibold text-white">Navegación</h2>
          <ul className="m-0 mt-5 flex list-none flex-col gap-3 p-0">
            {navegacion.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-[15px] text-white/65 no-underline hover:text-acento-claro"
                >
                  {item.texto}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                className="text-[15px] text-white/65 no-underline hover:text-acento-claro"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="m-0 text-[15px] font-semibold text-white">Contacto</h2>
          <ul className="m-0 mt-5 flex list-none flex-col gap-3 p-0 text-[15px]">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline hover:text-acento-claro"
              >
                WhatsApp {contacto.whatsappVisible}
              </a>
            </li>
            <li>
              <a href={telefonoUrl} className="text-white no-underline hover:text-acento-claro">
                Fijo {contacto.telefonoVisible}
              </a>
            </li>
            <li className="leading-relaxed text-white/60">
              {contacto.direccion}
              <br />
              {contacto.codigoPostal} {contacto.ciudad}
            </li>
            <li className="text-white/60">{contacto.horario}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="contenedor flex flex-col gap-3 py-6 text-[14px] text-white/45 md:flex-row md:items-center md:justify-between">
          <span>
            © {anio} {site.nombre}
          </span>
          <span className="flex flex-wrap gap-x-6 gap-y-2">
            {legales.map((item) => (
              <Link key={item.href} to={item.href} className="text-white/45 no-underline hover:text-white">
                {item.texto}
              </Link>
            ))}
            <button
              type="button"
              onClick={onAbrirPreferencias}
              className="cursor-pointer border-0 bg-transparent p-0 text-left font-sans text-[14px] text-white/45 hover:text-white"
            >
              Configurar cookies
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
}
