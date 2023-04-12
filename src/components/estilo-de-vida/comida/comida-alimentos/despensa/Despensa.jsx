import DespensaItem from './DespensaItem';

export default function Despensa() {
  return (
    <div className="racha-container grid grid-cols-[1fr_auto] gap-3 ">
      <div className="racha-container_days">
        <ComponentHeader
          title="Despensa"
          icon={
            <img
              src="/src/assets/icons/racha_arrow.svg"
              className="w-3 h-3"
            ></img>
          }
        />

        <div class="flex items-center">
          <label for="simple-search" class="sr-only">
            Buscar alimento
          </label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-gray-500 dark:text-gray-400"
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
              class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-fifth focus:border-fifth- block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fifth- dark:focus:border-fifth-"
              placeholder="Buscar alimento"
              required
            />
          </div>
          
          <button
            type="submit"
            class="h-full p-2 text-sm font-medium text-white bg-fifth rounded-lg border border-fifth hover:bg-fifth hover:border-fifth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:fifth text-xs ml-2"
          >
            Add
            <span class="sr-only">Add</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2">
          <DespensaItem
            comida="Yogurt"
            icon={<img src="/src/assets/yogurt.png" className="w-100 "></img>}
          />
          <DespensaItem
            comida="Yogurt"
            icon={<img src="/src/assets/yogurt.png" className="w-100"></img>}
          />
          <DespensaItem
            comida="Yogurt"
            icon={<img src="/src/assets/yogurt.png" className="w-100"></img>}
          />
          <DespensaItem
            comida="Yogurt"
            icon={<img src="/src/assets/yogurt.png" className="w-100"></img>}
          />
          <DespensaItem
            comida="Yogurt"
            icon={<img src="/src/assets/yogurt.png" className="w-100"></img>}
          />
          <DespensaItem
            comida="Yogurt"
            icon={<img src="/src/assets/yogurt.png" className="w-100"></img>}
          />
        </div>
      </div>
    </div>
  );
}
