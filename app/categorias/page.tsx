import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ShoppingCart,
  Dog,
  Home,
  Wrench,
  Package,
  Users,
  Car,
  BookOpen,
  XCircle,
  CheckCircle,
  KeyRound
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorías de servicios - Resvoa",
  description: "Descubre todos los servicios disponibles en Resvoa, desde recados hasta cuidado de mascotas.",
};

export default function CategoriasPage() {
  return (
    <main>
      <section className="bg-white pt-20 pb-16">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 text-gray-900">
            Categorías de servicios
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Encuentra ayuda para cualquier microtarea del día a día
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-3 text-gray-900">
            Servicios disponibles
          </h2>
          <p className="text-center text-gray-600 mb-10 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Todas las tareas cotidianas que puedes delegar de forma segura
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <ShoppingCart className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-base">Recados y compras</CardTitle>
                <Badge className="w-fit bg-green-100 text-green-800 text-xs">Muy popular</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-light mb-3">
                  Delega las compras del supermercado, recoge paquetes o lleva documentos
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                  <li>• Hacer la compra</li>
                  <li>• Recoger paquetes</li>
                  <li>• Ir a la farmacia</li>
                  <li>• Llevar documentos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-3">
                  <Dog className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className="text-base">Cuidado de mascotas</CardTitle>
                <Badge className="w-fit bg-green-100 text-green-800 text-xs">Muy popular</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-light mb-3">
                  Paseos, cuidado ocasional y transporte para tus mascotas
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                  <li>• Pasear perros</li>
                  <li>• Cuidado ocasional</li>
                  <li>• Llevar al veterinario</li>
                  <li>• Comprar comida</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-base">Tareas del hogar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-light mb-3">
                  Limpieza ligera, organización y esperar entregas o técnicos
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                  <li>• Limpieza ligera</li>
                  <li>• Esperar técnicos</li>
                  <li>• Organización de espacios</li>
                  <li>• Sacar basura</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                  <Wrench className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-base">Montaje y reparaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-light mb-3">
                  Montaje de muebles y pequeñas reparaciones domésticas
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                  <li>• Montaje de muebles IKEA</li>
                  <li>• Colgar cuadros y estanterías</li>
                  <li>• Reparaciones menores</li>
                  <li>• Instalación electrodomésticos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                  <Package className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-base">Mudanzas pequeñas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-light mb-3">
                  Transporte de objetos, mudanzas de habitación y ayuda con cajas
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                  <li>• Mudanzas habitación/estudio</li>
                  <li>• Transporte de muebles</li>
                  <li>• Empaquetado</li>
                  <li>• Llevar a trastero</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-base">Acompañamiento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-light mb-3">
                  Acompañar a citas, gestiones o eventos
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                  <li>• Acompañar a citas médicas</li>
                  <li>• Gestiones administrativas</li>
                  <li>• Acompañar mayores</li>
                  <li>• Ayuda con eventos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                  <KeyRound className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-base">Gestión de llaves</CardTitle>
                <Badge className="w-fit bg-blue-100 text-blue-800 text-xs">Nuevo</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-light mb-3">
                  Gestión de llaves para Airbnb, alquileres y propiedades
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                  <li>• Recepción Airbnb</li>
                  <li>• Entrega a inquilinos</li>
                  <li>• Recogida en mudanzas</li>
                  <li>• Gestión propiedades</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <Car className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-base">Transporte de objetos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-light mb-3">
                  Llevar o recoger objetos de un lugar a otro
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                  <li>• Transporte urbano</li>
                  <li>• Recoger compras grandes</li>
                  <li>• Llevar a punto limpio</li>
                  <li>• Transporte bicicletas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-base">Apoyo administrativo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-light mb-3">
                  Ayuda con tareas administrativas y digitales sencillas
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                  <li>• Escaneo de documentos</li>
                  <li>• Organización de papeles</li>
                  <li>• Ayuda trámites online</li>
                  <li>• Imprimir documentos</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 flex items-center justify-center gap-3">
            <XCircle className="w-10 h-10 text-destructive" />
            Servicios NO permitidos
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Por seguridad y cumplimiento legal, estos servicios NO están disponibles en Resvoa
          </p>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-destructive/50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4 text-lg">Prohibido por seguridad</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Trabajos en altura (escaleras, tejados)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Electricidad y fontanería profesional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Manipulación de gas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Transporte de sustancias peligrosas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Demoliciones o reformas mayores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Manejo de maquinaria pesada</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 text-lg">Prohibido por regulación</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Servicios médicos o sanitarios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Asesoramiento legal o financiero</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Cuidado intensivo de personas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Servicios que requieren licencia profesional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Transporte de personas (VTC, taxi)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Actividades ilegales o fraudulentas</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Importante:</strong> Cualquier solicitud de servicios prohibidos será rechazada automáticamente y puede resultar en la suspensión de la cuenta. Si no estás seguro de si un servicio está permitido, contacta con nuestro soporte.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="section-container text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-5 text-gray-900">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            Siempre estamos ampliando categorías. Si tienes una necesidad específica, contáctanos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-sm px-8 py-5 h-auto rounded-lg font-medium" asChild>
              <Link href="/app/registro-usuario">Publicar una tarea</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-sm px-8 py-5 h-auto rounded-lg font-medium border-2" asChild>
              <Link href="/como-funciona">Ver cómo funciona</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
