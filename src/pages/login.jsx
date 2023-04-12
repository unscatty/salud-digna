import logo from '../assets/logo2.svg';

export default function Login() {
  return (
    <>
      <div class="min-h-screen bg-first sm:py-12 w-screen h-screen text-black">
        <div
          // class="bg-first flex justify-center  items-center rounded-bl-full h-2/4"
          class="bg-third flex justify-center rounded-bl-full shadow-2xl flex justify-center items-center p-15 "
          // class="bg-first flex justify-center rounded-tr-full shadow-2xl"
          style={{
            // backdropFilter: blur('10px'),
            height: '95%',
          }}
        >
          {/* <div className="w-30 fill-white position-absolute">
            <img src={logo} />
          </div> */}
          <div className="mb-20 w-100%">
            <div className="w-30 fill-fifth mb-10 m-auto stroke-fifth">
              <img src={logo} />
            </div>
            {/* <Link
              to="/"
              class="font-extrabold text-left text-3xl mb-5 text-white mt-10"
            > */}
            <h1 class="font-bold text-left text-3xl mb-10 text-first">
              Iniciar Sesion
            </h1>
            {/* </Link> */}
            <div class="relative z-0 flex mb-4">
              <input
                type="text"
                id="floating_standard"
                class="block py-2.5 px-0 w-full text-sm text-fiveth bg-transparent border-0 border-b-2 border-fifth appearance-none dark:text-black dark:border-fifth dark:focus:border-fifth focus:outline-none focus:ring-0 focus:border-fifth peer"
                placeholder=" "
              />
              <label
                for="floating_standard"
                class="absolute text-sm text-fifth dark:text-fifth duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fifth peer-focus:dark:text-fifth peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Usuario
              </label>
            </div>
            <div class="relative z-0">
              <input
                type="password"
                id="floating_standard"
                class="block py-2.5 px-0 w-full text-sm text-fiveth bg-transparent border-0 border-b-2 border-fifth appearance-none dark:text-black dark:border-fifth dark:focus:border-fifth focus:outline-none focus:ring-0 focus:border-fifth peer"
                placeholder=" "
              />
              <label
                for="floating_standard"
                class="absolute text-sm text-fifth dark:text-fifthduration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fifth peer-focus:dark:text-fifth peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contraseña
              </label>
            </div>
            <div className="bg-white mt-10 rounded-lg">
              <Link
                to={'/'}
                type="button"
                // class="transition duration-200 bg-white  focus:bg-fivth focus:shadow-sm focus:ring-4 focus:ring-first focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                class="bg-first text-third w-full py-2.5  rounded-lg text-sm shadow-xl hover:shadow-2xl font-semibold text-center inline-block"
              >
                <span class="inline-block mr-2 ">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 inline-block"
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
