import { Card, CardContent } from "@/components/ui/card";
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
      <section className="bg-gradient-to-br from-primary via-[#1a4d6d] to-[#0d2d45] text-white py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <CheckCircle className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Simple y transparente</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Cómo funciona Resvoa
          </h1>
          <p className="text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Publica, elige y recibe ayuda en minutos
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Para Usuarios</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 mt-3">
              Solo 3 pasos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              De la necesidad a la solución en minutos
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
            <div className="text-center space-y-5">
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-black text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Publica tu tarea</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Describe en menos de 1 minuto qué necesitas
              </p>
            </div>

            <div className="text-center space-y-5">
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-black text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Recibe ofertas y elige</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Personas cercanas, verificadas y con reputación
              </p>
            </div>

            <div className="text-center space-y-5">
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-black text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Se hace y pagas al finalizar</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Pago seguro liberado solo cuando confirmas
              </p>
            </div>
          </div>

          <div className="text-center mt-14">
            <Button size="lg" className="text-base px-12 py-7 h-auto rounded-xl font-bold shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/app/registro-usuario">Publicar una tarea</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Para Proveedores</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-6 mt-3">
              Ingresos reales, libertad total
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              Tu tiempo, tus reglas, tu comunidad. Construye tu reputación mientras ganas.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-10 max-w-5xl mx-auto mb-12">
            <Card className="border-2 hover:border-primary hover:shadow-xl transition-all bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-3 shadow-sm">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Regístrate y verifica</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Crea tu perfil y verifica tu identidad. Define tus servicios y tarifas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-xl transition-all bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-3 shadow-sm">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Recibe solicitudes</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Actívate cuando estés disponible. Acepta las que más te convengan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-xl transition-all bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-100 flex items-center justify-center mb-3 shadow-sm">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Realiza y cobra</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Completa el servicio y recibe valoraciones. El pago se libera automáticamente.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-base px-12 py-7 h-auto rounded-xl font-bold shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/app/registro-proveedor">Empezar a ganar</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Seguridad</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-gray-900 mt-3">
              Garantías de seguridad
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tu tranquilidad es nuestra prioridad
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Card className="text-center p-8 border-2 hover:border-blue-200 hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-5 shadow-sm">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Verificación de identidad</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Todos los proveedores verifican su identidad antes de ofrecer servicios
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-green-200 hover:shadow-xl transition-all bg-gradient-to-br from-green-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-5 shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Pago protegido</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                El dinero se retiene hasta que confirmes que el servicio está completo
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-yellow-200 hover:shadow-xl transition-all bg-gradient-to-br from-yellow-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-100 flex items-center justify-center mb-5 shadow-sm">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Sistema de reputación</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Las valoraciones te ayudan a elegir los mejores proveedores
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-[#1a4d6d] to-[#0d2d45] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="section-container text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl sm:text-2xl mb-12 text-blue-100 max-w-2xl mx-auto">
            Únete a la comunidad de Resvoa hoy mismo
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="text-base px-12 py-7 h-auto rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all" asChild>
              <Link href="/app/registro-usuario">Necesito ayuda</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-12 py-7 h-auto rounded-xl font-bold border-2 border-white text-white hover:bg-white hover:text-primary transition-all" asChild>
              <Link href="/app/registro-proveedor">Quiero ser proveedor</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
