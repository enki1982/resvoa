'use client';

import { useState, useEffect } from 'react';
import { FileText, Users, CheckCircle, CreditCard } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Pide ayuda',
    description: 'Describe qué necesitas resolver hoy en menos de un minuto.',
    icon: FileText,
    color: 'text-accent',
  },
  {
    number: 2,
    title: 'Elige quién te ayuda',
    description: 'Personas cercanas, verificadas y con reputación.',
    icon: Users,
    color: 'text-accent',
  },
  {
    number: 3,
    title: 'Se hace la tarea',
    description: 'La persona que elijas realiza la tarea según lo acordado.',
    icon: CheckCircle,
    color: 'text-accent',
  },
  {
    number: 4,
    title: 'Pagas y valoras',
    description: 'Pagas de forma segura solo cuando la tarea está completada.',
    icon: CreditCard,
    color: 'text-accent',
  },
];

export function HeroSteps() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto lg:mx-0">
      <div className="relative bg-white rounded-[3rem] shadow-2xl p-8 border-8 border-gray-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-3xl"></div>

        <div className="mt-4 space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;

            return (
              <div
                key={step.number}
                className={`transition-all duration-500 ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full ${
                      isActive ? 'bg-accent' : 'bg-gray-200'
                    } flex items-center justify-center transition-all duration-500`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-sm font-bold ${
                          isActive ? 'text-accent' : 'text-gray-400'
                        }`}
                      >
                        Paso {step.number}
                      </span>
                    </div>
                    <h3
                      className={`font-bold mb-1 ${
                        isActive ? 'text-gray-900' : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        isActive ? 'text-gray-600' : 'text-gray-400'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeStep ? 'bg-accent w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
