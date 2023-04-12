// Compare this snippet from src/components/progreso/graficas/GraficaSueno.jsx:
export default function GraficaSueno({ height } = { height: 300 }) {
  const daysData = [7, 6, 7, 6.5, 5.5, 8, 7.9];

  // Compute average from daysData
  const average = daysData.reduce((acc, num) => acc + num, 0) / daysData.length;

  return (
    <div className="container">
      <div className="flex flex-col justify-between">
        <div className="inline-flex gap-1 items-center justify-start">
          <i className="i-mdi:sleep text-amber-5" />
          <p className="font-500 text-xs">Sueño</p>
        </div>
        <BarSueno height={height} daysData={daysData} />
        <div className="">
          <p className="font-bold text-xs">{average.toFixed(1)} hrs</p>
          <p className="font-200 text-2.5 -mt-0.75">Promedio</p>
        </div>
      </div>
    </div>
  );
}
