import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck,
  FileText,
  Users,
  CheckCircle,
  Star,
  Package,
  PawPrint,
  Home,
  Wrench,
  UserPlus,
  TruckIcon,
  Zap,
  Heart,
} from "lucide-react";
import { Chatbot } from "@/components/chatbot";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTE4IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-50"></div>

        <div className="section-container relative">
          <div className="py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                  Haz que alguien haga tus tareas. O gana dinero haciéndolas.
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
                  La forma más rápida y segura de conectar a quien necesita ayuda con quien puede ayudar.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-10 py-7 h-auto font-semibold rounded-xl shadow-2xl hover:scale-105 transition-transform"
                    asChild
                  >
                    <Link href="/app/registro-usuario">Que me hagan una tarea</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-7 h-auto font-semibold rounded-xl bg-white/10 hover:bg-white hover:text-primary border-2 border-white text-white backdrop-blur-sm transition-all"
                    asChild
                  >
                    <Link href="/app/registro-proveedor">Quiero ganar dinero</Link>
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 text-center">
                      <div className="text-6xl font-bold mb-4">[ Imagen ]</div>
                      <p className="text-sm">Placeholder para ilustración minimalista</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="section-title">
              Por qué se llama Resvoa
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              <strong className="text-foreground">RES</strong> viene de resolver.<br />
              <strong className="text-foreground">VOA</strong> es ese momento de alivio cuando descubres que ya no tienes que hacerlo tú.<br />
              <span className="text-primary font-semibold">Resolver + alivio = Resvoa.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg card-hover bg-white text-center">
              <CardContent className="pt-10 pb-10 space-y-4">
                <div className="icon-wrapper bg-accent/20 mx-auto">
                  <Zap className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Rápido</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Soluciones inmediatas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white text-center">
              <CardContent className="pt-10 pb-10 space-y-4">
                <div className="icon-wrapper bg-primary/10 mx-auto">
                  <ShieldCheck className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Seguro</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Identidad verificada.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white text-center">
              <CardContent className="pt-10 pb-10 space-y-4">
                <div className="icon-wrapper bg-primary/10 mx-auto">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Confiable</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Valoraciones reales.
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
              Cómo funciona
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-primary/10 mx-auto">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Publica lo que necesitas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Describe tu tarea en segundos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-primary/10 mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Elige quién te ayuda</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Personas verificadas te ofrecen su ayuda.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-primary/10 mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Se realiza la tarea</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tú decides cuándo y dónde.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-accent/20 mx-auto">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Pagas y valoras</h3>
                <p className="text-muted-foreground leading-relaxed">
                  El pago está protegido y se libera al finalizar.
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
              Categorías principales
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Recados y compras</h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                  <PawPrint className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Cuidado de mascotas</h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Tareas del hogar</h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Montaje y arreglos</h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                  <UserPlus className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Acompañamiento</h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white group">
              <CardContent className="pt-8 pb-8 space-y-4 text-center">
                <div className="icon-wrapper bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                  <TruckIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mudanzas pequeñas</h3>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 h-auto rounded-xl border-2" asChild>
              <Link href="/categorias">Ver todas las categorías</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <div className="text-center space-y-2">
                  <h3 className="font-bold text-lg">Ana</h3>
                  <p className="text-sm text-muted-foreground">Barcelona</p>
                </div>
                <p className="text-muted-foreground italic leading-relaxed text-center">
                  "Apareció alguien en minutos y lo resolvió todo."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <div className="text-center space-y-2">
                  <h3 className="font-bold text-lg">Javier</h3>
                  <p className="text-sm text-muted-foreground">Madrid</p>
                </div>
                <p className="text-muted-foreground italic leading-relaxed text-center">
                  "Perfecto para ahorrar tiempo cada día."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <div className="text-center space-y-2">
                  <h3 className="font-bold text-lg">Laura</h3>
                  <p className="text-sm text-muted-foreground">Valencia</p>
                </div>
                <p className="text-muted-foreground italic leading-relaxed text-center">
                  "Ahora puedo delegar lo que antes me agobiaba."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="section-container text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Empieza hoy mismo.
          </h2>
          <div>
            <Button
              size="lg"
              className="text-lg px-12 py-7 h-auto rounded-xl shadow-xl hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/app/registro-usuario">Crear cuenta gratuita</Link>
            </Button>
          </div>
        </div>
      </section>

      <Chatbot />
    </main>
  );
}
