import Recompensas from '~/components/progreso/Recompensas';

export default function Estadisticas() {
  return (
    <div className="container">
      <div className="p-5 bg-white rounded-lg mb-4">
        <Racha link={true} />
        <Recompensas />
      </div>

      <div className="w-full card my-4">
        <GraficaPesoPerdido month={'Octubre'} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="card">
          <GraficaCalorias />
        </div>
        <div className="card">
          <GraficaSueno height={400} />
        </div>

        <div className="card col-span-2">
          <GraficaPasos />
        </div>
      </div>
    </div>
  );
}
