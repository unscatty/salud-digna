import ComidaDeHoy from '~/components/home/comida/ComidaDeHoy';
import EjercicioDelDia from '~/components/home/ejercicio/EjercicioDelDia';
import Estadisticas from '~/components/home/estadisticas/Estadisticas';

// import { redirect } from 'react-router-dom';

export default function index() {
  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');

    console.log({ isLogged });

    if (!isLogged || isLogged === 'false') {
      window.location.href = '/login';
    }
  }, []);

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
