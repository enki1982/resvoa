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
      <section className="bg-gradient-to-br from-primary via-[#1a4d6d] to-[#0d2d45] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Cómo funciona Resvoa
          </h1>
          <p className="text-2xl text-white/90">
            Publica, elige y recibe ayuda en minutos
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">
              Solo 3 pasos
            </h2>
            <p className="text-xl text-muted-foreground">
              De la necesidad a la solución en minutos
            </p>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-5xl font-bold text-primary">1</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4">Publica tu tarea</h3>
                <p className="text-xl text-muted-foreground">
                  Describe en menos de 1 minuto qué necesitas
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-5xl font-bold text-primary">2</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4">Recibe ofertas y elige</h3>
                <p className="text-xl text-muted-foreground">
                  Personas cercanas, verificadas y con reputación
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-5xl font-bold text-primary">3</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4">Se hace la tarea y pagas al finalizar</h3>
                <p className="text-xl text-muted-foreground">
                  Pago seguro liberado solo cuando confirmas
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="text-lg px-10 py-6 h-auto" asChild>
              <Link href="/app/registro-usuario">Publicar una tarea</Link>
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
