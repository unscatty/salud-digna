import ComidaDeHoy from '~/components/home/comida/ComidaDeHoy';
import EjercicioDelDia from '~/components/home/ejercicio/EjercicioDelDia';
import Estadisticas from '~/components/home/estadisticas/Estadisticas';

export default function index() {
  return (
    <>
      <div className="p-5 bg-white rounded-lg mb-4">
        <Racha link={true} />
      </div>
      <Estadisticas />
      <ComidaDeHoy />
      <EjercicioDelDia />
    </>
  );
}
