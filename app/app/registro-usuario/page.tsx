"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase-client";

export default function RegistroUsuarioPage() {
    const router = useRouter();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [formData, setFormData] = useState({
          nombre: "",
          email: "",
          telefono: "",
          password: "",
    });

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!acceptedTerms) {
                toast({
                          title: "Términos requeridos",
                          description: "Debes aceptar los términos y condiciones para continuar.",
                          variant: "destructive",
                });
                return;
        }

        if (!formData.nombre || !formData.email || !formData.password) {
                toast({
                          title: "Campos requeridos",
                          description: "Por favor completa todos los campos obligatorios.",
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
                                      emailRedirectTo: `${window.location.origin}/auth/confirm`,
                          },
                });

          if (authError) throw authError;

          if (authData.user) {
                    try {
                                await supabase.from("users").insert({
                                              id: authData.user.id,
                                              email: formData.email,
                                              full_name: formData.nombre,
                                              phone: formData.telefono,
                                              role: "user",
                                });
                    } catch (dbError) {
                                console.error("Error insertando usuario en DB:", dbError);
                    }

                  const needsEmailConfirmation =
                              authData.user.identities && authData.user.identities.length === 0;

                  if (needsEmailConfirmation) {
                              toast({
                                            title: "¡Revisa tu email!",
                                            description: "Te hemos enviado un enlace de confirmación. Por favor verifica tu correo.",
                              });
                  } else {
                              toast({
                                            title: "¡Cuenta creada!",
                                            description: "Tu cuenta ha sido creada exitosamente.",
                              });
                              router.push("/app/usuario");
                  }
          }
        } catch (error: any) {
                console.error("Error en registro:", error);
                let errorMessage = "Ocurrió un error al crear tu cuenta.";
                if (error.message?.includes("already registered")) {
                          errorMessage = "Este email ya está registrado. ¿Quieres iniciar sesión?";
                } else if (error.message?.includes("Password")) {
                          errorMessage = "La contraseña debe tener al menos 6 caracteres.";
                } else if (error.message) {
                          errorMessage = error.message;
                }
                toast({
                          title: "Error al registrarse",
                          description: errorMessage,
                          variant: "destructive",
                });
        } finally {
                setLoading(false);
        }
  };

  return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
              <div className="max-w-md mx-auto">
                      <div className="text-center mb-8">
                                <div className="flex justify-center mb-4">
                                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                                          <Shield className="h-6 w-6 text-blue-600" />
                                            </div>div>
                                </div>div>
                                <Link href="/" className="inline-flex items-center space-x-2 mb-4">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                                                          <span className="text-white font-bold text-sm">R</span>span>
                                            </div>div>
                                            <span className="font-bold text-xl text-gray-900">Resvoa</span>span>
                                </Link>Link>
                                <h1 className="text-2xl font-bold text-gray-900">Registro de usuario</h1>h1>
                                <p className="text-gray-600 mt-1">Crea tu cuenta para empezar a recibir ayuda</p>p>
                      </div>div>
              
                      <Card className="shadow-lg border-0">
                                <CardHeader>
                                            <CardTitle>Tus datos</CardTitle>CardTitle>
                                            <CardDescription>Completa el formulario para crear tu cuenta</CardDescription>CardDescription>
                                </CardHeader>CardHeader>
                                <CardContent>
                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                          <div className="space-y-2">
                                                                          <Label htmlFor="nombre">Nombre completo</Label>Label>
                                                                          <Input
                                                                                              id="nombre"
                                                                                              placeholder="Tu nombre"
                                                                                              value={formData.nombre}
                                                                                              onChange={(e) => setFormData((prev) => ({ ...prev, nombre: e.target.value }))}
                                                                                              required
                                                                                            />
                                                          </div>div>
                                            
                                                          <div className="space-y-2">
                                                                          <Label htmlFor="email">Email</Label>Label>
                                                                          <Input
                                                                                              id="email"
                                                                                              type="email"
                                                                                              placeholder="tu@email.com"
                                                                                              value={formData.email}
                                                                                              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                                                                              required
                                                                                            />
                                                          </div>div>
                                            
                                                          <div className="space-y-2">
                                                                          <Label htmlFor="telefono">Teléfono</Label>Label>
                                                                          <Input
                                                                                              id="telefono"
                                                                                              type="tel"
                                                                                              placeholder="+34 600 000 000"
                                                                                              value={formData.telefono}
                                                                                              onChange={(e) => setFormData((prev) => ({ ...prev, telefono: e.target.value }))}
                                                                                            />
                                                          </div>div>
                                            
                                                          <div className="space-y-2">
                                                                          <Label htmlFor="password">Contraseña</Label>Label>
                                                                          <Input
                                                                                              id="password"
                                                                                              type="password"
                                                                                              placeholder="Mínimo 6 caracteres"
                                                                                              value={formData.password}
                                                                                              onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                                                                                              required
                                                                                            />
                                                          </div>div>
                                            
                                                          <div className="flex items-start space-x-2 pt-2">
                                                                          <Checkbox
                                                                                              id="terms"
                                                                                              checked={acceptedTerms}
                                                                                              onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                                                                                            />
                                                                          <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                                                                                            Acepto los{" "}
                                                                                            <Link href="/legal/terminos" className="text-green-600 hover:underline" target="_blank">
                                                                                                                términos y condiciones
                                                                                              </Link>Link>{" "}
                                                                                            y la{" "}
                                                                                            <Link href="/legal/privacidad" className="text-green-600 hover:underline" target="_blank">
                                                                                                                política de privacidad
                                                                                              </Link>Link>
                                                                          </Label>Label>
                                                          </div>div>
                                            
                                                          <Button
                                                                            type="submit"
                                                                            className="w-full bg-gray-900 hover:bg-gray-800 text-white mt-2"
                                                                            disabled={loading || !acceptedTerms}
                                                                          >
                                                            {loading ? (
                                                                                              <>
                                                                                                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                                                                  Creando cuenta...
                                                                                                </>>
                                                                                            ) : (
                                                                                              "Crear cuenta"
                                                                                            )}
                                                          </Button>Button>
                                            
                                                          <p className="text-center text-sm text-gray-600 mt-4">
                                                                          ¿Ya tienes cuenta?{" "}
                                                                          <Link href="/app/login" className="text-green-600 hover:underline font-medium">
                                                                                            Inicia sesión aquí
                                                                          </Link>Link>
                                                          </p>p>
                                            </form>form>
                                </CardContent>CardContent>
                      </Card>Card>
              
                      <div className="text-center mt-6">
                                <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                                            ← Volver al inicio
                                </Link>Link>
                      </div>div>
              </div>div>
        </div>div>
      );
}</></div>
