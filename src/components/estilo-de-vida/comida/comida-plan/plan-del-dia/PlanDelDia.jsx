import PlatilloPlan from './PlatilloPlan';

export default function PlanDelDia() {
  return (
    <div className="racha-container grid grid-cols-[1fr_auto] gap-3 ">
      <div className="racha-container_days">
        <ComponentHeader
          title="Plan del dia"
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
        <div className="grid grid-cols-3 gap-2">
          <PlatilloPlan
            tiempo="DESAYUNO"
            calorias="457 cal"
            logo={<img src="/src/assets/yogurt.png" className="w-100"></img>}
            descripcion="Yogurt con arandanos"
            state="inactive"
          />
          <PlatilloPlan
            tiempo="COMIDA"
            calorias="457 cal"
            logo={<img src="/src/assets/manzana.svg" className="w-100"></img>}
            descripcion="Colifor y manzana"
            state="active"
          />
          <PlatilloPlan
            tiempo="CENA"
            calorias="457 cal"
            logo={<img src="/src/assets/frutas.svg" className="w-100"></img>}
            descripcion="Frutas con almendras"
            state="inactive"
          />
        </div>
      </div>
    </div>
  );
}
