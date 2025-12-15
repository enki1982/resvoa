import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies - Resvoa",
  description: "Información sobre el uso de cookies en Resvoa.",
};

export default function CookiesPage() {
  return (
    <main className="bg-green-50/30">
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Cookie className="w-12 h-12" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Política de Cookies
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
              <h2>1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Las cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a configurarlas cada vez que regrese al sitio o navegue de una página a otra.
              </p>

              <h2>2. ¿Cómo utilizamos las cookies?</h2>
              <p>
                Resvoa utiliza cookies para:
              </p>
              <ul>
                <li>Permitir que funcione correctamente la Plataforma</li>
                <li>Recordar sus preferencias y configuración</li>
                <li>Mantener su sesión iniciada</li>
                <li>Mejorar la seguridad de la Plataforma</li>
                <li>Analizar cómo utilizan los usuarios nuestra Plataforma</li>
                <li>Personalizar su experiencia</li>
                <li>Mostrar publicidad relevante (solo con su consentimiento)</li>
              </ul>

              <h2>3. Tipos de cookies que utilizamos</h2>

              <h3>3.1 Cookies estrictamente necesarias</h3>
              <p>
                Estas cookies son esenciales para que pueda navegar por la Plataforma y utilizar sus funciones. Sin estas cookies, servicios como acceder a áreas seguras no estarían disponibles.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Propósito</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">session_id</td>
                      <td className="border border-gray-300 px-4 py-2">Mantiene su sesión activa mientras navega</td>
                      <td className="border border-gray-300 px-4 py-2">Sesión</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">auth_token</td>
                      <td className="border border-gray-300 px-4 py-2">Almacena su token de autenticación</td>
                      <td className="border border-gray-300 px-4 py-2">30 días</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">csrf_token</td>
                      <td className="border border-gray-300 px-4 py-2">Protege contra ataques de falsificación de peticiones</td>
                      <td className="border border-gray-300 px-4 py-2">Sesión</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">cookie_consent</td>
                      <td className="border border-gray-300 px-4 py-2">Recuerda sus preferencias sobre cookies</td>
                      <td className="border border-gray-300 px-4 py-2">1 año</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.2 Cookies de rendimiento y análisis</h3>
              <p>
                Estas cookies recopilan información sobre cómo los usuarios utilizan la Plataforma. Toda la información que recopilan es anónima y se utiliza solo para mejorar el funcionamiento de la Plataforma.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Propósito</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_ga</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - Distingue usuarios únicos</td>
                      <td className="border border-gray-300 px-4 py-2">2 años</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_gid</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - Distingue usuarios</td>
                      <td className="border border-gray-300 px-4 py-2">24 horas</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_gat</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - Limita velocidad de peticiones</td>
                      <td className="border border-gray-300 px-4 py-2">1 minuto</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.3 Cookies de funcionalidad</h3>
              <p>
                Estas cookies permiten que la Plataforma recuerde las elecciones que hace (como su idioma o región) y proporcionan características mejoradas y más personalizadas.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Propósito</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">language</td>
                      <td className="border border-gray-300 px-4 py-2">Recuerda su preferencia de idioma</td>
                      <td className="border border-gray-300 px-4 py-2">1 año</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">location</td>
                      <td className="border border-gray-300 px-4 py-2">Almacena su ubicación preferida</td>
                      <td className="border border-gray-300 px-4 py-2">90 días</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">theme</td>
                      <td className="border border-gray-300 px-4 py-2">Recuerda si prefiere modo claro u oscuro</td>
                      <td className="border border-gray-300 px-4 py-2">1 año</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.4 Cookies de publicidad y marketing (opcionales)</h3>
              <p>
                Estas cookies se utilizan para mostrarle anuncios que son relevantes para usted y sus intereses. También se utilizan para limitar el número de veces que ve un anuncio y ayudar a medir la efectividad de las campañas publicitarias.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Propósito</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_fbp</td>
                      <td className="border border-gray-300 px-4 py-2">Facebook Pixel - Seguimiento de conversiones</td>
                      <td className="border border-gray-300 px-4 py-2">3 meses</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">ads_id</td>
                      <td className="border border-gray-300 px-4 py-2">Personalización de anuncios</td>
                      <td className="border border-gray-300 px-4 py-2">1 año</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>4. Cookies de terceros</h2>
              <p>
                Además de nuestras propias cookies, utilizamos cookies de terceros para:
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> Análisis de tráfico y comportamiento de usuarios</li>
                <li><strong>Facebook Pixel:</strong> Medición de efectividad de campañas publicitarias</li>
                <li><strong>Stripe:</strong> Procesamiento seguro de pagos</li>
                <li><strong>Intercom:</strong> Chat de soporte y atención al cliente</li>
              </ul>
              <p>
                Estos terceros tienen sus propias políticas de privacidad que rigen el uso de sus cookies. Le recomendamos revisar sus políticas:
              </p>
              <ul>
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de privacidad de Google</a></li>
                <li><a href="https://www.facebook.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de privacidad de Facebook</a></li>
                <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de privacidad de Stripe</a></li>
              </ul>

              <h2>5. ¿Cómo gestionar las cookies?</h2>

              <h3>5.1 Panel de configuración de cookies</h3>
              <p>
                Cuando visita Resvoa por primera vez, le mostramos un banner de cookies donde puede:
              </p>
              <ul>
                <li>Aceptar todas las cookies</li>
                <li>Rechazar cookies opcionales (se mantendrán solo las estrictamente necesarias)</li>
                <li>Personalizar qué categorías de cookies desea aceptar</li>
              </ul>
              <p>
                Puede cambiar sus preferencias en cualquier momento accediendo a: <strong>Configuración {">"} Privacidad {">"} Gestionar cookies</strong>
              </p>

              <h3>5.2 Configuración del navegador</h3>
              <p>
                La mayoría de navegadores web aceptan cookies automáticamente, pero puede modificar la configuración de su navegador para rechazar cookies si lo prefiere. Tenga en cuenta que si desactiva las cookies, es posible que no pueda utilizar todas las funcionalidades de la Plataforma.
              </p>
              <p>
                Instrucciones para gestionar cookies en los navegadores más comunes:
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              </ul>

              <h3>5.3 Herramientas de exclusión</h3>
              <p>
                Para cookies de publicidad, puede optar por no recibirlas mediante:
              </p>
              <ul>
                <li><a href="http://www.youronlinechoices.com/es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices (Europa)</a></li>
                <li><a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Network Advertising Initiative</a></li>
                <li><a href="http://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Digital Advertising Alliance</a></li>
              </ul>

              <h2>6. Cookies Flash y otras tecnologías</h2>
              <p>
                Además de cookies, podemos utilizar otras tecnologías similares:
              </p>
              <ul>
                <li><strong>Web beacons/píxeles:</strong> Pequeñas imágenes invisibles que nos ayudan a entender cómo interactúa con nuestros emails</li>
                <li><strong>Local Storage:</strong> Almacenamiento local en su navegador para mejorar el rendimiento</li>
                <li><strong>Session Storage:</strong> Datos temporales que se eliminan al cerrar el navegador</li>
              </ul>

              <h2>7. Actualizaciones de esta política</h2>
              <p>
                Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Le recomendamos revisar esta página periódicamente para estar informado sobre nuestro uso de cookies.
              </p>

              <h2>8. Más información</h2>
              <p>
                Para más información sobre cómo tratamos sus datos personales, consulte nuestra <Link href="/legal/privacidad" className="text-primary hover:underline">Política de Privacidad</Link>.
              </p>

              <h2>9. Contacto</h2>
              <p>
                Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos en:
              </p>
              <ul>
                <li><strong>Resvoa S.L.</strong> (CIF: B-12345678)</li>
                <li><strong>Email:</strong> <a href="mailto:privacidad@resvoa.com" className="text-primary hover:underline">privacidad@resvoa.com</a></li>
                <li><strong>Teléfono:</strong> +34 900 123 456</li>
                <li><strong>Dirección:</strong> Carrer de Balmes, 123, 08008 Barcelona, España</li>
              </ul>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-4">
                  <strong>¿Desea revisar o cambiar sus preferencias de cookies ahora?</strong>
                </p>
                <Button asChild>
                  <Link href="/configuracion/cookies">Gestionar preferencias de cookies</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
