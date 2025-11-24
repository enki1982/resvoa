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
  CheckCircle
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorías de servicios - Resvoa",
  description: "Descubre todos los servicios disponibles en Resvoa, desde recados hasta cuidado de mascotas.",
};

export default function CategoriasPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Categorías de servicios
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Desde pequeños recados hasta tareas domésticas, encuentra la ayuda que necesitas
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Servicios disponibles
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Todas las tareas cotidianas que puedes delegar de forma segura
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Recados y compras</CardTitle>
                <Badge className="w-fit">Muy popular</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Delega las compras del supermercado, recoge paquetes o lleva documentos
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Hacer la compra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Recoger paquetes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Ir a la farmacia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Llevar/recoger documentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Hacer colas o gestiones</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Dog className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Cuidado de mascotas</CardTitle>
                <Badge className="w-fit">Muy popular</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Paseos, cuidado ocasional y transporte para tus mascotas
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Pasear perros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Cuidado ocasional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Llevar al veterinario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Comprar comida para mascotas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Tareas del hogar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Limpieza ligera, organización y esperar entregas o técnicos
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Limpieza ligera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Esperar técnicos o entregas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Organización de espacios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Sacar basura/reciclaje</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Montaje y reparaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Montaje de muebles y pequeñas reparaciones domésticas
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Montaje de muebles IKEA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Colgar cuadros y estanterías</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Reparaciones menores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Instalación de electrodomésticos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Mudanzas pequeñas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Transporte de objetos, mudanzas de habitación y ayuda con cajas
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Mudanzas de habitación/estudio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Transporte de muebles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Empaquetado y desempaquetado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Llevar cosas a trastero</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Acompañamiento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Acompañar a citas, gestiones o eventos
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Acompañar a citas médicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Ayuda con gestiones administrativas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Acompañar personas mayores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Ayuda con eventos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Car className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Transporte de objetos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Llevar o recoger objetos de un lugar a otro
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Transporte urbano de objetos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Recoger compras grandes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Llevar cosas a punto limpio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Transporte de bicicletas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Apoyo administrativo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ayuda con tareas administrativas y digitales sencillas
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Escaneo de documentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Organización de papeles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Ayuda con trámites online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Imprimir documentos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
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

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Siempre estamos ampliando nuestras categorías. Si tienes una necesidad específica que no aparece aquí, contáctanos y estudiaremos añadirla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">Sugerir categoría</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/como-funciona">Ver cómo funciona</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Publica tu primera solicitud o empieza a ganar como proveedor
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
