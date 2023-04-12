export default function ComidaDeHoy(props) {
  return (
    <div className="estadisticas p-5 bg-white rounded-lg mb-4">
      <ComponentHeader
        icon={
          <img
            src="/src/assets/icons/comida_zanahoria.svg"
            className="w-3 h-3"
          ></img>
        }
        title="Comida de Hoy"
        link="/estilo-de-vida"
      />

      <div className="grid grid-cols-3 gap-4">
        <Platillo
          tiempo="DESAYUNO"
          calorias="457 cal"
          logo={<img src="/src/assets/yogurt.png" className="w-100"></img>}
          descripcion="Yogurt con arandanos"
          state="inactive"
        />
        <Platillo
          tiempo="COMIDA"
          calorias="457 cal"
          logo={<img src="/src/assets/manzana.svg" className="w-100"></img>}
          descripcion="Colifor y manzana"
          state="active"
        />
        <Platillo
          tiempo="CENA"
          calorias="457 cal"
          logo={<img src="/src/assets/frutas.svg" className="w-100"></img>}
          descripcion="Frutas con almendras"
          state="inactive"
        />
      </div>
    </div>
  );
}
