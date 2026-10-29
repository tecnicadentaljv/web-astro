import { Link } from '@components/ui/Link';
import type { ConsentimientoAnalitica } from '@/lib/consentimiento';

interface Props {
  consentimiento: ConsentimientoAnalitica | null;
  onElegir: (valor: ConsentimientoAnalitica) => void;
}

export default function AvisoCookies({ consentimiento, onElegir }: Props) {
  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="titulo-preferencias"
      aria-describedby="descripcion-preferencias"
      className="fixed inset-x-3 bottom-3 z-[80] max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-base border border-linea bg-superficie p-5 shadow-2xl sm:p-7 md:left-1/2 md:w-[min(48rem,calc(100%-3rem))] md:-translate-x-1/2"
    >
      <h2 id="titulo-preferencias" className="text-xl text-tinta">
        Preferencias de cookies y analítica
      </h2>
      <p id="descripcion-preferencias" className="mt-3 text-[15px] leading-relaxed text-tinta-suave">
        Usamos el almacenamiento local del navegador para recordar tu elección. Si aceptas,
        activamos Vercel Web Analytics para medir visitas y clics de contacto. Esta analítica no
        utiliza cookies y rechazarla no afecta a la navegación.
      </p>
      {consentimiento && (
        <p className="mt-2 text-[14px] text-tinta-suave">
          Elección actual: analítica {consentimiento === 'aceptado' ? 'activada' : 'desactivada'}.
        </p>
      )}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => onElegir('rechazado')}
          className="min-h-12 flex-1 cursor-pointer rounded-base border border-oscuro bg-oscuro px-5 py-3 text-[15px] font-semibold text-white hover:bg-oscuro-hondo"
        >
          Rechazar analítica
        </button>
        <button
          type="button"
          onClick={() => onElegir('aceptado')}
          className="min-h-12 flex-1 cursor-pointer rounded-base border border-oscuro bg-oscuro px-5 py-3 text-[15px] font-semibold text-white hover:bg-oscuro-hondo"
        >
          Aceptar analítica
        </button>
      </div>
      <p className="mb-0 mt-4 text-[14px] text-tinta-suave">
        <Link to="/cookies" className="underline underline-offset-4">
          Política de cookies
        </Link>
        {' · '}
        <Link to="/privacidad" className="underline underline-offset-4">
          Política de privacidad
        </Link>
      </p>
    </aside>
  );
}
