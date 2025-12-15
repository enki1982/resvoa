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
      <section className="bg-white pt-20 pb-16">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 text-gray-900">
            Cómo funciona Resvoa
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Publica, elige y recibe ayuda en minutos
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-green-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Solo 3 pasos
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light">
              De la necesidad a la solución en minutos
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Publica tu tarea</h3>
              <p className="text-sm text-gray-600 font-light">
                Describe en menos de 1 minuto qué necesitas
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Recibe ofertas y elige</h3>
              <p className="text-sm text-gray-600 font-light">
                Personas cercanas, verificadas y con reputación
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Se hace y pagas al finalizar</h3>
              <p className="text-sm text-gray-600 font-light">
                Pago seguro liberado solo cuando confirmas
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-sm px-8 py-5 h-auto rounded-lg font-medium" asChild>
              <Link href="/app/registro-usuario">Publicar una tarea</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-3 text-gray-900">
            Para proveedores: ingresos reales, libertad total
          </h2>
          <p className="text-center text-gray-600 mb-10 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Tu tiempo, tus reglas, tu comunidad. Construye tu reputación mientras ganas.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-base font-medium text-gray-900">Regístrate y verifica</h3>
                <p className="text-sm text-gray-600 font-light">
                  Crea tu perfil y verifica tu identidad. Define tus servicios y tarifas.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-base font-medium text-gray-900">Recibe solicitudes</h3>
                <p className="text-sm text-gray-600 font-light">
                  Actívate cuando estés disponible. Acepta las que más te convengan.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-base font-medium text-gray-900">Realiza y cobra</h3>
                <p className="text-sm text-gray-600 font-light">
                  Completa el servicio y recibe valoraciones. El pago se libera automáticamente.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-sm px-8 py-5 h-auto rounded-lg font-medium" asChild>
              <Link href="/app/registro-proveedor">Empezar a ganar</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-green-50">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-10 text-gray-900">
            Garantías de seguridad
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Verificación de identidad</h3>
              <p className="text-sm text-gray-600 font-light">
                Todos los proveedores verifican su identidad antes de ofrecer servicios
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Pago protegido</h3>
              <p className="text-sm text-gray-600 font-light">
                El dinero se retiene hasta que confirmes que el servicio está completo
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Sistema de reputación</h3>
              <p className="text-sm text-gray-600 font-light">
                Las valoraciones te ayudan a elegir los mejores proveedores
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="section-container text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
            ¿Listo para empezar?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-sm px-8 py-5 h-auto rounded-lg font-medium" asChild>
              <Link href="/app/registro-usuario">Necesito ayuda</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-sm px-8 py-5 h-auto rounded-lg font-medium border-2" asChild>
              <Link href="/app/registro-proveedor">Quiero ser proveedor</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
