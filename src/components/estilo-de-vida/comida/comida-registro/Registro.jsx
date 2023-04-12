import RegistroItem from "./RegistroItem";

export default function Registro() {
  return (
    <div className="">
      <div className="racha-container_days">
        <ComponentHeader
          title="Registro del dia"
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

        <div className="grid grid-cols-3 gap-2 pb-4">
          <div className="grid grid-rows-[1fr_auto]">
            <PlatilloPlan
              tiempo="DESAYUNO"
              calorias="457 cal"
              logo={<img src="/src/assets/yogurt.png" className="w-100"></img>}
              descripcion="Yogurt con arandanos"
              state="inactive"
            />
            <div className="flex justify-center align-items p-1 bg-iconActive text-third rounded mt-2 text-xs">
              Agregar
            </div>
          </div>
          <div className="grid grid-rows-[1fr_auto]">
            <PlatilloPlan
              tiempo="COMIDA"
              calorias="457 cal"
              logo={<img src="/src/assets/manzana.svg" className="w-100"></img>}
              descripcion="Colifor y manzana"
              state="inactive"
            />
            <div className="flex justify-center align-items p-1 bg-iconActive text-third rounded mt-2 text-xs">
              Agregar
            </div>
          </div>

          <div className="grid grid-rows-[1fr_auto]">
            <PlatilloPlan
              tiempo="CENA"
              calorias="457 cal"
              logo={<img src="/src/assets/frutas.svg" className="w-100"></img>}
              descripcion="Frutas con almendras"
              state="inactive"
            />
            <div className="flex justify-center align-items p-1 bg-iconActive text-third rounded mt-2 text-xs">
              Agregar
            </div>
          </div>
        </div>

        <div className="bg-fifth p-2 rounded mb-2">
          <p className="text-xs text-center font-semibold text-third">
            ¡Ingresa que comiste el dia de hoy!
          </p>
        </div>

        <div>
          <RegistroItem />
        </div>
      </div>
    </div>
  );
}
