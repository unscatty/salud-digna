export default function EjercicioDelDia(props) {
  return (
    <div className="racha-container grid grid-cols-[1fr_auto] gap-3 p-5 bg-white rounded-lg pb-20">
      <div className="racha-container_days">
        <ComponentHeader
          title="Ejercicios de hoy"
          icon={
            <i className="i-heroicons:chart-bar-20-solid color-black w-3 h-3"></i>
          }
          link="estilo-de-vida"
        />
      </div>
    </div>
  );
}
