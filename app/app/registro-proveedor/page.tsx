"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield } from "lucide-react";

export default function RegistroProveedorPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    dni: "",
    servicios: [] as string[],
    zona: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.push("/app/proveedor/dashboard");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-blue-50 to-accent/5 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Shield className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold text-primary">Resvoa</span>
          </Link>
          <h1 className="text-2xl font-bold">Registro de proveedor</h1>
          <p className="text-muted-foreground">Paso {step} de 3</p>
        </div>

        <Card className="border-2 shadow-xl">
          <CardHeader>
            <CardTitle>
              {step === 1 && "Datos personales"}
              {step === 2 && "Servicios y zona"}
              {step === 3 && "Verificación y finalización"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <>
                  <div className="space-y-2">
                    <Label>Nombre completo</Label>
                    <Input value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <Label>Teléfono</Label>
                    <Input type="tel" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <Label>DNI/NIE</Label>
                    <Input value={formData.dni} onChange={(e) => setFormData({ ...formData, dni: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <Label>Contraseña</Label>
                    <Input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-3">
                    <Label>Servicios que ofreces</Label>
                    {["Recados", "Paseo de perros", "Ayuda doméstica", "Limpieza vehículos", "Soporte hogar"].map((servicio) => (
                      <div key={servicio} className="flex items-center space-x-2">
                        <Checkbox id={servicio} />
                        <label htmlFor={servicio} className="text-sm">{servicio}</label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label>Zona de trabajo</Label>
                    <Input placeholder="Ej: Barcelona Centro, Eixample" value={formData.zona} onChange={(e) => setFormData({ ...formData, zona: e.target.value })} required />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Verificación de identidad</p>
                    <p className="text-sm text-muted-foreground mb-4">Sube una foto de tu DNI/NIE y una selfie</p>
                    <Button type="button" variant="outline" className="w-full">Subir documentos</Button>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="codigoEtico" required />
                    <label htmlFor="codigoEtico" className="text-sm">
                      Acepto el código ético y condiciones de Resvoa
                    </label>
                  </div>
                </>
              )}

              <Button type="submit" className="w-full" size="lg">
                {step < 3 ? "Continuar" : "Finalizar registro"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
