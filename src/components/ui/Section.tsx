import type { ReactNode } from 'react';

type Fondo = 'fondo' | 'superficie' | 'panel' | 'oscuro';

const fondos: Record<Fondo, string> = {
  fondo: 'bg-fondo',
  superficie: 'bg-superficie border-y border-linea',
  panel: 'bg-panel',
  oscuro: 'bg-oscuro',
};

interface Props {
  id?: string;
  fondo?: Fondo;
  /** Respiro vertical. 'amplio' para los momentos que deben pesar. */
  aire?: 'normal' | 'amplio';
  className?: string;
  children: ReactNode;
}

/**
 * Contenedor de sección. Sin rejilla decorativa: las líneas de cuadrícula
 * que había antes no organizaban nada, solo "hacían diseño".
 */
export default function Section({
  id,
  fondo = 'fondo',
  aire = 'normal',
  className = '',
  children,
}: Props) {
  const respiro = aire === 'amplio' ? 'py-24 md:py-36' : 'py-20 md:py-24';
  return (
    <section id={id} className={`${fondos[fondo]} ${className}`}>
      <div className={`contenedor ${respiro}`}>{children}</div>
    </section>
  );
}
