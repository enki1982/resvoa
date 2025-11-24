'use client';

import { useState } from 'react';
import { X, MessageCircle, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type ViewMode = 'welcome' | 'user' | 'provider';

interface Message {
  type: 'bot' | 'user';
  text: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('welcome');
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: 'Hola, soy el asistente de RESVOA. ¿En qué quieres que te ayude?' }
  ]);

  const handleResponse = (question: string, answer: string) => {
    setMessages(prev => [
      ...prev,
      { type: 'user', text: question },
      { type: 'bot', text: answer }
    ]);
  };

  const resetChat = () => {
    setViewMode('welcome');
    setMessages([
      { type: 'bot', text: 'Hola, soy el asistente de RESVOA. ¿En qué quieres que te ayude?' }
    ]);
  };

  const userQuestions = [
    {
      question: '¿Qué puedo hacer con RESVOA?',
      answer: 'Con RESVOA puedes pedir ayuda para microtareas del día a día: recados, compras, ayuda ligera en casa, cuidado de mascotas y más.'
    },
    {
      question: '¿Cómo pido ayuda?',
      answer: 'Solo tienes que registrarte, describir qué necesitas, indicar tu zona y publicar tu solicitud. Después eliges quién te ayuda.'
    },
    {
      question: '¿Es seguro pagar por aquí?',
      answer: 'Sí. Los pagos se procesan de forma segura y solo se completan cuando la tarea está terminada. Si hay algún problema, puedes contactar con soporte.'
    },
    {
      question: '¿Qué pasa si nadie acepta mi tarea?',
      answer: 'Si nadie acepta tu tarea en un tiempo razonable, puedes modificarla (precio, horario, detalles) o cancelarla sin coste.'
    }
  ];

  const providerQuestions = [
    {
      question: '¿Cómo gano dinero con RESVOA?',
      answer: 'Registras tu perfil, verificas tu identidad y activas tu cuenta. Luego ves tareas disponibles cerca y aceptas las que te interesen.'
    },
    {
      question: '¿Cuándo cobro por las tareas?',
      answer: 'El cobro se confirma cuando la tarea se marca como completada. Después, el dinero se transfiere a tu cuenta según el método configurado.'
    },
    {
      question: '¿Qué tipo de tareas puedo aceptar?',
      answer: 'Tareas sencillas: recados, compras, ayuda ligera en casa, acompañamiento, tareas de confianza que no requieren herramientas profesionales.'
    },
    {
      question: '¿Necesito ser autónomo?',
      answer: 'Depende del uso que hagas de la plataforma y de tu situación fiscal. Si vas a usar RESVOA de forma puntual, suele considerarse un ingreso extra. Si se convierte en una actividad habitual, lo recomendable es que consultes con un asesor para ver si debes darte de alta como autónomo.'
    }
  ];

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-primary hover:bg-primary/90 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          aria-label="Abrir chat"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl flex flex-col z-50 border-2">
          <div className="bg-primary text-white p-4 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center gap-3">
              {viewMode !== 'welcome' && (
                <button
                  onClick={resetChat}
                  className="hover:bg-white/10 p-1 rounded transition-colors"
                  aria-label="Volver al inicio"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              <div>
                <h3 className="font-bold">Asistente RESVOA</h3>
                <p className="text-xs text-white/80">Estamos aquí para ayudarte</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-2 rounded-full transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {viewMode === 'welcome' && messages.length === 1 && (
              <div className="space-y-2 mt-4">
                <Button
                  onClick={() => setViewMode('user')}
                  className="w-full justify-start text-left h-auto py-3"
                  variant="outline"
                >
                  Quiero pedir ayuda (usuario)
                </Button>
                <Button
                  onClick={() => setViewMode('provider')}
                  className="w-full justify-start text-left h-auto py-3"
                  variant="outline"
                >
                  Quiero ganar ayudando (proveedor)
                </Button>
              </div>
            )}

            {viewMode === 'user' && (
              <div className="space-y-2 mt-4">
                <p className="text-xs text-gray-500 font-medium mb-2">Preguntas frecuentes:</p>
                {userQuestions.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => handleResponse(item.question, item.answer)}
                    className="w-full justify-start text-left h-auto py-3 whitespace-normal"
                    variant="outline"
                    size="sm"
                  >
                    {item.question}
                  </Button>
                ))}
              </div>
            )}

            {viewMode === 'provider' && (
              <div className="space-y-2 mt-4">
                <p className="text-xs text-gray-500 font-medium mb-2">Preguntas frecuentes:</p>
                {providerQuestions.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => handleResponse(item.question, item.answer)}
                    className="w-full justify-start text-left h-auto py-3 whitespace-normal"
                    variant="outline"
                    size="sm"
                  >
                    {item.question}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </Card>
      )}
    </>
  );
}
