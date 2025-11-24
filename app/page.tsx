import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  ShieldCheck,
  CreditCard,
  DollarSign,
  Calendar,
  MapPin,
  FileText,
  Users,
  CheckCircle,
} from "lucide-react";
import { HeroSteps } from "@/components/hero-steps";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-[#1a4d6d] to-[#0d2d45] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                RESVOA — Ayuda que resuelve.
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Conecta en minutos con alguien cercano que resuelve tus microtareas del día a día.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                  <Link href="/app/registro-usuario">Quiero pedir ayuda</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-white" asChild>
                  <Link href="/app/registro-proveedor">Quiero ganar ayudando</Link>
                </Button>
              </div>

              <div className="space-y-6 max-w-xl">
                <h2 className="text-2xl font-bold mb-4">Cómo funciona en 4 pasos</h2>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">1. Pide ayuda</h3>
                    <p className="text-white/80 text-sm">
                      Describe qué necesitas resolver hoy en menos de un minuto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">2. Elige quién te ayuda</h3>
                    <p className="text-white/80 text-sm">
                      Personas cercanas, verificadas y con reputación.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">3. Se hace la tarea</h3>
                    <p className="text-white/80 text-sm">
                      La persona que elijas realiza la tarea según lo acordado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">4. Pagas y valoras</h3>
                    <p className="text-white/80 text-sm">
                      Pagas de forma segura solo cuando la tarea está completada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <HeroSteps />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <Badge className="mb-4 bg-primary text-white px-4 py-2">Para quien necesita ayuda</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tu tiempo vale más que hacer colas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Delega lo sencillo, recupera tu día. Rapidez real para microtareas cotidianas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Soluciones inmediatas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Encuentra ayuda en minutos, no en días. Diseñado para lo que necesitas resolver HOY.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShieldCheck className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Confianza máxima</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Identidad verificada, evaluaciones transparentes y niveles profesionales. Personas reales, fiables y cercanas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Ultra simple</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pide en 1 minuto. Sin formularios eternos. Pago protegido hasta confirmar que todo está perfecto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <Badge className="mb-4 bg-accent text-primary px-4 py-2">Para quien quiere ganar</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Convierte tu tiempo libre en ingresos reales
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Horarios flexibles, cercanía garantizada y una comunidad que valora tu esfuerzo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Ingresos flexibles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  300-2500€ al mes según tu dedicación. Tú decides cuándo, dónde y cuánto cobrar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Total flexibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sin jefes ni horarios fijos. Actívate cuando quieras, acepta solo lo que te convenga.
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
                  Ayuda a tu comunidad. Servicios cerca de casa, trato directo, personas ayudando a personas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            La forma más rápida de resolver lo cotidiano
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Miles de microtareas completadas cada mes. Personas reales, soluciones inmediatas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/app/registro-usuario">Necesito ayuda</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white" asChild>
              <Link href="/app/registro-proveedor">Quiero ser proveedor</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
