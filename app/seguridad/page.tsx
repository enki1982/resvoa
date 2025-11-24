import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Lock, UserCheck, CreditCard, AlertCircle, CheckCircle, FileText, Eye } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguridad - Resvoa",
  description: "Tu seguridad es nuestra prioridad. Conoce todas las medidas de protección de Resvoa.",
};

export default function SeguridadPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Confianza sin compromisos
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Verificación real, evaluaciones transparentes y protección total. La seguridad es nuestro pilar, no una promesa.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Cómo garantizamos tu tranquilidad
          </h2>
          <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Sistema de confianza construido sobre verificación, transparencia y responsabilidad.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <UserCheck className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Identidad real verificada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cero tolerancia con identidades falsas. Verificación obligatoria con documento oficial y reconocimiento facial.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Documento de identidad oficial (DNI, NIE, pasaporte)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Verificación facial en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Validación de datos con bases oficiales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Verificación de número de teléfono</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Pago retenido y protegido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  El dinero solo se libera cuando tú confirmas. Protección bancaria de máximo nivel. Cero riesgos.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>El dinero se retiene hasta confirmar el servicio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Encriptación bancaria de nivel 256-bit SSL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Cumplimiento PCI-DSS nivel 1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Sistema anti-fraude en tiempo real</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Sistema de reputación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Valoraciones transparentes que ayudan a identificar los mejores proveedores.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Valoraciones verificadas de usuarios reales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Historial completo visible en cada perfil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Sistema anti-manipulación de valoraciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Penalizaciones por mal comportamiento</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Protección de datos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tus datos personales están protegidos según las normativas más estrictas.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Cumplimiento total del RGPD europeo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Servidores seguros en Europa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Encriptación end-to-end de mensajes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Nunca compartimos tus datos con terceros</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Proceso de verificación de proveedores
          </h2>

          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Registro inicial</h3>
                    <p className="text-muted-foreground">
                      El proveedor crea su cuenta y proporciona información básica: nombre completo, email, teléfono y dirección.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Verificación de identidad</h3>
                    <p className="text-muted-foreground">
                      Subida de documento oficial (DNI/NIE/Pasaporte) y selfie en tiempo real para confirmar que la persona coincide con el documento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Validación automática</h3>
                    <p className="text-muted-foreground">
                      Nuestro sistema valida automáticamente la autenticidad del documento y compara la foto con la selfie usando tecnología de reconocimiento facial.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Verificación de teléfono</h3>
                    <p className="text-muted-foreground">
                      Enviamos un código SMS al número proporcionado. El proveedor debe introducir el código para confirmar que tiene acceso al teléfono.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cuenta verificada</h3>
                    <p className="text-muted-foreground">
                      Una vez completados todos los pasos, el proveedor recibe su insignia de verificación y puede empezar a ofrecer servicios en Resvoa.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Garantías para usuarios
          </h2>

          <div className="space-y-6">
            <Card className="border-2 border-accent/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-accent" />
                  Garantía de devolución
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Si el servicio no se realiza según lo acordado, puedes solicitar una devolución completa. Nuestro equipo de soporte mediará en caso de disputa y resolverá de forma justa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-accent" />
                  Seguro de responsabilidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Todos los servicios están cubiertos por un seguro de responsabilidad civil. En caso de daños materiales durante el servicio, estás protegido hasta 500€ por incidente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-accent" />
                  Soporte 24/7
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nuestro equipo de atención al cliente está disponible todos los días para resolver dudas, mediar en conflictos y garantizar tu seguridad en todo momento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Consejos de seguridad
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Para usuarios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Revisa siempre el perfil y valoraciones del proveedor
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Comunícate solo a través de la plataforma
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Nunca pagues fuera de Resvoa
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Describe claramente tus expectativas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Reporta cualquier comportamiento sospechoso
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Para proveedores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Mantén actualizado tu perfil y disponibilidad
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Confirma todos los detalles antes de aceptar
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Nunca aceptes pagos fuera de la plataforma
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Sé puntual y profesional en todo momento
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Respeta la privacidad de los usuarios
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Normativa y cumplimiento
          </h2>

          <div className="space-y-4">
            <Card className="border-2">
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mb-2" />
                <CardTitle>RGPD - Reglamento General de Protección de Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Resvoa cumple estrictamente con el RGPD de la Unión Europea. Todos los datos personales se procesan y almacenan de forma segura, y los usuarios tienen control total sobre su información.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Ley de Servicios de la Sociedad de la Información</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cumplimos con la LSSI española y todas las normativas aplicables al comercio electrónico y marketplaces digitales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mb-2" />
                <CardTitle>PSD2 - Directiva de Servicios de Pago</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nuestro sistema de pagos cumple con la directiva europea PSD2, garantizando autenticación reforzada y máxima protección en transacciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Tienes dudas sobre seguridad?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nuestro equipo de soporte está aquí para ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacto">Contactar soporte</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white" asChild>
              <Link href="/como-funciona">Ver cómo funciona</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
