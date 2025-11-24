import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, UserCheck, Calendar, CheckCircle, Shield, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo funciona - Resvoa",
  description: "Descubre cómo Resvoa conecta usuarios con proveedores de confianza en 3 simples pasos.",
};

export default function ComoFuncionaPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Ultra simple. Ultra rápido.
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            De la necesidad a la solución en minutos. Así de directo funciona Resvoa.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Para usuarios: ayuda inmediata en 3 pasos
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Sin complicaciones. Sin esperas eternas. Lo que necesitas hoy, resuelto hoy.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <Search className="w-10 h-10 text-primary mb-4 mx-auto" />
                <CardTitle className="text-center">Pide en 1 minuto</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Describe tu microtarea en segundos. Sin formularios eternos. Proveedores cercanos reciben tu solicitud al instante.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <UserCheck className="w-10 h-10 text-primary mb-4 mx-auto" />
                <CardTitle className="text-center">Elige al mejor</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Respuestas en minutos. Perfiles verificados, niveles transparentes y valoraciones reales. Tú decides.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <CardTitle className="text-center">Listo y protegido</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Servicio completado, pago protegido. Solo se libera cuando tú confirmas. Cero riesgos, máxima tranquilidad.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/app/registro-usuario">Empezar ahora</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Para proveedores: ingresos reales, libertad total
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Tu tiempo, tus reglas, tu comunidad. Construye tu reputación mientras ganas.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl font-bold text-accent">1</span>
                </div>
                <Shield className="w-10 h-10 text-accent mb-4 mx-auto" />
                <CardTitle className="text-center">Regístrate y verifica</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Crea tu perfil y verifica tu identidad. El proceso es simple y rápido. Define tus servicios y tarifas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl font-bold text-accent">2</span>
                </div>
                <Calendar className="w-10 h-10 text-accent mb-4 mx-auto" />
                <CardTitle className="text-center">Recibe solicitudes</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Actívate cuando estés disponible. Recibirás solicitudes de tu zona. Acepta las que más te convengan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl font-bold text-accent">3</span>
                </div>
                <Star className="w-10 h-10 text-accent mb-4 mx-auto" />
                <CardTitle className="text-center">Realiza y cobra</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Completa el servicio y recibe valoraciones positivas. El pago se libera automáticamente a tu cuenta.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="default" className="bg-accent hover:bg-green-700" asChild>
              <Link href="/app/registro-proveedor">Empezar a ganar</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Garantías de seguridad
          </h2>

          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Verificación de identidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Todos los proveedores pasan por un proceso de verificación de identidad antes de poder ofrecer servicios en la plataforma.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Pago protegido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  El dinero se retiene de forma segura hasta que confirmes que el servicio se ha realizado correctamente. Protección total para ti.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-primary" />
                  Sistema de reputación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Las valoraciones de otros usuarios te ayudan a elegir los mejores proveedores. Transparencia y confianza garantizadas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a Resvoa hoy y descubre una nueva forma de ayudarnos
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
