export default function Recompensas(props) {
  return (
    <>
      <div className="container mt-4 border-t-2 borde-gray pt-4">
        <div className="flex flex-col items-center justify-center h-full">
          <i className="i-mdi:trophy-award text-xl text-yellow-5" />
          <p className="font-bold text-xs mt-2">Recompensas</p>
          <p className="font-200 text-xs mt-1 w-75% text-center pb-2">
            Recompensas que puedes obtener por cumplir tus metas
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center pb-2">
          <div className="card recompensa bg-second">
            <div className="recompensa__container">
              <p className="font-bold text-xs mb-2">Primera cita gratis</p>
              <img src="/assets/icons/saludDigna.png" alt="Salud Digna" />
            </div>
          </div>

          <div className="card recompensa">
            <div className="recompensa__container">
              <p className="font-bold text-xs mb-2">10% Salud Digna</p>
              <img src="/assets/icons/saludDigna.png" alt="Salud Digna" />
            </div>
          </div>

          <div className="card recompensa">
            <div className="recompensa__container">
              <p className="font-bold text-xs mb-2">10% Salud Digna</p>
              <img src="/assets/icons/saludDigna.png" alt="Salud Digna" />
            </div>
          </div>
        </div>
        <div className="label_of_bar_of_progress grid grid-cols-3 text-center text-xs pb-2 text-gray font-bold">
          <p>30 dias</p>
          <p>60 dias</p>
          <p>100 dias</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-second text-xs font-medium text-fifth text-center p-0.3 leading-none rounded-full"
            style={{ width: '37%' }}
          >
            37 días
          </div>
        </div>
      </div>
    </>
  );
}
