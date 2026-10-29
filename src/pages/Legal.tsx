import { useSeo } from '@/hooks/useSeo';
import CabeceraPagina from '@components/sections/CabeceraPagina';
import { Link } from '@components/ui/Link';
import { legal, datosPendientes } from '@data/legal';
import { seoRutas } from '@data/seo';

interface Bloque {
  titulo: string;
  parrafos: string[];
}

interface Props {
  tipo: 'aviso' | 'privacidad' | 'cookies';
}

function bloques(tipo: Props['tipo']): Bloque[] {
  if (tipo === 'aviso') {
    return [
      {
        titulo: 'Datos identificativos del titular',
        parrafos: [
          `${legal.razonSocial}, con NIF ${legal.nif}, domicilio social en ${legal.domicilioFiscal}, correo electrónico ${legal.emailContacto} y teléfono ${legal.telefono}.`,
          `IRUS ${legal.irus}. ${legal.titulacion}, número de colegiado ${legal.numeroColegiado}.`,
        ],
      },
      {
        titulo: 'Objeto y condiciones de uso',
        parrafos: [
          'Este sitio informa sobre los servicios de laboratorio de prótesis dentales de Técnica Dental JV, dirigidos exclusivamente a clínicas dentales. El acceso y la navegación atribuyen la condición de usuario e implican la aceptación de este aviso legal.',
          'El usuario se compromete a utilizar el sitio y sus contenidos conforme a la ley, la buena fe y este aviso. No podrá emplearlos para fines ilícitos, lesivos o que puedan dañar, sobrecargar o impedir el funcionamiento del sitio.',
        ],
      },
      {
        titulo: 'Propiedad intelectual e industrial',
        parrafos: [
          'Los textos, fotografías, diseños, marcas, logotipos, código y demás contenidos del sitio pertenecen a su titular o se utilizan con autorización. No se concede al usuario ningún derecho de explotación sobre ellos y queda prohibida su reproducción, distribución, transformación o comunicación pública sin autorización, salvo que la ley lo permita.',
        ],
      },
      {
        titulo: 'Disponibilidad y responsabilidad',
        parrafos: [
          'Se procura mantener el sitio disponible, seguro y actualizado, pero no se garantiza la ausencia de interrupciones, errores o virus. La información tiene carácter informativo y no sustituye el acuerdo individual de cada trabajo con la clínica.',
          'El titular no responde de los daños derivados de fallos de redes, del navegador, del equipo del usuario ni del contenido o funcionamiento de sitios de terceros enlazados.',
        ],
      },
      {
        titulo: 'Notificaciones y legislación aplicable',
        parrafos: [
          'Las comunicaciones realizadas por los medios de contacto publicados serán eficaces cuando permitan acreditar su envío o recepción.',
          'Este aviso se rige por la legislación española. Para las cuestiones que puedan surgir se aplicarán los juzgados y tribunales que correspondan conforme a la normativa vigente.',
        ],
      },
    ];
  }

  if (tipo === 'cookies') {
    return [
      {
        titulo: 'Tecnologías utilizadas',
        parrafos: [
          'Esta web guarda en el almacenamiento local de tu navegador tu elección sobre la analítica. Es necesario para recordarla y no activa la medición de visitas por sí mismo. No instalamos cookies de publicidad o personalización.',
          'Los enlaces a WhatsApp y Google Maps abren esos servicios únicamente cuando el usuario pulsa en ellos. Desde ese momento se aplican las políticas del proveedor correspondiente.',
        ],
      },
      {
        titulo: 'Medición de visitas',
        parrafos: [
          'Solo si aceptas la analítica cargamos Vercel Web Analytics para obtener estadísticas agregadas de visitas y clics en los enlaces de contacto. El servicio no utiliza cookies: identifica la visita mediante un hash de la petición y descarta ese identificador después de 24 horas.',
          'No usamos estos datos para publicidad ni para crear perfiles individuales. La información técnica puede incluir la página visitada, fecha y hora, dispositivo, navegador, sistema operativo, país o ciudad aproximados y sitio de procedencia.',
          'Puedes aceptar o rechazar la analítica desde el aviso inicial y cambiar tu decisión en cualquier momento mediante «Configurar cookies» en el pie de página. Al retirarla, dejamos de cargar la analítica en las visitas siguientes y recargamos la página para detener el script activo.',
        ],
      },
      {
        titulo: 'Cambios y contacto',
        parrafos: [
          'Si incorporamos otras tecnologías opcionales, actualizaremos esta política y solicitaremos una nueva elección antes de activarlas.',
          `Para cualquier duda sobre cookies o medición puedes escribir a ${legal.emailContacto}. Última revisión: ${legal.actualizado}.`,
        ],
      },
    ];
  }

  return [
    {
      titulo: 'Responsable del tratamiento',
      parrafos: [
        `${legal.razonSocial}, NIF ${legal.nif}, con domicilio en ${legal.domicilioFiscal}. Puedes contactar en ${legal.emailContacto} o ${legal.telefono}.`,
      ],
    },
    {
      titulo: 'Datos tratados y finalidades',
      parrafos: [
        'La web no tiene formularios de contacto, área de clientes ni subida de casos clínicos. Cuando una clínica llama o escribe por WhatsApp, podemos tratar los datos que facilite, como nombre, clínica, teléfono y contenido de la consulta, para responder, gestionar la relación profesional y prestar el servicio solicitado.',
        'Vercel recibe determinados datos técnicos necesarios para servir y proteger el sitio. Solo si aceptas la analítica se miden las visitas y los clics en enlaces de contacto. No se toman decisiones automatizadas ni se elaboran perfiles individuales.',
      ],
    },
    {
      titulo: 'Base jurídica',
      parrafos: [
        'Las consultas y la preparación de servicios se tratan sobre la base de medidas precontractuales o de la ejecución de la relación contractual, según corresponda. El funcionamiento y la seguridad del sitio y la relación profesional con las clínicas se basan en el interés legítimo. La analítica opcional se activa con tu consentimiento, que puedes retirar desde «Configurar cookies» en el pie de página. Las comunicaciones comerciales que requieran consentimiento solo se enviarán cuando exista una autorización válida.',
      ],
    },
    {
      titulo: 'Destinatarios y transferencias',
      parrafos: [
        'Los datos no se venden ni se ceden para fines propios de terceros. Pueden acceder a ellos Vercel, como proveedor de alojamiento y analítica; WhatsApp, si eliges utilizar ese canal; proveedores técnicos que necesiten la información mínima para ejecutar un encargo; y las autoridades cuando exista una obligación legal.',
        'Estos proveedores pueden tratar información fuera del Espacio Económico Europeo. Dicho tratamiento se realiza conforme a sus condiciones, garantías y mecanismos de transferencia aplicables. Puedes consultar sus políticas antes de utilizar sus servicios.',
      ],
    },
    {
      titulo: 'Conservación',
      parrafos: [
        'Conservamos los datos de las consultas durante el tiempo necesario para atenderlas. Si comienza una relación comercial, conservamos la información mientras dure y después durante los plazos legales aplicables y el tiempo necesario para atender posibles responsabilidades.',
      ],
    },
    {
      titulo: 'Derechos',
      parrafos: [
        `Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad, así como retirar un consentimiento cuando sea la base del tratamiento, escribiendo a ${legal.emailContacto} o a ${legal.domicilioFiscal}. Puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
      ],
    },
  ];
}

export default function Legal({ tipo }: Props) {
  const esAviso = tipo === 'aviso';
  const esCookies = tipo === 'cookies';
  const ruta = esAviso ? '/aviso-legal' : esCookies ? '/cookies' : '/privacidad';

  useSeo(seoRutas[ruta]);

  return (
    <>
      <CabeceraPagina
        titulo={esAviso ? 'Aviso legal' : esCookies ? 'Política de cookies' : 'Política de privacidad'}
        entrada={
          esAviso
            ? 'Información sobre el titular del sitio y las condiciones de uso.'
            : esCookies
              ? 'Qué tecnologías utilizamos para medir las visitas a esta web.'
              : 'Qué datos tratamos, para qué y cómo puedes ejercer tus derechos.'
        }
      />

      <section className="bg-fondo">
        <div className="contenedor py-20 md:py-28">
          {import.meta.env.DEV && datosPendientes && (
            <p className="mb-12 max-w-[62ch] rounded-base border border-acento bg-panel p-5 text-[15px] leading-relaxed text-tinta">
              Faltan datos fiscales por rellenar en <code>src/data/legal.ts</code>. No publicar esta
              página hasta completarlos y validarlos con un asesor.
            </p>
          )}

          <div className="max-w-[68ch]">
            {bloques(tipo).map((bloque) => (
              <div
                key={bloque.titulo}
                className="border-t border-linea py-8 first:border-t-0 first:pt-0"
              >
                <h2 className="m-0 font-display text-xl leading-snug text-tinta">{bloque.titulo}</h2>
                {bloque.parrafos.map((p) => (
                  <p key={p.slice(0, 24)} className="m-0 mt-4 text-[16px] leading-relaxed text-tinta-suave">
                    {p}
                  </p>
                ))}
              </div>
            ))}
            {tipo !== 'aviso' && (
              <p className="mt-8 text-[16px] text-tinta-suave">
                <Link
                  to={esCookies ? '/privacidad' : '/cookies'}
                  className="text-acento underline underline-offset-4 hover:text-tinta"
                >
                  {esCookies ? 'Consultar la política de privacidad' : 'Consultar la política de cookies'}
                </Link>
              </p>
            )}
            <p className="mt-10 text-[15px] text-tinta-suave">Última revisión: {legal.actualizado}</p>
          </div>
        </div>
      </section>
    </>
  );
}
