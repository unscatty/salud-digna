export default function Estadisticas(props) {
  return (
    <div className="estadisticas p-5 bg-second rounded-lg mb-4">
      <ComponentHeader
        icon={
          <i className="i-heroicons:chart-bar-20-solid color-black w-3 h-3"></i>
        }
        title="Estadísticas"
        link="/tu-progreso"
      />

      <div className="grid grid-cols-2 gap-4">
        <div className="card">
          <GraficaCalorias />
        </div>
        <div className="card">
          <GraficaSueno height={400} />
        </div>
      </div>
    </div>
  );
}
