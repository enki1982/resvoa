import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { RotateCcw, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cancelaciones y Reembolsos - Resvoa",
  description: "Condiciones de cancelación y reembolso en Resvoa.",
};

export default function CancelacionesReembolsosPage() {
  return (
    <main className="bg-green-50/30">
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <RotateCcw className="w-12 h-12" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Política de Cancelaciones y Reembolsos
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
                Esta Política de Cancelaciones y Reembolsos regula las condiciones bajo las cuales los Usuarios y Proveedores pueden cancelar servicios contratados a través de Resvoa, así como los procedimientos para solicitar y procesar reembolsos.
              </p>

              <h2>2. Cancelaciones por el Usuario</h2>

              <h3>2.1 Antes de la aceptación del servicio</h3>
              <p>
                Si un Proveedor aún no ha aceptado el servicio, el Usuario puede cancelar la solicitud en cualquier momento sin cargo alguno.
              </p>

              <h3>2.2 Después de la aceptación - Escala de cargos</h3>
              <p>
                Una vez que un Proveedor acepta el servicio, se aplican los siguientes cargos de cancelación:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Momento de la cancelación</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Cargo de cancelación</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Reembolso al Usuario</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Más de 24 horas antes del servicio</td>
                      <td className="border border-gray-300 px-4 py-2">0%</td>
                      <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Entre 2-24 horas antes del servicio</td>
                      <td className="border border-gray-300 px-4 py-2">25%</td>
                      <td className="border border-gray-300 px-4 py-2">75%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Menos de 2 horas antes del servicio</td>
                      <td className="border border-gray-300 px-4 py-2">50%</td>
                      <td className="border border-gray-300 px-4 py-2">50%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">No presentarse (sin cancelar)</td>
                      <td className="border border-gray-300 px-4 py-2">100%</td>
                      <td className="border border-gray-300 px-4 py-2">0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.3 Distribución de cargos de cancelación</h3>
              <p>
                Los cargos de cancelación se distribuyen de la siguiente manera:
              </p>
              <ul>
                <li>80% para el Proveedor como compensación por la reserva de tiempo</li>
                <li>20% para Resvoa como tarifa administrativa</li>
              </ul>

              <h3>2.4 Procedimiento de cancelación por Usuario</h3>
              <ol>
                <li>Acceder al servicio contratado desde su dashboard</li>
                <li>Seleccionar "Cancelar servicio"</li>
                <li>Indicar el motivo de la cancelación</li>
                <li>Confirmar la cancelación y los cargos aplicables</li>
                <li>Recibir confirmación por email</li>
              </ol>

              <h2>3. Cancelaciones por el Proveedor</h2>

              <h3>3.1 Antes del inicio del servicio</h3>
              <p>
                Los Proveedores pueden cancelar servicios aceptados, pero esto afecta su tasa de fiabilidad y reputación:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Momento de la cancelación</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Consecuencia para el Proveedor</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Reembolso al Usuario</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Más de 24 horas antes</td>
                      <td className="border border-gray-300 px-4 py-2">Sin penalización económica</td>
                      <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Entre 2-24 horas antes</td>
                      <td className="border border-gray-300 px-4 py-2">Advertencia + impacto en reputación</td>
                      <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Menos de 2 horas antes</td>
                      <td className="border border-gray-300 px-4 py-2">Penalización + suspensión temporal</td>
                      <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">No presentarse</td>
                      <td className="border border-gray-300 px-4 py-2">Suspensión 30 días</td>
                      <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.2 Cancelaciones justificadas</h3>
              <p>
                Las cancelaciones por motivos justificados no afectan la reputación del Proveedor si se aporta documentación:
              </p>
              <ul>
                <li>Emergencia médica (parte médico o justificante)</li>
                <li>Emergencia familiar grave (documentación oficial)</li>
                <li>Condiciones meteorológicas extremas (alertas oficiales)</li>
                <li>Accidente o impedimento físico (documentación)</li>
              </ul>
              <p>
                El Proveedor debe contactar con soporte de Resvoa en un plazo máximo de 24 horas para justificar la cancelación.
              </p>

              <h3>3.3 Procedimiento de cancelación por Proveedor</h3>
              <ol>
                <li>Contactar inmediatamente con el Usuario por chat</li>
                <li>Explicar la razón de la cancelación</li>
                <li>Cancelar el servicio desde el dashboard</li>
                <li>Si es justificada, contactar con soporte con documentación</li>
              </ol>

              <h2>4. Reembolsos por servicio no satisfactorio</h2>

              <h3>4.1 Motivos válidos para solicitar reembolso</h3>
              <p>
                Los Usuarios pueden solicitar reembolso total o parcial si:
              </p>
              <ul>
                <li>El servicio no se completó según lo acordado</li>
                <li>El Proveedor no se presentó sin avisar</li>
                <li>La calidad del servicio es significativamente inferior a lo esperado</li>
                <li>El Proveedor incumplió términos específicos del acuerdo</li>
                <li>Se produjeron daños materiales por negligencia del Proveedor</li>
              </ul>

              <h3>4.2 Procedimiento de solicitud de reembolso</h3>
              <p>
                El Usuario debe:
              </p>
              <ol>
                <li>No confirmar la finalización del servicio si hay problemas</li>
                <li>Abrir una disputa en un plazo máximo de 48 horas tras la fecha programada</li>
                <li>Proporcionar evidencias:
                  <ul>
                    <li>Descripción detallada del problema</li>
                    <li>Fotografías o videos del resultado</li>
                    <li>Capturas de conversaciones relevantes</li>
                    <li>Cualquier otra prueba pertinente</li>
                  </ul>
                </li>
                <li>Esperar la mediación de Resvoa</li>
              </ol>

              <h3>4.3 Proceso de resolución de disputas</h3>
              <ol>
                <li><strong>Mediación (1-3 días):</strong>
                  <ul>
                    <li>Resvoa contacta con ambas partes</li>
                    <li>Se revisan todas las evidencias</li>
                    <li>Se busca un acuerdo amistoso</li>
                  </ul>
                </li>
                <li><strong>Decisión de Resvoa (máximo 7 días):</strong>
                  <ul>
                    <li>Reembolso total al Usuario</li>
                    <li>Reembolso parcial (% según gravedad)</li>
                    <li>Sin reembolso (si no procede)</li>
                  </ul>
                </li>
                <li><strong>Ejecución:</strong>
                  <ul>
                    <li>El reembolso se procesa automáticamente</li>
                    <li>Se actualiza la reputación del Proveedor si corresponde</li>
                  </ul>
                </li>
              </ol>

              <h3>4.4 Decisiones de reembolso típicas</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Situación</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Reembolso típico</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Servicio no realizado (Proveedor no se presentó)</td>
                      <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Servicio parcialmente completado</td>
                      <td className="border border-gray-300 px-4 py-2">50-75%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Servicio completado pero calidad deficiente</td>
                      <td className="border border-gray-300 px-4 py-2">25-50%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Pequeñas desviaciones del acuerdo</td>
                      <td className="border border-gray-300 px-4 py-2">10-25%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Expectativas no realistas del Usuario</td>
                      <td className="border border-gray-300 px-4 py-2">0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>5. Métodos de reembolso</h2>

              <h3>5.1 Reembolso al método de pago original</h3>
              <p>
                Por defecto, los reembolsos se procesan al método de pago original:
              </p>
              <ul>
                <li><strong>Tarjeta de crédito/débito:</strong> 5-10 días laborables</li>
                <li><strong>PayPal:</strong> 1-3 días laborables</li>
                <li><strong>Transferencia bancaria:</strong> 3-7 días laborables</li>
              </ul>

              <h3>5.2 Crédito en la Plataforma</h3>
              <p>
                Alternativamente, el Usuario puede optar por:
              </p>
              <ul>
                <li>Recibir el reembolso como crédito en su wallet de Resvoa</li>
                <li>Ventaja: Disponible inmediatamente + 5% de bonificación</li>
                <li>El crédito puede usarse para futuros servicios sin fecha de caducidad</li>
              </ul>

              <h2>6. Situaciones especiales</h2>

              <h3>6.1 Cancelación por causa de fuerza mayor</h3>
              <p>
                En caso de eventos de fuerza mayor que impidan la prestación del servicio:
              </p>
              <ul>
                <li>Fenómenos meteorológicos extremos con alerta oficial</li>
                <li>Declaración de estado de emergencia o alarma</li>
                <li>Catástrofes naturales</li>
                <li>Pandemias con restricciones de movilidad</li>
              </ul>
              <p>
                Se permite la cancelación sin penalización para ambas partes, con reembolso total al Usuario.
              </p>

              <h3>6.2 Modificación del servicio</h3>
              <p>
                Si Usuario y Proveedor acuerdan modificar el servicio (fecha, hora, alcance):
              </p>
              <ul>
                <li>Deben acordar los cambios por chat dentro de la Plataforma</li>
                <li>El Usuario debe aceptar expresamente los cambios</li>
                <li>No se aplican cargos de cancelación si ambos están de acuerdo</li>
                <li>Los ajustes de precio se procesan antes del inicio del servicio</li>
              </ul>

              <h3>6.3 Servicios de múltiples sesiones</h3>
              <p>
                Para servicios contratados en múltiples sesiones:
              </p>
              <ul>
                <li>Cada sesión se trata de forma independiente para cancelaciones</li>
                <li>El Usuario puede cancelar sesiones futuras sin afectar las completadas</li>
                <li>Se aplican las políticas de cancelación estándar a cada sesión</li>
              </ul>

              <h2>7. Fraude y abuso</h2>

              <h3>7.1 Detección de patrones abusivos</h3>
              <p>
                Resvoa monitoriza patrones que sugieran abuso del sistema:
              </p>
              <ul>
                <li>Múltiples cancelaciones tardías injustificadas</li>
                <li>Solicitudes de reembolso repetidas sin evidencias válidas</li>
                <li>Disputas frívolas o malintencionadas</li>
              </ul>

              <h3>7.2 Consecuencias del fraude</h3>
              <p>
                Los usuarios que abusen del sistema de reembolsos enfrentan:
              </p>
              <ul>
                <li>Primera infracción: Advertencia formal</li>
                <li>Segunda infracción: Suspensión temporal (30 días)</li>
                <li>Tercera infracción: Suspensión definitiva de la cuenta</li>
                <li>Casos graves: Acciones legales por fraude</li>
              </ul>

              <h2>8. Casos no cubiertos</h2>
              <p>
                Esta política NO cubre:
              </p>
              <ul>
                <li>Cambios de opinión del Usuario tras completar satisfactoriamente el servicio</li>
                <li>Diferencias de percepción subjetiva sobre la calidad</li>
                <li>Problemas causados por información incorrecta proporcionada por el Usuario</li>
                <li>Servicios solicitados fuera de las categorías permitidas</li>
                <li>Disputas derivadas de pagos fuera de la Plataforma</li>
              </ul>

              <h2>9. Plazos importantes</h2>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Resumen de plazos críticos:</p>
                <ul className="mb-0">
                  <li>• <strong>Disputas:</strong> Máximo 48 horas tras la fecha programada del servicio</li>
                  <li>• <strong>Cancelaciones justificadas:</strong> Documentación en 24 horas</li>
                  <li>• <strong>Resolución de disputas:</strong> Máximo 7 días</li>
                  <li>• <strong>Reembolsos:</strong> 1-10 días laborables según método de pago</li>
                </ul>
              </div>

              <h2>10. Contacto</h2>
              <p>
                Para consultas sobre cancelaciones y reembolsos:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:reembolsos@resvoa.com" className="text-primary hover:underline">reembolsos@resvoa.com</a></li>
                <li><strong>Chat en vivo:</strong> Disponible en su dashboard 24/7</li>
                <li><strong>Teléfono:</strong> +34 900 123 456 (L-V 9:00-19:00, S 10:00-14:00)</li>
              </ul>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-0">
                  <strong>Documentos relacionados:</strong>
                </p>
                <ul className="text-sm text-gray-700 mb-0 mt-2">
                  <li>• <Link href="/legal/terminos" className="text-primary hover:underline">Términos y Condiciones</Link></li>
                  <li>• <Link href="/legal/condiciones-proveedores" className="text-primary hover:underline">Condiciones para Proveedores</Link></li>
                  <li>• <Link href="/legal/uso-aceptable" className="text-primary hover:underline">Política de Uso Aceptable</Link></li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-0">
                  <strong>Compromiso de Resvoa:</strong> Nuestro objetivo es que todos los servicios se completen satisfactoriamente. Esta política busca proteger tanto a Usuarios como a Proveedores, fomentando el cumplimiento de compromisos mientras ofrecemos flexibilidad razonable.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
