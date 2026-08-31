/**
 * Garantía y política de repeticiones.
 *
 * Es el dato más fuerte de toda la web y ninguno de los siete laboratorios
 * de Valencia que auditamos publica el suyo. Va con cifras porque las cifras
 * son verificables; un "máxima calidad" no lo es.
 *
 * Responde además a la angustia real del dentista, que no es técnica: es
 * "¿me va a volver esto y me va a reclamar el paciente?".
 */

export const garantia = {
  titular: 'Si algo sale mal, lo asumimos nosotros.',
  entrada:
    'Esto es lo que hacemos siempre, no una promesa comercial. Si prefieres verlo por escrito antes de mandarnos un caso, aquí está.',

  coberturas: [
    {
      plazo: '2 años',
      alcance: 'Prótesis fija, implantes, arcadas completas y carillas.',
      asumimos: 'Asumimos el 100% del coste',
    },
    {
      plazo: '1 año',
      alcance: 'Férulas de descarga.',
      asumimos: 'Asumimos el 50% del coste',
    },
  ],

  /**
   * ⚠️ CONFIRMAR ESTA FRASE ANTES DE PUBLICAR.
   *
   * Redactada como asunción razonable: la garantía cubre lo que es
   * responsabilidad del laboratorio, no el uso posterior. Publicar
   * "2 años al 100%" sin acotar el alcance es la única frase de toda la web
   * que genera responsabilidad real, así que tiene que decir exactamente lo
   * que el laboratorio esté dispuesto a sostener.
   *
   * Si el laboratorio cubre más de lo que dice aquí, ampliarla. Si cubre
   * menos, recortarla. Lo que no puede quedarse es sin revisar.
   */
  limite:
    'La garantía cubre lo que es cosa nuestra: el ajuste, la fractura del material y el fallo de la estructura. No cubre golpes, bruxismo ni cambios en la boca del paciente posteriores a la entrega.',

  compromisos: [
    {
      titulo: 'La repetición corre de nuestra cuenta',
      texto:
        'Intentamos rehacerla en el mismo plazo que tuvo el trabajo original. Cuando la dificultad no lo permite, en el menor tiempo posible, y te decimos cuánto desde el principio.',
    },
    {
      titulo: 'Te avisamos antes de la cita del paciente',
      texto:
        'En cuanto detectamos un problema te llamamos. Siempre antes de la cita, nunca cuando ya no te da tiempo a reaccionar.',
    },
    {
      titulo: 'Revisamos el caso antes de producir',
      texto:
        'Sistema de implante, conexión, aditamentos, márgenes, espacio y color. Si algo no cuadra en el archivo o en el modelo, llamamos antes de empezar en vez de tirar hacia delante.',
    },
  ],
};
