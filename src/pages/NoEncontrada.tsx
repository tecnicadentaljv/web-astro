import { Link } from '@components/ui/Link';
import { useSeo } from '@/hooks/useSeo';
import { navegacion } from '@data/site';

/**
 * 404 útil: en vez de un callejón sin salida, ofrece las rutas reales.
 * Cuenta además como enlazado interno.
 */
export default function NoEncontrada() {
  useSeo({
    titulo: 'Página no encontrada',
    descripcion: 'Esta página no existe.',
    noindex: true,
  });

  return (
    <section className="bg-fondo">
      <div className="contenedor flex min-h-[60vh] flex-col justify-center py-24">
        <h1 className="max-w-[16ch] font-display text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.02] text-tinta">
          Esta página no existe.
        </h1>
        <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-tinta-suave">
          Puede que la hayamos movido. Esto es todo lo que hay en la web.
        </p>

        <div className="mt-12 grid max-w-[60ch] gap-x-12 sm:grid-cols-2">
          {navegacion.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="border-t border-linea py-5 text-[17px] text-tinta no-underline hover:text-acento"
            >
              {item.texto}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
