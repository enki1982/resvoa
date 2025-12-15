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
      <section className="bg-white pt-20 pb-16">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 text-gray-900">
            Recibe ayuda para tus tareas,<br />fácil y seguro
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto mb-8">
            Personas verificadas cerca de ti listas para ayudarte hoy
          </p>
          <Button size="lg" className="text-sm px-8 py-5 h-auto rounded-lg font-medium" asChild>
            <Link href="/app/registro-usuario">Publicar una tarea</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-green-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              ¿Por qué elegir Resvoa?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Personas verificadas</h3>
              <p className="text-sm text-gray-600 font-light">
                Todos los proveedores verifican su identidad antes de aceptar tareas
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Tareas desde 5 minutos</h3>
              <p className="text-sm text-gray-600 font-light">
                Publica tu tarea en menos de 1 minuto y recibe ofertas rápidamente
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Pagos protegidos</h3>
              <p className="text-sm text-gray-600 font-light">
                El pago se libera solo cuando confirmas que la tarea está completada
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Reputación pública</h3>
              <p className="text-sm text-gray-600 font-light">
                Antes de elegir ves valoraciones reales de otros usuarios
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Cercanía geográfica</h3>
              <p className="text-sm text-gray-600 font-light">
                Encuentra personas cerca de ti dispuestas a ayudarte
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <Bell className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Soporte si algo no va bien</h3>
              <p className="text-sm text-gray-600 font-light">
                Si hay algún problema, nuestro equipo interviene para ayudarte
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-3 text-gray-900">
            Ejemplos de servicios que puedes solicitar
          </h2>
          <p className="text-center text-gray-600 mb-10 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Desde pequeños recados hasta tareas domésticas
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3">
                <h3 className="text-base font-medium text-gray-900">Recados</h3>
                <ul className="space-y-2 text-sm text-gray-600 font-light">
                  <li>• Hacer la compra</li>
                  <li>• Recoger paquetes</li>
                  <li>• Llevar documentos</li>
                  <li>• Ir a la farmacia</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3">
                <h3 className="text-base font-medium text-gray-900">Mascotas</h3>
                <ul className="space-y-2 text-sm text-gray-600 font-light">
                  <li>• Pasear perros</li>
                  <li>• Cuidado ocasional</li>
                  <li>• Llevar al veterinario</li>
                  <li>• Comprar comida</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3">
                <h3 className="text-base font-medium text-gray-900">Hogar</h3>
                <ul className="space-y-2 text-sm text-gray-600 font-light">
                  <li>• Limpieza ligera</li>
                  <li>• Esperar técnicos</li>
                  <li>• Montaje IKEA</li>
                  <li>• Pequeñas reparaciones</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3">
                <h3 className="text-base font-medium text-gray-900">Otros</h3>
                <ul className="space-y-2 text-sm text-gray-600 font-light">
                  <li>• Hacer colas</li>
                  <li>• Acompañar gestiones</li>
                  <li>• Mudanzas pequeñas</li>
                  <li>• Y mucho más</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-green-50">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-10 text-gray-900">
            Cómo funciona
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-base font-medium text-gray-900">Describe tu necesidad</h3>
              <p className="text-sm text-gray-600 font-light">
                Explica qué necesitas, cuándo y dónde
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-base font-medium text-gray-900">Recibe propuestas</h3>
              <p className="text-sm text-gray-600 font-light">
                Proveedores verificados te envían presupuestos
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-base font-medium text-gray-900">Elige y confirma</h3>
              <p className="text-sm text-gray-600 font-light">
                Revisa perfiles y elige el mejor proveedor
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center">
                <span className="text-xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="text-base font-medium text-gray-900">Paga cuando confirmes</h3>
              <p className="text-sm text-gray-600 font-light">
                Solo pagas cuando el trabajo esté completado
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" variant="outline" className="text-sm px-8 py-5 h-auto rounded-lg font-medium border-2" asChild>
              <Link href="/como-funciona">Ver más detalles</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="section-container text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
            Recupera tu tiempo hoy
          </h2>
          <Button size="lg" className="text-sm px-8 py-5 h-auto rounded-lg font-medium" asChild>
            <Link href="/app/registro-usuario">Crear cuenta gratis</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
