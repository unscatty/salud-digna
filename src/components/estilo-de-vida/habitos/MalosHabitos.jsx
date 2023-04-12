export default function MalosHabitos() {
  // Crea un estado para mostrar cuando se le da click y quitar cuando se le da de nuevo

  const [show, setShow] = useState(false);

  // Funcion para mostra
  const handleShow = () => {
    setShow(!show);
  };

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
            className="h-full px-2 text-sm font-medium text-white bg-fifth rounded-lg border border-fifth hover:bg-fifth hover:border-fifth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:fifth text-xs ml-2"
          >
            Agregar
            <span className="sr-only">Agregar</span>
          </button>
        </div>

        <div className="malos-habitos-container">
          <div className="malos-habitos-container_item-container grid grid-cols-[1fr_auto] bg-third p-2 rounded justify-between position-relative">
            <p className="text-xs font-bold ">
              Comí una hamburguesa porque sali con amigos
            </p>
            <div className="flex flex-col gap-1">
              <span className="bg-gray-100 text-gray-800 text-[8px] font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-gray-400 h-4">
                13 ABR 2023
              </span>
              <span className="bg-red-100 text-gray-800 text-[8px] font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-gray-400 h-4 text-center">
                Malo
              </span>
              <span
                className="bg-gray-100 text-gray-800 text-[8px] font-medium  px-2.5 py-0.5 rounded  dark:text-gray-400 h-4 text-center  position-absolute bottom-0 left-50% translate-x--50% translate-y-50% "
                onClick={handleShow}
              >
                <div className="gap-1 flex">
                  {show ? (
                    <>
                      <p>Cerrar consejo</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 fill-gray"
                        viewBox="0 0 512 512"
                      >
                        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <p>Ver consejo</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-3 h-3 fill-gray"
                      >
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                      </svg>
                    </>
                  )}
                </div>
              </span>
            </div>
          </div>
          {/*  Si show es true, muestra el consejo */}
          {show && (
            <div className="bg-first p-2 text-xs text-third b-rounded">
              <p className="font-bold">Consejo</p>
              <p className="">
                La siguiente vez que vayas con amigos lleva tu propia comida y
                haz saber que estas en un cambio para tu salud
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
