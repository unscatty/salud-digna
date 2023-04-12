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
          descripcion="Comer saludable el dificil, no siempre tiene la motivación. Lo que a mi me motiva el ver mi yo del pasado."
          image="/assets/cambio_fisico.jpg"
        />
      </div>
    </div>
  );
}
