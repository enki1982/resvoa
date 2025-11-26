import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DollarSign, Calendar, MapPin, Shield, TrendingUp, Award, Star, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Para proveedores - Resvoa",
  description: "Gana dinero extra ayudando a otros con horarios flexibles y trabajando cerca de casa.",
};

export default function ParaProveedoresPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary via-[#1a4d6d] to-[#0d2d45] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Gana dinero ayudando a personas de tu zona
          </h1>
          <p className="text-2xl text-white/90 mb-8">
            Regístrate gratis y empieza a recibir tareas cerca de ti
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-10 py-6 h-auto" asChild>
            <Link href="/app/registro-proveedor">Registrarme como proveedor</Link>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              ¿Por qué ser proveedor en Resvoa?
            </h2>
          </div>

          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Tú eliges las tareas</h3>
                <p className="text-lg text-muted-foreground">
                  Tú decides qué tareas aceptar, cuándo trabajar y cuánto cobrar
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Tú pones tu precio</h3>
                <p className="text-lg text-muted-foreground">
                  Propones el precio que consideres justo para cada tarea
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Cobras al terminar</h3>
                <p className="text-lg text-muted-foreground">
                  Pago seguro al completar la tarea, sin esperas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Control total desde tu panel</h3>
                <p className="text-lg text-muted-foreground">
                  Gestiona todas tus tareas desde un solo lugar
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Comisión visible y editable</h3>
                <p className="text-lg text-muted-foreground">
                  La comisión es del 15% por defecto, el administrador puede modificarla
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Reputación para desbloquear oportunidades</h3>
                <p className="text-lg text-muted-foreground">
                  Mejora tu reputación y accede a más tareas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            ¿Cuánto puedes ganar?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Los ingresos dependen de tu disponibilidad y servicios que ofrezcas
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-gray-100 text-gray-800">Ocasional</Badge>
                <CardTitle className="text-3xl font-bold">300-500€</CardTitle>
                <p className="text-sm text-muted-foreground">al mes</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    5-10 horas por semana
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Ideal para complementar ingresos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Fines de semana o tardes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent text-white">Activo</Badge>
                <CardTitle className="text-3xl font-bold">800-1200€</CardTitle>
                <p className="text-sm text-muted-foreground">al mes</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    15-20 horas por semana
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Varios servicios al día
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Alta disponibilidad
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-yellow-100 text-yellow-800">Full-time</Badge>
                <CardTitle className="text-3xl font-bold">1500-2500€</CardTitle>
                <p className="text-sm text-muted-foreground">al mes</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    30+ horas por semana
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Actividad principal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    Beneficios premium
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-50 border-2 border-accent/20 rounded-lg p-6 text-center">
            <p className="text-muted-foreground">
              <strong>Nota:</strong> Estas son estimaciones basadas en proveedores activos. Los ingresos reales varían según servicios, tarifas, disponibilidad y demanda en tu zona.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Sistema de niveles y beneficios
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-gray-100 text-gray-800">Aspirante</Badge>
                <CardTitle className="text-lg">Nivel Aspirante</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Recién registrado. Comienza a ganar reputación.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">Acceso básico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">15% comisión</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">Bronce</Badge>
                <CardTitle className="text-lg">Nivel Bronce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  ≥10 servicios, puntuación ≥4.5
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">Prioridad media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">14% comisión</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-gray-200 text-gray-700">Plata</Badge>
                <CardTitle className="text-lg">Nivel Plata</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  ≥40 servicios, puntuación ≥4.7
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">Alta prioridad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">13% comisión</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-400">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-yellow-100 text-yellow-800">Oro</Badge>
                <CardTitle className="text-lg">Nivel Oro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  ≥90 servicios, puntuación ≥4.8
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">Máxima prioridad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">12% comisión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">Badge destacado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cómo empezar
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="font-semibold mb-2">Regístrate</h3>
              <p className="text-sm text-muted-foreground">
                Crea tu perfil en minutos. Es gratis y sin compromiso.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="font-semibold mb-2">Verifica tu identidad</h3>
              <p className="text-sm text-muted-foreground">
                Proceso simple y seguro. Protege a toda la comunidad.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="font-semibold mb-2">Define tus servicios</h3>
              <p className="text-sm text-muted-foreground">
                Elige qué servicios ofrecer y tus tarifas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-accent">4</span>
              </div>
              <h3 className="font-semibold mb-2">Empieza a ganar</h3>
              <p className="text-sm text-muted-foreground">
                Actívate y recibe tu primera solicitud.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-green-700" asChild>
              <Link href="/como-funciona">Más información</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Historias de éxito
          </h2>

          <div className="space-y-8">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Badge className="bg-yellow-100 text-yellow-800">Nivel Oro</Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Javier, 32 años</h3>
                    <p className="text-muted-foreground mb-2">
                      "Empecé hace 6 meses como un extra. Ahora es mi actividad principal. Gano más de 2000€ al mes con total flexibilidad. La mejor decisión que tomé."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      156 servicios completados · 4.9 de valoración
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Badge className="bg-gray-200 text-gray-700">Nivel Plata</Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Sofía, 28 años</h3>
                    <p className="text-muted-foreground mb-2">
                      "Estudiante de máster, uso Resvoa para pagarme los estudios. Trabajo solo cuando puedo, sin presión. He ganado unos 800€ al mes durante el curso."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      67 servicios completados · 4.8 de valoración
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Badge className="bg-yellow-100 text-yellow-800">Nivel Oro</Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Miguel, 45 años</h3>
                    <p className="text-muted-foreground mb-2">
                      "Después de años en oficina, buscaba algo diferente. Como proveedor tengo libertad total y gano bien. No volvería a un trabajo tradicional."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      203 servicios completados · 4.9 de valoración
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Empieza a ganar hoy
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Únete a cientos de proveedores que ya están ganando dinero ayudando a su comunidad
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/app/registro-proveedor">Crear cuenta de proveedor</Link>
          </Button>
          <p className="mt-4 text-sm text-green-100">
            Registro gratuito · Sin compromiso · Empieza cuando quieras
          </p>
        </div>
      </section>
    </main>
  );
}
