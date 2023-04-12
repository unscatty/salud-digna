export default function nutriologo() {
  return (
    <div className="container-nutriologo">
      <nav className="fixed l-0 t-0 h-100% bg-third w-20 py-10">
        <div className="container-nutriologo__logo bg-white rounded-full  w-50% m-auto flex flex-col justify-between h-50%">
          <img src="/src/assets/logo2.svg" alt="logo" className="rounded-full"/>
          <img src="/src/assets/logo2.svg" alt="logo" className="rounded-full"/>
          <img src="/src/assets/logo2.svg" alt="logo" className="rounded-full"/>
          <img src="/src/assets/logo2.svg" alt="logo" className="rounded-full"/>
          <img src="/src/assets/logo2.svg" alt="logo" className="rounded-full"/>
        </div>
      </nav>
      <div className="container-nutriologo__content grid gap-10 p-10 grid-rows-[auto_1fr_1fr_1fr] ml-20 h-100vh">
        <div className="container-nutriologo__content  bg-third w-full rounded p-4 col-span-3">
          <p className="text-black font-bold text-2xl">Buenos Dias Juan</p>
          <p className="font-bold text-gray">
            Ayudemos a cambiar a las personas
          </p>
        </div>

        <div className="tareas col-span-2 bg-third rounded p-4 ">
          <p className="text-black font-semibold">Tareas a realizar</p>
        </div>
        <div className="citas  bg-third rounded p-4 row-span-2">
          <p className="text-black font-semibold row-span-2">Citas</p>
        </div>
        <div className="clientes row-span-2 bg-white rounded text-black">
          Clientes
        </div>
        <div className="grafica bg-third rounded p-4 text-black">
          Grafica
        </div>
        <div className="grafica bg-third rounded p-4 text-black">
          Grafica
        </div>
        <div className="grafica bg-third rounded p-4 text-black ">
          Mensajes
        </div>
      </div>
    </div>
  );
}