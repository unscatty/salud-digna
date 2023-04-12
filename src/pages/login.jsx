import logo from '/assets/logo2.svg';

export default function Login() {
  const [selected, setSelected] = useState('cliente');

  return (
    <>
      <div className="min-h-screen bg-first sm:py-12 w-screen h-screen text-black">
        <div
          className="bg-third flex justify-center rounded-bl-full shadow-2xl flex justify-center items-center p-15 "
          style={{
            height: '95%',
          }}
        >
          <div className="mb-20 w-100%">
            <div className="w-30 fill-first mb-10 m-auto stroke-first w-full">
              <img src={logo} />
              <p className="text-first font-bold text-2xl w-auto text-sm text-center">
                Salud Digna
              </p>
            </div>

            <h1 className="font-bold text-left text-3xl mb-5 text-first">
              Iniciar Sesion
            </h1>

            <div class="inline-flex rounded-md shadow-sm w-full" role="group">
              <button
                type="button"
                key={'cliente'}
                class={`px-4 py-1 text-sm font-medium border border-first rounded-l-lg ${
                  selected === 'cliente'
                    ? 'bg-first text-white'
                    : 'bg-third text-first'
                } w-50%`}
                onClick={() => setSelected('cliente')}
              >
                Cliente
              </button>
              <button
                type="button"
                key={'nutriologo'}
                class={`px-4 py-1 text-sm font-medium border border-first rounded-r-lg ${
                  selected === 'nutriologo'
                    ? 'bg-first text-white'
                    : 'bg-third text-first'
                } w-50%`}
                onClick={() => setSelected('nutriologo')}
              >
                Nutriologo
              </button>
            </div>

            <div className="relative z-0 flex mb-4 mt-10">
              <input
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-fiveth bg-transparent border-0 border-b-2 border-first appearance-none dark:text-black dark:border-first dark:focus:border-first focus:outline-none focus:ring-0 focus:border-first peer"
                placeholder=" "
              />
              <label
                for="floating_standard"
                className="absolute text-sm text-first dark:text-first duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-first peer-focus:dark:text-first peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Usuario
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="password"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-fiveth bg-transparent border-0 border-b-2 border-first appearance-none dark:text-black dark:border-first dark:focus:border-first focus:outline-none focus:ring-0 focus:border-first peer"
                placeholder=" "
              />
              <label
                for="floating_standard"
                className="absolute text-sm text-first dark:text-firstduration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-first peer-focus:dark:text-first peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contraseña
              </label>
            </div>
            <div className="bg-white mt-10 rounded-lg ">
              <Link
                to={selected === 'cliente' ? '/' : '/nutriologo'}
                type="button"
                className="bg-first text-third w-full py-2.5  rounded-lg text-sm shadow-xl hover:shadow-2xl font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2 ">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
