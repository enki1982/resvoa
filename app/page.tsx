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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                RESVOA — Ayuda que resuelve tu día a día.
              </h1>
              <p className="text-xl mb-6 text-white/90">
                Pide ayuda en segundos y conecta con personas cercanas dispuestas a resolver tus microtareas, de forma rápida y segura.
              </p>

              <div className="flex items-center gap-4 mb-8 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Pagos protegidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Identidad verificada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>Valoraciones reales</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                  <Link href="/app/registro-usuario">Pedir ayuda ahora</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-white" asChild>
                  <Link href="/app/registro-proveedor">Quiero ganar ayudando</Link>
                </Button>
              </div>

              <div className="space-y-6 max-w-xl">
                <h2 className="text-2xl font-bold mb-4">Cómo funciona en 4 pasos</h2>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">1. Pide ayuda</h3>
                    <p className="text-white/80 text-sm">
                      Describe qué necesitas en menos de 1 minuto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">2. Elige quién te ayuda</h3>
                    <p className="text-white/80 text-sm">
                      Personas cercanas, verificadas y con reputación.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">3. Se hace la tarea</h3>
                    <p className="text-white/80 text-sm">
                      Tu ayudante realiza la tarea según lo acordado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">4. Pagas y valoras</h3>
                    <p className="text-white/80 text-sm">
                      Pagas de forma segura solo al finalizar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <HeroSteps />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Cómo funciona RESVOA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solo 4 pasos para resolver tus microtareas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Paso 1 – Pide ayuda</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Publica lo que necesitas: un recado, una compra urgente, ayuda en casa, cuidado de mascotas… en menos de un minuto.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Paso 2 – Elige quién te ayuda</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Revisa perfiles cercanos, su reputación, valoraciones y precio, y elige a la persona que mejor encaje contigo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Paso 3 – Se hace la tarea</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tu ayudante realiza la tarea según lo acordado. Puedes chatear y seguir el progreso desde la plataforma.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Paso 4 – Pagas y valoras</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Solo pagas cuando la tarea esté completada. Después, dejas una valoración para ayudar a otros usuarios.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-8">
            <Badge className="mb-4 bg-primary text-white px-4 py-2">Para quien necesita ayuda</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tu tiempo vale más que hacer colas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Delega lo sencillo, recupera tu día. Rapidez real para microtareas cotidianas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Soluciones inmediatas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Encuentra ayuda en minutos, no en días. Diseñado para lo que necesitas resolver HOY.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShieldCheck className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Confianza máxima</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Identidad verificada, evaluaciones transparentes y niveles profesionales. Personas reales, fiables y cercanas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Ultra simple</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pide en 1 minuto. Sin formularios eternos. Pago protegido hasta confirmar que todo está perfecto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <Badge className="mb-4 bg-accent text-primary px-4 py-2">Para quien quiere ganar</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Convierte tu tiempo libre en ingresos reales
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Horarios flexibles, cercanía garantizada y una comunidad que valora tu esfuerzo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Ingresos flexibles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  300-2500€ al mes según tu dedicación. Tú decides cuándo, dónde y cuánto cobrar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Total flexibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sin jefes ni horarios fijos. Actívate cuando quieras, acepta solo lo que te convenga.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Local y humano</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ayuda a tu comunidad. Servicios cerca de casa, trato directo, personas ayudando a personas.
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
