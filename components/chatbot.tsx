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

interface QuickReply {
  text: string;
  action: () => void;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('welcome');
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: 'Hola, soy el asistente de RESVOA. ¿En qué quieres que te ayude?' }
  ]);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>([]);

  const handleResponse = (question: string, answer: string, replies?: QuickReply[]) => {
    setMessages(prev => [
      ...prev,
      { type: 'user', text: question },
      { type: 'bot', text: answer }
    ]);
    setQuickReplies(replies || []);
  };

  const resetChat = () => {
    setViewMode('welcome');
    setMessages([
      { type: 'bot', text: 'Hola, soy el asistente de RESVOA. ¿En qué quieres que te ayude?' }
    ]);
    setQuickReplies([]);
  };

  const handlePublishTaskQuestion = () => {
    handleResponse(
      '¿Cómo publicar una tarea?',
      'Puedo ayudarte. Publicar una tarea es rápido: escribes qué necesitas, eliges hora y dirección, y listo. ¿Quieres que te guíe ahora mismo?',
      [
        {
          text: 'Sí, guíame',
          action: () => {
            handleResponse('Sí, guíame', 'Perfecto. Para publicar una tarea: 1) Haz clic en "Publicar tarea" en tu panel. 2) Describe qué necesitas. 3) Selecciona fecha, hora y ubicación. 4) Establece tu presupuesto. 5) Publica y espera ofertas de proveedores cercanos.');
            setQuickReplies([]);
          }
        },
        {
          text: 'No, gracias',
          action: () => {
            handleResponse('No, gracias', 'De acuerdo. ¿Hay algo más en lo que pueda ayudarte?');
            setQuickReplies([]);
          }
        }
      ]
    );
  };

  const handleEarnMoneyQuestion = () => {
    handleResponse(
      '¿Cómo ganar dinero?',
      'Perfecto. Puedes empezar a ganar dinero registrándote y verificando tu identidad. Luego verás tareas cerca de ti. ¿Quieres que te explique cómo funciona el panel?',
      [
        {
          text: 'Sí, explícame',
          action: () => {
            handleResponse('Sí, explícame', 'Genial. En tu panel verás: 1) Tareas disponibles cerca de ti. 2) Puedes filtrar por categoría y distancia. 3) Ves el pago y detalles antes de aceptar. 4) Una vez completada la tarea, el dinero se deposita en tu cuenta.');
            setQuickReplies([]);
          }
        },
        {
          text: 'No, gracias',
          action: () => {
            handleResponse('No, gracias', 'De acuerdo. ¿Hay algo más en lo que pueda ayudarte?');
            setQuickReplies([]);
          }
        }
      ]
    );
  };

  const handleEarningsQuestion = () => {
    handleResponse(
      '¿Cuánto puedo ganar?',
      'Depende de la zona y de cuántas tareas aceptes. ¿Quieres que te muestre ejemplos de ingresos típicos?',
      [
        {
          text: 'Sí, muéstrame',
          action: () => {
            handleResponse('Sí, muéstrame', 'Ejemplos de ingresos: Mudanza pequeña: 30-50€. Montaje muebles: 25-40€. Reparación básica: 20-35€. Limpieza: 15-25€/hora. Trabajando 2-3 horas al día puedes ganar 300-600€/mes extra.');
            setQuickReplies([]);
          }
        },
        {
          text: 'No, gracias',
          action: () => {
            handleResponse('No, gracias', 'De acuerdo. ¿Hay algo más en lo que pueda ayudarte?');
            setQuickReplies([]);
          }
        }
      ]
    );
  };

  const userQuestions = [
    { question: '¿Cómo publicar una tarea?', action: handlePublishTaskQuestion },
    { question: '¿Cómo elegir proveedor?', action: () => handleResponse('¿Cómo elegir proveedor?', 'Verás ofertas de personas cercanas. Puedes ver su reputación, valoraciones y precio. Tú eliges a quién contratar.') },
    { question: '¿Cómo funciona el pago seguro?', action: () => handleResponse('¿Cómo funciona el pago seguro?', 'Pagas desde la app. El dinero queda retenido. Solo se libera cuando confirmas que la tarea está hecha. Si algo sale mal, te ayudamos.') },
    { question: '¿Qué pasa si algo no sale bien?', action: () => handleResponse('¿Qué pasa si algo no sale bien?', 'Puedes cancelar antes de aceptar. Puedes abrir una incidencia. Resvoa interviene para mediar y ayudarte.') },
    { question: '¿Qué tareas se pueden publicar?', action: () => handleResponse('¿Qué tareas se pueden publicar?', 'Casi cualquier microtarea del día a día: mudanzas pequeñas, recados, montajes, limpieza, bricolaje, informática básica, pasear perros, etc.') },
    { question: '¿Cómo me registro?', action: () => handleResponse('¿Cómo me registro?', 'Ve a la página de registro, completa tus datos básicos (nombre, email, contraseña) y verifica tu correo. Es muy rápido, menos de 2 minutos.') },
    { question: '¿Puedo publicar varias tareas?', action: () => handleResponse('¿Puedo publicar varias tareas?', 'Sí, puedes publicar todas las tareas que necesites, sin límite.') },
    { question: '¿Puedo editar mi tarea?', action: () => handleResponse('¿Puedo editar mi tarea?', 'Sí, mientras no haya sido aceptada por un proveedor puedes editarla o eliminarla.') }
  ];

  const providerQuestions = [
    { question: '¿Cómo ganar dinero?', action: handleEarnMoneyQuestion },
    { question: '¿Cómo funciona la comisión?', action: () => handleResponse('¿Cómo funciona la comisión?', 'La plataforma aplica una comisión del 15% por defecto. El administrador puede cambiarla. La comisión se resta automáticamente al procesar el pago.') },
    { question: '¿Cómo retirar el dinero?', action: () => handleResponse('¿Cómo retirar el dinero?', 'Desde tu panel de proveedor. Puedes retirar cuando quieras mediante transferencia bancaria. El dinero llega en 1-3 días hábiles.') },
    { question: '¿Cómo mejorar la reputación?', action: () => handleResponse('¿Cómo mejorar la reputación?', 'Cumple los horarios pactados. Mantén buena comunicación con los clientes. Entrega trabajos de calidad. Pide al cliente que valore la experiencia después de cada tarea.') },
    { question: '¿Cuánto puedo ganar?', action: handleEarningsQuestion },
    { question: '¿Cómo verifico mi identidad?', action: () => handleResponse('¿Cómo verifico mi identidad?', 'Durante el registro se te pedirá verificar tu identidad con un documento oficial (DNI, NIE o pasaporte). Es un proceso rápido y seguro.') },
    { question: '¿Puedo elegir qué tareas hacer?', action: () => handleResponse('¿Puedo elegir qué tareas hacer?', 'Sí, tú tienes el control total. Ves las tareas disponibles y eliges cuáles aceptar y cuáles no según tu disponibilidad y preferencias.') },
    { question: '¿Cómo recibo tareas cerca?', action: () => handleResponse('¿Cómo recibo tareas cerca?', 'La plataforma usa tu ubicación GPS para mostrarte solo tareas cercanas en tu zona. Puedes configurar el radio de distancia máxima.') }
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

          <div className="flex-1 overflow-y-auto p-4 bg-green-50/30 flex flex-col">
            <div className="space-y-4 mb-4">
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
            </div>

            {viewMode === 'welcome' && (
              <div className="space-y-3">
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

            {quickReplies.length > 0 && (
              <div className="space-y-2 flex-shrink-0 mt-3">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    onClick={reply.action}
                    className="w-full justify-center h-auto py-3 px-4 bg-[#25D366] text-white hover:bg-[#20BA5A] transition-colors font-medium"
                    size="sm"
                  >
                    {reply.text}
                  </Button>
                ))}
              </div>
            )}

            {viewMode === 'user' && quickReplies.length === 0 && (
              <div className="space-y-2 flex-shrink-0">
                <p className="text-xs text-gray-600 font-semibold mb-3">Selecciona tu pregunta:</p>
                {userQuestions.map((item, index) => (
                  <Button
                    key={index}
                    onClick={item.action}
                    className="w-full justify-start text-left h-auto py-3 px-4 whitespace-normal hover:bg-[#25D366] hover:text-white transition-colors"
                    variant="outline"
                    size="sm"
                  >
                    {item.question}
                  </Button>
                ))}
              </div>
            )}

            {viewMode === 'provider' && quickReplies.length === 0 && (
              <div className="space-y-2 flex-shrink-0">
                <p className="text-xs text-gray-600 font-semibold mb-3">Selecciona tu pregunta:</p>
                {providerQuestions.map((item, index) => (
                  <Button
                    key={index}
                    onClick={item.action}
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
