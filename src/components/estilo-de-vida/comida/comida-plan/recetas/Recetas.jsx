import RecetasPlatillo from './RecetasPlatillo';

export default function Recetas() {
  return (
    <div className="racha-container grid grid-cols-[1fr_auto] gap-3 pt-4">
      <div className="racha-container_days">
        <ComponentHeader
          title="Recetas"
          icon={
            <img
              src="/src/assets/icons/racha_arrow.svg"
              className="w-3 h-3"
            ></img>
          }
        />
        <div className="bg-fifth p-2 rounded mb-2">
          <p className="text-xs text-center font-semibold text-third">
            ¡Agrega recetas recomendadas a tu plan!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <RecetasPlatillo
            comida="Yogurt con arandanos"
            icon={<img src="/src/assets/yogurt.png" className="w-100"></img>}
          />
          <RecetasPlatillo
            comida="Yogurt con arandanos"
            icon={<img src="/src/assets/yogurt.png" className="w-100"></img>}
          />
          <RecetasPlatillo
            comida="Yogurt con arandanos"
            icon={<img src="/src/assets/yogurt.png" className="w-100"></img>}
          />
          <RecetasPlatillo
            comida="Yogurt con arandanos"
            icon={<img src="/src/assets/yogurt.png" className="w-100"></img>}
          />
          <RecetasPlatillo
            comida="Yogurt con arandanos"
            icon={<img src="/src/assets/yogurt.png" className="w-100"></img>}
          />
          <RecetasPlatillo
            comida="Yogurt con arandanos"
            icon={<img src="/src/assets/yogurt.png" className="w-100"></img>}
          />
        </div>
      </div>
    </div>
  );
}
