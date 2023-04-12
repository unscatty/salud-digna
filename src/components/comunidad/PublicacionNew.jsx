export default function PublicacionNew(props) {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className="card bg-third p-4 mt-2 w-full">
      <div className="card-header grid  grid-rows-2 grid-cols-[auto_1fr_auto]">
        <div className="card-profile row-span-2 mr-2">
          <img
            src="/assets/profile.jpg"
            alt=""
            className="h-8 w-8 rounded-full"
          />
        </div>
        <div className="card-name">
          <p className="text-xs font-semibold">{props.nombre}</p>
        </div>
        <div className="card-date text-gray row-start-2 col-start-2 text-[9px]  ">
          {props.date}
        </div>
        <div className="card-options">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
            className="h-full"
          >
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
          </svg>
        </div>
      </div>

      <div className="card-body">
        <div className="card-body-description text-xs my-2">
          {props.descripcion}
        </div>
        <div className="card-body-image ">
          <img src={props.image} className="rounded-lg" alt="" href="" />
        </div>
      </div>

      <div className="card-footer flex mt-2 flex-col gap-2">
        <div className="flex text-xs gap-2">
          <i
            className={`i-heroicons:heart-20-solid  h-4 w-4 inline-block ${
              like ? 'bg-fifth' : 'bg-gray-300'
            }`}
            onClick={handleLike}
          ></i>
          <p className="font-semibold text-gray-900">528 Likes</p>
        </div>

        <div className="flex items-center search">
          <label for="simple-search" className="sr-only">
            Buscar alimento
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-fifth focus:border-fifth- block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fifth- dark:focus:border-fifth-"
              placeholder="Agregar comentario"
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-xs font-medium text-white bg-fifth rounded-r-lg  h-7.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-3 h-3 text-white fill-white"
              >
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>

        <div className="caja-de-comentarios mt-2">
          <hr className="mb-1" />
          <div className="comentario grid grid-cols-[auto_auto_auto_1fr] items-center">
            <div className="card-profile row-span-1 mr-2">
              <img
                src="/assets/profile.jpg"
                alt=""
                className="h-4 w-4 rounded-full"
              />
            </div>
            <div className="card-name">
              <p className="text-[11px] font-semibold">Juan Pablo Muñiz</p>
            </div>
            <div className="card-date text-gray row-start-1 col-start-3 text-[9px] flex  mt-1 ml-1">
              13 ABR 2023
            </div>
            <div className="comentario text-[9px] col-start-2 col-span-3">
              Creo que es importante tener una buena alimentacion y hacer
              ejercicio.
            </div>
          </div>

          <hr className="my-1" />
          <p className="text-gray-500 text-[10px] ">Ver mas comentarios (10)</p>
        </div>
      </div>
    </div>
  );
}
