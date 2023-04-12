export default function MiEjercicio() {
  return (
    <div className="racha-container mb-4">
      <div className="racha-container_days">
        <ComponentHeader
          title="Mi Ejercicio"
          icon={
            <img
              src="/src/assets/icons/racha_arrow.svg"
              className="w-3 h-3"
            ></img>
          }
        />
      </div>
      <div className="bg-third p-4 rounded">
        <GraficaPasos />
      </div>
    </div>
  );
}
