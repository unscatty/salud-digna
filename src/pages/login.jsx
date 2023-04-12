import logo from '/assets/logo2.svg';
// import { redirect } from 'react-router-dom';

export default function Login() {
  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');

    console.log({ isLogged });

    if (isLogged && isLogged === 'true') {
      window.location.href = '/';
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLogged', true);

    window.location.href = '/';
  };

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
            <div className="w-30 fill-fifth mb-10 m-auto stroke-fifth">
              <img src={logo} />
            </div>

            <h1 className="font-bold text-left text-3xl mb-10 text-first">
              Iniciar Sesion
            </h1>

            <div className="relative z-0 flex mb-4">
              <input
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-fiveth bg-transparent border-0 border-b-2 border-fifth appearance-none dark:text-black dark:border-fifth dark:focus:border-fifth focus:outline-none focus:ring-0 focus:border-fifth peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-fifth dark:text-fifth duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fifth peer-focus:dark:text-fifth peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Usuario
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="password"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-fiveth bg-transparent border-0 border-b-2 border-fifth appearance-none dark:text-black dark:border-fifth dark:focus:border-fifth focus:outline-none focus:ring-0 focus:border-fifth peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-fifth dark:text-fifthduration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fifth peer-focus:dark:text-fifth peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contraseña
              </label>
            </div>
            <div className="bg-white mt-10 rounded-lg">
              <button
                onClick={handleLogin}
                type="button"
                className="bg-first text-third w-full py-2.5  rounded-lg text-sm shadow-xl hover:shadow-2xl font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
