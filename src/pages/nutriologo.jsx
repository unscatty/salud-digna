import NutriologoCliente from '~/components/nutriologo/clientes/NutriologoClientes';
import NutriologoTareas from '~/components/nutriologo/tareas/NutriologoTareas';

export default function nutriologo() {
  return (
    <div className="container-nutriologo">
      <nav className="fixed l-0 t-0 h-100% bg-third w-20 py-10">
        <div className="container-nutriologo__logo bg-white rounded-full  w-50% m-auto flex flex-col justify-between h-50%">
          <img
            src="/public/assets/logo2.svg"
            alt="logo"
            className="rounded-full"
          />
          <img
            src="/public/assets/logo2.svg"
            alt="logo"
            className="rounded-full"
          />
          <img
            src="/public/assets/logo2.svg"
            alt="logo"
            className="rounded-full"
          />
          <img
            src="/public/assets/logo2.svg"
            alt="logo"
            className="rounded-full"
          />
          <img
            src="/public/assets/logo2.svg"
            alt="logo"
            className="rounded-full"
          />
        </div>
      </nav>
      <div className="container-nutriologo__content grid gap-10 p-10 grid-rows-[auto_1fr_1fr_1fr] ml-20 h-100vh grid-cols-[2fr_1fr] ">
        <div className="container-nutriologo__content  bg-third w-full rounded p-4 col-span-3">
          <p className="text-black font-bold text-2xl">Buenos Dias Juan</p>
          <p className="font-bold text-gray">
            Ayudemos a cambiar a las personas
          </p>
        </div>

        <div className="tareas col-span-2 bg-third rounded p-4 grid grid-rows-[auto_1fr] gap-4">
          <p className="text-black font-bold  text-xl ">Tareas a realizar</p>

          <NutriologoTareas />
        </div>

        <div className="citas row-span-2 bg-white rounded text-black grid grid-rows-[auto_1fr] gap-4 p-4">
          <p className="text-black font-bold row-span-2 text-xl">Citas</p>
          <div>
            <Calendar />
          </div>
        </div>
        <div className="clientes row-span-2 bg-white rounded text-black grid grid-rows-[auto_1fr] gap-4 p-4">
          <p className="text-xl font-bold">Clientes</p>
          <div>
            <NutriologoCliente />
          </div>
        </div>

        <div
          className="grafica bg-third rounded p-4 text-black 
        row-span-2"
        >
          <p className="text-xl font-bold">Mensajes</p>
          
        </div>
        <div className='grid grid-cols-[1fr_1fr] gap-10'>
          <div className="grafica bg-third rounded p-4 text-black font-bold  ">
            <p className="text-xl">Satisfaccion de clientes</p>
          </div>
          <div className="grafica bg-third rounded p-4 text-black">
            <p className="text-xl font-bold">Progreso de clientes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
