import DespensaItem from './DespensaItem';

const __despensaItems = [
  {
    comida: 'Yogurt',
    icon: <img src="/assets/yogurt.png" className="w-100 "></img>,
  },
  {
    comida: 'Leche',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Arroz',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Carne',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Pan blanco',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Frijol',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Galletas',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Huevos',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Pasta',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Papa',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Pescado',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Pollo',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Queso',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Tortillas',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Verduras',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
];

function findMatchingItems(query, list) {
  return list.filter((item) =>
    item.comida.toLowerCase().includes(query.toLowerCase()),
  );
}

export default function Despensa() {
  const [query, setQuery] = useState('');
  const [despensaItems, setDespensaItems] = useState(__despensaItems);

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  const matchingItems = useMemo(
    () => findMatchingItems(query, despensaItems).slice(0, 6),
    [query],
  );

  return (
    <div className="racha-container grid grid-cols-[1fr_auto] gap-3 ">
      <div className="racha-container_days">
        <ComponentHeader
          title="Despensa"
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
              value={query}
              onChange={handleInputChange}
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

        <div className="grid grid-cols-3 gap-2 pt-2">
          {matchingItems.map((item) => (
            <DespensaItem comida={item.comida} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
