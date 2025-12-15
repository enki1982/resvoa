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
    <main className="min-h-screen bg-white">
      <section className="bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
                Haz que alguien haga tus tareas o gana dinero haciéndolas
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                Publica una tarea o acepta trabajos cerca de ti, de forma rápida y segura.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="text-sm px-7 py-5 h-auto font-medium rounded-lg"
                  asChild
                >
                  <Link href="/app/registro-usuario">Que me hagan una tarea</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-sm px-7 py-5 h-auto font-medium rounded-lg border-2"
                  asChild
                >
                  <Link href="/app/registro-proveedor">Quiero ganar dinero</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-md aspect-square rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center">
                <div className="text-gray-300 text-center">
                  <div className="text-4xl font-semibold mb-2">[ Imagen ]</div>
                  <p className="text-sm">Ilustración de producto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Por qué se llama Resvoa
            </h2>
            <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-2 font-light">
              <p>
                <span className="font-medium text-gray-900">RES</span> viene de resolver.
              </p>
              <p>
                <span className="font-medium text-gray-900">VOA</span> es ese momento de alivio cuando descubres que ya no tienes que hacerlo tú.
              </p>
              <p className="font-medium text-gray-900 pt-2">
                Resolver + alivio = Resvoa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Rápido</h3>
              <p className="text-sm text-gray-600 font-light">
                Soluciones inmediatas.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Seguro</h3>
              <p className="text-sm text-gray-600 font-light">
                Identidad verificada.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Confiable</h3>
              <p className="text-sm text-gray-600 font-light">
                Valoraciones reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Cómo funciona
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Publica lo que necesitas</h3>
              <p className="text-sm text-gray-600 font-light">
                Describe tu tarea en segundos.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Elige quién te ayuda</h3>
              <p className="text-sm text-gray-600 font-light">
                Personas verificadas te ofrecen su ayuda.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Se realiza la tarea</h3>
              <p className="text-sm text-gray-600 font-light">
                Tú decides cuándo y dónde.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Pagas y valoras</h3>
              <p className="text-sm text-gray-600 font-light">
                El pago está protegido y se libera al finalizar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Categorías principales
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Recados y compras</h3>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <PawPrint className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Cuidado de mascotas</h3>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Tareas del hogar</h3>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Montaje y arreglos</h3>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Acompañamiento</h3>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              <CardContent className="pt-6 pb-6 space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <TruckIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Mudanzas pequeñas</h3>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-sm px-7 py-3 rounded-lg border-2 font-medium" asChild>
              <Link href="/categorias">Ver todas las categorías</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 bg-white">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 mx-auto"></div>
                <div className="text-center space-y-1">
                  <h3 className="font-medium text-sm text-gray-900">Ana</h3>
                  <p className="text-xs text-gray-500 font-light">Barcelona</p>
                </div>
                <p className="text-gray-600 text-center text-sm leading-relaxed font-light">
                  "Apareció alguien en minutos y lo resolvió todo."
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 mx-auto"></div>
                <div className="text-center space-y-1">
                  <h3 className="font-medium text-sm text-gray-900">Javier</h3>
                  <p className="text-xs text-gray-500 font-light">Madrid</p>
                </div>
                <p className="text-gray-600 text-center text-sm leading-relaxed font-light">
                  "Perfecto para ahorrar tiempo cada día."
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 mx-auto"></div>
                <div className="text-center space-y-1">
                  <h3 className="font-medium text-sm text-gray-900">Laura</h3>
                  <p className="text-xs text-gray-500 font-light">Valencia</p>
                </div>
                <p className="text-gray-600 text-center text-sm leading-relaxed font-light">
                  "Ahora puedo delegar lo que antes me agobiaba."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="section-container text-center space-y-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
            Empieza hoy mismo.
          </h2>
          <div>
            <Button
              size="lg"
              className="text-sm px-8 py-5 h-auto rounded-lg font-medium"
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
