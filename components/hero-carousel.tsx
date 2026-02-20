'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/revoa_colgando_cuadro.png', alt: 'Montaje y decoración' },
  { src: '/resvoa_tirando_basura.png', alt: 'Tareas del hogar' },
  { src: '/resvoa_joven_acompanante.png', alt: 'Acompañamiento' },
  { src: '/resvoa_paseando_perros.png', alt: 'Cuidado de mascotas' },
  { src: '/resvoa_entregando_llaves.png', alt: 'Gestión de llaves' },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-white border border-gray-200">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
