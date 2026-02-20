import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, FileText, Users, CircleCheck as CheckCircle, Star, Package, PawPrint, Chrome as Home, Wrench, UserPlus, Truck as TruckIcon, Zap, Heart, TrendingUp, Clock, Award, MapPin } from "lucide-react";
import { Chatbot } from "@/components/chatbot";
import { HeroCarousel } from "@/components/hero-carousel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMmM1NWUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02em0wIDJ2OGMtMi4yMDkgMC00LTEuNzkxLTQtNHMxLjc5MS00IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Más de 10,000 tareas completadas</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Delega tareas,<br />
                <span className="text-green-600">gana tiempo</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Conectamos personas que necesitan ayuda con quienes quieren ganar dinero realizando tareas cercanas. Simple, rápido y seguro.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  size="lg"
                  className="text-base px-8 py-6 h-auto font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  asChild
                >
                  <Link href="/app/registro-usuario">Publicar una tarea</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 h-auto font-semibold rounded-lg border-2 hover:bg-gray-50"
                  asChild
                >
                  <Link href="/app/registro-proveedor">Quiero ganar dinero</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Registro gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Pago seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Personas verificadas</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-blue-50 to-green-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 mb-2">
                  <span className="text-3xl font-bold text-green-600">R</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  ¿Por qué Resvoa?
                </h2>
                <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-4 max-w-xl mx-auto">
                  <p>
                    <span className="font-bold text-green-600 text-xl">RES</span> viene de <span className="font-semibold">resolver</span>, porque eso es exactamente lo que hacemos: resolvemos tus problemas del día a día.
                  </p>
                  <p>
                    <span className="font-bold text-green-600 text-xl">VOA</span> es ese momento de <span className="font-semibold">alivio</span> cuando descubres que ya no tienes que hacerlo tú mismo.
                  </p>
                  <div className="pt-4 pb-2">
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border-2 border-green-200">
                      <p className="font-bold text-gray-900 text-lg">
                        Resolver + alivio = Resvoa
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic pt-2">
                    La plataforma que te devuelve tu tiempo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center shadow-sm">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">24h</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Respuesta rápida</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Recibe propuestas en minutos, no esperes días
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Pago protegido</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tu dinero está seguro hasta que la tarea esté completada
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center shadow-sm">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">4.8★</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Alta satisfacción</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Personas verificadas con reputación comprobada
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center shadow-sm">
                <MapPin className="w-8 h-8 text-pink-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">Local</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">En tu zona</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Conectamos personas cercanas para mayor comodidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Cómo funciona en 4 simples pasos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Desde publicar tu necesidad hasta completar la tarea, todo está diseñado para ser rápido y fácil
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200"></div>

            <div className="relative">
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg relative z-10">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 border-2 border-blue-600 shadow">
                    1
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Publica tu tarea</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Describe qué necesitas en menos de un minuto. Precio, ubicación y horario.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg relative z-10">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-orange-600 border-2 border-orange-600 shadow">
                    2
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Recibe propuestas</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Proveedores cercanos y verificados te ofrecen su ayuda. Elige el que más te convenza.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg relative z-10">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-green-600 border-2 border-green-600 shadow">
                    3
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Se realiza</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  El proveedor completa la tarea según lo acordado. Tú controlas todo el proceso.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg relative z-10">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-yellow-600 border-2 border-yellow-600 shadow">
                    4
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Paga y valora</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pago 100% seguro que se libera al completarse. Deja tu valoración para ayudar a otros.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/como-funciona" className="text-green-600 hover:text-green-700 font-semibold text-base inline-flex items-center gap-2">
              Ver guía completa
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              ¿Qué tareas puedes delegar?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Desde tareas simples hasta proyectos más complejos. Lo que necesites, lo resolvemos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link href="/categorias/recados">
              <Card className="border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer bg-white h-full">
                <CardContent className="pt-8 pb-8 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <Package className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Recados y compras</h3>
                  <p className="text-sm text-gray-600">Compras, colas, gestiones administrativas</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/categorias/mascotas">
              <Card className="border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer bg-white h-full">
                <CardContent className="pt-8 pb-8 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                    <PawPrint className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Cuidado de mascotas</h3>
                  <p className="text-sm text-gray-600">Paseos, alimentación, compañía</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/categorias/hogar">
              <Card className="border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer bg-white h-full">
                <CardContent className="pt-8 pb-8 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Home className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Tareas del hogar</h3>
                  <p className="text-sm text-gray-600">Limpieza, organización, cocina</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/categorias/montaje">
              <Card className="border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer bg-white h-full">
                <CardContent className="pt-8 pb-8 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Montaje y arreglos</h3>
                  <p className="text-sm text-gray-600">Muebles, colgar cuadros, pequeñas reparaciones</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/categorias/acompanamiento">
              <Card className="border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer bg-white h-full">
                <CardContent className="pt-8 pb-8 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                    <UserPlus className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Acompañamiento</h3>
                  <p className="text-sm text-gray-600">Citas médicas, eventos, gestiones</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/categorias/mudanzas">
              <Card className="border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer bg-white h-full">
                <CardContent className="pt-8 pb-8 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                    <TruckIcon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Mudanzas pequeñas</h3>
                  <p className="text-sm text-gray-600">Transporte de muebles, cajas, enseres</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-base px-8 py-4 rounded-lg border-2 font-semibold hover:bg-gray-50" asChild>
              <Link href="/categorias">Ver todas las categorías</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="section-container">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Miles de personas ya confían en Resvoa
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Historias reales de usuarios que han recuperado su tiempo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-8 space-y-5">
                <div className="flex justify-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-gray-700 text-center text-base leading-relaxed italic">
                  "Increíble. Publiqué que necesitaba ayuda con la compra del mes y en 10 minutos tenía 3 propuestas. Todo súper profesional y amable."
                </p>
                <div className="text-center space-y-1 pt-2">
                  <h3 className="font-semibold text-base text-gray-900">Ana García</h3>
                  <p className="text-sm text-gray-500">Barcelona, Usuario desde hace 6 meses</p>
                  <Badge variant="secondary" className="mt-2">18 tareas completadas</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-8 space-y-5">
                <div className="flex justify-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-gray-700 text-center text-base leading-relaxed italic">
                  "Como proveedor, he ganado más de 800€ este mes haciendo tareas en mis ratos libres. La app es intuitiva y el cobro súper rápido."
                </p>
                <div className="text-center space-y-1 pt-2">
                  <h3 className="font-semibold text-base text-gray-900">Javier Ruiz</h3>
                  <p className="text-sm text-gray-500">Madrid, Proveedor Oro</p>
                  <Badge variant="secondary" className="mt-2">92 tareas realizadas</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-8 space-y-5">
                <div className="flex justify-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-gray-700 text-center text-base leading-relaxed italic">
                  "Trabajo muchas horas y no tengo tiempo para nada. Con Resvoa puedo delegar lo que antes me agobiaba y centrarme en lo importante."
                </p>
                <div className="text-center space-y-1 pt-2">
                  <h3 className="font-semibold text-base text-gray-900">Laura Martínez</h3>
                  <p className="text-sm text-gray-500">Valencia, Usuario activo</p>
                  <Badge variant="secondary" className="mt-2">34 tareas completadas</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Únete a la comunidad que está cambiando la forma de colaborar
            </h2>
            <p className="text-lg sm:text-xl text-green-50 max-w-2xl mx-auto">
              Miles de personas ya están ahorrando tiempo y ganando dinero. ¿A qué esperas?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="text-base px-8 py-6 h-auto bg-white text-green-600 hover:bg-green-50 font-semibold rounded-lg shadow-xl"
                asChild
              >
                <Link href="/app/registro-usuario">Empezar ahora gratis</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 h-auto border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold rounded-lg"
                asChild
              >
                <Link href="/como-funciona">Ver cómo funciona</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 pt-6 text-sm text-green-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Activa tu cuenta en 2 minutos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-900 text-white">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-gray-400 text-sm">Tareas completadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-gray-400 text-sm">Usuarios activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-gray-400 text-sm">Valoración media</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-400 text-sm">Tareas exitosas</div>
            </div>
          </div>
        </div>
      </section>

      <Chatbot />
    </main>
  );
}
