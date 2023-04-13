import PublicacionNew from './PublicacionNew';

export default function Publico(props) {
  return (
    <div className="card bg-second p-4 mt-2 w-full">
      <ComponentHeader
        title="Publico"
        icon={
          <img src="/assets/icons/racha_arrow.svg" className="w-3 h-3"></img>
        }
      />
      <div className="flex gap-2">
        <div className=" bg-fifth p-2 rounded  w-full flex">
          <p className="text-xs text-center font-bold text-third ">
            ¡Comparte tu progreso con los demas!
          </p>
        </div>
        <div className="bg-white p-2 flex items-center rounded text-xs text-center">
          <p className="  ">Crear Post</p>
        </div>
      </div>

      <div className="publicaciones-container flex flex-col gap-3">
        <PublicacionNew
          nombre="Juan Pablo Muñiz"
          date="13 ABR 2023"
          descripcion={
            <div className="flex gap-2 items-center">
              <div>
                <p className="text-4 text-justify max-w-[60vw]">
                  Ha comenzado su transformación de vida con{' '}
                  <span className="text-blue">#SaludDigna</span>
                </p>
              </div>
            </div>
          }
          image="/images/profile-3.jpg"
        />
        <PublicacionNew
          nombre="Jose Luis Perez"
          date="13 ABR 2023"
          descripcion={
            <div className="flex gap-2 items-center">
              <div>
                <p className="text-4 text-justify flex breakwords max-w-[60vw]">
                  ¡Quiero compartir mi experiencia increíble con Salud Digna!
                  <br />
                  Gracias a su app de nutrición, logré bajar 30 kg y mejorar mi
                  salud significativamente. Ahora me siento con más energía y
                  vitalidad que nunca.
                  <br />
                  ¡Gracias Salud Digna por hacer posible mi transformación!
                  Invito a más personas a unirse a esta app para mejorar su
                  calidad de vida.
                </p>
                <span className="text-blue">#SaludDigna</span> {''}
                <span className="text-blue">#NutriciónSaludable</span> {''}
                <span className="text-blue">#TransformaciónPersonal</span>
              </div>
            </div>
          }
          image="/images/profile-2.jpg"
          likes={157}
        />
        <PublicacionNew
          nombre="Antonio Ramírez"
          date="12 ABR 2023"
          image="/assets/profile.jpg"
          descripcion={
            <div className="flex gap-2 items-center">
              <div>
                <p className="text-4">¡Está en racha de ejecicio!</p>
              </div>
              <div className="flex flex-col ml-auto items-center">
                <div className="i-mdi:arm-flex text-red-4 w-10 h-10"></div>
                <span className="font-bold text-3.5 text-center text-orange-5">
                  14 dias
                </span>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
