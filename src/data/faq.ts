/**
 * Preguntas reales de una clínica que todavía no ha trabajado con el
 * laboratorio. No son preguntas de relleno: cada una responde una objeción
 * concreta que frena el primer encargo.
 *
 * Se publican con schema FAQPage (ver src/data/schema.ts) para optar a
 * resultado enriquecido en Google. Ningún competidor de Valencia lo tiene.
 */

export interface Pregunta {
  pregunta: string;
  respuesta: string;
}

export const faq: Pregunta[] = [
  {
    pregunta: '¿Trabajáis con mi sistema de implantes?',
    respuesta:
      'Sí, con cualquier sistema. Antes de diseñar comprobamos sistema, conexión y aditamentos, y si algo no cuadra en el archivo o en el modelo te llamamos ese mismo día en vez de tirar hacia delante.',
  },
  {
    pregunta: '¿Cómo os envío un caso?',
    respuesta:
      'Como te venga bien. Si tienes escáner intraoral, mándanos el archivo por el canal que uses habitualmente. Si trabajas con modelo físico, nos llega y lo digitalizamos aquí. El resto del proceso es idéntico.',
  },
  {
    pregunta: '¿Cuánto tardáis en entregar?',
    respuesta:
      'Depende del caso, y lo acordamos antes de empezar. No damos plazos que no podamos cumplir: preferimos decirte que no llegamos a una fecha antes que prometerla y fallarte el día de la cita del paciente.',
  },
  {
    pregunta: '¿Hacéis prótesis removible?',
    respuesta:
      'No. Nos concentramos en prótesis fija, implantes y estética, que es donde el laboratorio rinde mejor. Preferimos decírtelo de entrada antes que aceptar un trabajo que otro haría mejor.',
  },
  {
    pregunta: '¿Dais garantía sobre el trabajo?',
    respuesta:
      'Sí. Dos años en prótesis fija, implantes, arcadas y carillas, asumiendo nosotros el 100% del coste. En férulas de descarga, un año y asumimos el 50%. Cubre lo que es cosa nuestra: ajuste, fractura del material y fallo de la estructura.',
  },
  {
    pregunta: '¿Y si algo falla en la prueba?',
    respuesta:
      'Nos lo dices y lo resolvemos, siempre que podamos el mismo día. La repetición corre de nuestra cuenta. Los casos que vuelven son parte del trabajo; lo que no es normal es que nadie te coja el teléfono para hablarlos.',
  },
];
