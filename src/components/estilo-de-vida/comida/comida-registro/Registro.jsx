import RegistroItem from './RegistroItem';

export default function Registro() {
  return (
    <div className="">
      <div className="racha-container_days">
        <ComponentHeader
          title="Registro del dia"
          icon={
            <img src="/assets/icons/racha_arrow.svg" className="w-3 h-3"></img>
          }
        />
        <div className="flex justify-between pb-4">
          <PlanDia day={11} month={'ABR'} state="inactive" />
          <PlanDia day={12} month={'ABR'} state="inactive" />
          <PlanDia day={13} month={'ABR'} state="active" />
          <PlanDia day={14} month={'ABR'} state="inactive" />
          <PlanDia day={15} month={'ABR'} state="inactive" />
          <PlanDia day={16} month={'ABR'} state="inactive" />
          <PlanDia day={16} month={'ABR'} state="inactive" />
        </div>
        <div className="bg-fifth p-2 rounded mb-2">
          <p className="text-xs text-center font-semibold text-third">
            ¡Ingresa que comiste el dia de hoy!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-2">
          <div className="grid grid-rows-[1fr_auto]">
            <PlatilloPlan
              tiempo="DESAYUNO"
              calorias="457 cal"
              logo={<img src="/assets/yogurt.png" className="w-100"></img>}
              descripcion="Yogurt con arandanos"
              state="inactive"
            />
            <div className="flex justify-center font-bold align-items p-1 bg-first text-third rounded mt-2 text-xs">
              Agregar
            </div>
          </div>
          <div className="grid grid-rows-[1fr_auto]">
            <PlatilloPlan
              tiempo="COMIDA"
              calorias="457 cal"
              logo={<img src="/assets/manzana.svg" className="w-100"></img>}
              descripcion="Colifor y manzana"
              state="inactive"
            />
            <div className="flex justify-center font-bold align-items p-1 bg-first text-third rounded mt-2 text-xs">
              Agregar
            </div>
          </div>

          <div className="grid grid-rows-[1fr_auto]">
            <PlatilloPlan
              tiempo="CENA"
              calorias="457 cal"
              logo={<img src="/assets/frutas.svg" className="w-100"></img>}
              descripcion="Frutas con almendras"
              state="inactive"
            />
            <div className="flex justify-center font-bold align-items p-1 bg-first text-third rounded mt-2 text-xs">
              Agregar
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <label for="simple-search" className="sr-only">
            Buscar alimento
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-fifth focus:border-fifth- block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fifth- dark:focus:border-fifth-"
              placeholder="Buscar alimento"
              required
            />
          </div>

          <button
            type="submit"
            className="h-full p-2 text-sm font-medium text-white bg-fifth rounded-lg border border-fifth hover:bg-fifth hover:border-fifth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:fifth text-xs ml-2"
          >
            Agregar
            <span className="sr-only">Agregar</span>
          </button>
        </div>
        <div className="pt-2">
          <RegistroItem />
        </div>
      </div>
    </div>
  );
}
