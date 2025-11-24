import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Star, Award, TrendingUp, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistema de reputación - Resvoa",
  description: "Descubre cómo funciona nuestro sistema de reputación transparente y justo.",
};

export default function ReputacionPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-accent via-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Sistema de reputación
          </h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto">
            Un sistema transparente y justo que premia la excelencia y protege a toda la comunidad
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Cómo funciona la reputación
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="w-12 h-12 text-yellow-500 mb-4" />
                <CardTitle>Valoraciones de 1 a 5 estrellas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Después de cada servicio, usuarios y proveedores se valoran mutuamente. Las valoraciones son públicas y permanentes.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-muted-foreground">Excelente (5)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-muted-foreground">Bueno (4)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-muted-foreground">Regular (3)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(2)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gray-300" />
                      ))}
                    </div>
                    <span className="text-muted-foreground">Malo (2)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gray-300" />
                      ))}
                    </div>
                    <span className="text-muted-foreground">Muy malo (1)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Valoraciones verificadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Solo se pueden dejar valoraciones después de completar un servicio real. Sistema anti-manipulación activo.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Solo usuarios verificados pueden valorar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Una valoración por servicio completado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Detección automática de patrones sospechosos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Las valoraciones no se pueden editar ni borrar</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Niveles de proveedor
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Progresa a través de 4 niveles basados en tu rendimiento y dedicación
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="border-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-gray-100 text-gray-800">Nivel 1</Badge>
                <CardTitle className="text-lg">Aspirante</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold mb-2">Requisitos:</p>
                    <ul className="space-y-1">
                      <li>• Recién registrado</li>
                      <li>• Identidad verificada</li>
                    </ul>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold mb-2">Beneficios:</p>
                    <ul className="space-y-1">
                      <li>• Acceso básico</li>
                      <li>• 15% comisión</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">Nivel 2</Badge>
                <CardTitle className="text-lg">Bronce</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold mb-2">Requisitos:</p>
                    <ul className="space-y-1">
                      <li>• ≥10 servicios</li>
                      <li>• Puntuación ≥4.5</li>
                      <li>• &lt;5% cancelaciones</li>
                    </ul>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold mb-2">Beneficios:</p>
                    <ul className="space-y-1">
                      <li>• Prioridad media</li>
                      <li>• 14% comisión</li>
                      <li>• Badge Bronce</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-gray-200 text-gray-700">Nivel 3</Badge>
                <CardTitle className="text-lg">Plata</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold mb-2">Requisitos:</p>
                    <ul className="space-y-1">
                      <li>• ≥40 servicios</li>
                      <li>• Puntuación ≥4.7</li>
                      <li>• &lt;3% cancelaciones</li>
                    </ul>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold mb-2">Beneficios:</p>
                    <ul className="space-y-1">
                      <li>• Alta prioridad</li>
                      <li>• 13% comisión</li>
                      <li>• Badge Plata</li>
                      <li>• Soporte prioritario</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-400">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-yellow-100 text-yellow-800">Nivel 4</Badge>
                <CardTitle className="text-lg">Oro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold mb-2">Requisitos:</p>
                    <ul className="space-y-1">
                      <li>• ≥90 servicios</li>
                      <li>• Puntuación ≥4.8</li>
                      <li>• &lt;1% cancelaciones</li>
                      <li>• Sin disputas graves</li>
                    </ul>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold mb-2">Beneficios:</p>
                    <ul className="space-y-1">
                      <li>• Máxima prioridad</li>
                      <li>• 12% comisión</li>
                      <li>• Badge Oro destacado</li>
                      <li>• Soporte VIP</li>
                      <li>• Acceso anticipado</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-50 border-2 border-accent/20 rounded-lg p-6 text-center">
            <Award className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">¡Sube de nivel y desbloquea beneficios!</h3>
            <p className="text-muted-foreground">
              Los proveedores de nivel Oro reciben hasta un 40% más de solicitudes que los aspirantes gracias a su alta visibilidad y credibilidad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Factores que afectan la reputación
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                Acciones positivas
              </h3>
              <div className="space-y-4">
                <Card className="border-2 border-accent/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Valoraciones de 5 estrellas</p>
                        <p className="text-xs text-muted-foreground">Máximo impacto positivo en tu puntuación</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Tiempo de respuesta rápido</p>
                        <p className="text-xs text-muted-foreground">Responder solicitudes en menos de 1 hora</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Alta tasa de aceptación</p>
                        <p className="text-xs text-muted-foreground">Aceptar la mayoría de solicitudes que recibes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Servicios completados</p>
                        <p className="text-xs text-muted-foreground">Cuantos más servicios, más confianza generas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Comentarios positivos</p>
                        <p className="text-xs text-muted-foreground">Los usuarios destacan tu profesionalidad</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-destructive" />
                Acciones negativas
              </h3>
              <div className="space-y-4">
                <Card className="border-2 border-destructive/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Valoraciones bajas (1-3 estrellas)</p>
                        <p className="text-xs text-muted-foreground">Impacto negativo significativo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-destructive/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Cancelaciones frecuentes</p>
                        <p className="text-xs text-muted-foreground">Más del 5% de cancelaciones penaliza tu nivel</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-destructive/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">No presentarse a servicios</p>
                        <p className="text-xs text-muted-foreground">Puede resultar en suspensión de cuenta</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-destructive/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Disputas y quejas</p>
                        <p className="text-xs text-muted-foreground">Las disputas resueltas en tu contra afectan gravemente</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-destructive/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Tiempo de respuesta lento</p>
                        <p className="text-xs text-muted-foreground">Más de 24 horas en responder reduce tu visibilidad</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Penalizaciones y sanciones
          </h2>

          <div className="space-y-6">
            <Card className="border-2 border-yellow-400">
              <CardHeader>
                <AlertTriangle className="w-8 h-8 text-yellow-600 mb-2" />
                <CardTitle>Advertencia (Warning)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Por comportamiento leve pero inadecuado (ej: llegar tarde sin avisar, tasa de cancelación entre 5-10%)
                </p>
                <p className="text-sm font-semibold">Consecuencias:</p>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  <li>• Notificación en el perfil</li>
                  <li>• Reducción temporal de visibilidad</li>
                  <li>• 3 advertencias = suspensión temporal</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-400">
              <CardHeader>
                <AlertTriangle className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Suspensión temporal (1-7 días)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Por comportamiento repetido o grave (ej: no presentarse, múltiples quejas, &gt;10% cancelaciones)
                </p>
                <p className="text-sm font-semibold">Consecuencias:</p>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  <li>• Cuenta bloqueada temporalmente</li>
                  <li>• No puedes recibir ni aceptar solicitudes</li>
                  <li>• Aparece como "suspendido" en el perfil</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive">
              <CardHeader>
                <XCircle className="w-8 h-8 text-destructive mb-2" />
                <CardTitle>Suspensión permanente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Por comportamiento muy grave o fraude (ej: falsificación de identidad, actividad fraudulenta, agresiones)
                </p>
                <p className="text-sm font-semibold">Consecuencias:</p>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  <li>• Cuenta eliminada permanentemente</li>
                  <li>• Imposibilidad de crear nuevas cuentas</li>
                  <li>• Posibles acciones legales en casos graves</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Construye tu reputación con Resvoa
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Un sistema justo y transparente donde la excelencia es recompensada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/app/registro-proveedor">Empezar como proveedor</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/como-funciona">Cómo funciona</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Tienes dudas sobre el sistema de reputación?
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Nuestro equipo de soporte está aquí para ayudarte
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contacto">Contactar soporte</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
