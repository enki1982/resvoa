"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, AlertCircle, Plus, Star, Settings } from "lucide-react";
import { mockTareas, mockUsuarios } from "@/lib/mock-data";
import type { Tarea } from "@/types";

export default function UsuarioDashboardPage() {
  const usuario = mockUsuarios[0];
  const [tareas, setTareas] = useState<Tarea[]>(mockTareas.filter(t => t.usuarioId === usuario.id));
  const [showNewTask, setShowNewTask] = useState(false);
  const [newTask, setNewTask] = useState({
    categoria: "",
    titulo: "",
    descripcion: "",
    direccion: "",
    horario: "",
  });

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevaTarea: Tarea = {
      id: String(Date.now()),
      usuarioId: usuario.id,
      usuario,
      categoria: newTask.categoria as any,
      titulo: newTask.titulo,
      descripcion: newTask.descripcion,
      direccion: newTask.direccion,
      zona: "Eixample",
      horarioPreferido: newTask.horario,
      estado: "pendiente",
      createdAt: new Date(),
    };
    setTareas([nuevaTarea, ...tareas]);
    setShowNewTask(false);
    setNewTask({ categoria: "", titulo: "", descripcion: "", direccion: "", horario: "" });
  };

  const getEstadoBadge = (estado: string) => {
    const styles = {
      pendiente: "bg-yellow-100 text-yellow-800",
      aceptada: "bg-blue-100 text-blue-800",
      en_curso: "bg-purple-100 text-purple-800",
      completada: "bg-green-100 text-green-800",
      cancelada: "bg-red-100 text-red-800",
    };
    return <Badge className={styles[estado as keyof typeof styles]}>{estado.replace("_", " ")}</Badge>;
  };

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
          <h1 className="text-3xl font-bold mb-2">Hola, {usuario.nombre} 👋</h1>
          <p className="text-muted-foreground">Bienvenido a tu panel de control</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Tareas completadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{usuario.tareasCompletadas}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Horas ahorradas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{usuario.horasAhorradas}h</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Tareas activas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {tareas.filter(t => t.estado !== "completada" && t.estado !== "cancelada").length}
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

                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">Publicar solicitud</Button>
                  <Button type="button" variant="outline" onClick={() => setShowNewTask(false)}>
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div>
          <h2 className="text-2xl font-bold mb-4">Mis solicitudes</h2>
          <div className="space-y-4">
            {tareas.map((tarea) => (
              <Card key={tarea.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{tarea.titulo}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{tarea.descripcion}</p>
                    </div>
                    {getEstadoBadge(tarea.estado)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {tarea.horarioPreferido}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      📍 {tarea.direccion}
                    </div>
                  </div>

                  {tarea.proveedor && (
                    <div className="bg-secondary p-3 rounded-lg mb-4">
                      <p className="text-sm font-semibold">Proveedor asignado:</p>
                      <p className="text-sm">{tarea.proveedor.nombre} - Nivel {tarea.proveedor.nivel}</p>
                      <p className="text-sm flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {tarea.proveedor.puntuacion}
                      </p>
                    </div>
                  )}

                  {tarea.estado === "completada" && tarea.valoracion && (
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold mb-1">Tu valoración:</p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < tarea.valoracion! ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      {tarea.comentario && <p className="text-sm mt-2">{tarea.comentario}</p>}
                    </div>
                  )}

                  <div className="flex gap-2 mt-4">
                    {tarea.estado === "en_curso" && (
                      <Button size="sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Marcar como completada
                      </Button>
                    )}
                    {(tarea.estado === "pendiente" || tarea.estado === "aceptada") && (
                      <Button size="sm" variant="outline">Ver detalles</Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
