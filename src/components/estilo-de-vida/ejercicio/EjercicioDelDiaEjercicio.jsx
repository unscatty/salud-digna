export default function EjercicioDelDiaEjercicio() {
  return (
    <div className="racha-container grid grid-cols-[1fr_auto] gap-3 mb-4">
      <div className="racha-container_days">
        <ComponentHeader
          title="Ejercicio del dia"
          icon={
            <img
              src="/src/assets/icons/racha_arrow.svg"
              className="w-3 h-3"
            ></img>
          }
        />
        <div className="flex justify-between pb-4">
          <PlanDia day={11} month={'ABR'} state="inactive" />
          <PlanDia day={12} month={'ABR'} state="inactive" />
          <PlanDia day={13} month={'ABR'} state="active" />
          <PlanDia day={14} month={'ABR'} state="inactive" />
          <PlanDia day={15} month={'ABR'} state="inactive" />
          <PlanDia day={16} month={'ABR'} state="inactive" />
          <PlanDia day={16} month={'ABR'} state="inactive" />
        </div>
        <div className="flex gap-3">
          <EjercicioCard
            ejercicio="Caminata"
            tiempo="30 minutos"
            image={'/src/assets/caminata.svg'}
          />
          <EjercicioCard
            ejercicio="Estiramiento"
            tiempo="15 minutos"
            image={'/src/assets/estiramiento.svg'}
          />
        </div>
      </div>
    </div>
  );
}
