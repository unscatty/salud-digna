export default function MalosHabitos() {
  return (
    <div className="racha-container">
      <div className="racha-container_days">
        <div className="flex justify-between">
          <ComponentHeader
            title="Malos Habitos"
            icon={
              <img
                src="/src/assets/icons/racha_arrow.svg"
                className="w-3 h-3"
              ></img>
            }
          />
          <button
            type="submit"
            class="h-full px-2 text-sm font-medium text-white bg-fifth rounded-lg border border-fifth hover:bg-fifth hover:border-fifth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:fifth text-xs ml-2"
          >
            Agregar
            <span class="sr-only">Agregar</span>
          </button>
        </div>

        <div className="malos-habitos-container">
          <div className="malos-habitos-container_item-container grid grid-cols-[1fr_auto] bg-third p-2 rounded justify-between">
            <p className="text-xs font-bold ">
              Comí una hamburguesa porque sali con amigos
            </p>
            <div className="flex flex-col gap-1">
              <span class="bg-gray-100 text-gray-800 text-[8px] font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-gray-400 h-4">
                13 ABR 2023
              </span>
              <span class="bg-red-100 text-gray-800 text-[8px] font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-gray-400 h-4 text-center">
                Malo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
