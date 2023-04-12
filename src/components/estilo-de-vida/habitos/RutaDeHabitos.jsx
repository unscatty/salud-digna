// Ruta de habitos con grid 3 rows y 3 columns, uno del lado izquiedo el otro derecho una row abajo y con un flecha entre ellos y el tercero a la izquierda abajo  con una flecha
export default function RutaDeHabitos() {
  return (
    <div className="racha-container mb-4">
      <div className="racha-container_days">
        <ComponentHeader
          title="Ruta de habitos"
          icon={
            <img
              src="/src/assets/icons/racha_arrow.svg"
              className="w-3 h-3"
            ></img>
          }
        />
      </div>
      {/* Ruta de habitoa */}
      <div className="bg-third p-4 rounded">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
              style={{ left: '50%' }}
            ></div>

            <div className=" flex justify-between items-center w-full right-timeline flex-row-reverse">
              <div className="order-1 w-5/12">
                <p className="text-[9px] p-2 bg-gray-100 rounded">Tomar varios litros de agua al día ayuda a eliminar toxinas y desechos que nuestro cuerpo no necesita</p>
                  
              </div>
              <div className="z-20 flex items-center order-1 bg-fifth shadow-xl w-6 h-6 rounded-full">
                <h1 className="mx-auto font-semibold text-xs text-white">1</h1>
                
              </div>
              <div className="order-1 rounded-lg shadow-xl w-5/12 text-center p-2 bg-fifth flex justify-center flex-col items-center">
                <h3 className="mb-1 font-bold text-white text-xs">
                  Tomar 2L de agua diarios
                </h3>
                <img src="/src/assets/water.png" alt="" className="w-15 h-15" />
                <p className="text-[10px] p-1 font-bold text-fifth bg-third rounded mt-2">
                  COMPLETADO
                </p>
              </div>
              
              
            </div>

            <div className="flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12">
                <p className="text-[9px] p-2 bg-gray-100 rounded">Cuando cocinamos en casa tenemos más control sobre los ingredientes y la calidad de estos</p>
              </div>
              <div className="z-20 flex items-center order-1 bg-second shadow-xl w-6 h-6 rounded-full">
                <h1 className="mx-auto font-semibold text-xs text-fifth">2</h1>
              </div>
              <div className="order-1 rounded-lg shadow-xl w-5/12 text-center p-2 bg-second flex justify-center flex-col items-center">
                <h3 className="mb-1 font-bold text-black text-xs">
                  Cocina en casa la comida
                </h3>
                <img src="/src/assets/sarten.webp" alt="" className="w-20" />
                <p className="text-[10px] p-1 font-bold text-third bg-fifth rounded mt-2">
                  COMPLETAR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
