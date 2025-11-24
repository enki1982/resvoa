import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Clock, ShieldCheck, CreditCard, MapPin, Bell, Star, Euro, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Para usuarios - Resvoa",
  description: "Ahorra tiempo delegando tareas cotidianas a proveedores verificados cerca de ti.",
};

export default function ParaUsuariosPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Recupera tu tiempo. Vive más.
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Microtareas resueltas HOY. Sin esperas. Sin complicaciones. Personas reales cerca de ti.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/app/registro-usuario">Empezar ahora</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Lo que nos hace diferentes
          </h2>
          <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Velocidad real, simplicidad radical y confianza máxima para tu día a día.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Respuesta en minutos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Olvida esperar días para resolver lo simple. Diseñado para microtareas cotidianas que necesitas HOY. Rapidez real, no promesas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShieldCheck className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Confianza sin fisuras</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Identidad verificada, niveles profesionales y evaluaciones transparentes. Cada proveedor construye su reputación servicio a servicio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Ultra simple de usar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Publica en 60 segundos. Sin formularios complejos. Pago protegido hasta confirmar. Diseñado para que cualquiera lo use.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Local y humano</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personas de tu comunidad ayudándote. Trato directo, cercanía garantizada. Ayuda humana, no automatizada.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Euro className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Precios transparentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recibe presupuestos claros antes de aceptar. Sin sorpresas ni costes ocultos. Tú decides cuál es la mejor propuesta.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bell className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Disponibilidad inmediata</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Necesitas ayuda hoy? Muchos proveedores están disponibles al momento. Respuesta en minutos, no en días.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Ejemplos de servicios que puedes solicitar
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Desde pequeños recados hasta tareas domésticas, estamos aquí para ayudarte
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Recados", examples: ["Hacer la compra", "Recoger paquetes", "Llevar documentos", "Ir a la farmacia"] },
              { category: "Mascotas", examples: ["Pasear perros", "Cuidado ocasional", "Llevar al veterinario", "Comprar comida"] },
              { category: "Hogar", examples: ["Limpieza ligera", "Esperar técnicos", "Montaje IKEA", "Pequeñas reparaciones"] },
              { category: "Otros", examples: ["Hacer colas", "Acompañar gestiones", "Mudanzas pequeñas", "Y mucho más"] },
            ].map((service) => (
              <Card key={service.category} className="border-2">
                <CardHeader>
                  <Badge className="w-fit mb-2">{service.category}</Badge>
                  <CardTitle className="text-lg">{service.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cómo funciona
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Describe tu necesidad</h3>
              <p className="text-sm text-muted-foreground">
                Explica qué necesitas, cuándo y dónde
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Recibe propuestas</h3>
              <p className="text-sm text-muted-foreground">
                Proveedores verificados te envían presupuestos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Elige y confirma</h3>
              <p className="text-sm text-muted-foreground">
                Revisa perfiles y elige el mejor proveedor
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Paga cuando confirmes</h3>
              <p className="text-sm text-muted-foreground">
                Solo pagas cuando el trabajo esté completado
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/como-funciona">Ver más detalles</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Lo que dicen nuestros usuarios
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Increíble servicio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Necesitaba que alguien hiciera la compra porque estaba enfermo. En 20 minutos encontré un proveedor perfecto. Todo impecable."
                </p>
                <p className="text-sm font-semibold">— María, Barcelona</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Me ha salvado la vida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Como madre trabajadora, no tengo tiempo para todo. Resvoa me ayuda con los recados del día a día. Totalmente recomendable."
                </p>
                <p className="text-sm font-semibold">— Laura, Madrid</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Rápido y seguro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Me daba miedo al principio, pero el sistema de verificación y pagos me dio mucha confianza. Todo perfecto."
                </p>
                <p className="text-sm font-semibold">— Carlos, Valencia</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Muy conveniente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Ya he usado Resvoa varias veces para diferentes cosas. Siempre encuentro ayuda rápido y los precios son justos."
                </p>
                <p className="text-sm font-semibold">— Ana, Sevilla</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Recupera tu tiempo hoy
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a miles de usuarios que ya confían en Resvoa para sus tareas diarias
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/app/registro-usuario">Crear cuenta gratis</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
