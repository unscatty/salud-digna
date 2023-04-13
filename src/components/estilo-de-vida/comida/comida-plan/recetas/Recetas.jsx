import RecetasPlatillo from './RecetasPlatillo';

const recetas = [
  {
    comida: 'Yogurt con arandanos',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Avena con frutas',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Pollo asado con ensalada',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Pescado ahumado con verduras',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Tacos de pescado',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
  {
    comida: 'Tostadas de atún',
    icon: <img src="/assets/yogurt.png" className="w-100"></img>,
  },
];

export default function Recetas() {
  return (
    <div className="racha-container grid grid-cols-[1fr_auto] gap-3 pt-4">
      <div className="racha-container_days">
        <ComponentHeader
          title="Recetas"
          icon={
            <img src="/assets/icons/racha_arrow.svg" className="w-3 h-3"></img>
          }
        />
        <div className="bg-fifth p-2 rounded mb-2">
          <p className="text-xs text-center font-semibold text-third">
            ¡Agrega recetas recomendadas a tu plan!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {recetas.map((receta) => (
            <RecetasPlatillo comida={receta.comida} icon={receta.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
