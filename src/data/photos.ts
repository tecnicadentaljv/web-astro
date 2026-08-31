/**
 * Catálogo de fotografía del laboratorio.
 *
 * El `alt` se escribe AQUÍ y AHORA, antes de que exista la foto, para que
 * al llegar el archivo no se rellene con un "imagen de laboratorio" puesto
 * con prisa. El alt describe lo que se ve, no repite el titular.
 *
 * Para publicar una foto: dejar el archivo en public/fotos/ y poner su
 * ruta en `src`. Las medidas ya están reservadas, así que sustituirla no
 * mueve el layout (CLS cero).
 *
 * Guía de tomas: ver FOTOGRAFIA.md en la raíz.
 */

export interface Foto {
  id: string;
  /** null mientras no exista el archivo. Ver FOTOGRAFIA.md */
  src: string | null;
  alt: string;
  /** Proporción reservada. No cambiar sin rehacer el encuadre. */
  ratio: string;
  /** Qué hay que fotografiar. Solo para el equipo, no se publica. */
  nota: string;
}

export const fotos = {
  corona: {
    id: 'corona',
    src: null,
    alt: 'Corona de cerámica terminada, vista de cerca sobre fondo negro, con la textura y el brillo de la superficie.',
    ratio: '3/2',
    nota: 'Corona de cerámica sola, muy de cerca. Luz lateral de ventana.',
  },
  implante: {
    id: 'implante',
    src: null,
    alt: 'Estructura atornillada sobre análogos de implante, con los tornillos y la conexión a la vista.',
    ratio: '3/2',
    nota: 'Estructura sobre análogos. Que se vea la conexión.',
  },
  arcada: {
    id: 'arcada',
    src: null,
    alt: 'Arcada completa montada en modelo, vista de tres cuartos, con todas las piezas colocadas.',
    ratio: '3/2',
    nota: 'Arcada completa en modelo, tres cuartos.',
  },
  carillas: {
    id: 'carillas',
    src: null,
    alt: 'Carillas de cerámica fotografiadas a contraluz, donde se aprecia la translucidez del material.',
    ratio: '3/2',
    nota: 'Carillas a contraluz. La más difícil y la más espectacular.',
  },
  manos: {
    id: 'manos',
    src: null,
    alt: 'Manos de un técnico estratificando cerámica con pincel sobre una pieza en el laboratorio.',
    ratio: '3/4',
    nota: 'Manos trabajando, pincel a la vista, sin rostros. Fondo despejado.',
  },
  ferula: {
    id: 'ferula',
    src: null,
    alt: 'Férula de descarga transparente recién pulida, con el brillo del acabado manual.',
    ratio: '1/1',
    nota: 'Férula recién pulida. Que se vea el brillo del pulido.',
  },
} satisfies Record<string, Foto>;

export type FotoId = keyof typeof fotos;

/** Cuántas fotos faltan. Se usa para avisar en consola durante el desarrollo. */
export const fotosPendientes = Object.values(fotos).filter((f) => f.src === null).length;
