import type { ReactNode } from 'react';
import { useMagnetico } from '@/hooks/useMagnetico';

type Variante = 'primario' | 'secundario' | 'oscuro';

/* Sin mayúsculas ni tracking ni mono: era la firma que repetía toda la web.
   Radio 4px como el resto del sitio. Nada es pastilla.
   El :active hunde el botón 1px para dar respuesta física al clic. */
const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-base px-6 py-3.5 ' +
  'text-[15px] font-medium leading-none no-underline transition-colors duration-200 ' +
  'active:translate-y-px';

const variantes: Record<Variante, string> = {
  // #ffffff sobre #be441a = 5.21 (AA)
  primario: 'bg-acento text-white hover:bg-[#a13a16] hover:text-white',
  // #14294a sobre #ffffff = 14.52 (AAA)
  secundario: 'border border-linea bg-superficie text-tinta hover:bg-panel hover:text-tinta',
  // blanco sobre navy = 14.52 (AAA); el borde da el limite visible
  oscuro: 'border border-white/30 text-white hover:border-white hover:text-white',
};

interface Props {
  href: string;
  variante?: Variante;
  externo?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * El tirón magnético va en un envoltorio, no en el propio enlace: así el
 * `:active` del enlace (el hundido de 1px al pulsar) y el arrastre hacia el
 * cursor son dos transforms en dos elementos distintos y nunca se pisan.
 * `className` (p.ej. "self-start") se aplica al envoltorio, que es el que
 * de verdad participa como hijo flex en el sitio donde se usa el botón.
 */
export default function Button({
  href,
  variante = 'primario',
  externo = false,
  className = '',
  children,
}: Props) {
  const magnetico = useMagnetico<HTMLSpanElement>(0.22);

  return (
    <span ref={magnetico} className={`magnetico inline-block ${className}`}>
      <a
        href={href}
        target={externo ? '_blank' : undefined}
        rel={externo ? 'noopener noreferrer' : undefined}
        className={`${base} ${variantes[variante]}`}
      >
        {children}
      </a>
    </span>
  );
}
