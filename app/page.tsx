import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  ShieldCheck,
  CreditCard,
  DollarSign,
  Calendar,
  MapPin,
  FileText,
  Users,
  CheckCircle,
  Package,
  ShoppingCart,
  Home,
  PawPrint,
  UserPlus,
  Smartphone,
  TruckIcon,
  HelpCircle,
  Star,
  KeyRound,
} from "lucide-react";
import { HeroSteps } from "@/components/hero-steps";
import { Chatbot } from "@/components/chatbot";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-[#1a4d6d] to-[#0d2d45] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
          <div className="text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Encuentra ayuda cerca de ti en segundos
            </h1>
            <p className="text-2xl text-white/90 max-w-2xl mx-auto">
              Publica tu microtarea y conecta con personas verificadas listas para ayudarte hoy
            </p>

            <div className="pt-4">
              <Button size="lg" variant="secondary" className="text-xl px-12 py-6 h-auto font-semibold" asChild>
                <Link href="/app/registro-usuario">Publicar una tarea</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-6 text-base text-white/90">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span>Pagos seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Identidad verificada</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Personas cercanas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-muted-foreground">
              Publica, elige y recibe ayuda en minutos
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">1. Publica tu tarea</h3>
              <p className="text-lg text-muted-foreground">
                Describe en menos de 1 minuto qué necesitas
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">2. Recibe ofertas y elige</h3>
              <p className="text-lg text-muted-foreground">
                Personas cercanas, verificadas y con reputación
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">3. Se hace la tarea y pagas al finalizar</h3>
              <p className="text-lg text-muted-foreground">
                Pago seguro liberado solo cuando confirmas
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-10 py-6 h-auto" asChild>
              <Link href="/app/registro-usuario">Publicar una tarea</Link>
            </Button>
          </div>

        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Gana dinero ayudando a personas de tu zona
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ofrece microtareas cerca de ti y cobra al terminar. Tú eliges qué tareas hacer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Recibe tareas cerca</h3>
              <p className="text-lg text-muted-foreground">
                Ve solicitudes en tu zona por GPS
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Elige cuáles hacer</h3>
              <p className="text-lg text-muted-foreground">
                Tú decides qué tareas aceptar
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Cobra al terminar</h3>
              <p className="text-lg text-muted-foreground">
                Pago seguro al completar la tarea
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 h-auto border-2" asChild>
              <Link href="/app/registro-proveedor">Registrarme como proveedor</Link>
            </Button>
          </div>
        </div>
      </section>


      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Lo que dicen quienes ya usan RESVOA
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Laura, 34 años</CardTitle>
                    <p className="text-sm text-muted-foreground">Clienta</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "Trabajo muchas horas y no siempre llego a todo. Con RESVOA he podido delegar recados y pequeñas tareas del día a día sin complicarme la vida."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Carlos, 29 años</CardTitle>
                    <p className="text-sm text-muted-foreground">Proveedor</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "Uso RESVOA para ganar un extra los fines de semana. Elijo las tareas que me encajan y cobro de forma segura, sin tener que buscar clientes por mi cuenta."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Marta y David</CardTitle>
                    <p className="text-sm text-muted-foreground">Pareja usuaria</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "Acabábamos de mudarnos y estábamos saturados. Gracias a RESVOA conseguimos ayuda para montajes simples, compras y pequeños recados mientras nos organizábamos."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿En qué podemos ayudarte?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Categorías de servicios disponibles en RESVOA
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-lg">Recados y gestiones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Encargos rápidos como recoger paquetes, hacer colas, llevar documentos o resolver pequeños trámites cerca de ti.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingCart className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-lg">Compras urgentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Alguien hace la compra por ti: supermercado, farmacia o tiendas de barrio cuando tú no puedes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-lg">Ayuda en casa ligera</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Tareas sencillas como ordenar, doblar ropa, organizar espacios o echar una mano en momentos puntuales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <PawPrint className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-lg">Cuidado de mascotas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Paseos, visitas puntuales, alimentación o acompañamiento cuando no puedes ocuparte de tu compañero peludo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <UserPlus className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-lg">Acompañamiento y recados personales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Acompañamiento a citas, ayuda con recados personales o tareas que no quieres hacer solo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-lg">Ayuda tecnológica básica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Configuración sencilla de móvil, apps, TV, wifi u otros dispositivos sin necesidad de un técnico profesional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <KeyRound className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-lg">Recogida/Entrega de llaves</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Servicios de recogida y entrega de llaves para Airbnb, alquileres, mudanzas o gestión de propiedades.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TruckIcon className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-lg">Mudanzas y pequeños traslados ligeros</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ayuda puntual para mover cajas ligeras, subir o bajar enseres o transportar objetos pequeños dentro de la misma zona.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <HelpCircle className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-lg">Otros encargos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cualquier microtarea que no encaje en las categorías anteriores y que pueda resolver una persona de confianza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Por qué confiar en RESVOA
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Identidad verificada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Las personas que ofrecen ayuda deben verificar su identidad antes de poder aceptar tareas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Pagos protegidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  El pago se procesa de forma segura y solo se libera cuando la tarea se completa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Reputación y valoraciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cada tarea suma valoraciones para que puedas elegir siempre a alguien de confianza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Preguntas frecuentes
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Qué tipo de tareas puedo pedir en RESVOA?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Puedes pedir ayuda para recados, compras, tareas ligeras en casa, cuidado de mascotas, acompañamiento y otras microtareas del día a día.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿RESVOA es una empresa de limpieza o reformas?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. RESVOA está pensada para microtareas y ayudas puntuales, no para obras, reformas ni servicios profesionales complejos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo se elige a la persona que me ayuda?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Publicas tu necesidad, ves personas disponibles cerca, revisas su reputación y precio, y eliges a quien prefieras.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo se gestionan los pagos?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                El pago se realiza de forma segura a través de la plataforma. El importe solo se libera cuando la tarea se considera completada.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Qué pasa si algo sale mal?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Si la tarea no se ha realizado o hay algún problema, puedes contactar con soporte y revisar el caso antes de que se confirme el pago.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Qué necesito para ser proveedor en RESVOA?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ser mayor de edad, verificar tu identidad y cumplir con las normas de la comunidad. Después, podrás aceptar tareas y ganar dinero extra.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cuánto puedo llegar a ganar como proveedor?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Depende de tu disponibilidad y del número de tareas que aceptes. Puedes usar RESVOA como un extra flexible de ingresos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            La forma más rápida de resolver lo cotidiano
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Miles de microtareas completadas cada mes. Personas reales, soluciones inmediatas.
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
      <Chatbot />
    </main>
  );
}
