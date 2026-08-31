import { fotos, type FotoId } from '@data/photos';

interface Props {
  /** Clave del catálogo en src/data/photos.ts */
  id: FotoId;
  /** true solo para imágenes por encima del pliegue: desactiva lazy loading. */
  prioritaria?: boolean;
  className?: string;
}

/**
 * Imagen del laboratorio con el hueco ya dimensionado.
 *
 * Mientras `src` sea null, pinta un panel neutro con la proporción final
 * reservada. Al llegar la foto no se mueve nada (CLS cero).
 *
 * En desarrollo el panel muestra qué toma falta. En producción es un panel
 * limpio, sin rayas diagonales ni etiquetas "img /", que era andamiaje
 * disfrazado de diseño.
 */
export default function Foto({ id, prioritaria = false, className = '' }: Props) {
  const foto = fotos[id];

  if (!foto.src) {
    return (
      <div
        className={`relative overflow-hidden rounded-base bg-panel ${className}`}
        style={{ aspectRatio: foto.ratio }}
        aria-hidden="true"
      >
        {import.meta.env.DEV && (
          <span className="absolute inset-0 flex items-end p-4 text-[12px] leading-snug text-tinta-suave">
            Falta foto: {foto.nota}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={foto.src}
      alt={foto.alt}
      loading={prioritaria ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={prioritaria ? 'high' : undefined}
      className={`w-full rounded-base object-cover ${className}`}
      style={{ aspectRatio: foto.ratio }}
    />
  );
}
