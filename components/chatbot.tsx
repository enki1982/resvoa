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
      question: '¿Cómo publicar una tarea?',
      answer: 'Puedo ayudarte. Publicar una tarea es rápido: escribes qué necesitas, eliges hora y dirección, y listo. ¿Quieres que te guíe ahora mismo?'
    },
    {
      question: '¿Cómo elegir proveedor?',
      answer: 'Verás ofertas de personas cercanas. Puedes ver su reputación. Eliges tú a quién contratar.'
    },
    {
      question: '¿Cómo funciona el pago seguro?',
      answer: 'Pagas desde la app. El dinero queda retenido. Solo se libera cuando confirmas que la tarea está hecha. Si algo sale mal, te ayudamos.'
    },
    {
      question: '¿Qué pasa si algo no sale bien?',
      answer: 'Puedes cancelar. Puedes abrir una incidencia. Resvoa interviene para ayudarte.'
    },
    {
      question: '¿Qué tareas se pueden publicar?',
      answer: 'Casi cualquier microtarea del día a día: mudanzas pequeñas, recados, montajes, limpieza, bricolaje, informática básica, pasear perros, etc.'
    },
    {
      question: '¿Cómo me registro?',
      answer: 'Ve a la página de registro, completa tus datos básicos y verifica tu correo. Es muy rápido.'
    },
    {
      question: '¿Puedo publicar varias tareas?',
      answer: 'Sí, puedes publicar todas las tareas que necesites.'
    },
    {
      question: '¿Puedo editar mi tarea?',
      answer: 'Sí, mientras no haya sido aceptada puedes editarla.'
    }
  ];

  const providerQuestions = [
    {
      question: '¿Cómo ganar dinero?',
      answer: 'Perfecto. Puedes empezar a ganar dinero registrándote y verificando tu identidad. Luego verás tareas cerca de ti. ¿Quieres que te explique cómo funciona el panel?'
    },
    {
      question: '¿Cómo funciona la comisión?',
      answer: 'La plataforma aplica una comisión del 15% por defecto. El administrador puede cambiarla. La comisión se resta automáticamente al procesar el pago.'
    },
    {
      question: '¿Cómo retirar el dinero?',
      answer: 'Desde tu panel. Puedes retirar cuando quieras. Transferencia bancaria.'
    },
    {
      question: '¿Cómo mejorar la reputación?',
      answer: 'Cumple los horarios. Mantén buena comunicación. Entrega trabajos de calidad. Pide al cliente que valore la experiencia.'
    },
    {
      question: '¿Cuánto puedo ganar?',
      answer: 'Depende de la zona y de cuántas tareas aceptes. ¿Quieres que te muestre ejemplos de ingresos típicos?'
    },
    {
      question: '¿Cómo verifico mi identidad?',
      answer: 'Durante el registro se te pedirá verificar tu identidad con un documento oficial.'
    },
    {
      question: '¿Puedo elegir qué tareas hacer?',
      answer: 'Sí, tú eliges qué tareas aceptar y cuáles no.'
    },
    {
      question: '¿Cómo recibo tareas cerca?',
      answer: 'La plataforma usa tu ubicación GPS para mostrarte tareas cercanas en tu zona.'
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
