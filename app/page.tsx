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
  Zap,
  Heart,
  Award,
} from "lucide-react";
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
      <section className="relative gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTE4IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-50"></div>

        <div className="section-container relative">
          <div className="py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                  RESVOA — Resuelve tu día. Sorpréndete con el resultado.
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
                  'RES' de resolver. 'VOA' de ese momento de alivio cuando descubres que ya no tienes que hacerlo tú.
                </p>
                <p className="text-lg text-white/80">
                  Resolver + reaccionar = Resvoa.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-10 py-7 h-auto font-semibold rounded-xl shadow-2xl hover:scale-105 transition-transform"
                    asChild
                  >
                    <Link href="/app/registro-usuario">Quiero resolver algo</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-7 h-auto font-semibold rounded-xl bg-white/10 hover:bg-white hover:text-primary border-2 border-white text-white backdrop-blur-sm transition-all"
                    asChild
                  >
                    <Link href="/app/registro-proveedor">Quiero crear momentos voa</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-6">
                  <div className="flex items-center gap-2.5 text-white/90">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Pagos seguros</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white/90">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Identidad verificada</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white/90">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Personas cercanas</span>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 p-12 shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 bg-white/20 backdrop-blur rounded-2xl p-4">
                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Rápido</p>
                          <p className="text-white/70 text-sm">Soluciones inmediatas</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 bg-white/20 backdrop-blur rounded-2xl p-4">
                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Seguro</p>
                          <p className="text-white/70 text-sm">Identidad verificada</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 bg-white/20 backdrop-blur rounded-2xl p-4">
                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Confiable</p>
                          <p className="text-white/70 text-sm">Valoraciones reales</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center space-y-6 pb-8 border-b border-gray-100">
            <h2 className="section-title">
              ¿Por qué se llama RESVOA?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Le pusimos Resvoa porque combina dos ideas poderosas. <strong className="text-foreground">'RES'</strong> viene de resolver, de hacer tu vida más fácil. <strong className="text-foreground">'VOA'</strong> es esa reacción espontánea que sientes cuando ves que tu tarea, recado o microproblema ya está resuelto.
            </p>
            <p className="text-primary font-bold text-2xl pt-2">
              RES es lo que hacemos. VOA es lo que sientes.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="section-container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              ¿Cómo funciona?
            </h2>
            <p className="section-subtitle">
              De RES a VOA en 4 pasos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-primary/10 mx-auto">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <Badge className="bg-primary text-white text-base px-4 py-1.5">Paso 1</Badge>
                  <h3 className="text-xl font-bold">Pide ayuda — RES</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Describe lo que necesitas resolver en menos de un minuto.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-primary/10 mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <Badge className="bg-primary text-white text-base px-4 py-1.5">Paso 2</Badge>
                  <h3 className="text-xl font-bold">Elige quién te ayuda — RES</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Perfiles verificados cerca de ti, listos para responder.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-primary/10 mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <Badge className="bg-primary text-white text-base px-4 py-1.5">Paso 3</Badge>
                  <h3 className="text-xl font-bold">Se hace la tarea — RES</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tu ayudante la resuelve exactamente como lo acordaste.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-accent/20 mx-auto">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-3">
                  <Badge className="bg-accent text-white text-base px-4 py-1.5">Paso 4</Badge>
                  <h3 className="text-xl font-bold">Pagas y valoras — VOA</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Y aquí llega tu momento voa: cuando ves que ya está hecho.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-12 py-7 h-auto rounded-xl shadow-xl hover:scale-105 transition-transform" asChild>
              <Link href="/app/registro-usuario">Quiero mi momento voa</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
            <h2 className="section-title">
              Tu tiempo vale demasiado para gastarlo en microtareas.
            </h2>
            <p className="section-subtitle">
              Publicas lo que necesitas y Resvoa lo resuelve por ti. Fácil, rápido y sin complicaciones.
            </p>
            <p className="text-lg text-primary font-bold">
              RES es lo que hacemos. VOA es lo que sientes.
            </p>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-12 py-7 h-auto rounded-xl shadow-xl hover:scale-105 transition-transform" asChild>
              <Link href="/app/registro-usuario">Hazlo fácil. Hazlo voa.</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="section-container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              Conviértete en creador de momentos voa.
            </h2>
            <p className="section-subtitle">
              Gana dinero ayudando a personas de tu zona. Cada tarea que completes genera un voa: la satisfacción de alguien que ya no tiene que hacerlo.
            </p>
            <p className="text-lg text-primary font-bold">
              Tu trabajo tiene impacto real. Cada voa cuenta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg card-hover bg-white text-center">
              <CardContent className="pt-10 pb-10 space-y-4">
                <div className="icon-wrapper bg-primary/10 mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Recibe tareas cerca</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ve solicitudes en tu zona por GPS
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white text-center">
              <CardContent className="pt-10 pb-10 space-y-4">
                <div className="icon-wrapper bg-primary/10 mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Elige cuáles hacer</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Tú decides qué tareas aceptar
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white text-center">
              <CardContent className="pt-10 pb-10 space-y-4">
                <div className="icon-wrapper bg-primary/10 mx-auto">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Cobra al terminar</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Pago seguro al completar la tarea
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-lg px-12 py-7 h-auto rounded-xl border-2 hover:scale-105 transition-transform shadow-lg" asChild>
              <Link href="/app/registro-proveedor">Crea tu primer voa hoy</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="section-container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              Lo que dicen quienes ya usan RESVOA
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">Laura, 34 años</CardTitle>
                    <p className="text-sm text-muted-foreground">Clienta</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Pensé que tardarían horas. Abrí Resvoa y… voa, resuelto en minutos."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <DollarSign className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">Carlos, 29 años</CardTitle>
                    <p className="text-sm text-muted-foreground">Proveedor</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Me encanta crear el momento voa: ayudar a alguien y ver su reacción cuando todo queda hecho."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Home className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">Marta y David</CardTitle>
                    <p className="text-sm text-muted-foreground">Pareja usuaria</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Tenía mil cosas y cero tiempo. Con Resvoa fue: lo pido, alguien viene, voa. Tarea tachada."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="section-container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              ¿En qué podemos ayudarte?
            </h2>
            <p className="section-subtitle">
              Categorías de servicios disponibles en RESVOA
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardHeader>
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg pt-2">Recados y gestiones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Encargos rápidos como recoger paquetes, hacer colas, llevar documentos o resolver pequeños trámites cerca de ti.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardHeader>
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg pt-2">Compras urgentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alguien hace la compra por ti: supermercado, farmacia o tiendas de barrio cuando tú no puedes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardHeader>
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg pt-2">Ayuda en casa ligera</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tareas sencillas como ordenar, doblar ropa, organizar espacios o echar una mano en momentos puntuales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardHeader>
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <PawPrint className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg pt-2">Cuidado de mascotas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Paseos, visitas puntuales, alimentación o acompañamiento cuando no puedes ocuparte de tu compañero peludo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardHeader>
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <UserPlus className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg pt-2">Acompañamiento y recados personales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Acompañamiento a citas, ayuda con recados personales o tareas que no quieres hacer solo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardHeader>
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg pt-2">Ayuda tecnológica básica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Configuración sencilla de móvil, apps, TV, wifi u otros dispositivos sin necesidad de un técnico profesional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardHeader>
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <KeyRound className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg pt-2">Recogida/Entrega de llaves</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Servicios de recogida y entrega de llaves para Airbnb, alquileres, mudanzas o gestión de propiedades.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardHeader>
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <TruckIcon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg pt-2">Mudanzas y pequeños traslados ligeros</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ayuda puntual para mover cajas ligeras, subir o bajar enseres o transportar objetos pequeños dentro de la misma zona.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardHeader>
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <HelpCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg pt-2">Otros encargos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cualquier microtarea que no encaje en las categorías anteriores y que pueda resolver una persona de confianza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="section-container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              Por qué confiar en RESVOA
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg card-hover bg-white text-center group">
              <CardContent className="pt-10 pb-10 space-y-4">
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                  <ShieldCheck className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Identidad verificada</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Las personas que ofrecen ayuda deben verificar su identidad antes de poder aceptar tareas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white text-center group">
              <CardContent className="pt-10 pb-10 space-y-4">
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                  <CreditCard className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Pagos protegidos</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  El pago se procesa de forma segura y solo se libera cuando la tarea se completa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white text-center group">
              <CardContent className="pt-10 pb-10 space-y-4">
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                  <Star className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Reputación y valoraciones</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Cada tarea suma valoraciones para que puedas elegir siempre a alguien de confianza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="section-container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border-0 shadow-md rounded-2xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-lg">
                  ¿Qué tipo de tareas puedo pedir en RESVOA?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  Puedes pedir ayuda para recados, compras, tareas ligeras en casa, cuidado de mascotas, acompañamiento y otras microtareas del día a día.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border-0 shadow-md rounded-2xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-lg">
                  ¿RESVOA es una empresa de limpieza o reformas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  No. RESVOA está pensada para microtareas y ayudas puntuales, no para obras, reformas ni servicios profesionales complejos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border-0 shadow-md rounded-2xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-lg">
                  ¿Cómo se elige a la persona que me ayuda?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  Publicas tu necesidad, ves personas disponibles cerca, revisas su reputación y precio, y eliges a quien prefieras.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border-0 shadow-md rounded-2xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-lg">
                  ¿Cómo se gestionan los pagos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  El pago se realiza de forma segura a través de la plataforma. El importe solo se libera cuando la tarea se considera completada.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border-0 shadow-md rounded-2xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-lg">
                  ¿Qué pasa si algo sale mal?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  Si la tarea no se ha realizado o hay algún problema, puedes contactar con soporte y revisar el caso antes de que se confirme el pago.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border-0 shadow-md rounded-2xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-lg">
                  ¿Qué necesito para ser proveedor en RESVOA?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  Ser mayor de edad, verificar tu identidad y cumplir con las normas de la comunidad. Después, podrás aceptar tareas y ganar dinero extra.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white border-0 shadow-md rounded-2xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-lg">
                  ¿Cuánto puedo llegar a ganar como proveedor?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  Depende de tu disponibilidad y del número de tareas que aceptes. Puedes usar RESVOA como un extra flexible de ingresos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white border-0 shadow-md rounded-2xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-lg">
                  ¿Qué significa 'voa' en Resvoa?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  Es la reacción que tienes cuando tu tarea ya está resuelta. Esa mezcla de sorpresa, alivio y satisfacción. <strong className="text-foreground">RES es el proceso; VOA es lo que sientes.</strong>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section gradient-primary text-white">
        <div className="section-container text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            La forma más rápida de resolver lo cotidiano
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Miles de microtareas completadas cada mes. Personas reales, soluciones inmediatas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-12 py-7 h-auto rounded-xl shadow-2xl hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/app/registro-usuario">Ahorra tiempo. Vive tu voa.</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-12 py-7 h-auto rounded-xl bg-white/10 hover:bg-white hover:text-primary border-2 border-white text-white backdrop-blur-sm transition-all"
              asChild
            >
              <Link href="/app/registro-proveedor">Quiero un momento voa</Link>
            </Button>
          </div>
        </div>
      </section>

      <Chatbot />
    </main>
  );
}
