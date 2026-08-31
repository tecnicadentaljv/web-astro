import { useSeo } from '@/hooks/useSeo';
import CabeceraPagina from '@components/sections/CabeceraPagina';
import { legal, datosPendientes } from '@data/legal';
import { seoRutas } from '@data/seo';
import { contacto } from '@data/site';

interface Bloque {
  titulo: string;
  parrafos: string[];
}

interface Props {
  tipo: 'aviso' | 'privacidad';
}

function bloques(tipo: 'aviso' | 'privacidad'): Bloque[] {
  if (tipo === 'aviso') {
    return [
      {
        titulo: 'Titular del sitio web',
        parrafos: [
          'Este sitio web es titularidad de ' +
            legal.razonSocial +
            ', con NIF ' +
            legal.nif +
            ' y domicilio en ' +
            contacto.direccionCompleta +
            '.',
          'Puedes contactar con nosotros en el teléfono ' +
            contacto.telefonoVisible +
            ' o en ' +
            legal.emailContacto +
            '.',
        ],
      },
      {
        titulo: 'Objeto',
        parrafos: [
          'Este sitio ofrece información sobre los servicios de laboratorio de prótesis dentales que prestamos a clínicas dentales. No se dirige a pacientes particulares y no permite contratación en línea.',
        ],
      },
      {
        titulo: 'Condiciones de uso',
        parrafos: [
          'El acceso a este sitio es gratuito y no requiere registro. Al usarlo te comprometes a hacerlo conforme a la ley y a no emplear los contenidos con fines ilícitos.',
        ],
      },
      {
        titulo: 'Propiedad intelectual',
        parrafos: [
          'Los textos, fotografías y elementos gráficos de este sitio son propiedad de su titular o se usan con autorización. No está permitida su reproducción sin consentimiento previo.',
        ],
      },
      {
        titulo: 'Responsabilidad',
        parrafos: [
          'Procuramos que la información publicada sea exacta y esté actualizada, pero no podemos garantizar la ausencia de errores. Los plazos, materiales y condiciones de cada trabajo se acuerdan de forma individual con cada clínica.',
        ],
      },
      {
        titulo: 'Legislación aplicable',
        parrafos: [
          'Esta relación se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del titular, salvo que la ley disponga otro fuero.',
        ],
      },
    ];
  }

  return [
    {
      titulo: 'Responsable del tratamiento',
      parrafos: [
        legal.razonSocial +
          ', NIF ' +
          legal.nif +
          ', con domicilio en ' +
          contacto.direccionCompleta +
          '. Para cualquier cuestión sobre tus datos puedes escribirnos a ' +
          legal.emailContacto +
          '.',
      ],
    },
    {
      titulo: 'Qué datos tratamos y con qué finalidad',
      parrafos: [
        'Este sitio no tiene formularios de contacto ni área de clientes, por lo que no recogemos datos personales a través de la web.',
        'Si nos escribes por WhatsApp o nos llamas por teléfono, trataremos los datos que nos facilites (nombre, clínica, teléfono y la información del caso) con la única finalidad de atender tu consulta y prestar el servicio de laboratorio.',
      ],
    },
    {
      titulo: 'Base legitimadora',
      parrafos: [
        'El tratamiento se basa en tu consentimiento al contactarnos y, cuando llegamos a trabajar juntos, en la ejecución de la relación contractual entre tu clínica y el laboratorio.',
      ],
    },
    {
      titulo: 'Conservación',
      parrafos: [
        'Conservamos los datos mientras dure la relación comercial y, después, durante los plazos exigidos por la normativa fiscal y mercantil.',
      ],
    },
    {
      titulo: 'Destinatarios',
      parrafos: [
        'No cedemos tus datos a terceros salvo obligación legal. Para determinados trabajos podemos apoyarnos en proveedores técnicos, como el centro de fresado, a los que solo se traslada la información necesaria para ejecutar el encargo.',
        'Ten en cuenta que si nos contactas por WhatsApp, el tratamiento de esa comunicación se rige además por las condiciones de su proveedor.',
      ],
    },
    {
      titulo: 'Analítica y cookies',
      parrafos: [
        'Usamos una herramienta de analítica que no emplea cookies ni crea perfiles de usuario, y que no permite identificarte de forma individual. Por eso este sitio no muestra banner de cookies.',
      ],
    },
    {
      titulo: 'Tus derechos',
      parrafos: [
        'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ' +
          legal.emailContacto +
          '. Si consideras que no hemos atendido correctamente tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos.',
      ],
    },
  ];
}

export default function Legal({ tipo }: Props) {
  const esAviso = tipo === 'aviso';

  useSeo(seoRutas[esAviso ? '/aviso-legal' : '/privacidad']);

  return (
    <>
      <CabeceraPagina
        titulo={esAviso ? 'Aviso legal' : 'Política de privacidad'}
        entrada={
          esAviso
            ? 'Información sobre el titular de este sitio web y las condiciones de uso.'
            : 'Qué datos tratamos, para qué, y cómo puedes ejercer tus derechos.'
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
                  <p
                    key={p.slice(0, 24)}
                    className="m-0 mt-4 text-[16px] leading-relaxed text-tinta-suave"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
            <p className="mt-10 text-[15px] text-tinta-suave">
              Última revisión: {legal.actualizado}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
