import { EstiloDeVidaEjercicioTab } from '~/constants/estilo-de-vida/estilo-de-vida-tabs';

export default function Ejercicio() {
  return (
    <EDVMainCard tab={EstiloDeVidaEjercicioTab}>
      <div className="bg-second rounded-2xl p-4 mt-4">
        <div className="flex gap-2 items-center">
          <i className="i-mdi:calendar" />
          <p className="font-bold">Ejercicio del día</p>
        </div>
        <div className="flex justify-around items-center my-4">
          {Array(7)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow-lg aspect-[0.75]"
              ></div>
            ))}
        </div>
        <div className="grid grid-cols-2 gap-2 my-4">
          <div className="card text-center">
            <p className="font-bold text-sm">ESTIRAMIENTO</p>
            <p className="font-bold text-sm">15 minutos</p>
            <div className="card bg-black aspect-square">
              <p className="text-white">icono</p>
            </div>
          </div>
          <div className="card text-center">
            <p className="font-bold text-sm">CAMINATA</p>
            <p className="font-bold text-sm">30 minutos</p>
            <div className="card bg-black aspect-square">
              <p className="text-white">icono</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center my-4">
          <i className="i-mdi:calendar" />
          <p className="font-bold">Mi ejercicio</p>
        </div>
      </div>
    </EDVMainCard>
  );
}
