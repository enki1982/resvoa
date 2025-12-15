import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, ShieldCheck, CreditCard, MapPin, Bell, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Para usuarios - Resvoa",
  description: "Ahorra tiempo delegando tareas cotidianas a proveedores verificados cerca de ti.",
};

export default function ParaUsuariosPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 pb-20">
        <div className="section-container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Ahorra tiempo y delega tareas</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            Recibe ayuda para tus tareas,<br />
            <span className="text-primary">fácil y seguro</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Personas verificadas cerca de ti listas para ayudarte hoy
          </p>
          <Button size="lg" className="text-base px-10 py-6 h-auto rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all" asChild>
            <Link href="/app/registro-usuario">Publicar una tarea gratis</Link>
          </Button>
          <p className="mt-4 text-sm text-gray-500">Sin compromiso · Respuestas en minutos</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Ventajas</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 mt-3">
              ¿Por qué elegir Resvoa?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La forma más inteligente de gestionar tus tareas diarias
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Card className="text-center p-8 border-2 hover:border-blue-200 hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-5 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Personas verificadas</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Todos los proveedores verifican su identidad antes de aceptar tareas
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-yellow-200 hover:shadow-xl transition-all bg-gradient-to-br from-yellow-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-100 flex items-center justify-center mb-5 shadow-sm">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tareas desde 5 minutos</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Publica tu tarea en menos de 1 minuto y recibe ofertas rápidamente
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-green-200 hover:shadow-xl transition-all bg-gradient-to-br from-green-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-5 shadow-sm">
                <CreditCard className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Pagos protegidos</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                El pago se libera solo cuando confirmas que la tarea está completada
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-yellow-200 hover:shadow-xl transition-all bg-gradient-to-br from-amber-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 flex items-center justify-center mb-5 shadow-sm">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Reputación pública</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Antes de elegir ves valoraciones reales de otros usuarios
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-red-200 hover:shadow-xl transition-all bg-gradient-to-br from-red-50 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-red-100 flex items-center justify-center mb-5 shadow-sm">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Cercanía geográfica</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Encuentra personas cerca de ti dispuestas a ayudarte
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-primary hover:shadow-xl transition-all bg-gradient-to-br from-primary/5 to-white">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 shadow-sm">
                <Bell className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Soporte si algo no va bien</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Si hay algún problema, nuestro equipo interviene para ayudarte
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Servicios</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-6 mt-3">
              Ejemplos de servicios que puedes solicitar
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              Desde pequeños recados hasta tareas domésticas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="border-2 hover:border-primary hover:shadow-xl transition-all bg-white group">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors">
                  <MapPin className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Recados</h3>
                <ul className="space-y-3 text-base text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Hacer la compra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Recoger paquetes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Llevar documentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Ir a la farmacia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-xl transition-all bg-white group">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-2 group-hover:bg-green-200 transition-colors">
                  <Star className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mascotas</h3>
                <ul className="space-y-3 text-base text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Pasear perros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Cuidado ocasional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Llevar al veterinario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Comprar comida</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-xl transition-all bg-white group">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-2 group-hover:bg-amber-200 transition-colors">
                  <ShieldCheck className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Hogar</h3>
                <ul className="space-y-3 text-base text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Limpieza ligera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Esperar técnicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Montaje IKEA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Pequeñas reparaciones</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-xl transition-all bg-white group">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <Bell className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Otros</h3>
                <ul className="space-y-3 text-base text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Hacer colas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Acompañar gestiones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Mudanzas pequeñas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Y mucho más</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Proceso</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-gray-900 mt-3">
              Cómo funciona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, rápido y seguro en solo 4 pasos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-orange-200 via-green-200 to-yellow-200 hidden lg:block" style={{width: 'calc(100% - 12rem)', left: '6rem'}}></div>

            <div className="text-center space-y-4 relative">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl relative z-10">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Describe tu necesidad</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Explica qué necesitas, cuándo y dónde
              </p>
            </div>

            <div className="text-center space-y-4 relative">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xl relative z-10">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Recibe propuestas</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Proveedores verificados te envían presupuestos
              </p>
            </div>

            <div className="text-center space-y-4 relative">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-xl relative z-10">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Elige y confirma</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Revisa perfiles y elige el mejor proveedor
              </p>
            </div>

            <div className="text-center space-y-4 relative">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-xl relative z-10">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Paga cuando confirmes</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Solo pagas cuando el trabajo esté completado
              </p>
            </div>
          </div>

          <div className="text-center mt-14">
            <Button size="lg" variant="outline" className="text-base px-10 py-6 h-auto rounded-xl font-semibold border-2 hover:border-primary hover:text-primary transition-all" asChild>
              <Link href="/como-funciona">Ver más detalles</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-[#1a4d6d] to-[#0d2d45] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="section-container text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Recupera tu tiempo hoy
          </h2>
          <p className="text-xl sm:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Miles de usuarios ya confían en Resvoa para delegar sus tareas
          </p>
          <Button size="lg" variant="secondary" className="text-base px-12 py-7 h-auto rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all" asChild>
            <Link href="/app/registro-usuario">Crear cuenta gratis</Link>
          </Button>
          <p className="mt-6 text-sm text-blue-200">Sin compromiso · Comienza en menos de 1 minuto</p>
        </div>
      </section>
    </main>
  );
}
