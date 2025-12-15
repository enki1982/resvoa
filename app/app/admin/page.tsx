"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Briefcase,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  MapPin,
  Star,
  Shield,
  Activity,
  BarChart3,
  Settings,
  Percent,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase-client";

export default function AdminPage() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProviders: 0,
    activeServices: 0,
    completedServices: 0,
    totalRevenue: 0,
    pendingVerifications: 0,
    avgRating: 0,
    monthlyGrowth: 0,
  });

  const [recentActivity, setRecentActivity] = useState<any[]>([]);
  const [pendingVerifications, setPendingVerifications] = useState<any[]>([]);
  const [platformFee, setPlatformFee] = useState<number>(15);
  const [isLoadingFee, setIsLoadingFee] = useState(false);
  const [isSavingFee, setIsSavingFee] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadPlatformFee();
    setStats({
      totalUsers: 1247,
      totalProviders: 342,
      activeServices: 87,
      completedServices: 3456,
      totalRevenue: 127580,
      pendingVerifications: 23,
      avgRating: 4.6,
      monthlyGrowth: 23.5,
    });

    setRecentActivity([
      { id: 1, type: "service", user: "María García", action: "Nuevo servicio: Paseo de perro", time: "Hace 5 min", status: "open" },
      { id: 2, type: "verification", user: "Carlos López", action: "Solicitud de verificación", time: "Hace 12 min", status: "pending" },
      { id: 3, type: "payment", user: "Ana Martínez", action: "Pago completado: 35€", time: "Hace 23 min", status: "completed" },
      { id: 4, type: "review", user: "Pedro Sánchez", action: "Nueva valoración: 5★", time: "Hace 1 hora", status: "completed" },
    ]);

    setPendingVerifications([
      { id: 1, name: "Luis Rodríguez", type: "DNI + Facial", submitted: "2025-11-20", city: "Madrid" },
      { id: 2, name: "Carmen Ruiz", type: "DNI + Facial", submitted: "2025-11-20", city: "Barcelona" },
      { id: 3, name: "Javier Torres", type: "DNI + Facial", submitted: "2025-11-19", city: "Valencia" },
    ]);
  }, []);

  const loadPlatformFee = async () => {
    try {
      setIsLoadingFee(true);
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) return;

      const response = await fetch('/api/admin/platform-settings', {
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPlatformFee(data.platform_fee_percent);
      }
    } catch (error) {
      console.error('Error loading platform fee:', error);
    } finally {
      setIsLoadingFee(false);
    }
  };

  const handleSaveFee = async () => {
    try {
      if (platformFee < 0 || platformFee > 50) {
        toast({
          title: "Error",
          description: "La comisión debe estar entre 0% y 50%",
          variant: "destructive",
        });
        return;
      }

      setIsSavingFee(true);
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        toast({
          title: "Error",
          description: "Debes iniciar sesión",
          variant: "destructive",
        });
        return;
      }

      const response = await fetch('/api/admin/platform-settings/fee', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ platform_fee_percent: platformFee }),
      });

      if (response.ok) {
        toast({
          title: "Éxito",
          description: "Comisión actualizada correctamente",
        });
      } else {
        const error = await response.json();
        toast({
          title: "Error",
          description: error.error || "No se pudo actualizar la comisión",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error saving platform fee:', error);
      toast({
        title: "Error",
        description: "Error al guardar los cambios",
        variant: "destructive",
      });
    } finally {
      setIsSavingFee(false);
    }
  };

  return (
    <main className="min-h-screen bg-green-50/30">
      <div className="bg-gradient-to-r from-primary to-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Panel de Administración</h1>
              <p className="text-blue-100">Gestión completa de Resvoa</p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" asChild>
                <Link href="/">Ver web</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Usuarios
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-600">+{stats.monthlyGrowth}%</span> vs mes anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Proveedores Activos
              </CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProviders.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.pendingVerifications} pendientes verificación
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Servicios Activos
              </CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeServices}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.completedServices.toLocaleString()} completados
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Ingresos Totales
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()}€</div>
              <p className="text-xs text-muted-foreground mt-1">
                Comisiones acumuladas
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Vista General</TabsTrigger>
            <TabsTrigger value="settings">Configuración</TabsTrigger>
            <TabsTrigger value="verifications">Verificaciones</TabsTrigger>
            <TabsTrigger value="services">Servicios</TabsTrigger>
            <TabsTrigger value="users">Usuarios</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configuración de Comisiones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-w-md space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Percent className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">Comisión de Plataforma</h4>
                        <p className="text-xs text-muted-foreground">
                          Este porcentaje se aplica a cada servicio completado. El resto del importe se destina al proveedor.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="platformFee">Porcentaje de comisión (%)</Label>
                    <div className="flex gap-3">
                      <Input
                        id="platformFee"
                        type="number"
                        min="0"
                        max="50"
                        step="0.5"
                        value={platformFee}
                        onChange={(e) => setPlatformFee(parseFloat(e.target.value) || 0)}
                        disabled={isLoadingFee || isSavingFee}
                        className="max-w-[150px]"
                      />
                      <Button
                        onClick={handleSaveFee}
                        disabled={isLoadingFee || isSavingFee}
                      >
                        {isSavingFee ? "Guardando..." : "Guardar cambios"}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Valor permitido: entre 0% y 50%
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-sm">Vista previa del cálculo</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Precio servicio ejemplo:</span>
                        <span className="font-semibold">100€</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Comisión plataforma ({platformFee}%):</span>
                        <span className="font-semibold text-blue-600">
                          {(100 * platformFee / 100).toFixed(2)}€
                        </span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span className="text-muted-foreground">Para el proveedor:</span>
                        <span className="font-semibold text-green-600">
                          {(100 - (100 * platformFee / 100)).toFixed(2)}€
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-xs text-yellow-800">
                      <strong>⚠️ Importante:</strong> Los cambios en la comisión se aplicarán a partir del próximo servicio creado. Los servicios existentes mantendrán la comisión con la que fueron creados.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Actividad Reciente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start justify-between border-b pb-3 last:border-0">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{activity.user}</p>
                          <p className="text-sm text-muted-foreground">{activity.action}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                        <Badge variant={
                          activity.status === "completed" ? "default" :
                          activity.status === "pending" ? "secondary" : "outline"
                        }>
                          {activity.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    Verificaciones Pendientes
                    <Badge className="ml-2">{pendingVerifications.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingVerifications.map((verification) => (
                      <div key={verification.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                        <div>
                          <p className="font-medium text-sm">{verification.name}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <p className="text-xs text-muted-foreground">{verification.type}</p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {verification.city}
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{verification.submitted}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="default">Verificar</Button>
                          <Button size="sm" variant="outline">Ver</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Valoración Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    <span className="text-3xl font-bold">{stats.avgRating}</span>
                    <span className="text-muted-foreground">/5</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Tasa de Completado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-3xl font-bold">94.2%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Tiempo Medio Respuesta</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <span className="text-3xl font-bold">14</span>
                    <span className="text-muted-foreground">min</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="verifications">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Verificaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Aquí podrás revisar y aprobar verificaciones de identidad de proveedores.
                </p>
                <div className="space-y-4">
                  {pendingVerifications.map((verification) => (
                    <div key={verification.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{verification.name}</h3>
                          <p className="text-sm text-muted-foreground">{verification.city}</p>
                        </div>
                        <Badge variant="secondary">Pendiente</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="default" className="flex-1">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Aprobar
                        </Button>
                        <Button variant="outline" className="flex-1">Ver Documentos</Button>
                        <Button variant="destructive" className="flex-1">Rechazar</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Servicios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitorización en tiempo real de todos los servicios en la plataforma.
                </p>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{stats.activeServices}</p>
                    <p className="text-sm text-muted-foreground">Activos</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{stats.completedServices}</p>
                    <p className="text-sm text-muted-foreground">Completados</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-600">12</p>
                    <p className="text-sm text-muted-foreground">En progreso</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-600">8</p>
                    <p className="text-sm text-muted-foreground">Cancelados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Usuarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Usuarios</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between p-3 bg-gray-50 rounded">
                        <span>Total usuarios</span>
                        <span className="font-semibold">{stats.totalUsers}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-gray-50 rounded">
                        <span>Usuarios activos (30d)</span>
                        <span className="font-semibold">892</span>
                      </div>
                      <div className="flex justify-between p-3 bg-gray-50 rounded">
                        <span>Nuevos este mes</span>
                        <span className="font-semibold text-green-600">+147</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Proveedores</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between p-3 bg-gray-50 rounded">
                        <span>Total proveedores</span>
                        <span className="font-semibold">{stats.totalProviders}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-gray-50 rounded">
                        <span>Verificados</span>
                        <span className="font-semibold text-green-600">319</span>
                      </div>
                      <div className="flex justify-between p-3 bg-gray-50 rounded">
                        <span>Pendientes</span>
                        <span className="font-semibold text-orange-600">{stats.pendingVerifications}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Analytics y Métricas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Métricas Clave</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">Valor Transacción Media</p>
                        <p className="text-2xl font-bold mt-1">36.90€</p>
                        <p className="text-xs text-green-600 mt-1">+8.2% vs mes anterior</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">Retención (30d)</p>
                        <p className="text-2xl font-bold mt-1">68.4%</p>
                        <p className="text-xs text-green-600 mt-1">+3.1% vs mes anterior</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">Servicios/Proveedor</p>
                        <p className="text-2xl font-bold mt-1">10.1</p>
                        <p className="text-xs text-green-600 mt-1">+12% vs mes anterior</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Distribución por Categorías</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span>Recados y compras</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">45%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span>Cuidado de mascotas</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">28%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span>Tareas domésticas</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '18%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">18%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span>Otros</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '9%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">9%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
