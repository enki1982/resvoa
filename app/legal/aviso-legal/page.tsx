import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal - Resvoa",
  description: "Aviso legal e información corporativa de Resvoa.",
};

export default function AvisoLegalPage() {
  return (
    <main className="bg-gray-50">
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Scale className="w-12 h-12" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Aviso Legal
            </h1>
          </div>
          <p className="text-blue-100">
            Última actualización: 20 de noviembre de 2025
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 prose prose-sm max-w-none">
              <h2>1. Datos identificativos</h2>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos identificativos del titular de este sitio web:
              </p>
              <ul>
                <li><strong>Denominación social:</strong> Resvoa S.L.</li>
                <li><strong>CIF:</strong> B-12345678</li>
                <li><strong>Domicilio social:</strong> Carrer de Balmes, 123, 08008 Barcelona, España</li>
                <li><strong>Inscripción registral:</strong> Inscrita en el Registro Mercantil de Barcelona, Tomo 45678, Folio 123, Sección 8, Hoja B-567890</li>
                <li><strong>Correo electrónico:</strong> <a href="mailto:legal@resvoa.com" className="text-primary hover:underline">legal@resvoa.com</a></li>
                <li><strong>Teléfono:</strong> +34 900 123 456</li>
                <li><strong>Sitio web:</strong> www.resvoa.com</li>
              </ul>

              <h2>2. Objeto</h2>
              <p>
                El presente Aviso Legal regula el acceso y uso del sitio web www.resvoa.com (en adelante, "el Sitio Web" o "la Plataforma"), que Resvoa S.L. (en adelante, "Resvoa") pone a disposición de los usuarios de Internet.
              </p>
              <p>
                El acceso al Sitio Web implica la aceptación expresa y sin reservas de todos los términos del presente Aviso Legal, así como de los demás textos legales que puedan resultar de aplicación. En el caso de que el usuario no esté de acuerdo con el contenido del presente Aviso Legal, deberá abstenerse de acceder y/o utilizar los servicios y/o contenidos puestos a su disposición en el Sitio Web.
              </p>

              <h2>3. Servicios</h2>
              <p>
                Resvoa es una plataforma digital que conecta usuarios que necesitan ayuda con tareas cotidianas (microservicios) con proveedores de servicios independientes verificados. La Plataforma facilita:
              </p>
              <ul>
                <li>Publicación de solicitudes de servicios por parte de usuarios</li>
                <li>Búsqueda y aceptación de servicios por parte de proveedores</li>
                <li>Sistema de pagos seguros entre usuarios y proveedores</li>
                <li>Sistema de valoración y reputación</li>
                <li>Herramientas de comunicación y gestión de servicios</li>
              </ul>
              <p>
                Resvoa actúa únicamente como intermediario tecnológico y no es parte de la relación contractual que se establece entre usuarios y proveedores para la prestación de servicios.
              </p>

              <h2>4. Acceso y registro</h2>

              <h3>4.1 Condiciones de acceso</h3>
              <p>
                El acceso a la Plataforma es gratuito, pero ciertas funcionalidades requieren el registro y creación de una cuenta de usuario. Para registrarse, el usuario debe:
              </p>
              <ul>
                <li>Ser mayor de 18 años</li>
                <li>Tener capacidad legal para contratar</li>
                <li>Proporcionar información veraz, precisa y actualizada</li>
                <li>Aceptar los <Link href="/legal/terminos" className="text-primary hover:underline">Términos y Condiciones</Link> y la <Link href="/legal/privacidad" className="text-primary hover:underline">Política de Privacidad</Link></li>
              </ul>

              <h3>4.2 Responsabilidad del usuario</h3>
              <p>
                El usuario es responsable de:
              </p>
              <ul>
                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                <li>Todas las actividades realizadas bajo su cuenta</li>
                <li>Notificar inmediatamente cualquier uso no autorizado de su cuenta</li>
                <li>Cumplir con la normativa legal vigente en el uso de la Plataforma</li>
              </ul>

              <h2>5. Uso correcto del Sitio Web</h2>

              <h3>5.1 Uso permitido</h3>
              <p>
                El usuario se compromete a utilizar el Sitio Web y sus contenidos de conformidad con:
              </p>
              <ul>
                <li>La legislación aplicable en cada momento</li>
                <li>El presente Aviso Legal</li>
                <li>Los <Link href="/legal/terminos" className="text-primary hover:underline">Términos y Condiciones</Link></li>
                <li>La moral y buenas costumbres generalmente aceptadas</li>
                <li>El orden público</li>
              </ul>

              <h3>5.2 Usos prohibidos</h3>
              <p>
                Queda expresamente prohibido:
              </p>
              <ul>
                <li>Realizar actividades ilícitas, ilegales o contrarias a la buena fe</li>
                <li>Introducir virus, malware o cualquier código malicioso</li>
                <li>Intentar acceder a áreas restringidas sin autorización</li>
                <li>Realizar ingeniería inversa de la Plataforma</li>
                <li>Copiar, reproducir, distribuir o modificar contenidos sin autorización</li>
                <li>Realizar ataques de denegación de servicio</li>
                <li>Suplantar la identidad de otros usuarios</li>
                <li>Recopilar datos de otros usuarios con fines comerciales no autorizados</li>
                <li>Utilizar la Plataforma para enviar spam o comunicaciones no solicitadas</li>
              </ul>

              <h2>6. Propiedad intelectual e industrial</h2>

              <h3>6.1 Derechos de Resvoa</h3>
              <p>
                Todos los contenidos del Sitio Web, incluyendo pero no limitándose a textos, fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Resvoa o de terceros que han autorizado su uso, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual e industrial.
              </p>

              <h3>6.2 Marcas y logos</h3>
              <p>
                Las marcas, nombres comerciales y signos distintivos que aparecen en el Sitio Web son propiedad de Resvoa o de terceros que han autorizado su uso. Su exhibición no implica la concesión de licencia o autorización para su uso.
              </p>

              <h3>6.3 Contenidos de usuarios</h3>
              <p>
                Los usuarios conservan todos los derechos sobre los contenidos que publican en la Plataforma (comentarios, valoraciones, fotos, etc.), pero otorgan a Resvoa una licencia no exclusiva, gratuita, mundial y transferible para usar, reproducir, distribuir y mostrar dichos contenidos en relación con la operación y promoción de la Plataforma.
              </p>

              <h2>7. Exclusión de responsabilidad</h2>

              <h3>7.1 Disponibilidad del servicio</h3>
              <p>
                Resvoa no garantiza la disponibilidad continua e ininterrumpida del Sitio Web. No seremos responsables de:
              </p>
              <ul>
                <li>Interrupciones del servicio por mantenimiento o actualizaciones</li>
                <li>Fallos técnicos o problemas de conectividad fuera de nuestro control</li>
                <li>Ataques informáticos o problemas causados por terceros</li>
              </ul>

              <h3>7.2 Contenidos</h3>
              <p>
                Resvoa no se hace responsable de:
              </p>
              <ul>
                <li>La veracidad, exactitud o actualización de la información proporcionada por usuarios y proveedores</li>
                <li>Los contenidos publicados por usuarios en comentarios, valoraciones o comunicaciones</li>
                <li>Las opiniones expresadas por usuarios en la Plataforma</li>
              </ul>

              <h3>7.3 Servicios prestados entre usuarios y proveedores</h3>
              <p>
                Resvoa actúa como mero intermediario tecnológico. No somos responsables de:
              </p>
              <ul>
                <li>La calidad, seguridad o legalidad de los servicios prestados</li>
                <li>La capacidad de los proveedores para prestar los servicios ofrecidos</li>
                <li>Los daños o perjuicios derivados de la prestación de servicios</li>
                <li>Las disputas entre usuarios y proveedores</li>
              </ul>

              <h3>7.4 Enlaces a terceros</h3>
              <p>
                El Sitio Web puede contener enlaces a sitios web de terceros. Resvoa no controla ni es responsable de los contenidos, políticas de privacidad o prácticas de sitios web de terceros.
              </p>

              <h2>8. Modificaciones</h2>
              <p>
                Resvoa se reserva el derecho de modificar el presente Aviso Legal en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el Sitio Web. Se recomienda a los usuarios revisar periódicamente este Aviso Legal.
              </p>

              <h2>9. Duración y terminación</h2>
              <p>
                La prestación del servicio del Sitio Web tiene duración indefinida. Sin embargo, Resvoa se reserva el derecho de suspender o dar por terminada la prestación de servicios en cualquier momento, sin necesidad de preaviso.
              </p>

              <h2>10. Protección de datos</h2>
              <p>
                El tratamiento de datos personales que Resvoa realiza se encuentra detallado en nuestra <Link href="/legal/privacidad" className="text-primary hover:underline">Política de Privacidad</Link>, que forma parte integrante de este Aviso Legal.
              </p>

              <h2>11. Normativa aplicable</h2>
              <p>
                El presente Aviso Legal se rige por la legislación española, en particular:
              </p>
              <ul>
                <li>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)</li>
                <li>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales (RGPD)</li>
                <li>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</li>
                <li>Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios</li>
              </ul>

              <h2>12. Jurisdicción y legislación aplicable</h2>
              <p>
                Las relaciones establecidas entre Resvoa y los usuarios del Sitio Web se rigen por la legislación española vigente.
              </p>
              <p>
                Para la resolución de cualquier controversia que pudiera surgir en relación con el Sitio Web o la interpretación y ejecución del presente Aviso Legal, Resvoa y el usuario, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, se someten a los juzgados y tribunales de Barcelona, España.
              </p>
              <p>
                Si el usuario actúa como consumidor, según lo previsto en el Real Decreto Legislativo 1/2007, de 16 de noviembre, serán competentes los juzgados y tribunales del domicilio del consumidor.
              </p>

              <h2>13. Resolución de conflictos online</h2>
              <p>
                De conformidad con el Reglamento (UE) 524/2013, se informa que para las reclamaciones relativas a obligaciones contractuales derivadas de contratos de compraventa o de servicios en línea entre un consumidor residente en la Unión Europea y un comerciante establecido en la Unión Europea, la Comisión Europea facilita una plataforma de resolución de litigios en línea, a la que se puede acceder en el siguiente enlace: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a>
              </p>

              <h2>14. Contacto</h2>
              <p>
                Para cualquier consulta, sugerencia o reclamación relacionada con el presente Aviso Legal o el funcionamiento del Sitio Web, puede ponerse en contacto con nosotros a través de:
              </p>
              <ul>
                <li><strong>Correo electrónico:</strong> <a href="mailto:legal@resvoa.com" className="text-primary hover:underline">legal@resvoa.com</a></li>
                <li><strong>Teléfono:</strong> +34 900 123 456</li>
                <li><strong>Dirección postal:</strong> Carrer de Balmes, 123, 08008 Barcelona, España</li>
                <li><strong>Horario de atención:</strong> Lunes a viernes de 9:00 a 19:00h, sábados de 10:00 a 14:00h</li>
              </ul>

              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-600 mb-0">
                  <strong>Última revisión:</strong> Este Aviso Legal ha sido revisado y actualizado el 20 de noviembre de 2025. Recomendamos a los usuarios revisar periódicamente este documento para estar al corriente de cualquier modificación.
                </p>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Documentos legales relacionados:</strong>
                </p>
                <ul className="text-sm text-gray-700 mb-0">
                  <li>• <Link href="/legal/terminos" className="text-primary hover:underline">Términos y Condiciones</Link></li>
                  <li>• <Link href="/legal/privacidad" className="text-primary hover:underline">Política de Privacidad</Link></li>
                  <li>• <Link href="/legal/cookies" className="text-primary hover:underline">Política de Cookies</Link></li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
