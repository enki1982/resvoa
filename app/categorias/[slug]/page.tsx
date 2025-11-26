'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MapPin, Star } from 'lucide-react';

const categories = {
  'bricolaje': {
    title: 'Tareas de bricolaje',
    description: 'Encuentra ayuda profesional para pequeñas reparaciones y trabajos de bricolaje en tu hogar',
    content: `Necesitas ayuda con tareas de bricolaje en casa? En Resvoa conectamos personas que necesitan pequeñas reparaciones con profesionales verificados cerca de ti. Desde colgar cuadros hasta reparaciones menores, encuentra la ayuda que necesitas rápidamente.`,
    benefits: [
      'Profesionales verificados con identidad confirmada',
      'Valoraciones reales de otros usuarios',
      'Pago seguro solo cuando el trabajo está completo',
      'Respuesta rápida, ayuda disponible hoy'
    ],
    examples: [
      'Colgar cuadros y estanterías',
      'Reparar grifos que gotean',
      'Cambiar bombillas y luminarias',
      'Pequeñas reparaciones en muebles',
      'Montaje de muebles sencillos'
    ]
  },
  'mudanzas': {
    title: 'Mudanzas y traslados',
    description: 'Ayuda para mudanzas pequeñas y traslados de objetos en tu zona',
    content: `¿Necesitas ayuda para una mudanza pequeña o trasladar objetos? En Resvoa encuentras personas cercanas dispuestas a ayudarte con mudanzas ligeras, traslado de cajas y transporte de objetos pequeños y medianos.`,
    benefits: [
      'Ayuda rápida para mudanzas de última hora',
      'Personas verificadas y con buenas valoraciones',
      'Precios transparentes y negociables',
      'Pago seguro después del servicio'
    ],
    examples: [
      'Mudanzas de apartamentos pequeños',
      'Traslado de cajas y objetos',
      'Ayuda para subir o bajar muebles',
      'Transporte de objetos comprados',
      'Pequeñas mudanzas de oficina'
    ]
  },
  'montajes': {
    title: 'Montajes',
    description: 'Montaje profesional de muebles y electrodomésticos en tu hogar',
    content: `¿Compraste muebles nuevos y necesitas ayuda con el montaje? En Resvoa encuentras profesionales experimentados en el montaje de todo tipo de muebles, desde IKEA hasta otras marcas. Rápido, fácil y seguro.`,
    benefits: [
      'Montadores experimentados',
      'Herramientas profesionales incluidas',
      'Montaje rápido y cuidadoso',
      'Garantía de trabajo bien hecho'
    ],
    examples: [
      'Montaje de muebles de IKEA',
      'Armarios y estanterías',
      'Camas y sofás',
      'Escritorios y mesas',
      'Muebles de exterior'
    ]
  },
  'recados': {
    title: 'Recados',
    description: 'Delega tus recados diarios y ahorra tiempo valioso',
    content: `¿No tienes tiempo para hacer recados? En Resvoa puedes delegar tus tareas diarias a personas de confianza cerca de ti. Desde recoger paquetes hasta hacer gestiones, recupera tu tiempo.`,
    benefits: [
      'Ahorra tiempo valioso',
      'Personas de confianza verificadas',
      'Servicio rápido el mismo día',
      'Seguimiento en tiempo real'
    ],
    examples: [
      'Recoger paquetes',
      'Hacer colas',
      'Llevar documentos',
      'Gestiones administrativas',
      'Compras urgentes'
    ]
  },
  'transporte': {
    title: 'Transporte',
    description: 'Servicio de transporte para objetos y pequeñas cargas',
    content: `¿Necesitas transportar objetos dentro de tu ciudad? En Resvoa encuentras personas con vehículo dispuestas a ayudarte con el transporte de objetos pequeños y medianos de forma rápida y segura.`,
    benefits: [
      'Transporte rápido y económico',
      'Conductores verificados',
      'Vehículos adecuados para cada tarea',
      'Seguro de transporte incluido'
    ],
    examples: [
      'Transporte de muebles pequeños',
      'Traslado de compras grandes',
      'Envío de paquetes',
      'Transporte de electrodomésticos',
      'Mudanzas de objetos específicos'
    ]
  },
  'paseo-perros': {
    title: 'Paseo de perros',
    description: 'Paseadores de confianza para tu mascota cuando no puedes',
    content: `¿Tu perro necesita paseo pero no tienes tiempo? En Resvoa encuentras amantes de los animales verificados que pasearán a tu mascota con cariño y responsabilidad. Tranquilidad para ti, diversión para tu peludo.`,
    benefits: [
      'Amantes de los animales verificados',
      'Experiencia con diferentes razas',
      'Paseos personalizados',
      'Fotos y actualizaciones del paseo'
    ],
    examples: [
      'Paseos diarios',
      'Paseos de emergencia',
      'Ejercicio para perros activos',
      'Cuidado durante vacaciones',
      'Socialización con otros perros'
    ]
  },
  'limpieza': {
    title: 'Limpieza',
    description: 'Ayuda con limpieza del hogar y espacios',
    content: `¿Necesitas ayuda con la limpieza de tu hogar? En Resvoa encuentras personas de confianza para tareas de limpieza ligera, desde mantenimiento regular hasta limpiezas puntuales. Tu hogar limpio sin esfuerzo.`,
    benefits: [
      'Personas de confianza verificadas',
      'Flexibilidad de horarios',
      'Productos de limpieza incluidos',
      'Limpieza profunda o mantenimiento'
    ],
    examples: [
      'Limpieza general del hogar',
      'Limpieza después de eventos',
      'Limpieza de ventanas',
      'Organización de espacios',
      'Limpieza de mudanzas'
    ]
  }
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categories[slug as keyof typeof categories];

  if (!category) {
    return (
      <main className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Categoría no encontrada</h1>
          <Button asChild>
            <Link href="/categorias">Ver todas las categorías</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary via-[#1a4d6d] to-[#0d2d45] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{category.title}</h1>
          <p className="text-xl mb-8">{category.description}</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/app/registro-usuario">Publicar una tarea</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground">{category.content}</p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">¿Por qué elegir Resvoa?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {category.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Ejemplos de servicios</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.examples.map((example, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{example}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="bg-secondary p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">¿Listo para encontrar ayuda?</h3>
            <p className="text-muted-foreground mb-6">
              Publica tu tarea y recibe ofertas de personas verificadas cerca de ti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/app/registro-usuario">Publicar una tarea</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/categorias">Ver más categorías</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
