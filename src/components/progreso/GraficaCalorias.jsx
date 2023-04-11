export default function GraficaCalorias() {
  const meta = 600;

  return (
    <div className="container">
      <div className="inline-flex gap-1 items-center mb-3 justify-start">
        <i className="i-heroicons:fire-20-solid text-amber-5" />
        <p className="font-500">Calorías</p>
      </div>
      <DonutCalorias calorias={450} meta={meta} />
      <div className="mt-4">
        <p className="font-bold">{meta} Kcals</p>
        <p className="font-200 text-2.5 -mt-0.75">Meta diaria</p>
      </div>
    </div>
  );
}
