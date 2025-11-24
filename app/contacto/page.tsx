import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Resvoa",
  description: "Ponte en contacto con Resvoa. Estamos aquí para ayudarte.",
};

export default function ContactoPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Contacta con nosotros
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Envíanos un email y te responderemos en 24-48 horas
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Soporte general:</strong>
                    <br />
                    <a href="mailto:hola@resvoa.com" className="text-primary hover:underline">
                      hola@resvoa.com
                    </a>
                  </p>
                  <p>
                    <strong>Soporte técnico:</strong>
                    <br />
                    <a href="mailto:soporte@resvoa.com" className="text-primary hover:underline">
                      soporte@resvoa.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Teléfono</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Llámanos durante nuestro horario de atención
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>España:</strong>
                    <br />
                    <a href="tel:+34900123456" className="text-primary hover:underline">
                      +34 900 123 456
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    Lunes a viernes: 9:00 - 19:00
                    <br />
                    Sábados: 10:00 - 14:00
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Oficina</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Visítanos en nuestra oficina central
                </p>
                <div className="text-sm">
                  <p>
                    <strong>Barcelona:</strong>
                    <br />
                    Carrer de Balmes, 123
                    <br />
                    08008 Barcelona
                    <br />
                    España
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="Tu nombre" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono (opcional)</Label>
                    <Input id="phone" type="tel" placeholder="+34 600 000 000" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Asunto</Label>
                    <Input id="subject" placeholder="¿En qué podemos ayudarte?" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos más detalles..."
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <HelpCircle className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Preguntas frecuentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm mb-1">¿Cómo me registro?</p>
                      <p className="text-sm text-muted-foreground">
                        Haz clic en "Empezar" y completa el formulario de registro. El proceso toma menos de 5 minutos.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-sm mb-1">¿Es seguro Resvoa?</p>
                      <p className="text-sm text-muted-foreground">
                        Sí, todos los proveedores están verificados y los pagos son 100% seguros. Consulta nuestra{" "}
                        <Link href="/seguridad" className="text-primary hover:underline">
                          página de seguridad
                        </Link>
                        .
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-sm mb-1">¿Cuánto cuesta usar Resvoa?</p>
                      <p className="text-sm text-muted-foreground">
                        Para usuarios, es gratis. Solo pagas el servicio acordado con el proveedor. Para proveedores, cobramos una comisión del 12-15% según el nivel.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-sm mb-1">¿En qué ciudades operan?</p>
                      <p className="text-sm text-muted-foreground">
                        Actualmente operamos en Barcelona, Madrid, Valencia y Sevilla. Pronto expandiremos a más ciudades.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-sm mb-1">¿Cómo funciona el pago?</p>
                      <p className="text-sm text-muted-foreground">
                        El pago se retiene de forma segura hasta que confirmes que el servicio se ha completado. Solo entonces se libera al proveedor.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-secondary">
                <CardHeader>
                  <Clock className="w-10 h-10 text-accent mb-2" />
                  <CardTitle>Horario de atención</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold">Lunes - Viernes</span>
                      <span className="text-muted-foreground">9:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Sábados</span>
                      <span className="text-muted-foreground">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Domingos</span>
                      <span className="text-muted-foreground">Cerrado</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Nota:</strong> Los mensajes enviados fuera del horario de atención serán respondidos el siguiente día laboral.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Otros departamentos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Prensa y medios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Para consultas de medios de comunicación y solicitudes de prensa
                </p>
                <a href="mailto:prensa@resvoa.com" className="text-primary hover:underline text-sm">
                  prensa@resvoa.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Colaboraciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Para propuestas de colaboración y alianzas estratégicas
                </p>
                <a href="mailto:colaboraciones@resvoa.com" className="text-primary hover:underline text-sm">
                  colaboraciones@resvoa.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Recursos Humanos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  ¿Quieres formar parte del equipo? Envíanos tu CV
                </p>
                <a href="mailto:jobs@resvoa.com" className="text-primary hover:underline text-sm">
                  jobs@resvoa.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Legal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Para temas legales, cumplimiento normativo y RGPD
                </p>
                <a href="mailto:legal@resvoa.com" className="text-primary hover:underline text-sm">
                  legal@resvoa.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesitas ayuda urgente con un servicio activo?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Si tienes un problema con un servicio en curso, accede a tu cuenta para contactar directamente con nuestro equipo de soporte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/app/login">Acceder a mi cuenta</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white"
                asChild
              >
                <Link href="tel:+34900123456">Llamar ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Síguenos en redes sociales
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Mantente al día con las últimas novedades de Resvoa
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://twitter.com/resvoa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              𝕏
            </a>
            <a
              href="https://instagram.com/resvoa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              IG
            </a>
            <a
              href="https://linkedin.com/company/resvoa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              in
            </a>
            <a
              href="https://facebook.com/resvoa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              f
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
