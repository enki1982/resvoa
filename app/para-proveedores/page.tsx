import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DollarSign, Calendar, CheckCircle, Shield, TrendingUp, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Para proveedores - Resvoa",
  description: "Gana dinero extra ayudando a otros con horarios flexibles y trabajando cerca de casa.",
};

export default function ParaProveedoresPage() {
  return (
    <main>
      <section className="bg-white pt-20 pb-16">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 text-gray-900">
            Gana dinero ayudando a personas<br />de tu zona
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto mb-8">
            Regístrate gratis y empieza a recibir tareas cerca de ti
          </p>
          <Button size="lg" className="text-sm px-8 py-5 h-auto rounded-lg font-medium" asChild>
            <Link href="/app/registro-proveedor">Registrarme como proveedor</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-green-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              ¿Por qué ser proveedor en Resvoa?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Tú eliges las tareas</h3>
              <p className="text-sm text-gray-600 font-light">
                Tú decides qué tareas aceptar, cuándo trabajar y cuánto cobrar
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Tú pones tu precio</h3>
              <p className="text-sm text-gray-600 font-light">
                Propones el precio que consideres justo para cada tarea
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Cobras al terminar</h3>
              <p className="text-sm text-gray-600 font-light">
                Pago seguro al completar la tarea, sin esperas
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Control total</h3>
              <p className="text-sm text-gray-600 font-light">
                Gestiona todas tus tareas desde un solo lugar
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-orange-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Comisión visible</h3>
              <p className="text-sm text-gray-600 font-light">
                La comisión es del 15% por defecto
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Mejora tu reputación</h3>
              <p className="text-sm text-gray-600 font-light">
                Mejora tu reputación y accede a más tareas
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-3 text-gray-900">
            ¿Cuánto puedes ganar?
          </h2>
          <p className="text-center text-gray-600 mb-10 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Los ingresos dependen de tu disponibilidad y servicios que ofrezcas
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3 text-center">
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Ocasional</h3>
                <p className="text-3xl font-bold text-gray-900">300-500€</p>
                <p className="text-sm text-gray-600">al mes</p>
                <ul className="space-y-2 text-sm text-gray-600 font-light text-left">
                  <li>✓ 5-10 horas por semana</li>
                  <li>✓ Ideal para complementar</li>
                  <li>✓ Fines de semana o tardes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary hover:border-primary transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3 text-center">
                <h3 className="text-sm font-semibold text-primary uppercase">Activo</h3>
                <p className="text-3xl font-bold text-gray-900">800-1200€</p>
                <p className="text-sm text-gray-600">al mes</p>
                <ul className="space-y-2 text-sm text-gray-600 font-light text-left">
                  <li>✓ 15-20 horas por semana</li>
                  <li>✓ Varios servicios al día</li>
                  <li>✓ Alta disponibilidad</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3 text-center">
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Full-time</h3>
                <p className="text-3xl font-bold text-gray-900">1500-2500€</p>
                <p className="text-sm text-gray-600">al mes</p>
                <ul className="space-y-2 text-sm text-gray-600 font-light text-left">
                  <li>✓ 30+ horas por semana</li>
                  <li>✓ Actividad principal</li>
                  <li>✓ Beneficios premium</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 text-center font-light">
              <strong className="font-medium">Nota:</strong> Estas son estimaciones basadas en proveedores activos. Los ingresos reales varían según servicios, tarifas, disponibilidad y demanda en tu zona.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-green-50">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-10 text-gray-900">
            Cómo empezar
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-base font-medium text-gray-900">Regístrate</h3>
              <p className="text-sm text-gray-600 font-light">
                Crea tu perfil en minutos. Es gratis y sin compromiso
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-base font-medium text-gray-900">Verifica tu identidad</h3>
              <p className="text-sm text-gray-600 font-light">
                Proceso simple y seguro. Protege a toda la comunidad
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-base font-medium text-gray-900">Define tus servicios</h3>
              <p className="text-sm text-gray-600 font-light">
                Elige qué servicios ofrecer y tus tarifas
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-base font-medium text-gray-900">Empieza a ganar</h3>
              <p className="text-sm text-gray-600 font-light">
                Actívate y recibe tu primera solicitud
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" variant="outline" className="text-sm px-8 py-5 h-auto rounded-lg font-medium border-2" asChild>
              <Link href="/como-funciona">Más información</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="section-container text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
            Empieza a ganar hoy
          </h2>
          <Button size="lg" className="text-sm px-8 py-5 h-auto rounded-lg font-medium" asChild>
            <Link href="/app/registro-proveedor">Crear cuenta de proveedor</Link>
          </Button>
          <p className="mt-4 text-sm text-gray-500 font-light">
            Registro gratuito · Sin compromiso · Empieza cuando quieras
          </p>
        </div>
      </section>
    </main>
  );
}
