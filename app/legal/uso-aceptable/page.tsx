import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ShieldAlert, ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Uso Aceptable - Resvoa",
  description: "Normas de uso y servicios permitidos y prohibidos en Resvoa.",
};

export default function UsoAceptablePage() {
  return (
    <main className="bg-green-50/30">
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <ShieldAlert className="w-12 h-12" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Política de Uso Aceptable
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
              <h2>1. Propósito de esta política</h2>
              <p>
                Esta Política de Uso Aceptable establece claramente qué servicios, conductas y actividades están permitidos y cuáles están prohibidos en Resvoa. El cumplimiento de esta política es obligatorio para todos los usuarios de la Plataforma.
              </p>
              <p>
                Resvoa está diseñada para <strong>microtareas cotidianas de bajo riesgo</strong> que ayudan a las personas en su día a día. NO somos una plataforma de servicios profesionales especializados.
              </p>

              <h2>2. Servicios permitidos</h2>
              <p className="bg-green-50 p-4 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Los siguientes servicios están expresamente permitidos en Resvoa:</span>
              </p>

              <h3>2.1 Recados y gestiones simples</h3>
              <ul>
                <li>Recoger paquetes de correos o mensajería</li>
                <li>Entregar documentos o sobres</li>
                <li>Hacer colas para gestiones administrativas</li>
                <li>Recoger tickets o entradas</li>
                <li>Retirar recetas médicas o medicamentos (sin receta controlada)</li>
                <li>Gestiones bancarias básicas (depósitos, recogida de documentos)</li>
              </ul>

              <h3>2.2 Compras y entregas</h3>
              <ul>
                <li>Compra en supermercados</li>
                <li>Compra en farmacias (medicamentos sin receta)</li>
                <li>Compra en tiendas locales</li>
                <li>Recogida de comida preparada</li>
                <li>Entrega de compras realizadas</li>
              </ul>

              <h3>2.3 Tareas domésticas ligeras</h3>
              <ul>
                <li>Ordenar y organizar espacios</li>
                <li>Doblar y organizar ropa</li>
                <li>Limpieza superficial básica (pasar aspiradora, fregar)</li>
                <li>Tender o recoger ropa</li>
                <li>Regar plantas</li>
                <li>Sacar la basura o reciclaje</li>
              </ul>

              <h3>2.4 Cuidado de mascotas</h3>
              <ul>
                <li>Paseos de perros</li>
                <li>Alimentación de mascotas en domicilio</li>
                <li>Visitas de compañía a mascotas</li>
                <li>Limpieza de areneros o espacios de mascotas</li>
                <li>Juegos y entretenimiento con mascotas</li>
              </ul>

              <h3>2.5 Montaje y desmontaje básico</h3>
              <ul>
                <li>Montaje de muebles con instrucciones (IKEA, etc.)</li>
                <li>Instalación de estanterías simples</li>
                <li>Colocación de cuadros o espejos en paredes</li>
                <li>Organización de armarios</li>
              </ul>

              <h3>2.6 Acompañamiento</h3>
              <ul>
                <li>Acompañamiento a citas médicas</li>
                <li>Acompañamiento a gestiones administrativas</li>
                <li>Acompañamiento a compras</li>
                <li>Ayuda con movilidad reducida para desplazamientos cortos</li>
              </ul>

              <h3>2.7 Ayuda tecnológica básica</h3>
              <ul>
                <li>Configuración inicial de smartphones o tablets</li>
                <li>Instalación de aplicaciones comunes</li>
                <li>Configuración de wifi o conexiones</li>
                <li>Ayuda con redes sociales o videollamadas</li>
                <li>Configuración básica de TV o dispositivos de streaming</li>
              </ul>

              <h3>2.8 Transporte de objetos pequeños</h3>
              <ul>
                <li>Traslado de cajas ligeras (máximo 15kg por caja)</li>
                <li>Transporte de objetos en vehículo propio dentro de la ciudad</li>
                <li>Ayuda con mudanzas muy pequeñas (1-2 habitaciones, solo objetos ligeros)</li>
              </ul>

              <h2>3. Servicios PROHIBIDOS</h2>
              <p className="bg-red-50 p-4 rounded-lg flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Los siguientes servicios están estrictamente prohibidos</strong> y pueden resultar en suspensión inmediata de la cuenta:</span>
              </p>

              <h3>3.1 Servicios profesionales regulados</h3>
              <ul>
                <li><strong>Servicios médicos o sanitarios:</strong>
                  <ul>
                    <li>Cuidados médicos o de enfermería</li>
                    <li>Administración de medicamentos</li>
                    <li>Terapias o tratamientos</li>
                    <li>Cuidados intensivos de personas</li>
                  </ul>
                </li>
                <li><strong>Servicios legales:</strong>
                  <ul>
                    <li>Asesoramiento jurídico</li>
                    <li>Representación legal</li>
                    <li>Redacción de documentos legales vinculantes</li>
                  </ul>
                </li>
                <li><strong>Servicios financieros:</strong>
                  <ul>
                    <li>Asesoramiento financiero o de inversión</li>
                    <li>Gestión de cuentas o inversiones</li>
                    <li>Préstamos o intermediación financiera</li>
                  </ul>
                </li>
              </ul>

              <h3>3.2 Trabajos de riesgo</h3>
              <ul>
                <li><strong>Trabajos en altura:</strong>
                  <ul>
                    <li>Limpieza de fachadas, canalones o tejados</li>
                    <li>Instalaciones en altura superior a 2 metros</li>
                    <li>Poda de árboles altos</li>
                  </ul>
                </li>
                <li><strong>Instalaciones eléctricas:</strong>
                  <ul>
                    <li>Cualquier manipulación de cuadros eléctricos</li>
                    <li>Instalación de enchufes, interruptores o luminarias que requieran manipular cableado</li>
                    <li>Reparaciones eléctricas</li>
                  </ul>
                </li>
                <li><strong>Fontanería profesional:</strong>
                  <ul>
                    <li>Reparaciones de tuberías</li>
                    <li>Instalaciones hidráulicas</li>
                    <li>Manipulación de calderas o calentadores</li>
                  </ul>
                </li>
                <li><strong>Construcción y reformas:</strong>
                  <ul>
                    <li>Obras de albañilería</li>
                    <li>Derribos o modificaciones estructurales</li>
                    <li>Soldaduras</li>
                    <li>Instalación de gas</li>
                  </ul>
                </li>
              </ul>

              <h3>3.3 Cuidado intensivo de personas</h3>
              <ul>
                <li>Cuidado de menores sin supervisión de adultos</li>
                <li>Cuidado de personas con dependencia severa</li>
                <li>Asistencia médica o sanitaria</li>
                <li>Cuidado de personas con discapacidades que requieran formación específica</li>
              </ul>

              <h3>3.4 Transporte de personas</h3>
              <ul>
                <li>Servicio de taxi o VTC</li>
                <li>Transporte de personas en vehículo</li>
                <li>Traslados médicos</li>
              </ul>

              <h3>3.5 Manipulación de sustancias peligrosas</h3>
              <ul>
                <li>Productos químicos peligrosos</li>
                <li>Materiales inflamables</li>
                <li>Residuos tóxicos</li>
                <li>Medicamentos controlados</li>
              </ul>

              <h3>3.6 Servicios ilegales o inmorales</h3>
              <ul>
                <li>Cualquier actividad ilegal según la legislación española</li>
                <li>Compra o entrega de sustancias ilegales</li>
                <li>Servicios de naturaleza sexual</li>
                <li>Actividades relacionadas con juego ilegal</li>
                <li>Falsificación de documentos</li>
                <li>Evasión fiscal o fraude</li>
              </ul>

              <h3>3.7 Actividades comerciales no autorizadas</h3>
              <ul>
                <li>Reventa o comercio de productos</li>
                <li>Marketing multinivel o esquemas piramidales</li>
                <li>Captación de usuarios para otras plataformas</li>
                <li>Publicidad no autorizada</li>
              </ul>

              <h2>4. Conductas prohibidas</h2>

              <h3>4.1 Fraude y engaño</h3>
              <ul>
                <li>Proporcionar información falsa en el perfil</li>
                <li>Falsificar documentos de identidad</li>
                <li>Crear múltiples cuentas</li>
                <li>Manipular el sistema de valoraciones</li>
                <li>Solicitar o realizar pagos fuera de la Plataforma</li>
              </ul>

              <h3>4.2 Acoso y discriminación</h3>
              <ul>
                <li>Acoso sexual o insinuaciones inapropiadas</li>
                <li>Discriminación por raza, género, orientación sexual, religión, discapacidad o cualquier otra característica protegida</li>
                <li>Insultos, amenazas o intimidación</li>
                <li>Acoso persistente o comunicación no deseada</li>
              </ul>

              <h3>4.3 Violación de privacidad</h3>
              <ul>
                <li>Compartir información personal de otros usuarios sin consentimiento</li>
                <li>Grabar o fotografiar sin permiso</li>
                <li>Acceder a información privada del Usuario</li>
                <li>Usar datos de contacto para fines no autorizados</li>
              </ul>

              <h3>4.4 Abuso de la Plataforma</h3>
              <ul>
                <li>Spam o envío masivo de mensajes</li>
                <li>Intentos de hackeo o acceso no autorizado</li>
                <li>Introducción de virus o malware</li>
                <li>Scraping o extracción masiva de datos</li>
                <li>Uso de bots o automatización no autorizada</li>
              </ul>

              <h2>5. Protección de menores</h2>

              <h3>5.1 Edad mínima</h3>
              <p>
                Los usuarios deben ser mayores de 18 años. Está prohibido:
              </p>
              <ul>
                <li>Registrarse siendo menor de edad</li>
                <li>Permitir que menores usen su cuenta</li>
                <li>Solicitar servicios que involucren a menores sin supervisión adulta</li>
              </ul>

              <h3>5.2 Servicios con menores presentes</h3>
              <p>
                Si durante un servicio hay menores presentes:
              </p>
              <ul>
                <li>Debe haber siempre un adulto responsable presente</li>
                <li>El Proveedor no asume responsabilidad de cuidado del menor</li>
                <li>Se debe mantener conducta profesional y apropiada en todo momento</li>
              </ul>

              <h2>6. Uso de la información</h2>

              <h3>6.1 Información del servicio</h3>
              <p>
                La información compartida durante un servicio debe:
              </p>
              <ul>
                <li>Usarse exclusivamente para la prestación del servicio contratado</li>
                <li>Mantenerse confidencial</li>
                <li>Eliminarse tras completar el servicio</li>
                <li>No compartirse con terceros</li>
              </ul>

              <h3>6.2 Propiedad intelectual</h3>
              <ul>
                <li>No copiar o reproducir contenidos de Resvoa sin autorización</li>
                <li>No usar las marcas o logos de Resvoa sin permiso escrito</li>
                <li>Respetar los derechos de autor de materiales de terceros</li>
              </ul>

              <h2>7. Seguridad y emergencias</h2>

              <h3>7.1 Situaciones de emergencia</h3>
              <p>
                Si durante un servicio ocurre una emergencia:
              </p>
              <ul>
                <li>Contactar inmediatamente con servicios de emergencia (112)</li>
                <li>Notificar a Resvoa lo antes posible</li>
                <li>Cooperar con autoridades si es necesario</li>
              </ul>

              <h3>7.2 Situaciones de riesgo</h3>
              <p>
                Si un Usuario o Proveedor se siente en riesgo:
              </p>
              <ul>
                <li>Puede abandonar el servicio inmediatamente</li>
                <li>Debe reportar la situación a Resvoa</li>
                <li>Puede contactar con autoridades si es necesario</li>
              </ul>

              <h2>8. Alcohol y drogas</h2>
              <ul>
                <li>Está prohibido prestar o solicitar servicios bajo efectos de alcohol o drogas</li>
                <li>No se permite consumo de alcohol o drogas durante la prestación del servicio</li>
                <li>No se permite compra o transporte de alcohol para menores</li>
              </ul>

              <h2>9. Sanciones por incumplimiento</h2>

              <h3>9.1 Escala de sanciones</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Tipo de infracción</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Sanción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Infracción leve (primera vez)</td>
                      <td className="border border-gray-300 px-4 py-2">Advertencia escrita</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Infracción leve (reincidente)</td>
                      <td className="border border-gray-300 px-4 py-2">Suspensión temporal 7-14 días</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Infracción grave</td>
                      <td className="border border-gray-300 px-4 py-2">Suspensión temporal 30 días</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Infracción muy grave</td>
                      <td className="border border-gray-300 px-4 py-2">Suspensión permanente</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Actividades ilegales</td>
                      <td className="border border-gray-300 px-4 py-2">Suspensión permanente + reporte a autoridades</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>9.2 Infracciones graves incluyen:</h3>
              <ul>
                <li>Ofrecer o solicitar servicios prohibidos</li>
                <li>Fraude o falsificación</li>
                <li>Acoso o discriminación</li>
                <li>Violación grave de privacidad</li>
                <li>Actividades que pongan en riesgo la seguridad</li>
              </ul>

              <h3>9.3 Infracciones muy graves incluyen:</h3>
              <ul>
                <li>Actividades ilegales</li>
                <li>Acoso sexual</li>
                <li>Violencia o amenazas graves</li>
                <li>Fraude sistemático</li>
                <li>Cualquier conducta que cause daño significativo a otros usuarios</li>
              </ul>

              <h2>10. Reporte de infracciones</h2>

              <h3>10.1 Cómo reportar</h3>
              <p>
                Si observa una violación de esta política:
              </p>
              <ol>
                <li>Use el botón "Reportar" en el perfil del usuario o servicio</li>
                <li>Proporcione detalles específicos de la infracción</li>
                <li>Adjunte evidencias (capturas, fotos, etc.) si es posible</li>
                <li>Contacte con soporte para casos urgentes: <a href="mailto:seguridad@resvoa.com" className="text-primary hover:underline">seguridad@resvoa.com</a></li>
              </ol>

              <h3>10.2 Confidencialidad de reportes</h3>
              <ul>
                <li>Todos los reportes se tratan de forma confidencial</li>
                <li>La identidad del reportante se protege</li>
                <li>Se investigan todos los reportes en un plazo máximo de 48 horas</li>
              </ul>

              <h3>10.3 Reportes falsos</h3>
              <p>
                Los reportes malintencionados o falsos también constituyen una infracción y pueden resultar en sanciones.
              </p>

              <h2>11. Modificaciones de esta política</h2>
              <p>
                Resvoa se reserva el derecho de modificar esta política en cualquier momento. Los cambios significativos se notificarán con 15 días de antelación. El uso continuado de la Plataforma tras las modificaciones constituye aceptación de la nueva política.
              </p>

              <h2>12. Contacto</h2>
              <p>
                Para consultas sobre esta política:
              </p>
              <ul>
                <li><strong>Email general:</strong> <a href="mailto:legal@resvoa.com" className="text-primary hover:underline">legal@resvoa.com</a></li>
                <li><strong>Reportes de seguridad:</strong> <a href="mailto:seguridad@resvoa.com" className="text-primary hover:underline">seguridad@resvoa.com</a></li>
                <li><strong>Teléfono:</strong> +34 900 123 456</li>
              </ul>

              <div className="mt-8 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <p className="text-sm text-gray-700 mb-0">
                  <strong>⚠️ IMPORTANTE:</strong> Esta Política de Uso Aceptable es vinculante y su incumplimiento puede resultar en la suspensión inmediata de su cuenta. Si tiene dudas sobre si un servicio está permitido, contacte con soporte ANTES de publicarlo o aceptarlo.
                </p>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-0">
                  <strong>Documentos relacionados:</strong>
                </p>
                <ul className="text-sm text-gray-700 mb-0 mt-2">
                  <li>• <Link href="/legal/terminos" className="text-primary hover:underline">Términos y Condiciones</Link></li>
                  <li>• <Link href="/legal/condiciones-proveedores" className="text-primary hover:underline">Condiciones para Proveedores</Link></li>
                  <li>• <Link href="/legal/privacidad" className="text-primary hover:underline">Política de Privacidad</Link></li>
                  <li>• <Link href="/legal/cancelaciones-reembolsos" className="text-primary hover:underline">Política de Cancelaciones y Reembolsos</Link></li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
