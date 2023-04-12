import ListaItem from './ListaItem';

export default function Lista() {
  return (
    <div className="racha-container grid grid-cols-[1fr_auto] gap-3 pt-4">
      <div className="racha-container_days">
        <ComponentHeader
          title="Lista"
          icon={
            <img src="/assets/icons/racha_arrow.svg" className="w-3 h-3"></img>
          }
        />

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

        <div className="flex pt-2 flex-col gap-1">
          <ListaItem />
          <ListaItem />
          <ListaItem />
          <ListaItem />
        </div>
      </div>
    </div>
  );
}
