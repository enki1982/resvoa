import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayuda - Resvoa",
  description: "Preguntas frecuentes sobre Resvoa para solicitantes y proveedores.",
};

export default function AyudaPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary via-[#1a4d6d] to-[#0d2d45] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Centro de ayuda
          </h1>
          <p className="text-2xl text-white/90">
            Encuentra respuestas a tus preguntas
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Para solicitantes</h2>
            <p className="text-muted-foreground">Si necesitas ayuda con una tarea</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-secondary border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo publicar una tarea?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Puedo ayudarte. Publicar una tarea es rápido: escribes qué necesitas, eliges hora y dirección, y listo. Ve a la sección de publicar tarea y completa el formulario en menos de 1 minuto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-secondary border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo elegir proveedor?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Verás ofertas de personas cercanas. Puedes ver su reputación. Eliges tú a quién contratar. Revisa las valoraciones de otros usuarios antes de decidir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-secondary border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo funciona el pago seguro?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Pagas desde la app. El dinero queda retenido. Solo se libera cuando confirmas que la tarea está hecha. Si algo sale mal, te ayudamos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-secondary border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Qué pasa si algo no sale bien?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Puedes cancelar. Puedes abrir una incidencia. Resvoa interviene para ayudarte. El dinero permanece retenido hasta que se resuelva el problema.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-secondary border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Qué tareas se pueden publicar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Casi cualquier microtarea del día a día: mudanzas pequeñas, recados, montajes, limpieza, bricolaje, informática básica, pasear perros, etc.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-secondary border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo me registro?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ve a la página de registro, completa tus datos básicos y verifica tu correo. Es muy rápido y no te pedimos información innecesaria.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-secondary border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Puedo publicar varias tareas?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, puedes publicar todas las tareas que necesites. No hay límite.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-secondary border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Puedo editar mi tarea?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, mientras no haya sido aceptada puedes editarla. Una vez aceptada, deberás contactar con el proveedor para cualquier cambio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Para proveedores</h2>
            <p className="text-muted-foreground">Si quieres ganar dinero ayudando</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="prov-1" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo ganar dinero?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Perfecto. Puedes empezar a ganar dinero registrándote y verificando tu identidad. Luego verás tareas cerca de ti. Tú eliges cuáles aceptar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prov-2" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo funciona la comisión?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                La plataforma aplica una comisión del 15% por defecto. El administrador puede cambiarla. La comisión se resta automáticamente al procesar el pago.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prov-3" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo retirar el dinero?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Desde tu panel. Puedes retirar cuando quieras. Transferencia bancaria directa a tu cuenta.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prov-4" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo mejorar la reputación?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Cumple los horarios. Mantén buena comunicación. Entrega trabajos de calidad. Pide al cliente que valore la experiencia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prov-5" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cuánto puedo ganar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Depende de la zona y de cuántas tareas aceptes. Los proveedores activos ganan entre 300-2500€ al mes según su dedicación.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prov-6" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo verifico mi identidad?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Durante el registro se te pedirá verificar tu identidad con un documento oficial. Es un proceso rápido y seguro que protege a toda la comunidad.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prov-7" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Puedo elegir qué tareas hacer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, tú eliges qué tareas aceptar y cuáles no. Tienes control total sobre tu actividad.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prov-8" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo recibo tareas cerca?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                La plataforma usa tu ubicación GPS para mostrarte tareas cercanas en tu zona. Puedes ver la distancia antes de aceptar.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿No encuentras tu respuesta?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contacta con nuestro equipo de soporte
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contacto">Contactar soporte</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
