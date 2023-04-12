import ComponentGen from '../ComponentGen';

export default function IADash() {
  return (
    <div className="bg-white rounded-2 mb-4 p-5">
      <ComponentGen
        icon={
          <i className="i-heroicons:cpu-chip-20-solid color-blueGray w-3 h-3"></i>
        }
        title="Inteligencia Artificial"
        link="/ia-nutri"
      />
      <PlanesPersona />
    </div>
  );
}
