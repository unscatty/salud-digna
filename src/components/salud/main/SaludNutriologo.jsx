export default function SaludNutriologo({ tab }) {
  const chatMessages = [
    {
      id: 1,
      kind: 'nutriologo',
      messages: ['¡Hola! ¿En qué puedo ayudarte hoy?'],
    },
    {
      id: 2,
      kind: 'cliente',
      messages: [
        'Hola, quisiera saber si hay algún sustituto saludable para el pan blanco que consumo en mis sándwiches diarios.',
      ],
    },
    {
      id: 3,
      kind: 'nutriologo',
      messages: [
        '¡Hola! Claro, podemos buscar una alternativa más saludable. ¿Has probado el pan integral o de centeno?',
      ],
    },
    {
      id: 4,
      kind: 'cliente',
      messages: [
        'Sí, pero siento que el sabor no es igual y me quedo con hambre después.',
      ],
    },
    {
      id: 5,
      kind: 'nutriologo',
      messages: [
        'Entiendo. ¿Has considerado el pan de pita integral o las tortillas de maíz para tus sándwiches?',
      ],
    },
    {
      id: 6,
      kind: 'cliente',
      messages: ['No lo he pensado. ¿Son más saludables que el pan blanco?'],
    },
    {
      id: 7,
      kind: 'nutriologo',
      messages: [
        'Sí, son una opción más saludable que el pan blanco porque contienen menos calorías, carbohidratos y azúcares. Además, la mayoría de las tortillas de maíz y panes de pita integrales son ricos en fibra y proteínas, lo que te ayudará a sentirte más lleno durante más tiempo.',
      ],
    },
    {
      id: 8,
      kind: 'cliente',
      messages: [
        'Entiendo. Voy a probar con esas opciones. ¿Algún otro consejo?',
      ],
    },
    {
      id: 9,
      kind: 'nutriologo',
      messages: [
        'Sí, puedes también agregar más vegetales a tus sándwiches para que te sientas más lleno y obtengas más nutrientes. Además, asegúrate de elegir proteínas magras como pavo o pollo para tus sándwiches.',
      ],
    },
    {
      id: 10,
      kind: 'cliente',
      messages: ['Perfecto, ¡muchas gracias! Lo intentaré.'],
    },
    {
      id: 11,
      kind: 'nutriologo',
      messages: [
        'De nada. Recuerda que estamos aquí para ayudarte a hacer cambios saludables en tu estilo de vida. ¡Hasta la próxima!',
      ],
    },
  ];

  return (
    <SaludMainCard tab={tab}>
      <div>
        {/* component */}
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col max-h-200">
          <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
            <div className="relative flex items-center space-x-4">
              <div className="relative">
                <span className="absolute text-green-500 right-0 bottom-0">
                  <svg width={12} height={12}>
                    <circle cx={8} cy={8} r={8} fill="currentColor" />
                  </svg>
                </span>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                  alt
                  className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="text-lg mt-1 flex items-center">
                  <span className="text-gray-700 mr-3">
                    Dr. Antonio Ramirez
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  Nutriólogo Especialista
                </span>
              </div>
            </div>
          </div>
          <div
            id="messages"
            className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
          >
            {/* Messages here */}
            {chatMessages.map((message) =>
              message.kind === 'nutriologo' ? (
                <NutriologoMensajeGrupo messages={message.messages} />
              ) : (
                <ClienteMensajeGrupo messages={message.messages} />
              ),
            )}
          </div>
          <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <div className="relative flex">
              <input
                type="text"
                placeholder="Escribe tu mensaje"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md py-3"
              />
              <div className="absolute right-0 items-center inset-y-0 sm:flex">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-first hover:bg-first focus:outline-none"
                >
                  {/* <span className="font-bold">Send</span> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 ml-2 transform rotate-90"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SaludMainCard>
  );
}
