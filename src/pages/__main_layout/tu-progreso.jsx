export default function Estadisticas() {
  return (
    <div className="container">
      <div className="w-full mb-4 mt-2 card aspect-[3] rounded-2xl p-5">
        <p>Racha</p>
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
