import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Briefcase, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Condiciones para Proveedores - Resvoa",
  description: "Términos y condiciones específicos para proveedores de servicios en Resvoa.",
};

export default function CondicionesProveedoresPage() {
  return (
    <main className="bg-gray-50">
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-12 h-12" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Condiciones para Proveedores
            </h1>
          </div>
          <p className="text-blue-100">
            Última actualización: 25 de noviembre de 2025
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 prose prose-sm max-w-none">
              <h2>1. Introducción</h2>
              <p>
                Las presentes Condiciones para Proveedores (en adelante, "Condiciones") complementan los <Link href="/legal/terminos" className="text-primary hover:underline">Términos y Condiciones</Link> generales de Resvoa y regulan específicamente la relación entre Resvoa S.L. (en adelante, "Resvoa") y las personas que ofrecen servicios a través de la Plataforma (en adelante, "Proveedores").
              </p>

              <h2>2. Naturaleza de la relación</h2>

              <h3>2.1 Economía colaborativa</h3>
              <p>
                Resvoa opera bajo el modelo de economía colaborativa, facilitando la conexión entre particulares que necesitan ayuda con microtareas y personas dispuestas a prestarla.
              </p>

              <h3>2.2 Independencia profesional</h3>
              <p>
                Los Proveedores actúan como <strong>trabajadores autónomos e independientes</strong>. La relación entre Resvoa y los Proveedores NO constituye:
              </p>
              <ul>
                <li>Una relación laboral o de empleo</li>
                <li>Una sociedad o joint venture</li>
                <li>Una franquicia</li>
                <li>Una relación de agencia</li>
              </ul>

              <h3>2.3 Resvoa como intermediario</h3>
              <p>
                Resvoa actúa <strong>únicamente como intermediario tecnológico</strong> que facilita la conexión entre Usuarios y Proveedores. Resvoa NO:
              </p>
              <ul>
                <li>Es empleador de los Proveedores</li>
                <li>Supervisa la ejecución diaria de los servicios</li>
                <li>Impone horarios de trabajo</li>
                <li>Obliga a aceptar servicios específicos</li>
                <li>Presta directamente los servicios a los Usuarios</li>
              </ul>

              <h2>3. Registro y requisitos</h2>

              <h3>3.1 Requisitos generales</h3>
              <p>
                Para registrarse como Proveedor, debe:
              </p>
              <ul>
                <li>Ser mayor de 18 años</li>
                <li>Tener capacidad legal para contratar</li>
                <li>Residir legalmente en España o la UE</li>
                <li>Aceptar estas Condiciones y los Términos generales</li>
                <li>Completar el proceso de verificación de identidad</li>
              </ul>

              <h3>3.2 Verificación de identidad</h3>
              <p>
                Todos los Proveedores deben completar un proceso obligatorio de verificación que incluye:
              </p>
              <ul>
                <li>Subida de DNI, NIE o Pasaporte válido</li>
                <li>Verificación facial biométrica en tiempo real</li>
                <li>Verificación de número de teléfono</li>
                <li>Vinculación de cuenta bancaria o método de pago</li>
              </ul>

              <h3>3.3 Situación fiscal</h3>
              <p>
                Los Proveedores <strong>NO están obligados a ser autónomos</strong> para utilizar la Plataforma. Sin embargo, cada Proveedor es responsable de:
              </p>
              <ul>
                <li>Conocer y cumplir sus obligaciones fiscales según la legislación vigente</li>
                <li>Declarar los ingresos obtenidos a través de Resvoa si corresponde</li>
                <li>Registrarse como autónomo si supera los umbrales legales establecidos</li>
                <li>Contratar seguros apropiados si lo considera necesario</li>
              </ul>
              <p className="bg-blue-50 p-4 rounded-lg">
                <strong>Nota informativa:</strong> En España, las personas que realizan actividades económicas de forma habitual, personal y directa deben darse de alta como autónomos si superan el Salario Mínimo Interprofesional (SMI) anual. Consulte con un asesor fiscal para su caso particular.
              </p>

              <h2>4. Operativa de la Plataforma</h2>

              <h3>4.1 Autonomía del Proveedor</h3>
              <p>
                Como Proveedor, usted tiene total libertad para:
              </p>
              <ul>
                <li>Decidir cuándo conectarse a la Plataforma</li>
                <li>Elegir qué servicios acepta o rechaza</li>
                <li>Establecer sus tarifas dentro de los rangos de la categoría</li>
                <li>Definir su zona geográfica de actuación</li>
                <li>Determinar su disponibilidad horaria</li>
              </ul>

              <h3>4.2 Aceptación de servicios</h3>
              <p>
                Los Proveedores pueden:
              </p>
              <ul>
                <li>Revisar los detalles de cada solicitud antes de aceptar</li>
                <li>Rechazar solicitudes sin penalización (salvo cancelaciones tardías)</li>
                <li>Proponer modificaciones de precio o condiciones al Usuario</li>
                <li>Comunicarse con el Usuario antes de aceptar definitivamente</li>
              </ul>

              <h3>4.3 Ejecución de servicios</h3>
              <p>
                Una vez aceptado un servicio, el Proveedor se compromete a:
              </p>
              <ul>
                <li>Realizar el servicio según lo acordado</li>
                <li>Cumplir con el horario establecido o avisar con antelación</li>
                <li>Mantener comunicación con el Usuario</li>
                <li>Respetar la propiedad y privacidad del Usuario</li>
                <li>Finalizar la tarea y marcarla como completada en la Plataforma</li>
              </ul>

              <h2>5. Sistema de pagos y comisiones</h2>

              <h3>5.1 Estructura de comisiones</h3>
              <p>
                Resvoa cobra una comisión sobre cada transacción completada según el nivel del Proveedor:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Nivel</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Comisión Resvoa</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Requisitos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Aspirante</td>
                      <td className="border border-gray-300 px-4 py-2">15%</td>
                      <td className="border border-gray-300 px-4 py-2">Nuevo en la plataforma</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Bronce</td>
                      <td className="border border-gray-300 px-4 py-2">14%</td>
                      <td className="border border-gray-300 px-4 py-2">10 tareas completadas, 4.0+ estrellas</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Plata</td>
                      <td className="border border-gray-300 px-4 py-2">13%</td>
                      <td className="border border-gray-300 px-4 py-2">50 tareas completadas, 4.5+ estrellas</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Oro</td>
                      <td className="border border-gray-300 px-4 py-2">12%</td>
                      <td className="border border-gray-300 px-4 py-2">150 tareas completadas, 4.7+ estrellas</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>5.2 Facturación de comisiones</h3>
              <p>
                Al completar una transacción:
              </p>
              <ul>
                <li>El Usuario paga el importe total acordado</li>
                <li>Resvoa retiene su comisión automáticamente</li>
                <li>El Proveedor recibe el importe neto en su wallet de Resvoa</li>
                <li>Resvoa emite una factura electrónica al Proveedor por la comisión cobrada</li>
              </ul>

              <h3>5.3 Retención de pagos</h3>
              <p>
                Los pagos se retienen durante 48 horas tras marcar la tarea como completada, permitiendo al Usuario:
              </p>
              <ul>
                <li>Verificar que el servicio se realizó correctamente</li>
                <li>Reportar cualquier incidencia</li>
                <li>Aprobar o disputar el pago</li>
              </ul>
              <p>
                Si no hay ninguna disputa en 48 horas, el pago se libera automáticamente.
              </p>

              <h3>5.4 Retirada de fondos</h3>
              <p>
                Los Proveedores pueden solicitar retiradas de su wallet cuando:
              </p>
              <ul>
                <li>El saldo disponible supera los 20€</li>
                <li>Han transcurrido 48 horas desde la finalización de las tareas</li>
                <li>No hay disputas pendientes</li>
              </ul>
              <p>
                Las transferencias se procesan en 2-5 días laborables.
              </p>

              <h2>6. Sistema de reputación</h2>

              <h3>6.1 Valoraciones</h3>
              <p>
                Después de cada servicio, los Usuarios pueden valorar al Proveedor con:
              </p>
              <ul>
                <li>Puntuación de 1 a 5 estrellas</li>
                <li>Comentario escrito opcional</li>
                <li>Valoración de aspectos específicos (puntualidad, calidad, trato)</li>
              </ul>

              <h3>6.2 Importancia de la reputación</h3>
              <p>
                Una buena reputación le permite:
              </p>
              <ul>
                <li>Acceder a mejores niveles con comisiones reducidas</li>
                <li>Recibir más solicitudes de servicios</li>
                <li>Cobrar tarifas más altas</li>
                <li>Destacar en los resultados de búsqueda</li>
              </ul>

              <h3>6.3 Consecuencias de baja reputación</h3>
              <p>
                Si su valoración cae por debajo de 3.5 estrellas de forma continuada:
              </p>
              <ul>
                <li>Primera advertencia: Notificación y período de mejora de 30 días</li>
                <li>Segunda advertencia: Restricción temporal (14 días)</li>
                <li>Persistencia: Suspensión definitiva de la cuenta</li>
              </ul>

              <h2>7. Cancelaciones</h2>

              <h3>7.1 Cancelación por el Proveedor</h3>
              <p>
                Las cancelaciones afectan su tasa de fiabilidad:
              </p>
              <ul>
                <li>Más de 24 horas antes: Sin penalización</li>
                <li>Entre 2-24 horas antes: Advertencia + impacto en reputación</li>
                <li>Menos de 2 horas antes: Penalización + suspensión temporal</li>
                <li>No presentarse: Suspensión de 30 días</li>
              </ul>

              <h3>7.2 Causas justificadas</h3>
              <p>
                Las cancelaciones por causa justificada (emergencia médica, familiar, etc.) no penalizan si se aporta documentación.
              </p>

              <h2>8. Prohibiciones y conductas inaceptables</h2>

              <h3>8.1 Está estrictamente prohibido:</h3>
              <ul>
                <li>Aceptar pagos fuera de la Plataforma</li>
                <li>Solicitar propinas o pagos adicionales no acordados</li>
                <li>Compartir información de contacto para evadir la Plataforma</li>
                <li>Delegar servicios a terceros sin autorización</li>
                <li>Ofrecer servicios prohibidos por los Términos</li>
                <li>Acosar, discriminar o intimidar a Usuarios</li>
                <li>Solicitar acceso a información sensible del Usuario</li>
                <li>Realizar actividades comerciales no autorizadas en la propiedad del Usuario</li>
                <li>Falsificar información de perfil o valoraciones</li>
              </ul>

              <h3>8.2 Servicios prohibidos</h3>
              <p>
                NO puede ofrecer servicios que:
              </p>
              <ul>
                <li>Requieran licencias profesionales específicas (médicos, legales, etc.)</li>
                <li>Impliquen riesgos significativos (altura, electricidad, fontanería compleja)</li>
                <li>Involucren cuidado médico o sanitario</li>
                <li>Constituyan transporte de personas</li>
                <li>Violen leyes o derechos de terceros</li>
                <li>Involucren sustancias peligrosas o ilegales</li>
              </ul>

              <h2>9. Responsabilidades y seguros</h2>

              <h3>9.1 Responsabilidad del Proveedor</h3>
              <p>
                Como Proveedor independiente, usted es responsable de:
              </p>
              <ul>
                <li>La correcta ejecución de los servicios aceptados</li>
                <li>Los daños materiales o personales causados por negligencia</li>
                <li>El cumplimiento de normativas legales aplicables</li>
                <li>Contratar seguros adecuados si lo considera necesario</li>
              </ul>

              <h3>9.2 Seguro básico de Resvoa</h3>
              <p>
                Resvoa proporciona un seguro básico de responsabilidad civil que cubre:
              </p>
              <ul>
                <li>Daños materiales hasta 500€ por incidente</li>
                <li>Solo daños accidentales, no negligencia grave</li>
                <li>Exclusiones: Vehículos, joyas, obras de arte, mascotas</li>
              </ul>

              <h3>9.3 Limitación de responsabilidad de Resvoa</h3>
              <p>
                Resvoa NO es responsable de:
              </p>
              <ul>
                <li>Accidentes durante la prestación del servicio</li>
                <li>Daños causados por el Proveedor</li>
                <li>Disputas entre Proveedor y Usuario</li>
                <li>Incumplimientos contractuales del Proveedor</li>
              </ul>

              <h2>10. Protección de datos</h2>
              <p>
                Al registrarse como Proveedor:
              </p>
              <ul>
                <li>Acepta que sus datos personales sean compartidos con Usuarios cuando acepte un servicio</li>
                <li>Se compromete a usar los datos del Usuario solo para la prestación del servicio</li>
                <li>Debe eliminar cualquier información personal del Usuario tras completar el servicio</li>
                <li>No puede usar datos de contacto para fines comerciales</li>
              </ul>
              <p>
                Consulte nuestra <Link href="/legal/privacidad" className="text-primary hover:underline">Política de Privacidad</Link> para más información.
              </p>

              <h2>11. Suspensión y terminación</h2>

              <h3>11.1 Suspensión de cuenta</h3>
              <p>
                Resvoa puede suspender su cuenta si:
              </p>
              <ul>
                <li>Incumple estas Condiciones o los Términos generales</li>
                <li>Su valoración cae por debajo de 3.5 estrellas</li>
                <li>Recibe múltiples quejas de Usuarios</li>
                <li>Realiza actividades fraudulentas</li>
                <li>Cancela servicios de forma recurrente</li>
              </ul>

              <h3>11.2 Terminación definitiva</h3>
              <p>
                La cuenta puede ser terminada definitivamente por:
              </p>
              <ul>
                <li>Incumplimientos graves o reiterados</li>
                <li>Actividades ilegales o peligrosas</li>
                <li>Fraude o falsificación de información</li>
                <li>Acoso o discriminación</li>
              </ul>

              <h3>11.3 Baja voluntaria</h3>
              <p>
                Puede darse de baja en cualquier momento. Los fondos pendientes se transferirán tras completar todas las transacciones en curso.
              </p>

              <h2>12. Modificaciones</h2>
              <p>
                Resvoa se reserva el derecho de modificar estas Condiciones. Las modificaciones sustanciales se notificarán con 30 días de antelación por correo electrónico. El uso continuado tras la notificación constituye aceptación.
              </p>

              <h2>13. Resolución de disputas</h2>
              <p>
                En caso de disputa con un Usuario:
              </p>
              <ul>
                <li>Contacte con el equipo de soporte de Resvoa</li>
                <li>Proporcione evidencias (fotos, mensajes, etc.)</li>
                <li>Resvoa mediará y tomará una decisión final vinculante</li>
              </ul>

              <h2>14. Ley aplicable y jurisdicción</h2>
              <p>
                Estas Condiciones se rigen por la legislación española. Para la resolución de controversias, las partes se someten a los juzgados y tribunales de Barcelona, España.
              </p>

              <h2>15. Contacto</h2>
              <p>
                Para consultas sobre estas Condiciones:
              </p>
              <ul>
                <li>Email: <a href="mailto:proveedores@resvoa.com" className="text-primary hover:underline">proveedores@resvoa.com</a></li>
                <li>Teléfono: +34 900 123 456</li>
                <li>Dirección: Carrer de Balmes, 123, 08008 Barcelona, España</li>
              </ul>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-0">
                  <strong>Documentos relacionados:</strong>
                </p>
                <ul className="text-sm text-gray-700 mb-0 mt-2">
                  <li>• <Link href="/legal/terminos" className="text-primary hover:underline">Términos y Condiciones Generales</Link></li>
                  <li>• <Link href="/legal/privacidad" className="text-primary hover:underline">Política de Privacidad</Link></li>
                  <li>• <Link href="/legal/cancelaciones-reembolsos" className="text-primary hover:underline">Política de Cancelaciones y Reembolsos</Link></li>
                  <li>• <Link href="/legal/uso-aceptable" className="text-primary hover:underline">Política de Uso Aceptable</Link></li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-0">
                  <strong>Nota importante:</strong> Estas Condiciones reconocen la naturaleza colaborativa de Resvoa. Los Proveedores son profesionales independientes, no empleados. Cada Proveedor es responsable de sus obligaciones fiscales y legales según corresponda.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
