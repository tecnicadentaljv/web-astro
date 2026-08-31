import { useState } from 'react';
import { NavLink, Link } from '@components/ui/Link';
import { List, X } from '@phosphor-icons/react';
import { navegacion, whatsappUrl, CTA_WHATSAPP } from '@data/site';

/**
 * Cabecera de una sola línea en escritorio, 72px de alto.
 * Sin mono, sin mayúsculas con tracking y sin el separador de punto medio
 * bajo el logotipo. El icono de menú viene de Phosphor: antes era un SVG
 * dibujado a mano.
 */
export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-oscuro/95 backdrop-blur-md">
      <div className="contenedor flex min-h-[72px] items-center justify-between gap-6 py-3">
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
          onClick={() => setAbierto(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-base border border-white/25 font-display text-[15px] font-semibold text-white">
            JV
          </span>
          <span className="font-display text-[16px] font-semibold tracking-tight text-white">
            Técnica Dental JV
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navegacion.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `whitespace-nowrap text-[15px] no-underline transition-colors ${
                  isActive ? 'text-acento-claro' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {item.texto}
            </NavLink>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-base bg-acento px-5 py-2.5 text-[15px] font-medium text-white no-underline transition-colors hover:bg-[#a13a16] hover:text-white"
          >
            {CTA_WHATSAPP}
          </a>
        </nav>

        <button
          type="button"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-base border border-white/25 text-white lg:hidden"
        >
          {abierto ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
        </button>
      </div>

      {abierto && (
        <div className="border-t border-white/10 bg-oscuro-hondo lg:hidden">
          <nav className="contenedor flex flex-col py-3" aria-label="Navegación móvil">
            {navegacion.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                onClick={() => setAbierto(false)}
                className="border-b border-white/10 py-4 font-display text-lg text-white no-underline last:border-0"
              >
                {item.texto}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
