'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, Star, CheckCircle } from 'lucide-react';

const ciudades = {
  'barcelona': {
    name: 'Barcelona',
    description: 'Encuentra ayuda para tus microtareas en Barcelona',
    content: `¿Necesitas ayuda con tareas del día a día en Barcelona? Resvoa te conecta con personas verificadas en tu zona dispuestas a ayudarte con recados, mudanzas, montajes, limpieza y mucho más. Rápido, fácil y seguro.`,
    barrios: ['Eixample', 'Gràcia', 'Sants', 'Sant Martí', 'Sarrià', 'Horta', 'Nou Barris', 'Sant Andreu'],
    popularTasks: [
      'Mudanzas en Barcelona',
      'Montaje de muebles IKEA Barcelona',
      'Recados y compras urgentes',
      'Paseo de perros en Barcelona',
      'Limpieza del hogar',
      'Ayuda con bricolaje'
    ]
  },
  'madrid': {
    name: 'Madrid',
    description: 'Encuentra ayuda para tus microtareas en Madrid',
    content: `¿Necesitas ayuda urgente en Madrid? En Resvoa encuentras personas de confianza cerca de ti para resolver tus tareas diarias. Desde recados hasta pequeñas mudanzas, encuentra la ayuda que necesitas hoy mismo.`,
    barrios: ['Centro', 'Salamanca', 'Chamartín', 'Retiro', 'Chamberí', 'Tetuán', 'Moncloa', 'Arganzuela'],
    popularTasks: [
      'Ayuda urgente en Madrid',
      'Montajes y pequeñas reparaciones',
      'Transporte de objetos',
      'Cuidado de mascotas Madrid',
      'Recados y gestiones',
      'Limpieza express'
    ]
  },
  'valencia': {
    name: 'Valencia',
    description: 'Encuentra ayuda para tus microtareas en Valencia',
    content: `Personas verificadas listas para ayudarte con tus tareas en Valencia. Publica lo que necesitas y recibe ofertas de profesionales cerca de ti en minutos.`,
    barrios: ['Ciutat Vella', 'Eixample', 'Extramurs', 'Campanar', 'La Saïdia', 'El Pla del Real', 'Olivereta', 'Patraix'],
    popularTasks: [
      'Tareas de bricolaje Valencia',
      'Mudanzas pequeñas',
      'Montaje de muebles',
      'Paseo de perros Valencia',
      'Ayuda en casa',
      'Recados cerca de ti'
    ]
  },
  'sevilla': {
    name: 'Sevilla',
    description: 'Encuentra ayuda para tus microtareas en Sevilla',
    content: `Encuentra ayuda rápida en Sevilla para tus tareas diarias. Resvoa conecta personas que necesitan ayuda con profesionales verificados en tu zona.`,
    barrios: ['Casco Antiguo', 'Triana', 'Los Remedios', 'Nervión', 'Este-Alcosa-Torreblanca', 'Macarena', 'San Pablo', 'Bellavista'],
    popularTasks: [
      'Ayuda con mudanzas Sevilla',
      'Montajes rápidos',
      'Recados y compras',
      'Cuidado de mascotas',
      'Pequeñas reparaciones',
      'Limpieza del hogar Sevilla'
    ]
  },
  'bilbao': {
    name: 'Bilbao',
    description: 'Encuentra ayuda para tus microtareas en Bilbao',
    content: `¿Necesitas ayuda en Bilbao? Conecta con personas verificadas cerca de ti para todo tipo de microtareas. Desde montajes hasta recados urgentes.`,
    barrios: ['Abando', 'Deusto', 'Basurto', 'Rekalde', 'Begoña', 'Ibaiondo', 'Otxarkoaga', 'Santutxu'],
    popularTasks: [
      'Manitas en Bilbao',
      'Ayuda con mudanzas',
      'Transporte de objetos',
      'Montaje de muebles Bilbao',
      'Recados urgentes',
      'Paseo de perros'
    ]
  },
  'zaragoza': {
    name: 'Zaragoza',
    description: 'Encuentra ayuda para tus microtareas en Zaragoza',
    content: `Tareas urgentes en Zaragoza? Encuentra personas de confianza dispuestas a ayudarte hoy mismo. Publica tu tarea y recibe ofertas en minutos.`,
    barrios: ['Centro', 'Delicias', 'Universidad', 'Torrero', 'San José', 'Las Fuentes', 'Almozara', 'Oliver'],
    popularTasks: [
      'Ayuda urgente Zaragoza',
      'Montajes y reparaciones',
      'Mudanzas ligeras',
      'Recados y gestiones',
      'Limpieza Zaragoza',
      'Cuidado de mascotas'
    ]
  }
};

export default function CiudadPage() {
  const params = useParams();
  const slug = params.ciudad as string;
  const ciudad = ciudades[slug as keyof typeof ciudades];

  if (!ciudad) {
    return (
      <main className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Ciudad no encontrada</h1>
          <Button asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary via-[#1a4d6d] to-[#0d2d45] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8" />
            <h1 className="text-4xl sm:text-5xl font-bold">{ciudad.name}</h1>
          </div>
          <p className="text-xl mb-8">{ciudad.description}</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/app/registro-usuario">Publicar una tarea</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground">{ciudad.content}</p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Star className="w-6 h-6 text-accent" />
                Tareas más solicitadas en {ciudad.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {ciudad.popularTasks.map((task, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{task}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Zonas cubiertas en {ciudad.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-3">
                {ciudad.barrios.map((barrio, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-secondary rounded">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{barrio}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                ¿Cómo funciona en {ciudad.name}?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Publica tu tarea en {ciudad.name}</h4>
                    <p className="text-muted-foreground">Describe qué necesitas y en qué zona de {ciudad.name} te encuentras</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Recibe ofertas de personas cercanas</h4>
                    <p className="text-muted-foreground">Personas verificadas en tu zona te enviarán ofertas con su precio</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Elige y confirma</h4>
                    <p className="text-muted-foreground">Selecciona a la persona que mejor te encaje y confirma la tarea</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-br from-primary via-[#1a4d6d] to-[#0d2d45] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">¿Listo para encontrar ayuda en {ciudad.name}?</h3>
            <p className="mb-6 text-white/90">
              Publica tu tarea y recibe ofertas de personas verificadas en tu zona
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/app/registro-usuario">Publicar una tarea</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white" asChild>
                <Link href="/app/registro-proveedor">Ser proveedor en {ciudad.name}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
