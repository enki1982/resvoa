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
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-20">
        <div className="section-container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-900">Gana dinero con flexibilidad</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            Gana dinero ayudando<br />
            <span className="text-primary">a personas de tu zona</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Regístrate gratis y empieza a recibir tareas cerca de ti
          </p>
          <Button size="lg" className="text-base px-10 py-6 h-auto rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all" asChild>
            <Link href="/app/registro-proveedor">Registrarme como proveedor</Link>
          </Button>
          <p className="mt-4 text-sm text-gray-500">Sin comisiones ocultas · Cobra al terminar</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Beneficios</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 mt-3">
              ¿Por qué ser proveedor en Resvoa?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabaja cuando quieras, donde quieras y con total libertad
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Card className="text-center p-8 border-2 hover:border-green-200 hover:shadow-xl transition-all bg-gradient-to-br from-green-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-5 shadow-sm">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tú eliges las tareas</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Tú decides qué tareas aceptar, cuándo trabajar y cuánto cobrar
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-primary hover:shadow-xl transition-all bg-gradient-to-br from-primary/5 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 shadow-sm">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tú pones tu precio</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Propones el precio que consideres justo para cada tarea
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-blue-200 hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-5 shadow-sm">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Cobras al terminar</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Pago seguro al completar la tarea, sin esperas
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-blue-200 hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-5 shadow-sm">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Control total</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Gestiona todas tus tareas desde un solo lugar
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-orange-200 hover:shadow-xl transition-all bg-gradient-to-br from-orange-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center mb-5 shadow-sm">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Comisión visible</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                La comisión es del 15% por defecto
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-yellow-200 hover:shadow-xl transition-all bg-gradient-to-br from-yellow-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-100 flex items-center justify-center mb-5 shadow-sm">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mejora tu reputación</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Mejora tu reputación y accede a más tareas
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Ingresos</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-gray-900 mt-3">
              ¿Cuánto puedes ganar?
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              Los ingresos dependen de tu disponibilidad y servicios que ofrezcas
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="border-2 hover:border-gray-300 hover:shadow-xl transition-all bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Ocasional</h3>
                <p className="text-5xl font-black text-gray-900">300-500€</p>
                <p className="text-base text-gray-600 font-medium">al mes</p>
                <ul className="space-y-3 text-base text-gray-600 text-left pt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>5-10 horas por semana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ideal para complementar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Fines de semana o tardes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-4 border-primary hover:shadow-2xl transition-all bg-white relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Más popular
                </span>
              </div>
              <CardContent className="pt-10 pb-8 space-y-4 text-center">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wide">Activo</h3>
                <p className="text-5xl font-black text-gray-900">800-1200€</p>
                <p className="text-base text-gray-600 font-medium">al mes</p>
                <ul className="space-y-3 text-base text-gray-600 text-left pt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>15-20 horas por semana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Varios servicios al día</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Alta disponibilidad</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-gray-300 hover:shadow-xl transition-all bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Full-time</h3>
                <p className="text-5xl font-black text-gray-900">1500-2500€</p>
                <p className="text-base text-gray-600 font-medium">al mes</p>
                <ul className="space-y-3 text-base text-gray-600 text-left pt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>30+ horas por semana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Actividad principal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Beneficios premium</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-2xl max-w-5xl mx-auto">
            <p className="text-base text-gray-700 text-center leading-relaxed">
              <strong className="font-bold">Nota:</strong> Estas son estimaciones basadas en proveedores activos. Los ingresos reales varían según servicios, tarifas, disponibilidad y demanda en tu zona.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Primeros Pasos</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-gray-900 mt-3">
              Cómo empezar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empieza a ganar en 4 simples pasos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-orange-200 to-green-200 hidden lg:block" style={{width: 'calc(100% - 12rem)', left: '6rem'}}></div>

            <div className="text-center space-y-4 relative">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl relative z-10">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Regístrate</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Crea tu perfil en minutos. Es gratis y sin compromiso
              </p>
            </div>

            <div className="text-center space-y-4 relative">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-xl relative z-10">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Verifica tu identidad</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Proceso simple y seguro. Protege a toda la comunidad
              </p>
            </div>

            <div className="text-center space-y-4 relative">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xl relative z-10">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Define tus servicios</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Elige qué servicios ofrecer y tus tarifas
              </p>
            </div>

            <div className="text-center space-y-4 relative">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-xl relative z-10">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Empieza a ganar</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Actívate y recibe tu primera solicitud
              </p>
            </div>
          </div>

          <div className="text-center mt-14">
            <Button size="lg" variant="outline" className="text-base px-10 py-6 h-auto rounded-xl font-semibold border-2 hover:border-primary hover:text-primary transition-all" asChild>
              <Link href="/como-funciona">Más información</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="section-container text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Empieza a ganar hoy
          </h2>
          <p className="text-xl sm:text-2xl mb-10 text-green-100 max-w-2xl mx-auto">
            Únete a miles de proveedores que ya están generando ingresos
          </p>
          <Button size="lg" variant="secondary" className="text-base px-12 py-7 h-auto rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all" asChild>
            <Link href="/app/registro-proveedor">Crear cuenta de proveedor</Link>
          </Button>
          <p className="mt-6 text-sm text-green-200">
            Registro gratuito · Sin compromiso · Empieza cuando quieras
          </p>
        </div>
      </section>
    </main>
  );
}
