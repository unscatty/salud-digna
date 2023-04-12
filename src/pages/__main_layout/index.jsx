import ComidaDeHoy from '~/components/home/comida/ComidaDeHoy';
import EjercicioDelDia from '~/components/home/ejercicio/EjercicioDelDia';
import Estadisticas from '~/components/home/estadisticas/Estadisticas';

export default function index() {
  return (
    <>
      <Racha link={true} />
      <Estadisticas />
      <ComidaDeHoy />
      <EjercicioDelDia />
    </>
  );
}
