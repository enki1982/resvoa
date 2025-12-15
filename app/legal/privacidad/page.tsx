import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - Resvoa",
  description: "Política de privacidad y protección de datos de Resvoa.",
};

export default function PrivacidadPage() {
  return (
    <main className="bg-green-50/30">
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Política de Privacidad
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
                En Resvoa (en adelante, "nosotros", "nuestro" o "la Plataforma"), respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información personal de acuerdo con el Reglamento General de Protección de Datos (RGPD) de la UE y la legislación española aplicable.
              </p>

              <h2>2. Responsable del tratamiento</h2>
              <p>
                <strong>Identidad:</strong> Resvoa S.L.<br />
                <strong>CIF:</strong> B-12345678<br />
                <strong>Dirección:</strong> Carrer de Balmes, 123, 08008 Barcelona, España<br />
                <strong>Email:</strong> <a href="mailto:privacidad@resvoa.com" className="text-primary hover:underline">privacidad@resvoa.com</a><br />
                <strong>Teléfono:</strong> +34 900 123 456
              </p>

              <h2>3. Datos que recopilamos</h2>

              <h3>3.1 Datos de registro</h3>
              <p>
                Cuando se registra en la Plataforma, recopilamos:
              </p>
              <ul>
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Dirección postal</li>
                <li>Fecha de nacimiento (para verificar mayoría de edad)</li>
                <li>Contraseña encriptada</li>
              </ul>

              <h3>3.2 Datos de verificación de identidad (solo Proveedores)</h3>
              <ul>
                <li>Documento de identidad oficial (DNI, NIE o Pasaporte)</li>
                <li>Fotografía facial para verificación biométrica</li>
                <li>Datos bancarios para transferencias</li>
              </ul>

              <h3>3.3 Datos de uso de la Plataforma</h3>
              <ul>
                <li>Historial de servicios solicitados o prestados</li>
                <li>Valoraciones y comentarios</li>
                <li>Mensajes intercambiados dentro de la Plataforma</li>
                <li>Preferencias y configuración de cuenta</li>
              </ul>

              <h3>3.4 Datos técnicos</h3>
              <ul>
                <li>Dirección IP</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Sistema operativo</li>
                <li>Páginas visitadas y tiempo de navegación</li>
                <li>Datos de geolocalización (solo con su consentimiento)</li>
              </ul>

              <h3>3.5 Datos de pago</h3>
              <p>
                Los datos de pago (tarjetas de crédito/débito) son procesados por nuestro proveedor de servicios de pago certificado PCI-DSS. Resvoa no almacena información completa de tarjetas de crédito.
              </p>

              <h2>4. Base legal y finalidades del tratamiento</h2>

              <h3>4.1 Ejecución del contrato</h3>
              <p>
                Procesamos sus datos para:
              </p>
              <ul>
                <li>Crear y gestionar su cuenta</li>
                <li>Facilitar la conexión entre Usuarios y Proveedores</li>
                <li>Procesar pagos y comisiones</li>
                <li>Proporcionar atención al cliente</li>
                <li>Enviar notificaciones sobre servicios contratados</li>
              </ul>

              <h3>4.2 Interés legítimo</h3>
              <p>
                Procesamos sus datos para:
              </p>
              <ul>
                <li>Prevenir fraude y garantizar la seguridad de la Plataforma</li>
                <li>Mejorar nuestros servicios mediante análisis de uso</li>
                <li>Realizar investigaciones internas sobre funcionamiento de la Plataforma</li>
                <li>Proteger nuestros derechos legales</li>
              </ul>

              <h3>4.3 Obligación legal</h3>
              <p>
                Procesamos sus datos para:
              </p>
              <ul>
                <li>Cumplir con obligaciones fiscales y contables</li>
                <li>Responder a requerimientos de autoridades competentes</li>
                <li>Cumplir con normativas de prevención de blanqueo de capitales</li>
              </ul>

              <h3>4.4 Consentimiento</h3>
              <p>
                Con su consentimiento explícito, procesamos sus datos para:
              </p>
              <ul>
                <li>Enviar comunicaciones comerciales y promocionales</li>
                <li>Utilizar datos de geolocalización para mejorar el matching</li>
                <li>Personalizar su experiencia en la Plataforma</li>
              </ul>

              <h2>5. Compartir datos con terceros</h2>

              <h3>5.1 Entre Usuarios y Proveedores</h3>
              <p>
                Cuando se acepta un servicio, compartimos información necesaria entre ambas partes (nombre, ubicación del servicio, número de teléfono) para facilitar la prestación del servicio.
              </p>

              <h3>5.2 Proveedores de servicios</h3>
              <p>
                Compartimos datos con terceros que nos ayudan a operar la Plataforma:
              </p>
              <ul>
                <li>Procesadores de pago (Stripe, PayPal)</li>
                <li>Servicios de verificación de identidad</li>
                <li>Proveedores de hosting y almacenamiento en la nube</li>
                <li>Herramientas de análisis y marketing</li>
                <li>Servicios de atención al cliente</li>
              </ul>
              <p>
                Todos nuestros proveedores están obligados contractualmente a proteger sus datos y solo pueden usarlos para los fines específicos que les encomendamos.
              </p>

              <h3>5.3 Autoridades y requisitos legales</h3>
              <p>
                Podemos divulgar sus datos cuando sea requerido por ley o para proteger nuestros derechos, propiedad o seguridad, o los de nuestros usuarios.
              </p>

              <h3>5.4 Transferencias internacionales</h3>
              <p>
                Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo (EEE). En estos casos, nos aseguramos de que existan garantías adecuadas, como:
              </p>
              <ul>
                <li>Cláusulas Contractuales Tipo de la Comisión Europea</li>
                <li>Certificaciones de privacidad reconocidas (Privacy Shield, etc.)</li>
                <li>Decisiones de adecuación de la Comisión Europea</li>
              </ul>

              <h2>6. Retención de datos</h2>
              <p>
                Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas:
              </p>
              <ul>
                <li><strong>Datos de cuenta activa:</strong> Mientras su cuenta esté activa</li>
                <li><strong>Datos de transacciones:</strong> 10 años (obligación fiscal)</li>
                <li><strong>Datos de verificación de identidad:</strong> 5 años después del cierre de cuenta</li>
                <li><strong>Datos de marketing:</strong> Hasta que retire su consentimiento</li>
                <li><strong>Valoraciones y comentarios:</strong> De forma indefinida como parte del historial público</li>
              </ul>

              <h2>7. Sus derechos</h2>
              <p>
                Bajo el RGPD, tiene los siguientes derechos:
              </p>

              <h3>7.1 Derecho de acceso</h3>
              <p>
                Puede solicitar una copia de los datos personales que tenemos sobre usted.
              </p>

              <h3>7.2 Derecho de rectificación</h3>
              <p>
                Puede solicitar la corrección de datos inexactos o incompletos.
              </p>

              <h3>7.3 Derecho de supresión</h3>
              <p>
                Puede solicitar la eliminación de sus datos personales cuando:
              </p>
              <ul>
                <li>Ya no sean necesarios para los fines para los que fueron recogidos</li>
                <li>Retire su consentimiento</li>
                <li>Se oponga al tratamiento y no prevalezcan intereses legítimos</li>
                <li>Los datos se hayan tratado ilícitamente</li>
              </ul>

              <h3>7.4 Derecho de limitación del tratamiento</h3>
              <p>
                Puede solicitar la limitación del tratamiento de sus datos en determinadas circunstancias.
              </p>

              <h3>7.5 Derecho a la portabilidad</h3>
              <p>
                Puede solicitar recibir sus datos en un formato estructurado, de uso común y lectura mecánica, y transmitirlos a otro responsable.
              </p>

              <h3>7.6 Derecho de oposición</h3>
              <p>
                Puede oponerse al tratamiento de sus datos basado en interés legítimo o con fines de marketing directo.
              </p>

              <h3>7.7 Derecho a no ser objeto de decisiones automatizadas</h3>
              <p>
                Tiene derecho a no ser objeto de decisiones basadas únicamente en tratamiento automatizado que produzcan efectos jurídicos o le afecten significativamente.
              </p>

              <h3>7.8 Cómo ejercer sus derechos</h3>
              <p>
                Para ejercer cualquiera de estos derechos, contacte con nosotros en:
              </p>
              <ul>
                <li>Email: <a href="mailto:privacidad@resvoa.com" className="text-primary hover:underline">privacidad@resvoa.com</a></li>
                <li>Formulario en la Plataforma: Configuración {">"} Privacidad</li>
              </ul>
              <p>
                Responderemos a su solicitud en un plazo máximo de 30 días.
              </p>

              <h2>8. Seguridad de los datos</h2>
              <p>
                Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales:
              </p>
              <ul>
                <li>Encriptación SSL/TLS para todas las comunicaciones</li>
                <li>Encriptación de contraseñas mediante algoritmos seguros</li>
                <li>Autenticación de dos factores disponible</li>
                <li>Acceso restringido a datos personales solo para personal autorizado</li>
                <li>Auditorías de seguridad periódicas</li>
                <li>Copias de seguridad regulares</li>
                <li>Protección contra ataques DDoS</li>
              </ul>

              <h2>9. Cookies y tecnologías similares</h2>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar su experiencia. Para más información, consulte nuestra <Link href="/legal/cookies" className="text-primary hover:underline">Política de Cookies</Link>.
              </p>

              <h2>10. Menores de edad</h2>
              <p>
                La Plataforma está destinada a personas mayores de 18 años. No recopilamos intencionadamente datos de menores. Si descubrimos que hemos recopilado datos de un menor sin el consentimiento parental adecuado, eliminaremos esa información inmediatamente.
              </p>

              <h2>11. Modificaciones de la Política de Privacidad</h2>
              <p>
                Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios significativos mediante:
              </p>
              <ul>
                <li>Publicación de la nueva política con la fecha de actualización</li>
                <li>Notificación por correo electrónico</li>
                <li>Aviso destacado en la Plataforma</li>
              </ul>

              <h2>12. Derecho a presentar una reclamación</h2>
              <p>
                Si considera que el tratamiento de sus datos personales vulnera la normativa de protección de datos, tiene derecho a presentar una reclamación ante la autoridad de control:
              </p>
              <p>
                <strong>Agencia Española de Protección de Datos (AEPD)</strong><br />
                Calle Jorge Juan, 6<br />
                28001 Madrid<br />
                Teléfono: +34 901 100 099<br />
                Web: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>
              </p>

              <h2>13. Delegado de Protección de Datos (DPO)</h2>
              <p>
                Hemos designado un Delegado de Protección de Datos (DPO) que puede contactar para cualquier consulta relacionada con el tratamiento de sus datos personales:
              </p>
              <p>
                Email: <a href="mailto:dpo@resvoa.com" className="text-primary hover:underline">dpo@resvoa.com</a><br />
                Dirección: DPO Resvoa, Carrer de Balmes, 123, 08008 Barcelona, España
              </p>

              <h2>14. Contacto</h2>
              <p>
                Para cualquier pregunta sobre esta Política de Privacidad o el tratamiento de sus datos personales:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:privacidad@resvoa.com" className="text-primary hover:underline">privacidad@resvoa.com</a></li>
                <li><strong>Teléfono:</strong> +34 900 123 456</li>
                <li><strong>Dirección:</strong> Carrer de Balmes, 123, 08008 Barcelona, España</li>
                <li><strong>CIF:</strong> B-12345678</li>
              </ul>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-0">
                  <strong>Importante:</strong> Esta Política de Privacidad debe leerse junto con nuestros <Link href="/legal/terminos" className="text-primary hover:underline">Términos y Condiciones</Link>. Ambos documentos forman parte del acuerdo legal entre usted y Resvoa.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
