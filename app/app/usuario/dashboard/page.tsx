"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Clock, CheckCircle, AlertCircle, Plus, Star, Settings, Loader2, Euro, ThumbsUp, CalendarIcon, MapPin } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase-client";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

export default function UsuarioDashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const [userData, setUserData] = useState<any>(null);
  const [tareas, setTareas] = useState<any[]>([]);
  const [propuestas, setPropuestas] = useState<any[]>([]);
  const [propuestasPorServicio, setPropuestasPorServicio] = useState<{[key: string]: any[]}>({});
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [showNewTask, setShowNewTask] = useState(false);
  const [newTask, setNewTask] = useState({
    categoria: "",
    titulo: "",
    descripcion: "",
    direccion: "",
    fecha: undefined as Date | undefined,
    hora: "",
    precioMin: "5",
    precioMax: "20",
    isRecurring: false,
    recurrenceFrequency: "weekly" as "daily" | "weekly" | "biweekly" | "monthly",
    endDate: undefined as Date | undefined,
  });
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"] as any,
  });

  useEffect(() => {
    if (user) {
      loadUserData();
      loadTasks();
      loadProposals();
    }
  }, [user]);

  const loadUserData = async () => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", user?.id)
        .maybeSingle();

      if (error) throw error;
      setUserData(data);
    } catch (error: any) {
      console.error("Error loading user data:", error);
    }
  };

  const loadTasks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTareas(data || []);
    } catch (error: any) {
      console.error("Error loading tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadProposals = async () => {
    try {
      const { data, error } = await supabase
        .from("service_proposals")
        .select(`
          *,
          services!inner(*),
          provider:users!service_proposals_provider_id_fkey(full_name, phone)
        `)
        .eq("services.user_id", user?.id)
        .eq("status", "pending")
        .in("services.status", ["open"])
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPropuestas(data || []);

      const groupedByService: {[key: string]: any[]} = {};
      (data || []).forEach((proposal: any) => {
        const serviceId = proposal.service_id;
        if (!groupedByService[serviceId]) {
          groupedByService[serviceId] = [];
        }
        groupedByService[serviceId].push(proposal);
      });
      setPropuestasPorServicio(groupedByService);
    } catch (error: any) {
      console.error("Error loading proposals:", error);
      setPropuestas([]);
      setPropuestasPorServicio({});
    }
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data: { user: authUser } } = await supabase.auth.getUser();

      if (!authUser) {
        toast({
          title: "Error",
          description: "Debes iniciar sesión",
          variant: "destructive",
        });
        return;
      }

      const { data: existingUser } = await supabase
        .from("users")
        .select("id")
        .eq("id", authUser.id)
        .maybeSingle();

      if (!existingUser) {
        const { error: insertUserError } = await supabase
          .from("users")
          .insert({
            id: authUser.id,
            email: authUser.email || "",
            full_name: authUser.user_metadata?.full_name || "Usuario",
            phone: authUser.user_metadata?.phone || "",
            user_type: "user",
          });

        if (insertUserError) {
          console.error("Error creating user record:", insertUserError);
          toast({
            title: "Error",
            description: "No se pudo crear tu perfil de usuario. Por favor, contacta con soporte.",
            variant: "destructive",
          });
          return;
        }
      }

      if (!newTask.fecha || !newTask.hora) {
        toast({
          title: "Error",
          description: "Debes seleccionar fecha y hora",
          variant: "destructive",
        });
        return;
      }

      const [hours, minutes] = newTask.hora.split(":");
      const scheduledDateTime = new Date(newTask.fecha);
      scheduledDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      const { data, error } = await supabase
        .from("services")
        .insert({
          user_id: authUser.id,
          title: newTask.titulo,
          description: newTask.descripcion,
          category: newTask.categoria,
          location: newTask.direccion,
          city: "Barcelona",
          scheduled_date: scheduledDateTime.toISOString(),
          price_min: parseFloat(newTask.precioMin),
          price_max: parseFloat(newTask.precioMax),
          status: "open",
          is_recurring: newTask.isRecurring,
          recurrence_frequency: newTask.isRecurring ? newTask.recurrenceFrequency : null,
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Solicitud creada",
        description: "Tu solicitud ha sido publicada",
      });

      setShowNewTask(false);
      setNewTask({ categoria: "", titulo: "", descripcion: "", direccion: "", fecha: undefined, hora: "", precioMin: "5", precioMax: "20", isRecurring: false, recurrenceFrequency: "weekly", endDate: undefined });

      loadTasks();
      loadProposals();
    } catch (error: any) {
      toast({
        title: "Error al crear solicitud",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleCancelTask = async (taskId: string) => {
    try {
      const { error } = await supabase
        .from("services")
        .update({ status: "cancelled" })
        .eq("id", taskId);

      if (error) throw error;

      toast({
        title: "Tarea cancelada",
        description: "La solicitud ha sido cancelada",
      });

      loadTasks();
      loadProposals();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleCertifyCompleted = async (taskId: string) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        toast({
          title: "Error",
          description: "Debes iniciar sesión",
          variant: "destructive",
        });
        return;
      }

      const response = await fetch(`/api/tasks/${taskId}/cancel`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
        },
      });

      if (response.ok) {
        toast({
          title: "Trabajo certificado",
          description: "El pago ha sido liberado al proveedor",
        });
        loadTasks();
        loadProposals();
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

  const getEstadoBadge = (estado: string) => {
    const styles = {
      open: "bg-yellow-100 text-yellow-800",
      assigned: "bg-blue-100 text-blue-800",
      in_progress: "bg-purple-100 text-purple-800",
      completed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    const labels = {
      open: "Abierta",
      assigned: "Asignada",
      in_progress: "En curso",
      completed: "Completada",
      cancelled: "Cancelada",
    };
    return <Badge className={styles[estado as keyof typeof styles]}>{labels[estado as keyof typeof labels]}</Badge>;
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
            <span className="text-muted-foreground">Panel de Usuario</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/app/usuario/configuracion">
                <Settings className="mr-2 h-4 w-4" />
                Configuración
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/app/login">Cerrar sesión</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Hola, {userData?.full_name || "Usuario"}</h1>
          <p className="text-muted-foreground">Bienvenido a tu panel de control</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Tareas completadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{tareas.filter(t => t.status === "completed").length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Tareas abiertas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{tareas.filter(t => t.status === "open").length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Propuestas recibidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{propuestas.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Tareas activas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {tareas.filter(t => t.status !== "completed" && t.status !== "cancelled").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {!showNewTask ? (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <Button onClick={() => setShowNewTask(true)} size="lg" className="w-full">
                <Plus className="mr-2" />
                Crear nueva solicitud de ayuda
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Nueva solicitud</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateTask} className="space-y-4">
                <div className="space-y-2">
                  <Label>Tipo de servicio</Label>
                  <Select value={newTask.categoria} onValueChange={(v) => setNewTask({ ...newTask, categoria: v })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recados">Recados y gestiones</SelectItem>
                      <SelectItem value="mascotas">Paseo de perros</SelectItem>
                      <SelectItem value="ayuda_domestica">Ayuda doméstica</SelectItem>
                      <SelectItem value="vehiculos">Limpieza de vehículos</SelectItem>
                      <SelectItem value="soporte_hogar">Soporte hogar</SelectItem>
                      <SelectItem value="llaves">Recogida/Entrega de llaves</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Título</Label>
                  <Input
                    placeholder="Ej: Recoger paquete en correos"
                    value={newTask.titulo}
                    onChange={(e) => setNewTask({ ...newTask, titulo: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Descripción</Label>
                  <Textarea
                    placeholder="Describe lo que necesitas..."
                    value={newTask.descripcion}
                    onChange={(e) => setNewTask({ ...newTask, descripcion: e.target.value })}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Dirección</Label>
                  {isLoaded ? (
                    <Autocomplete
                      onLoad={(autocomplete) => {
                        autocompleteRef.current = autocomplete;
                      }}
                      onPlaceChanged={() => {
                        if (autocompleteRef.current) {
                          const place = autocompleteRef.current.getPlace();
                          if (place.formatted_address) {
                            setNewTask({ ...newTask, direccion: place.formatted_address });
                          }
                        }
                      }}
                      options={{
                        componentRestrictions: { country: "es" },
                        types: ["address"],
                      }}
                    >
                      <Input
                        ref={inputRef}
                        placeholder="Empieza a escribir tu dirección..."
                        value={newTask.direccion}
                        onChange={(e) => setNewTask({ ...newTask, direccion: e.target.value })}
                        required
                      />
                    </Autocomplete>
                  ) : (
                    <Input
                      placeholder="Cargando autocompletado..."
                      disabled
                    />
                  )}
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    El autocompletado te ayudará a encontrar tu dirección
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Fecha del servicio</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !newTask.fecha && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {newTask.fecha ? format(newTask.fecha, "PPP", { locale: es }) : "Selecciona fecha"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={newTask.fecha}
                          onSelect={(date) => setNewTask({ ...newTask, fecha: date })}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Hora del servicio</Label>
                    <Select value={newTask.hora} onValueChange={(v) => setNewTask({ ...newTask, hora: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona hora" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 14 }, (_, i) => i + 8).map((hour) => (
                          <>
                            <SelectItem key={`${hour}:00`} value={`${hour.toString().padStart(2, "0")}:00`}>
                              {hour.toString().padStart(2, "0")}:00
                            </SelectItem>
                            <SelectItem key={`${hour}:30`} value={`${hour.toString().padStart(2, "0")}:30`}>
                              {hour.toString().padStart(2, "0")}:30
                            </SelectItem>
                          </>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Presupuesto que estás dispuesto a pagar</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm text-muted-foreground">Precio mínimo</Label>
                      <Select value={newTask.precioMin} onValueChange={(v) => setNewTask({ ...newTask, precioMin: v })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100].map(p => (
                            <SelectItem key={p} value={String(p)}>{p}€</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm text-muted-foreground">Precio máximo</Label>
                      <Select value={newTask.precioMax} onValueChange={(v) => setNewTask({ ...newTask, precioMax: v })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 120, 150, 200].map(p => (
                            <SelectItem key={p} value={String(p)}>{p}€</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">El proveedor podrá proponer un precio dentro de este rango</p>
                </div>

                <div className="space-y-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="recurring"
                      checked={newTask.isRecurring}
                      onChange={(e) => setNewTask({ ...newTask, isRecurring: e.target.checked })}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <Label htmlFor="recurring" className="font-semibold cursor-pointer">
                      Hacer este servicio recurrente (suscripción)
                    </Label>
                  </div>

                  {newTask.isRecurring && (
                    <>
                      <div className="space-y-2">
                        <Label>Frecuencia</Label>
                        <Select
                          value={newTask.recurrenceFrequency}
                          onValueChange={(v: any) => setNewTask({ ...newTask, recurrenceFrequency: v })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Diario</SelectItem>
                            <SelectItem value="weekly">Semanal</SelectItem>
                            <SelectItem value="biweekly">Quincenal</SelectItem>
                            <SelectItem value="monthly">Mensual</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Fecha de finalización (opcional)</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !newTask.endDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {newTask.endDate ? format(newTask.endDate, "PPP", { locale: es }) : "Sin fecha límite"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={newTask.endDate}
                              onSelect={(date) => setNewTask({ ...newTask, endDate: date })}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <p className="text-xs text-muted-foreground">
                          Si no especificas fecha, la suscripción continuará indefinidamente hasta que la canceles
                        </p>
                      </div>

                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm font-semibold mb-1">Vista previa de tu suscripción:</p>
                        <p className="text-sm text-muted-foreground">
                          Este servicio se repetirá{" "}
                          {newTask.recurrenceFrequency === "daily" && "cada día"}
                          {newTask.recurrenceFrequency === "weekly" && "cada semana"}
                          {newTask.recurrenceFrequency === "biweekly" && "cada 2 semanas"}
                          {newTask.recurrenceFrequency === "monthly" && "cada mes"}
                          {newTask.endDate
                            ? ` hasta el ${format(newTask.endDate, "PPP", { locale: es })}`
                            : " de forma indefinida"}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">
                    {newTask.isRecurring ? "Crear suscripción" : "Publicar solicitud"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowNewTask(false)}>
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )
}

        {propuestas.length > 0 && (
          <Card className="mb-8 border-2 border-green-200 bg-green-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="w-5 h-5 text-green-600" />
                Propuestas recibidas ({propuestas.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(propuestasPorServicio).map(([serviceId, proposals]) => {
                  const firstProposal = proposals[0];
                  return (
                    <div key={serviceId} className="bg-white border-2 rounded-lg p-4">
                      <div className="mb-4">
                        <h4 className="font-bold text-lg">{firstProposal.services.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {firstProposal.services.description}
                        </p>
                        <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
                          <span>📍 {firstProposal.services.location}</span>
                          <span>📅 {firstProposal.services.scheduled_date ? new Date(firstProposal.services.scheduled_date).toLocaleDateString('es-ES') : 'Sin fecha'}</span>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <p className="text-sm font-semibold mb-3">
                          {proposals.length} {proposals.length === 1 ? 'propuesta recibida' : 'propuestas recibidas'}
                        </p>
                        <div className="space-y-3">
                          {proposals.map((propuesta: any) => (
                            <div key={propuesta.id} className="bg-gray-50 rounded-lg p-3 border">
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex-1">
                                  <p className="font-semibold text-sm">{propuesta.provider?.full_name || "Proveedor"}</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    📞 {propuesta.provider?.phone || "No disponible"}
                                  </p>
                                  {propuesta.message && (
                                    <p className="text-xs text-muted-foreground mt-2 italic">"{propuesta.message}"</p>
                                  )}
                                </div>
                                <div className="text-right ml-3">
                                  <div className="text-2xl font-bold text-green-700">{propuesta.price}€</div>
                                  <p className="text-xs text-muted-foreground">propuesta</p>
                                </div>
                              </div>
                              <Button
                                size="sm"
                                className="w-full mt-2"
                                onClick={() => setSelectedTask(propuesta)}
                              >
                                Aceptar esta propuesta
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        <div>
          <h2 className="text-2xl font-bold mb-4">Mis solicitudes</h2>
          {tareas.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">
                <p>No tienes solicitudes aún</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {tareas.map((tarea) => (
                <Card key={tarea.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{tarea.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{tarea.description}</p>
                      </div>
                      {getEstadoBadge(tarea.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {tarea.scheduled_date || "Sin horario definido"}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        📍 {tarea.location}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      {tarea.status === "open" && (
                        <Button size="sm" variant="outline" onClick={() => handleCancelTask(tarea.id)}>
                          Cancelar solicitud
                        </Button>
                      )}
                      {tarea.status === "completed" && (
                        <Button size="sm" onClick={() => handleCertifyCompleted(tarea.id)} className="bg-green-600 hover:bg-green-700">
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          Certificar trabajo completado
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!selectedTask} onOpenChange={(open) => !open && setSelectedTask(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Aceptar propuesta y realizar pago</DialogTitle>
            <DialogDescription>
              Revisa los detalles antes de continuar
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Servicio</p>
                <p className="font-semibold">{selectedTask?.services?.title}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Proveedor</p>
                <p className="font-semibold">{selectedTask?.provider?.full_name || "Anónimo"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Teléfono del proveedor</p>
                <p className="font-semibold">{selectedTask?.provider?.phone || "No disponible"}</p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Precio acordado:</span>
                <span className="text-2xl font-bold text-green-700">{selectedTask?.price}€</span>
              </div>
              <p className="text-xs text-muted-foreground">
                El dinero quedará retenido de forma segura hasta que confirmes que el trabajo está completado
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg space-y-2">
              <p className="font-semibold text-sm">¿Cómo funciona?</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Pagas ahora de forma segura</li>
                <li>El proveedor realiza el servicio</li>
                <li>Cuando termine, lo marcará como completado</li>
                <li>Tú certificas que está bien hecho</li>
                <li>El pago se libera automáticamente al proveedor</li>
              </ol>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedTask(null)}>Cancelar</Button>
            <Button onClick={() => {
              toast({
                title: "Funcionalidad en desarrollo",
                description: "La integración de pagos se activará próximamente",
              });
              setSelectedTask(null);
            }}>
              Pagar {selectedTask?.price}€ y aceptar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
