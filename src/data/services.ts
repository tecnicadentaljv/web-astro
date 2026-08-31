/**
 * Especialidades del laboratorio.
 * `destacado: true` = se muestra en grande en la home.
 * No se incluye prótesis removible: el laboratorio no la potencia.
 */

export interface Servicio {
  id: string;
  titulo: string;
  resumen: string;
  detalle: string;
  puntos: string[];
  destacado: boolean;
  placeholder: string; // qué imagen debería ir aquí
}

export const servicios: Servicio[] = [
  {
    id: 'protesis-fija',
    titulo: 'Prótesis fija',
    resumen: 'Coronas, puentes y ceramometálico con un acabado que no hay que retocar en la clínica.',
    detalle:
      'Es el grueso de lo que hacemos cada día. Trabajamos el ajuste y el punto de contacto para que la prueba en boca sea corta y previsible, y ajustamos color con la clínica cuando el caso lo pide.',
    puntos: ['Coronas unitarias', 'Puentes', 'Ceramometálico', 'Cerámica sobre estructura'],
    destacado: true,
    placeholder: 'Macro de corona cerámica sobre fondo oscuro',
  },
  {
    id: 'implantes',
    titulo: 'Implantes',
    resumen: 'Trabajo sobre implantes de cualquier sistema, con la conexión y los aditamentos revisados antes de empezar.',
    detalle:
      'Antes de diseñar comprobamos sistema, conexión y aditamentos. Si algo no cuadra en el archivo o en el modelo, llamamos a la clínica el mismo día en vez de tirar hacia delante.',
    puntos: ['Atornillado', 'Cementado', 'Pilares y aditamentos', 'Revisión previa del caso'],
    destacado: true,
    placeholder: 'Macro de estructura sobre análogos de implante',
  },
  {
    id: 'trabajos-grandes',
    titulo: 'Arcadas y trabajos grandes',
    resumen: 'Rehabilitaciones completas y puentes de varias piezas sobre implantes. Nuestro terreno.',
    detalle:
      'Es el tipo de caso que más nos gusta y en el que más se nota la diferencia: planificación, pruebas intermedias bien definidas y contacto directo con el técnico que lo está haciendo.',
    puntos: ['Arcadas completas', 'Puentes de varias piezas', 'Rehabilitaciones sobre implantes', 'Pruebas intermedias'],
    destacado: true,
    placeholder: 'Macro de arcada completa en modelo',
  },
  {
    id: 'carillas',
    titulo: 'Carillas',
    resumen: 'Estética de alta exigencia, con caracterización y control de color caso a caso.',
    detalle:
      'Trabajos donde el margen de error es mínimo. Preferimos hablar antes del caso, ver fotos y decidir juntos el nivel de caracterización que busca la clínica.',
    puntos: ['Caracterización', 'Control de color', 'Casos estéticos anteriores', 'Prueba previa'],
    destacado: true,
    placeholder: 'Macro de carillas de cerámica a contraluz',
  },
  {
    id: 'ferulas',
    titulo: 'Férulas de descarga',
    resumen: 'Diseño digital, impresión 3D y acabado a mano para que entren y ajusten a la primera.',
    detalle:
      'Diseñamos en digital e imprimimos, pero el pulido y el ajuste final siguen siendo manuales. Es lo que hace que la férula no vuelva al laboratorio.',
    puntos: ['Diseño digital', 'Impresión 3D', 'Pulido y ajuste manual', 'Entrega rápida'],
    destacado: false,
    placeholder: 'Macro de férula transparente sobre modelo',
  },
  {
    id: 'estetica',
    titulo: 'Cerámica y estética',
    resumen: 'La parte artesanal del laboratorio: capas, textura y color trabajados a mano.',
    detalle:
      'El diseño es digital, pero la cerámica la seguimos estratificando y caracterizando a mano. Es donde se decide si un trabajo pasa desapercibido en boca o no.',
    puntos: ['Estratificado', 'Caracterización', 'Textura superficial', 'Toma de color con la clínica'],
    destacado: false,
    placeholder: 'Macro de textura y brillo de cerámica',
  },
];

/** Lo que el laboratorio ha decidido no hacer. Se cuenta abiertamente. */
export const noHacemos = {
  titulo: 'Lo que no hacemos',
  texto:
    'No hacemos prótesis removible. Preferimos concentrar el laboratorio en prótesis fija, implantes y estética, y hacerlo muy bien, antes que abarcarlo todo a medias.',
};
