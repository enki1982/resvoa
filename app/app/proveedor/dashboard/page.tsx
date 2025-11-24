"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Star, TrendingUp, Award, CreditCard, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { mockProveedores, mockTareas } from "@/lib/mock-data";
import { useAuth } from "@/lib/auth-context";
import { useToast } from "@/hooks/use-toast";

export default function ProveedorDashboardPage() {
  const proveedor = mockProveedores[0];
  const { session } = useAuth();
  const { toast } = useToast();
  const [disponible, setDisponible] = useState(proveedor.disponible);
  const [stripeStatus, setStripeStatus] = useState<any>(null);
  const [loadingStripe, setLoadingStripe] = useState(true);
  const [creatingLink, setCreatingLink] = useState(false);
  const solicitudes = mockTareas.filter(t => t.estado === "pendiente").slice(0, 3);
  const misServicios = mockTareas.filter(t => t.proveedorId === proveedor.id);

  useEffect(() => {
    if (session) {
      fetchStripeStatus();
    }
  }, [session]);

  const fetchStripeStatus = async () => {
    try {
      const response = await fetch('/api/provider/status', {
        headers: {
          'Authorization': `Bearer ${session?.access_token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStripeStatus(data);
      }
    } catch (error) {
      console.error('Error fetching Stripe status:', error);
    } finally {
      setLoadingStripe(false);
    }
  };

  const handleStripeOnboarding = async () => {
    setCreatingLink(true);
    try {
      const response = await fetch('/api/provider/onboarding-link', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session?.access_token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = data.url;
      } else {
        const error = await response.json();
        toast({
          title: 'Error al crear enlace de onboarding',
          description: error.error,
          variant: 'destructive',
        });
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setCreatingLink(false);
    }
  };

  const nivelBadge = {
    aspirante: "bg-gray-100 text-gray-800",
    bronce: "bg-orange-100 text-orange-800",
    plata: "bg-gray-200 text-gray-700",
    oro: "bg-yellow-100 text-yellow-800",
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold text-primary">Resvoa</Link>
            <span className="text-muted-foreground">Panel de Proveedor</span>
          </div>
          <Button variant="outline" asChild>
            <Link href="/app/login">Cerrar sesión</Link>
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{proveedor.nombre}</h1>
            <div className="flex items-center gap-3">
              <Badge className={nivelBadge[proveedor.nivel]}>
                Nivel {proveedor.nivel.charAt(0).toUpperCase() + proveedor.nivel.slice(1)}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{proveedor.puntuacion}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Estado:</span>
            <Switch checked={disponible} onCheckedChange={setDisponible} />
            <span className={`text-sm font-semibold ${disponible ? "text-green-600" : "text-gray-500"}`}>
              {disponible ? "Disponible" : "No disponible"}
            </span>
          </div>
        </div>

        {!loadingStripe && stripeStatus && !stripeStatus.onboardingCompleted && (
          <Alert className="mb-8 border-orange-200 bg-orange-50">
            <AlertCircle className="h-4 w-4 text-orange-600" />
            <AlertTitle className="text-orange-900">Configura tu cuenta de cobros</AlertTitle>
            <AlertDescription className="text-orange-800">
              Para recibir pagos por tus servicios, necesitas completar la configuración de tu cuenta de Stripe.
              <Button
                onClick={handleStripeOnboarding}
                disabled={creatingLink}
                className="mt-3"
                size="sm"
              >
                {creatingLink ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Cargando...
                  </>
                ) : (
                  <>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Configurar cuenta de cobros
                  </>
                )}
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {!loadingStripe && stripeStatus && stripeStatus.onboardingCompleted && (
          <Alert className="mb-8 border-green-200 bg-green-50">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900">Cuenta de cobros activa</AlertTitle>
            <AlertDescription className="text-green-800">
              Tu cuenta está configurada y lista para recibir pagos.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Servicios completados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{proveedor.serviciosCompletados}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Tasa de aceptación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{proveedor.tasaAceptacion}%</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Ingresos este mes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{proveedor.ingresos}€</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Tiempo respuesta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{proveedor.tiempoRespuesta}m</div>
            </CardContent>
          </Card>
        </div>

        {disponible && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Solicitudes cercanas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {solicitudes.map((solicitud) => (
                  <div key={solicitud.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{solicitud.titulo}</h4>
                        <p className="text-sm text-muted-foreground">{solicitud.descripcion}</p>
                      </div>
                      <Badge>{solicitud.categoria.replace("_", " ")}</Badge>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-sm text-muted-foreground">
                        📍 {solicitud.zona} • {solicitud.horarioPreferido}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Rechazar</Button>
                        <Button size="sm">Aceptar</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Mis servicios asignados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {misServicios.map((servicio) => (
                  <div key={servicio.id} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-sm">{servicio.titulo}</p>
                        <p className="text-xs text-muted-foreground">{servicio.usuario.nombre}</p>
                      </div>
                      <Badge className="text-xs">{servicio.estado}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progreso de nivel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Nivel actual: Oro</span>
                    <span>{proveedor.serviciosCompletados} servicios</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-600" />
                    ¡Felicidades!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Ya eres nivel Oro. Mantén tu excelente servicio para seguir con beneficios premium.
                  </p>
                </div>

                <div className="text-sm space-y-2">
                  <p className="font-semibold">Requisitos nivel Oro:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>✓ ≥ 90 servicios (tienes {proveedor.serviciosCompletados})</li>
                    <li>✓ Puntuación ≥ 4.8 (tienes {proveedor.puntuacion})</li>
                    <li>✓ Cancelaciones &lt; 1% (tienes {proveedor.cancelaciones})</li>
                    <li>✓ Sin disputas graves</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
