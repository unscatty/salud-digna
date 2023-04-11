export default function GraficaPesoPerdido({ height, month }) {
  const daysData = [110, 100, 102, 105, 96, 94, 87.3];

  const totalLostWeight = daysData[0] - daysData[daysData.length - 1];

  return (
    <div className="container">
      <div className="inline-flex gap-1 items-center mb-3 justify-start">
        <i className="i-mdi:scale text-green-5" />
        <p className="font-500">Peso</p>
      </div>
      <LinePesoPerdido daysData={daysData} height={height} month={month} goal={65}/>
      <div className="mt-4">
        <p className="font-bold">{totalLostWeight.toFixed(1)} kg</p>
        <p className="font-200 text-2.5 -mt-0.75">Peso perdido hasta hoy</p>
      </div>
    </div>
  );
}
