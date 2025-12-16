"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ConfirmEmailPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Verificando tu email...');

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
          console.error('Session error:', error);
          setStatus('error');
          setMessage('Error al verificar la sesión');
          return;
        }

        if (session?.user) {
          const isEmailConfirmed = session.user.email_confirmed_at !== null;

          if (isEmailConfirmed) {
            setStatus('success');
            setMessage('¡Email confirmado exitosamente!');

            setTimeout(() => {
              router.push('/app/login');
            }, 2000);
          } else {
            setStatus('loading');
            setMessage('Procesando confirmación...');

            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }
        } else {
          setStatus('success');
          setMessage('¡Email confirmado! Ya puedes iniciar sesión.');

          setTimeout(() => {
            router.push('/app/login');
          }, 2000);
        }
      } catch (error: any) {
        console.error('Confirmation error:', error);
        setStatus('error');
        setMessage('Ha ocurrido un error inesperado');
      }
    };

    const timeout = setTimeout(() => {
      handleEmailConfirmation();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-blue-50 to-accent/5 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Shield className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold text-primary">Resvoa</span>
          </Link>
          <h1 className="text-2xl font-bold">Confirmación de email</h1>
        </div>

        <Card className="border-2 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-center space-x-2">
              {status === 'loading' && (
                <>
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  <span>Confirmando...</span>
                </>
              )}
              {status === 'success' && (
                <>
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                  <span>¡Confirmado!</span>
                </>
              )}
              {status === 'error' && (
                <>
                  <XCircle className="h-6 w-6 text-red-500" />
                  <span>Error</span>
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">{message}</p>

            {status === 'success' && (
              <p className="text-sm text-muted-foreground">
                Serás redirigido al inicio de sesión en breve...
              </p>
            )}

            {status === 'error' && (
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link href="/app/login">Ir al inicio de sesión</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/">Volver al inicio</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
