"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, TrendingUp, Award, CreditCard, AlertCircle, CheckCircle2, Loader2, MapPin } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase-client";

export default function ProveedorDashboardPage() {
  const { user, session, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const [providerData, setProviderData] = useState<any>(null);
  const [providerProfile, setProviderProfile] = useState<any>(null);
  const [disponible, setDisponible] = useState(true);
  const [stripeStatus, setStripeStatus] = useState<any>(null);
  const [loadingStripe, setLoadingStripe] = useState(true);
  const [loading, setLoading] = useState(true);
  const [creatingLink, setCreatingLink] = useState(false);
  const [solicitudes, setSolicitudes] = useState<any[]>([]);
  const [misServicios, setMisServicios] = useState<any[]>([]);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [proposedPrice, setProposedPrice] = useState<string>("");

  useEffect(() => {
    if (user) {
      loadProviderData();
      loadSolicitudes();
      loadMisServicios();
    }
    if (session) {
      fetchStripeStatus();
    }
  }, [user, session]);

  const loadProviderData = async () => {
    try {
      setLoading(true);
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("id", user?.id)
        .maybeSingle();

      if (userError) throw userError;
      setProviderData(userData);

      const { data: profileData, error: profileError } = await supabase
        .from("provider_profiles")
        .select("*")
        .eq("user_id", user?.id)
        .maybeSingle();

      if (profileError) throw profileError;
      setProviderProfile(profileData);
      setDisponible(profileData?.active || false);
    } catch (error: any) {
      console.error("Error loading provider data:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadSolicitudes = async () => {
    try {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("status", "open")
        .order("created_at", { ascending: false })
        .limit(5);

      if (error) throw error;
      setSolicitudes(data || []);
    } catch (error: any) {
      console.error("Error loading solicitudes:", error);
    }
  };

  const loadMisServicios = async () => {
    try {
      const { data, error } = await supabase
        .from("service_proposals")
        .select("*, services(*)")
        .eq("provider_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMisServicios(data || []);
    } catch (error: any) {
      console.error("Error loading my services:", error);
    }
  };

  const handleMarkAsCompleted = async (serviceId: string) => {
    try {
      const response = await fetch(`/api/tasks/${serviceId}/complete`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session?.access_token}`,
        },
      });

      if (response.ok) {
        toast({
          title: "Servicio marcado como completado",
          description: "El usuario deberá certificar el trabajo para liberar el pago",
        });
        loadMisServicios();
      } else {
        const error = await response.json();
        toast({
          title: "Error",
          description: error.error,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

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

  const handleToggleDisponibilidad = async (value: boolean) => {
    try {
      const { error } = await supabase
        .from("provider_profiles")
        .update({ active: value })
        .eq("user_id", user?.id);

      if (error) throw error;

      setDisponible(value);
      toast({
        title: value ? "Ahora estás disponible" : "Ahora no estás disponible",
        description: value ? "Recibirás solicitudes cercanas" : "No recibirás nuevas solicitudes",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleOpenProposal = (service: any) => {
    setSelectedService(service);
    const avgPrice = ((service.price_min + service.price_max) / 2).toFixed(0);
    setProposedPrice(avgPrice);
  };

  const handleSubmitProposal = async () => {
    try {
      if (!proposedPrice || !selectedService) return;

      const { error } = await supabase
        .from("service_proposals")
        .insert({
          service_id: selectedService.id,
          provider_id: user?.id,
          price: parseFloat(proposedPrice),
          message: "",
          status: "pending",
        });

      if (error) throw error;

      toast({
        title: "Propuesta enviada",
        description: `Has propuesto ${proposedPrice}€ por este servicio`,
      });

      setSelectedService(null);
      setProposedPrice("");
      loadSolicitudes();
      loadMisServicios();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
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

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">Debes iniciar sesión</p>
            <Button asChild>
              <Link href="/app/login">Ir al login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
            <h1 className="text-3xl font-bold mb-2">{providerData?.full_name || "Proveedor"}</h1>
            <div className="flex items-center gap-3">
              <Badge className={nivelBadge[providerProfile?.level as keyof typeof nivelBadge] || nivelBadge.aspirante}>
                Nivel {providerProfile?.level || "aspirante"}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{providerProfile?.rating?.toFixed(1) || "0.0"}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Estado:</span>
            <Switch checked={disponible} onCheckedChange={handleToggleDisponibilidad} />
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
              <div className="text-3xl font-bold">{providerProfile?.total_services || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Propuestas enviadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{misServicios.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Puntuación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{providerProfile?.rating?.toFixed(1) || "0.0"}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Estado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{providerProfile?.verification_status === "verified" ? "✓" : "⏳"}</div>
            </CardContent>
          </Card>
        </div>

        {disponible && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Solicitudes cercanas</CardTitle>
            </CardHeader>
            <CardContent>
              {solicitudes.length === 0 ? (
                <p className="text-center text-muted-foreground py-4">No hay solicitudes disponibles</p>
              ) : (
                <div className="space-y-4">
                  {solicitudes.map((solicitud) => (
                    <div key={solicitud.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold">{solicitud.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{solicitud.description}</p>
                        </div>
                        <Badge>{solicitud.category}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {solicitud.city}
                        </div>
                        <div className="text-muted-foreground">
                          {solicitud.scheduled_date || "Sin horario"}
                        </div>
                        <div className="font-semibold text-green-700">
                          Presupuesto: {solicitud.price_min}€ - {solicitud.price_max}€
                        </div>
                        <div className="text-right text-muted-foreground text-xs">
                          📍 ~250m de tu ubicación
                        </div>
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button size="sm" onClick={() => handleOpenProposal(solicitud)}>
                          Enviar propuesta
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Mis propuestas</CardTitle>
            </CardHeader>
            <CardContent>
              {misServicios.length === 0 ? (
                <p className="text-center text-muted-foreground py-4">No has enviado propuestas aún</p>
              ) : (
                <div className="space-y-3">
                  {misServicios.map((servicio) => (
                    <div key={servicio.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{servicio.services?.title || "Sin título"}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Propuesta: {servicio.status === 'pending' ? 'Pendiente' : servicio.status === 'accepted' ? 'Aceptada' : 'Rechazada'}
                          </p>
                          {servicio.price > 0 && (
                            <p className="text-sm font-semibold text-green-700 mt-1">{servicio.price}€</p>
                          )}
                        </div>
                        <Badge className="text-xs" variant={servicio.status === 'accepted' ? 'default' : 'secondary'}>
                          {servicio.status === 'pending' ? 'Pendiente' : servicio.status === 'accepted' ? 'Aceptada' : 'Rechazada'}
                        </Badge>
                      </div>
                      {servicio.status === 'accepted' && servicio.services?.status === 'in_progress' && (
                        <Button
                          size="sm"
                          className="w-full mt-2"
                          onClick={() => handleMarkAsCompleted(servicio.services.id)}
                        >
                          Marcar como completado
                        </Button>
                      )}
                      {servicio.services?.status === 'completed' && (
                        <p className="text-xs text-center text-green-600 mt-2 font-semibold">
                          ✅ Esperando certificación del usuario
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
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
                    <span>Nivel actual: {providerProfile?.level || "aspirante"}</span>
                    <span>{providerProfile?.total_services || 0} servicios</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${Math.min((providerProfile?.total_services || 0) / 90 * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Tu progreso
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Completa más servicios para subir de nivel y obtener más beneficios.
                  </p>
                </div>

                <div className="text-sm space-y-2">
                  <p className="font-semibold">Requisitos nivel Oro:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>≥ 90 servicios (tienes {providerProfile?.total_services || 0})</li>
                    <li>Puntuación ≥ 4.8 (tienes {providerProfile?.rating?.toFixed(1) || "0.0"})</li>
                    <li>Sin disputas graves</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Proponer precio</DialogTitle>
            <DialogDescription>
              {selectedService?.title}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="bg-blue-50 p-3 rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Presupuesto del usuario:</span>
                <span className="font-semibold">{selectedService?.price_min}€ - {selectedService?.price_max}€</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Distancia aproximada:</span>
                <span className="font-semibold">~250 metros</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Selecciona tu precio</Label>
              <Select value={proposedPrice} onValueChange={setProposedPrice}>
                <SelectTrigger>
                  <SelectValue placeholder="Elige un precio" />
                </SelectTrigger>
                <SelectContent>
                  {selectedService && [
                    ...Array.from(
                      { length: Math.floor((selectedService.price_max - selectedService.price_min) / 5) + 1 },
                      (_, i) => selectedService.price_min + i * 5
                    ).filter(p => p <= selectedService.price_max),
                    selectedService.price_max
                  ].map((price: number) => (
                    <SelectItem key={price} value={String(price)}>
                      {price}€
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Solo puedes proponer precios dentro del presupuesto indicado
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedService(null)}>Cancelar</Button>
            <Button onClick={handleSubmitProposal} disabled={!proposedPrice}>
              Enviar propuesta de {proposedPrice}€
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
