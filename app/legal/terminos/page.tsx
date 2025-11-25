import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones - Resvoa",
  description: "Términos y condiciones de uso de la plataforma Resvoa.",
};

export default function TerminosPage() {
  return (
    <main className="bg-gray-50">
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-12 h-12" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Términos y Condiciones
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
              <h2>1. Aceptación de los términos</h2>
              <p>
                Al acceder y utilizar Resvoa (en adelante, "la Plataforma"), operada por <strong>Resvoa S.L.</strong> (CIF: B-12345678, domicilio: Carrer de Balmes, 123, 08008 Barcelona, España), usted acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo con estos términos, no debe utilizar la Plataforma.
              </p>

              <h2>2. Descripción del servicio</h2>
              <p>
                Resvoa es una plataforma digital que conecta usuarios que necesitan ayuda con tareas cotidianas (en adelante, "Usuarios") con proveedores de servicios independientes (en adelante, "Proveedores"). Resvoa actúa únicamente como intermediario y no es responsable de la ejecución de los servicios.
              </p>

              <h3>2.1 Servicios permitidos</h3>
              <p>
                La Plataforma facilita la contratación de microservicios de bajo riesgo, incluyendo pero no limitado a:
              </p>
              <ul>
                <li>Recados y compras</li>
                <li>Cuidado básico de mascotas</li>
                <li>Tareas domésticas ligeras</li>
                <li>Montaje de muebles</li>
                <li>Transporte de objetos</li>
                <li>Acompañamiento a gestiones</li>
              </ul>

              <h3>2.2 Servicios prohibidos</h3>
              <p>
                Quedan expresamente prohibidos los servicios que:
              </p>
              <ul>
                <li>Requieran licencias profesionales (médicos, legales, financieros)</li>
                <li>Impliquen riesgos significativos (trabajos en altura, electricidad, fontanería profesional)</li>
                <li>Involucren cuidado intensivo de personas</li>
                <li>Constituyan transporte de personas o sustancias peligrosas</li>
                <li>Violen leyes aplicables o derechos de terceros</li>
              </ul>

              <h2>3. Registro y cuenta de usuario</h2>

              <h3>3.1 Requisitos de registro</h3>
              <p>
                Para utilizar la Plataforma, debe:
              </p>
              <ul>
                <li>Ser mayor de 18 años</li>
                <li>Proporcionar información veraz y actualizada</li>
                <li>Verificar su identidad mediante documento oficial</li>
                <li>Aceptar estos Términos y Condiciones</li>
              </ul>

              <h3>3.2 Responsabilidad de la cuenta</h3>
              <p>
                Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades que ocurran bajo su cuenta. Debe notificar inmediatamente a Resvoa sobre cualquier uso no autorizado de su cuenta.
              </p>

              <h3>3.3 Verificación de identidad</h3>
              <p>
                Los Proveedores deben completar un proceso de verificación de identidad que incluye:
              </p>
              <ul>
                <li>Subida de documento de identidad oficial (DNI, NIE o Pasaporte)</li>
                <li>Verificación facial en tiempo real</li>
                <li>Validación de número de teléfono</li>
                <li>Comprobación de antecedentes cuando sea legalmente permitido</li>
              </ul>

              <h2>4. Obligaciones de los usuarios</h2>

              <h3>4.1 Obligaciones generales</h3>
              <p>
                Los Usuarios se comprometen a:
              </p>
              <ul>
                <li>Describir con precisión los servicios solicitados</li>
                <li>Proporcionar acceso y condiciones adecuadas para la realización del servicio</li>
                <li>Estar disponibles durante la realización del servicio o designar a alguien responsable</li>
                <li>Pagar el importe acordado dentro de los plazos establecidos</li>
                <li>Valorar de forma justa y honesta el servicio recibido</li>
              </ul>

              <h3>4.2 Prohibiciones para usuarios</h3>
              <p>
                Los Usuarios no pueden:
              </p>
              <ul>
                <li>Solicitar servicios prohibidos por estos Términos</li>
                <li>Acosar, discriminar o maltratar a los Proveedores</li>
                <li>Realizar pagos fuera de la Plataforma para evadir comisiones</li>
                <li>Publicar información falsa o engañosa</li>
                <li>Utilizar la Plataforma para fines ilegales</li>
              </ul>

              <h2>5. Obligaciones de los proveedores</h2>

              <h3>5.1 Obligaciones generales</h3>
              <p>
                Los Proveedores se comprometen a:
              </p>
              <ul>
                <li>Completar el proceso de verificación de identidad</li>
                <li>Realizar los servicios con profesionalidad y calidad</li>
                <li>Cumplir con los horarios acordados o comunicar cambios con antelación</li>
                <li>Respetar la privacidad y propiedad de los Usuarios</li>
                <li>Mantener actualizada su disponibilidad en la Plataforma</li>
              </ul>

              <h3>5.2 Estatus independiente y economía colaborativa</h3>
              <p>
                <strong>IMPORTANTE:</strong> Resvoa opera bajo el modelo de economía colaborativa. Los Proveedores son trabajadores autónomos e independientes. La relación entre Resvoa y los Proveedores NO constituye:
              </p>
              <ul>
                <li>Una relación laboral o de empleo (Resvoa NO es empleador)</li>
                <li>Una sociedad, joint venture o franquicia</li>
                <li>Una relación de agencia o representación</li>
              </ul>
              <p>
                <strong>Resvoa actúa únicamente como intermediario tecnológico</strong> facilitando la conexión entre particulares. Los Proveedores:
              </p>
              <ul>
                <li>NO son empleados de Resvoa</li>
                <li>Tienen total autonomía para aceptar o rechazar servicios</li>
                <li>Establecen sus propios horarios y disponibilidad</li>
                <li>Son responsables de sus obligaciones fiscales según corresponda</li>
                <li>NO están obligados a ser autónomos para usar la plataforma (pero deben cumplir la legislación fiscal vigente)</li>
                <li>Deben contratar seguros si lo consideran apropiado</li>
              </ul>

              <h3>5.3 Prohibiciones para proveedores</h3>
              <p>
                Los Proveedores no pueden:
              </p>
              <ul>
                <li>Ofrecer servicios prohibidos por estos Términos</li>
                <li>Delegar servicios a terceros sin autorización</li>
                <li>Solicitar pagos fuera de la Plataforma</li>
                <li>Acosar o discriminar a los Usuarios</li>
                <li>Realizar actividades comerciales no autorizadas en la propiedad del Usuario</li>
              </ul>

              <h2>6. Pagos y comisiones</h2>

              <h3>6.1 Sistema de pagos</h3>
              <p>
                Todos los pagos deben realizarse a través de la Plataforma. Resvoa retiene el pago hasta que el Usuario confirme la finalización satisfactoria del servicio o transcurran 48 horas desde la finalización declarada por el Proveedor.
              </p>

              <h3>6.2 Comisiones y facturación</h3>
              <p>
                Resvoa cobra una comisión del 12% al 15% sobre el valor de cada transacción completada, dependiendo del nivel del Proveedor:
              </p>
              <ul>
                <li>Nivel Aspirante: 15%</li>
                <li>Nivel Bronce: 14%</li>
                <li>Nivel Plata: 13%</li>
                <li>Nivel Oro: 12%</li>
              </ul>
              <p>
                <strong>Facturación:</strong> Resvoa emite factura electrónica al Proveedor por cada comisión cobrada, cumpliendo con la normativa fiscal vigente.
              </p>

              <h3>6.3 Reembolsos</h3>
              <p>
                Los Usuarios pueden solicitar un reembolso si el servicio no se realiza según lo acordado. Resvoa mediará en disputas y determinará si procede el reembolso total o parcial.
              </p>

              <h2>7. Sistema de reputación</h2>
              <p>
                La Plataforma utiliza un sistema de valoraciones de 1 a 5 estrellas. Las valoraciones son públicas, permanentes y no pueden editarse después de su publicación. Solo se pueden valorar servicios efectivamente completados.
              </p>

              <h2>8. Cancelaciones</h2>

              <h3>8.1 Cancelación por el Usuario</h3>
              <ul>
                <li>Más de 24 horas antes: Reembolso total</li>
                <li>Entre 2-24 horas antes: Cargo del 25%</li>
                <li>Menos de 2 horas antes: Cargo del 50%</li>
                <li>No presentarse: Cargo del 100%</li>
              </ul>

              <h3>8.2 Cancelación por el Proveedor</h3>
              <p>
                Las cancelaciones frecuentes por parte del Proveedor afectan negativamente su reputación y pueden resultar en suspensión de la cuenta.
              </p>

              <h2>9. Responsabilidad y garantías</h2>

              <h3>9.1 Limitación de responsabilidad</h3>
              <p>
                Resvoa actúa como intermediario entre Usuarios y Proveedores. No somos responsables de:
              </p>
              <ul>
                <li>La calidad, seguridad o legalidad de los servicios prestados</li>
                <li>La veracidad de la información proporcionada por usuarios o proveedores</li>
                <li>Daños materiales o personales durante la prestación del servicio</li>
                <li>Disputas entre Usuarios y Proveedores</li>
              </ul>

              <h3>9.2 Garantía limitada</h3>
              <p>
                Ofrecemos una garantía de devolución si el servicio no se realiza. El seguro de responsabilidad civil cubre daños materiales hasta 500€ por incidente.
              </p>

              <h2>10. Propiedad intelectual</h2>
              <p>
                Todos los derechos de propiedad intelectual sobre la Plataforma, incluyendo diseño, código, contenido, logos y marcas, pertenecen a Resvoa o sus licenciantes. Queda prohibida su reproducción sin autorización expresa.
              </p>

              <h2>11. Protección de datos</h2>
              <p>
                El tratamiento de sus datos personales se rige por nuestra <Link href="/legal/privacidad" className="text-primary hover:underline">Política de Privacidad</Link>, que forma parte integral de estos Términos.
              </p>

              <h2>12. Suspensión y terminación</h2>

              <h3>12.1 Causas de suspensión</h3>
              <p>
                Resvoa puede suspender o terminar su cuenta si:
              </p>
              <ul>
                <li>Incumple estos Términos y Condiciones</li>
                <li>Proporciona información falsa</li>
                <li>Realiza actividades fraudulentas</li>
                <li>Recibe múltiples quejas de otros usuarios</li>
                <li>Mantiene una valoración inferior a 3.5 estrellas de forma continuada</li>
              </ul>

              <h3>12.2 Efectos de la terminación</h3>
              <p>
                Al terminar la cuenta, perderá acceso a la Plataforma y se cancelarán los servicios pendientes. Los pagos ya realizados seguirán su curso normal.
              </p>

              <h2>13. Modificaciones de los términos</h2>
              <p>
                Resvoa se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones sustanciales se notificarán con 30 días de antelación. El uso continuado de la Plataforma tras la notificación constituye aceptación de los nuevos términos.
              </p>

              <h2>14. Ley aplicable y jurisdicción</h2>
              <p>
                Estos Términos se rigen por la legislación española. Para la resolución de controversias, las partes se someten a los juzgados y tribunales de Barcelona, España, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>

              <h2>15. Resolución de disputas</h2>
              <p>
                En caso de disputa entre Usuario y Proveedor:
              </p>
              <ul>
                <li>Ambas partes deben contactar con el equipo de mediación de Resvoa</li>
                <li>Resvoa actuará como mediador neutral revisando evidencias de ambas partes</li>
                <li>La decisión de Resvoa será vinculante para la resolución del caso en la Plataforma</li>
                <li>Sin perjuicio del derecho de las partes a acudir a la jurisdicción ordinaria</li>
              </ul>

              <h2>16. Contacto</h2>
              <p>
                <strong>Resvoa S.L.</strong>
              </p>
              <ul>
                <li><strong>CIF:</strong> B-12345678</li>
                <li><strong>Email:</strong> <a href="mailto:legal@resvoa.com" className="text-primary hover:underline">legal@resvoa.com</a></li>
                <li><strong>Dirección:</strong> Carrer de Balmes, 123, 08008 Barcelona, España</li>
                <li><strong>Teléfono:</strong> +34 900 123 456</li>
              </ul>

              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-600 mb-0">
                  <strong>Nota importante:</strong> Estos términos constituyen un acuerdo legal vinculante. Le recomendamos leerlos detenidamente y conservar una copia para su referencia. Si tiene dudas, consulte con un profesional legal antes de aceptarlos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
