import Foto from '@components/ui/Foto';
import { tecnologiaActual, parteArtesanal } from '@data/technology';

/**
 * Familia de layout: inventario a dos columnas con foto de apoyo.
 * Lo que antes eran "Próximos pasos" y la fresadora vive ahora en
 * Honestidad, que es donde pesa de verdad.
 */
export default function Tecnologia() {
  return (
    <section className="border-y border-linea bg-superficie" id="tecnologia">
      <div className="contenedor grid gap-x-12 gap-y-14 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="reveal max-w-[16ch] font-display text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.05] text-tinta">
            Digital donde suma. A mano donde se nota.
          </h2>
          <p className="reveal mt-6 max-w-[46ch] text-lg leading-relaxed text-tinta-suave">
            Esto es lo que hay hoy en el laboratorio, sin adornos.
          </p>

          <div className="mt-10">
            {tecnologiaActual.map((equipo, i) => (
              <div
                key={equipo.nombre}
                className="reveal border-t border-linea py-6"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <h3 className="font-display text-lg text-tinta">{equipo.nombre}</h3>
                <p className="m-0 mt-2 max-w-[48ch] text-[15px] leading-relaxed text-tinta-suave">
                  {equipo.texto}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5 lg:col-start-8">
          <Foto id="manos" className="reveal" />
          <div className="reveal">
            <h3 className="font-display text-xl text-tinta">{parteArtesanal.titulo}</h3>
            <p className="m-0 mt-3 max-w-[46ch] text-[16px] leading-relaxed text-tinta-suave">
              {parteArtesanal.texto}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
