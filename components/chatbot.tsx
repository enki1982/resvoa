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
          className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          aria-label="Abrir chat"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl flex flex-col z-50 border-2">
          <div className="bg-[#25D366] text-white p-4 flex items-center justify-between rounded-t-lg">
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
                      ? 'bg-[#DCF8C6] text-gray-900'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {viewMode === 'welcome' && (
              <div className="space-y-3 mt-4">
                <p className="text-xs text-gray-600 font-semibold mb-3 text-center">Selecciona una opción:</p>
                <Button
                  onClick={() => {
                    setMessages(prev => [...prev,
                      { type: 'user', text: 'Soy usuario' },
                      { type: 'bot', text: '¡Genial! Te ayudaré con lo que necesites. Selecciona una pregunta:' }
                    ]);
                    setViewMode('user');
                  }}
                  className="w-full justify-center text-center h-auto py-4 text-base font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
                  variant="outline"
                >
                  🙋 Soy usuario
                </Button>
                <Button
                  onClick={() => {
                    setMessages(prev => [...prev,
                      { type: 'user', text: 'Soy proveedor' },
                      { type: 'bot', text: 'Perfecto! Te explicaré cómo ganar dinero. Selecciona una pregunta:' }
                    ]);
                    setViewMode('provider');
                  }}
                  className="w-full justify-center text-center h-auto py-4 text-base font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
                  variant="outline"
                >
                  💼 Soy proveedor
                </Button>
              </div>
            )}

            {viewMode === 'user' && (
              <div className="space-y-2 mt-4">
                <p className="text-xs text-gray-600 font-semibold mb-3">Selecciona tu pregunta:</p>
                {userQuestions.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => handleResponse(item.question, item.answer)}
                    className="w-full justify-start text-left h-auto py-3 px-4 whitespace-normal hover:bg-[#25D366] hover:text-white transition-colors"
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
                <p className="text-xs text-gray-600 font-semibold mb-3">Selecciona tu pregunta:</p>
                {providerQuestions.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => handleResponse(item.question, item.answer)}
                    className="w-full justify-start text-left h-auto py-3 px-4 whitespace-normal hover:bg-[#25D366] hover:text-white transition-colors"
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
