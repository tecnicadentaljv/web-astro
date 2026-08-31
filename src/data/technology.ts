/**
 * Tecnología real del laboratorio.
 * Regla: aquí solo se lista lo que existe hoy. Lo que está por llegar
 * va en `evolucion` y se comunica como plan, nunca como algo ya instalado.
 */

export interface Equipo {
  nombre: string;
  texto: string;
  estado: 'actual' | 'proximo';
}

export const tecnologiaActual: Equipo[] = [
  {
    nombre: 'Escáner de sobremesa',
    texto: 'Digitalizamos modelos y trabajamos también con los archivos que nos envía la clínica.',
    estado: 'actual',
  },
  {
    nombre: 'Software CAD/CAM',
    texto: 'Diseño digital de las piezas. Nos adaptamos al software con el que trabaje cada clínica.',
    estado: 'actual',
  },
  {
    nombre: 'Impresora 3D',
    texto: 'Modelos, férulas y estructuras impresas en el propio laboratorio.',
    estado: 'actual',
  },
  {
    nombre: 'Flujo con archivos digitales',
    texto: 'Recibimos los archivos de tu escáner intraoral y empezamos sin esperar a la mensajería.',
    estado: 'actual',
  },
];

export const parteArtesanal = {
  titulo: 'Y una parte que sigue siendo a mano',
  texto:
    'El acabado de la cerámica y de las férulas lo hacemos manualmente. No es una carencia: es la parte donde un técnico con experiencia marca la diferencia frente a una pieza salida en serie.',
  puntos: ['Estratificado de cerámica', 'Caracterización y color', 'Pulido de férulas', 'Ajuste final'],
};

export const evolucion = {
  titulo: 'Hacia dónde vamos',
  texto:
    'El laboratorio está en una etapa nueva y lo estamos actualizando por partes. El siguiente paso es incorporar fresadora y cerrar un flujo digital más completo, sin perder el acabado manual.',
  hitos: [
    { titulo: 'Fresadora', texto: 'Prevista para los próximos meses.', estado: 'proximo' as const },
    { titulo: 'Flujo digital completo', texto: 'Del archivo de la clínica a la pieza, sin saltos.', estado: 'proximo' as const },
    { titulo: 'Renovación de maquinaria', texto: 'Actualización por fases del laboratorio.', estado: 'proximo' as const },
  ],
};

/** Datos de "quiénes somos". Sin fotos de equipo por petición del laboratorio. */
export const laboratorio = {
  titulo: 'Un laboratorio nuevo con treinta años detrás',
  parrafos: [
    'Técnica Dental JV es una empresa nueva, pero no empieza de cero. El laboratorio lleva más de treinta años funcionando en el mismo sitio, en el barrio de Abastos de València, y hoy lo dirigimos dos de los técnicos que ya trabajaban en él.',
    'Somos seis personas. Una dirige el laboratorio y es el contacto directo con las clínicas, y el resto está repartido entre diseño digital, metales, cerámica y acabado. Eso significa que cuando llamas, hablas con alguien que sabe exactamente por dónde va tu caso.',
    'Esta nueva etapa va de dos cosas: modernizar el laboratorio paso a paso y mantener lo que ya funcionaba, que es el trato directo con las clínicas y resolver los problemas el mismo día en que aparecen.',
  ],
  datos: [
    { valor: '+30', etiqueta: 'años de laboratorio en el mismo sitio' },
    { valor: '6', etiqueta: 'personas en el equipo' },
    { valor: '1', etiqueta: 'interlocutor directo para tu clínica' },
    { valor: 'Valencia', etiqueta: 'barrio de Abastos, 46008' },
  ],
};

/** Perfil de clínica con el que mejor encaja el laboratorio. */
export const clinicas = [
  'Clínicas familiares que valoran el trato directo',
  'Clínicas premium con exigencia estética',
  'Clínicas implantológicas con casos grandes',
  'Dentistas jóvenes que ya trabajan en flujo digital',
];
