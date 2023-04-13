import ComidaDeHoy from '~/components/home/comida/ComidaDeHoy';
import EjercicioDelDia from '~/components/home/ejercicio/EjercicioDelDia';
import Estadisticas from '~/components/home/estadisticas/Estadisticas';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '~/db/firebase-config.jsx';

export default function index() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');

    onAuthStateChanged(auth, (user) => {
      if (!user && (!isLogged || isLogged === 'false')) {
        console.log('redirecting');
        window.location.href = '/login';
      }
    });
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
