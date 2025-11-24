"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Clock, CheckCircle, AlertCircle, Plus, Star, Settings, Loader2, Euro, ThumbsUp } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase-client";

export default function UsuarioDashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const [userData, setUserData] = useState<any>(null);
  const [tareas, setTareas] = useState<any[]>([]);
  const [propuestas, setPropuestas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [showNewTask, setShowNewTask] = useState(false);
  const [newTask, setNewTask] = useState({
    categoria: "",
    titulo: "",
    descripcion: "",
    direccion: "",
    horario: "",
    precioMin: "5",
    precioMax: "20",
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
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPropuestas(data || []);
    } catch (error: any) {
      console.error("Error loading proposals:", error);
    }
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        toast({
          title: "Error",
          description: "Debes iniciar sesión",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase
        .from("services")
        .insert({
          user_id: user.id,
          title: newTask.titulo,
          description: newTask.descripcion,
          category: newTask.categoria,
          location: newTask.direccion,
          city: "Barcelona",
          scheduled_date: newTask.horario,
          price_min: parseFloat(newTask.precioMin),
          price_max: parseFloat(newTask.precioMax),
          status: "open",
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Solicitud creada",
        description: "Tu solicitud ha sido publicada",
      });

      setShowNewTask(false);
      setNewTask({ categoria: "", titulo: "", descripcion: "", direccion: "", horario: "", precioMin: "5", precioMax: "20" });

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
                  <Label>Dirección aproximada</Label>
                  <Input
                    placeholder="Calle, número, zona"
                    value={newTask.direccion}
                    onChange={(e) => setNewTask({ ...newTask, direccion: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Horario preferido</Label>
                  <Input
                    placeholder="Ej: Mañana 10:00-13:00"
                    value={newTask.horario}
                    onChange={(e) => setNewTask({ ...newTask, horario: e.target.value })}
                    required
                  />
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

                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">Publicar solicitud</Button>
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
                Propuestas recibidas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {propuestas.map((propuesta) => (
                  <div key={propuesta.id} className="bg-white border-2 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold">{propuesta.services.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Proveedor: {propuesta.provider?.full_name || "Anónimo"}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-700">{propuesta.price}€</div>
                        <p className="text-xs text-muted-foreground">precio propuesto</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" onClick={() => setSelectedTask(propuesta)}>
                        Ver detalles y aceptar
                      </Button>
                    </div>
                  </div>
                ))}
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
