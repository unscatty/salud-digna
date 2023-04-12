export default function ComidaDeHoy(props) {
  return (
    <div className="estadisticas p-5 bg-white rounded-lg mb-4">
      <ComponentHeader
        icon={
          <i className="i-heroicons:chart-bar-20-solid color-black w-3 h-3"></i>
        }
        title="Comida de Hoy"
        link="/estilo-de-vida"
      />

      <div className="grid grid-cols-3 gap-4">
        <Platillo
          tiempo="DESAYUNO"
          calorias="457 cal"
          logo={
            <img
              src="/src/assets/Healthy breakfast meals set-ai 1.png"
              className="w-100"
            ></img>
          }
          descripcion="Yogurt con arandanos"
        />
        <Platillo
          tiempo="DESAYUNO"
          calorias="457 cal"
          logo={
            <img
              src="/src/assets/Healthy breakfast meals set-ai 1.png"
              className="w-100"
            ></img>
          }
          descripcion="Yogurt con arandanos"
        />
        <Platillo
          tiempo="DESAYUNO"
          calorias="457 cal"
          logo={
            <img
              src="/src/assets/Healthy breakfast meals set-ai 1.png"
              className="w-100"
            ></img>
          }
          descripcion="Yogurt con arandanos"
        />
      </div>
    </div>
  );
}
