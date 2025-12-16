"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Loader2, Upload, FileText, Camera, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase-client";

export default function RegistroProveedorPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    dni: "",
    servicios: [] as string[],
    zona: "",
    password: "",
  });
  const [dniFile, setDniFile] = useState<File | null>(null);
  const [selfieFile, setSelfieFile] = useState<File | null>(null);
  const [uploadingDocs, setUploadingDocs] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'dni' | 'selfie') => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Archivo muy grande",
          description: "El archivo no debe superar 5MB",
          variant: "destructive",
        });
        return;
      }
      if (type === 'dni') {
        setDniFile(file);
      } else {
        setSelfieFile(file);
      }
    }
  };

  const uploadDocuments = async (userId: string) => {
    try {
      setUploadingDocs(true);

      if (dniFile) {
        const dniPath = `${userId}/dni-${Date.now()}.${dniFile.name.split('.').pop()}`;
        const { error: dniError } = await supabase.storage
          .from('provider-documents')
          .upload(dniPath, dniFile);
        if (dniError) throw dniError;
      }

      if (selfieFile) {
        const selfiePath = `${userId}/selfie-${Date.now()}.${selfieFile.name.split('.').pop()}`;
        const { error: selfieError } = await supabase.storage
          .from('provider-documents')
          .upload(selfiePath, selfieFile);
        if (selfieError) throw selfieError;
      }
    } finally {
      setUploadingDocs(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      if (!dniFile || !selfieFile) {
        toast({
          title: "Documentos requeridos",
          description: "Debes subir tu DNI y selfie para continuar",
          variant: "destructive",
        });
        return;
      }

      setLoading(true);
      try {
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.nombre,
            },
          },
        });

        if (authError) throw authError;

        if (authData.user) {
          const needsEmailConfirmation = authData.user.identities && authData.user.identities.length === 0;

          if (needsEmailConfirmation) {
            try {
              await new Promise(resolve => setTimeout(resolve, 300));

              const { error: userError } = await supabase
                .from("users")
                .insert({
                  id: authData.user.id,
                  email: formData.email,
                  full_name: formData.nombre,
                  phone: formData.telefono,
                  user_type: "provider",
                });

              if (userError) {
                console.error("Error creating user record:", userError);
              }

              const { error: providerError } = await supabase
                .from("provider_profiles")
                .insert({
                  user_id: authData.user.id,
                  city: formData.zona,
                  verification_status: "pending",
                  dni_verified: false,
                  phone_verified: false,
                });

              if (providerError) {
                console.error("Error creating provider profile:", providerError);
              }

              await uploadDocuments(authData.user.id);
            } catch (error) {
              console.error("Error during provider creation:", error);
            }

            toast({
              title: "Confirma tu email",
              description: "Te hemos enviado un email de confirmación. Por favor, revisa tu bandeja de entrada.",
            });
            setLoading(false);
            return;
          }

          const { error: userError } = await supabase
            .from("users")
            .insert({
              id: authData.user.id,
              email: formData.email,
              full_name: formData.nombre,
              phone: formData.telefono,
              user_type: "provider",
            });

          if (userError) throw userError;

          const { error: providerError } = await supabase
            .from("provider_profiles")
            .insert({
              user_id: authData.user.id,
              city: formData.zona,
              verification_status: "pending",
              dni_verified: false,
              phone_verified: false,
            });

          if (providerError) throw providerError;

          await uploadDocuments(authData.user.id);

          toast({
            title: "Cuenta creada exitosamente",
            description: "Tus documentos están en revisión",
          });

          router.push("/app/proveedor/dashboard");
        }
      } catch (error: any) {
        console.error("Registration error:", error);
        toast({
          title: "Error al crear cuenta",
          description: error.message || "Ha ocurrido un error inesperado",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
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
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Verificación de identidad
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Sube una foto de tu DNI/NIE y una selfie para verificar tu identidad
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Foto de DNI/NIE (frontal)
                      </Label>
                      <div className="relative">
                        <Input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => handleFileChange(e, 'dni')}
                          className="cursor-pointer"
                        />
                        {dniFile && (
                          <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                            <CheckCircle2 className="w-4 h-4" />
                            {dniFile.name}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Camera className="w-4 h-4" />
                        Selfie sosteniendo tu DNI
                      </Label>
                      <div className="relative">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, 'selfie')}
                          className="cursor-pointer"
                        />
                        {selfieFile && (
                          <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                            <CheckCircle2 className="w-4 h-4" />
                            {selfieFile.name}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                      <p className="text-xs text-yellow-800">
                        <strong>Importante:</strong> Asegúrate de que la foto sea clara y que tu rostro y el DNI sean legibles. Los archivos no deben superar 5MB.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="codigoEtico" required />
                    <label htmlFor="codigoEtico" className="text-sm">
                      Acepto el código ético y condiciones de Resvoa
                    </label>
                  </div>
                </>
              )}

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creando cuenta...
                  </>
                ) : (
                  step < 3 ? "Continuar" : "Finalizar registro"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
