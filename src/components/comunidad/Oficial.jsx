import PublicacionNew from './PublicacionNew';

export default function Oficial(props) {
  return (
    <div className="card bg-second p-4 mt-2 w-full">
      <ComponentHeader
        title="Oficial"
        icon={
          <img src="/assets/icons/racha_arrow.svg" className="w-3 h-3"></img>
        }
      />
      <div className="bg-fifth p-2 rounded  w-full">
        <p className="text-xs text-center font-bold text-third">
          ¡Aprende sobre nutrición!
        </p>
      </div>

      <PublicacionNew
        nombre="Juan Pablo Muñiz"
        date="13 ABR 2023"
        descripcion="Comer saludable el dificil, no siempre tiene la motivación. Lo que a mi me motiva el ver mi yo del pasado."
        image="/assets/cambio_fisico.jpg"
      />
    </div>
  );
}
