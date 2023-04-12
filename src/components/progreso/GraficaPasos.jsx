export default function GraficaPasos({ height }) {
  const daysData = [7, 6, 7, 6.5, 5.5, 8, 7.9].map((n) => n * 100);

  const average = daysData.reduce((acc, num) => acc + num, 0) / daysData.length;

  return (
    <div className="container">
      <div className="inline-flex gap-1 items-center mb-3 justify-start">
        <i className="i-ion:footsteps text-blue-5" />
        <p className="font-500 text-xs">Pasos</p>
      </div>
      <LinePasos daysData={daysData} height={height} />
      <div className="mt-4">
        <p className="font-bold text-xs">{average.toFixed(1)} pasos</p>
        <p className="font-200 text-2.5 -mt-0.75">Promedio pasos al día</p>
      </div>
    </div>
  );
}
