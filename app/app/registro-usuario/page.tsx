"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase-client";

export default function RegistroUsuarioPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          toast({
            title: "Confirma tu email",
            description: "Te hemos enviado un email de confirmación. Por favor, revisa tu bandeja de entrada.",
          });
          setLoading(false);
          return;
        }

        await new Promise(resolve => setTimeout(resolve, 500));

        const { error: updateError } = await supabase
          .from("users")
          .update({
            phone: formData.telefono,
            full_name: formData.nombre,
          })
          .eq("id", authData.user.id);

        if (updateError) {
          const { error: insertError } = await supabase
            .from("users")
            .insert({
              id: authData.user.id,
              email: formData.email,
              full_name: formData.nombre,
              phone: formData.telefono,
              user_type: "user",
            });

          if (insertError) {
            console.error("Insert error:", insertError);
          }
        }

        toast({
          title: "Cuenta creada exitosamente",
          description: "Bienvenido a Resvoa",
        });

        router.push("/app/usuario/dashboard");
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
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-blue-50 to-accent/5 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Shield className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold text-primary">Resvoa</span>
          </Link>
          <h1 className="text-2xl font-bold">Registro de usuario</h1>
          <p className="text-muted-foreground">
            Crea tu cuenta para empezar a recibir ayuda
          </p>
        </div>

        <Card className="border-2 shadow-xl">
          <CardHeader>
            <CardTitle>Tus datos</CardTitle>
            <CardDescription>
              Completa el formulario para crear tu cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input
                  id="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input
                  id="telefono"
                  type="tel"
                  placeholder="+34 600 000 000"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" id="terms" required className="mt-1" />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  Acepto los <Link href="/legal/terminos" className="text-primary hover:underline">términos y condiciones</Link> y la <Link href="/legal/privacidad" className="text-primary hover:underline">política de privacidad</Link>
                </label>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creando cuenta...
                  </>
                ) : (
                  "Crear cuenta"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">¿Ya tienes cuenta?</span>{" "}
              <Link href="/app/login" className="text-primary hover:underline font-semibold">
                Inicia sesión
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
