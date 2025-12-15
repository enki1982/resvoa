"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, MapPin, CreditCard, Wallet, Lock, ArrowLeft, Save } from "lucide-react";
import { mockUsuarios } from "@/lib/mock-data";

export default function ConfiguracionUsuarioPage() {
  const usuario = mockUsuarios[0];

  const [personalData, setPersonalData] = useState({
    nombre: usuario.nombre,
    email: usuario.email,
    telefono: "+34 612 345 678",
    dni: "",
  });

  const [address, setAddress] = useState({
    calle: "",
    numero: "",
    piso: "",
    codigoPostal: "",
    ciudad: "Barcelona",
    provincia: "Barcelona",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [wallet, setWallet] = useState({
    balance: "45.00",
    iban: "",
  });

  const handleSavePersonalData = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Datos personales actualizados");
  };

  const handleSaveAddress = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Dirección actualizada");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.new !== password.confirm) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert("Contraseña actualizada");
    setPassword({ current: "", new: "", confirm: "" });
  };

  const handleAddPaymentMethod = () => {
    alert("Redirigiendo a Stripe para añadir método de pago...");
  };

  const handleAddWalletFunds = () => {
    alert("Redirigiendo a página de recarga...");
  };

  return (
    <main className="min-h-screen bg-green-50/30">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold text-primary">Resvoa</Link>
            <span className="text-muted-foreground">Configuración</span>
          </div>
          <Button variant="outline" asChild>
            <Link href="/app/usuario/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al panel
            </Link>
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Configuración de cuenta</h1>
          <p className="text-muted-foreground">Gestiona tu información personal y preferencias</p>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Personal</span>
            </TabsTrigger>
            <TabsTrigger value="direccion" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Dirección</span>
            </TabsTrigger>
            <TabsTrigger value="pagos" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Pagos</span>
            </TabsTrigger>
            <TabsTrigger value="wallet" className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">Wallet</span>
            </TabsTrigger>
            <TabsTrigger value="seguridad" className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline">Seguridad</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Información personal</CardTitle>
                <CardDescription>Actualiza tus datos personales</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSavePersonalData} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input
                      id="nombre"
                      value={personalData.nombre}
                      onChange={(e) => setPersonalData({ ...personalData, nombre: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={personalData.email}
                      onChange={(e) => setPersonalData({ ...personalData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      value={personalData.telefono}
                      onChange={(e) => setPersonalData({ ...personalData, telefono: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dni">DNI/NIE</Label>
                    <Input
                      id="dni"
                      value={personalData.dni}
                      onChange={(e) => setPersonalData({ ...personalData, dni: e.target.value })}
                      placeholder="12345678A"
                    />
                  </div>

                  <Separator />

                  <Button type="submit" className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Guardar cambios
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="direccion">
            <Card>
              <CardHeader>
                <CardTitle>Dirección principal</CardTitle>
                <CardDescription>Dirección donde recibirás los servicios por defecto</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveAddress} className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="calle">Calle</Label>
                      <Input
                        id="calle"
                        value={address.calle}
                        onChange={(e) => setAddress({ ...address, calle: e.target.value })}
                        placeholder="Calle Ejemplo"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="numero">Número</Label>
                      <Input
                        id="numero"
                        value={address.numero}
                        onChange={(e) => setAddress({ ...address, numero: e.target.value })}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="piso">Piso/Puerta (opcional)</Label>
                      <Input
                        id="piso"
                        value={address.piso}
                        onChange={(e) => setAddress({ ...address, piso: e.target.value })}
                        placeholder="3º 2ª"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="codigoPostal">Código postal</Label>
                      <Input
                        id="codigoPostal"
                        value={address.codigoPostal}
                        onChange={(e) => setAddress({ ...address, codigoPostal: e.target.value })}
                        placeholder="08001"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ciudad">Ciudad</Label>
                      <Input
                        id="ciudad"
                        value={address.ciudad}
                        onChange={(e) => setAddress({ ...address, ciudad: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="provincia">Provincia</Label>
                      <Input
                        id="provincia"
                        value={address.provincia}
                        onChange={(e) => setAddress({ ...address, provincia: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <Separator />

                  <Button type="submit" className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Guardar dirección
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pagos">
            <Card>
              <CardHeader>
                <CardTitle>Métodos de pago</CardTitle>
                <CardDescription>Gestiona tus tarjetas y métodos de pago</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        VISA
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-muted-foreground">Vence 12/25</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Eliminar</Button>
                  </div>
                </div>

                <Button onClick={handleAddPaymentMethod} className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Añadir método de pago
                </Button>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    Los pagos se procesan de forma segura mediante Stripe. No almacenamos información de tu tarjeta.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wallet">
            <Card>
              <CardHeader>
                <CardTitle>Wallet Resvoa</CardTitle>
                <CardDescription>Gestiona tu saldo y configura recargas automáticas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg p-6">
                  <p className="text-sm opacity-90 mb-2">Saldo disponible</p>
                  <p className="text-4xl font-bold">{wallet.balance}€</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Button onClick={handleAddWalletFunds} className="w-full">
                    <Wallet className="mr-2 h-4 w-4" />
                    Añadir fondos
                  </Button>
                  <Button variant="outline" className="w-full">
                    Ver historial
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Cuenta bancaria para retiros</h3>
                  <div className="space-y-2">
                    <Label htmlFor="iban">IBAN</Label>
                    <Input
                      id="iban"
                      value={wallet.iban}
                      onChange={(e) => setWallet({ ...wallet, iban: e.target.value })}
                      placeholder="ES00 0000 0000 0000 0000 0000"
                    />
                  </div>
                  <Button className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Guardar cuenta bancaria
                  </Button>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800">
                    El saldo de tu wallet se utilizará automáticamente para pagar servicios. Puedes retirar fondos en cualquier momento.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seguridad">
            <Card>
              <CardHeader>
                <CardTitle>Seguridad de la cuenta</CardTitle>
                <CardDescription>Cambia tu contraseña y gestiona la seguridad</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleChangePassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current">Contraseña actual</Label>
                    <Input
                      id="current"
                      type="password"
                      value={password.current}
                      onChange={(e) => setPassword({ ...password, current: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new">Nueva contraseña</Label>
                    <Input
                      id="new"
                      type="password"
                      value={password.new}
                      onChange={(e) => setPassword({ ...password, new: e.target.value })}
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Mínimo 8 caracteres, incluye mayúsculas, minúsculas y números
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm">Confirmar nueva contraseña</Label>
                    <Input
                      id="confirm"
                      type="password"
                      value={password.confirm}
                      onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
                      required
                    />
                  </div>

                  <Separator />

                  <Button type="submit" className="w-full">
                    <Lock className="mr-2 h-4 w-4" />
                    Cambiar contraseña
                  </Button>
                </form>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <h3 className="font-semibold">Autenticación de dos factores</h3>
                  <p className="text-sm text-muted-foreground">
                    Añade una capa adicional de seguridad a tu cuenta
                  </p>
                  <Button variant="outline" className="w-full">
                    Activar 2FA
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
