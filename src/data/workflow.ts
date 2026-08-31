/** Flujo de trabajo, de la clínica al laboratorio y de vuelta. */

export interface PasoFlujo {
  numero: string;
  titulo: string;
  texto: string;
  tipo: 'digital' | 'manual' | 'mixto';
}

export const flujo: PasoFlujo[] = [
  {
    numero: '01',
    titulo: 'Nos llega el caso',
    texto:
      'Archivo digital de tu escáner intraoral o modelo físico, como prefieras trabajar. Los dos flujos nos valen.',
    tipo: 'mixto',
  },
  {
    numero: '02',
    titulo: 'Lo revisamos antes de empezar',
    texto:
      'Comprobamos sistema de implante, márgenes, espacio y color. Si algo no cuadra, te llamamos el mismo día. No empezamos un trabajo con una duda encima.',
    tipo: 'mixto',
  },
  {
    numero: '03',
    titulo: 'Diseño digital',
    texto:
      'Diseñamos la pieza en CAD. Si el caso lo pide, te enviamos el diseño antes de producir para que des el visto bueno.',
    tipo: 'digital',
  },
  {
    numero: '04',
    titulo: 'Producción',
    texto:
      'Escáner de sobremesa, CAD/CAM e impresión 3D para modelos, férulas y estructuras. La parte digital cubre cada vez más del proceso.',
    tipo: 'digital',
  },
  {
    numero: '05',
    titulo: 'Acabado a mano',
    texto:
      'Cerámica, repasado y ajuste final siguen siendo manuales. Es la parte que decide cómo entra el trabajo en boca.',
    tipo: 'manual',
  },
  {
    numero: '06',
    titulo: 'Entrega y seguimiento',
    texto:
      'Te entregamos el caso y seguimos disponibles. Si en la prueba surge algo, lo resolvemos ese mismo día siempre que podamos.',
    tipo: 'mixto',
  },
];

/** Problemas típicos de la clínica y qué hacemos nosotros con ellos. */
export const problemas = [
  {
    problema: 'Llamas al laboratorio y nadie te da una respuesta clara.',
    solucion: 'Hablas siempre con la persona que dirige el laboratorio y sabe cómo va tu caso.',
  },
  {
    problema: 'Te enteras de que el trabajo no llega el día de la cita del paciente.',
    solucion: 'Si algo se complica, te avisamos en cuanto lo detectamos, no el día antes.',
  },
  {
    problema: 'Un caso difícil vuelve una y otra vez a la clínica.',
    solucion: 'Revisamos el caso antes de producir y te llamamos si vemos algo raro en el archivo.',
  },
  {
    problema: 'Nadie te asesora: te entregan la pieza y ya te apañarás.',
    solucion: 'Te acompañamos durante el proceso y te decimos qué haríamos nosotros.',
  },
];

/** Motivos para trabajar con el laboratorio. */
export const motivos = [
  {
    titulo: 'Los problemas se hablan cuando aparecen',
    texto:
      'No esperamos a que preguntes ni a que sea tarde. En cuanto vemos algo raro en un caso, lo ponemos encima de la mesa.',
  },
  {
    titulo: 'Un solo interlocutor',
    texto:
      'No te pasan de una persona a otra. Quien te coge el caso es quien lo lleva hasta que sale por la puerta.',
  },
  {
    titulo: 'Resolvemos, no devolvemos',
    texto:
      'Los casos difíciles son parte del trabajo. Te decimos qué se puede hacer y lo hacemos.',
  },
  {
    titulo: 'Plazos que se cumplen',
    texto:
      'No prometemos plazos imposibles. Preferimos recibir el caso con tiempo y entregarlo bien que correr y repetir.',
  },
  {
    titulo: 'Solo trabajamos con clínicas',
    texto:
      'No atendemos a pacientes. Todo el laboratorio está organizado alrededor del trabajo de la clínica.',
  },
  {
    titulo: 'Cada vez más digital',
    texto:
      'Estamos modernizando el laboratorio paso a paso, y encajamos bien con clínicas que ya trabajan en flujo digital.',
  },
];

/**
 * COMPROMISO DE RESPUESTA.
 *
 * Es el diferenciador central del laboratorio y la pieza que más arriba
 * aparece en la home después del hero.
 *
 * OJO con la redacción: PincelArt vende "el mismo día de la cirugía"
 * refiriéndose a ENTREGA de provisionales. Si esto se lee como plazo de
 * fabricación, os medirán contra algo que no habéis prometido. Por eso la
 * aclaración de abajo no es opcional.
 *
 */
export const compromiso = {
  titular: 'Atendemos tu caso en menos de 24 horas.',
  cuerpo:
    'Escribes o llamas y te contesta alguien que sabe exactamente por dónde va tu caso, sin tener que buscarlo ni preguntar a nadie.',
  // Estas precisiones son las que hacen que la promesa se pueda cumplir
  // siempre. Sin ellas se rompe cada viernes por la tarde, y se confunde con
  // un plazo de fabricación, que es el terreno de PincelArt.
  aclaracion:
    'Hablamos de atenderte, no de fabricar: los plazos de entrega los acordamos caso a caso.',
  // Dicho sin rodeos a propósito. Se sobreentiende, pero conviene que no
  // haya forma de interpretarlo mal.
  cuandoNo:
    'Las 24 horas cuentan en horario de laboratorio. Fines de semana, festivos y vacaciones no corren: si nos escribes un sábado o estamos cerrados por vacaciones, te contestamos el siguiente día laborable.',
};

/**
 * Dónde se fresa. Se cuenta abierto porque nadie en el sector explica su
 * cadena, y callarlo deja viva la objeción.
 *
 * Decisión del laboratorio: se dice que se fresa fuera pero no se nombra
 * al centro, para no exponer a un tercero que no lo ha autorizado.
 */
export const fresado = {
  texto:
    'Todavía no tenemos fresadora propia. Hasta que llegue, el fresado lo hacemos en un centro de Valencia con el que trabajamos de forma estable. El diseño, el ajuste y todo el acabado siguen siendo nuestros.',
};
