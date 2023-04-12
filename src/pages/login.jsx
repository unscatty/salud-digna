export default function Login() {
  return (
    <>
      <div class="min-h-screen bg-second sm:py-12 w-screen h-screen">
        <div
          // class="bg-first flex justify-center  items-center rounded-bl-full h-2/4"
          class="bg-fiveth flex justify-center rounded-bl-full shadow-2xl rounded-tr-full"
          // class="bg-first flex justify-center rounded-tr-full shadow-2xl"
          style={{
            // backdropFilter: blur('10px'),
            height: '95%',
            boxShadow:
              '0px 3.3px 4.8px -20px rgba(0, 0, 0, 0.22), 0px 8.3px 9.8px -20px rgba(0, 0, 0, 0.274), 0px 17px 16.2px -20px rgba(0, 0, 0, 0.303), 0px 35px 27.2px -20px rgba(0, 0, 0, 0.333), 0px 96px 64px -20px rgba(0, 0, 0, 0.44)',
          }}
        >
          <div class=" px-5 py-7 pt-60 mx-10">
            <h1 class="font-extrabold text-left text-3xl mb-5 text-white">
              Iniciar Sesion
            </h1>
            <input
              type="text"
              class="text-white px-3 py-2 mt-5 mb-5 text-base w-full bg-transparent border-transparent placeholder-white border-b-3 border-t-0 border-r-0 border-l-0 border-white focus:outline-none focus:ring-0 focus:border-white transition-all duration-300 focus:text-lg focus:font-bold"
              placeholder="Usuario"
              onfocus="this.classList.add('focus')"
              onblur="this.classList.remove('focus')"
            />
            <input
              type="text"
              class="text-white px-3 py-2 mt-1 mb-5 text-base w-full bg-transparent border-transparent placeholder-white border-b-3 border-t-0 border-r-0 border-l-0 border-white focus:outline-none focus:ring-0 focus:border-white transition-all duration-300 focus:shadow-lg focus:text-lg focus:font-bold"
              placeholder="Constaseña"
              onfocus="this.classList.add('focus')"
              onblur="this.classList.remove('focus')"
            />
            <div className="bg-white mt-6 rounded-lg">
              <button
                type="button"
                // class="transition duration-200 bg-white  focus:bg-fivth focus:shadow-sm focus:ring-4 focus:ring-first focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                class="bg-white text-first w-full py-2.5  rounded-lg text-sm shadow-xl hover:shadow-2xl font-semibold text-center inline-block"
              >
                <span class="inline-block mr-2 text-first">Login</span>
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
