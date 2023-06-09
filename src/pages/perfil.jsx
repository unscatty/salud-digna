import BottomNavbar from '~/components/common/BottomNavbar';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '~/db/firebase-config.jsx';

export default function Perfil() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const logout = async () => {
    localStorage.setItem('isLogged', null);

    await signOut(auth);

    window.location.href = '/login';
  };

  return (
    <>
      <div className="h-15 w-100% flex items-center">
        <div className="w-30 h-7 inline-flex justify-center items-center bg-transparent aspect-square rounded-full gap-3 mt-7 ml-3">
          <i className="i-heroicons:user-20-solid text-light w-6 h-6 aspect-square" />
          <p>Perfil</p>
        </div>
      </div>
      <div className="flex justify-center h-70% items-center flex-col space-y-7">
        <div className="w-20 h-20 inline-flex justify-center items-center bg-third aspect-square rounded rounded-full ring ring-white ring-4 shadow-md">
          {user ? (
            <img className="rounded-full" src={user.photoURL}></img>
          ) : (
            <i className="i-heroicons:user-20-solid text-fourth w-6 h-6 aspect-square" />
          )}
        </div>
        <div className="w-75 h-10 inline-flex justify-center items-center border-rounded-3xl bg-gray-300 transform">
          <p className="text-l text-black">Configuracion</p>
        </div>
        <div className="w-75 h-10 inline-flex justify-center items-center border-rounded-3xl bg-gray-300">
          <p className="text-l text-black">Mi Cuenta</p>
        </div>
        <div className="w-75 h-10 inline-flex justify-center items-center border-rounded-3xl bg-gray-300">
          <p className="text-l text-black">Mis datos</p>
        </div>
        <div className="w-75 h-10 inline-flex justify-center items-center border-rounded-3xl bg-gray-300">
          <p className="text-l text-black">Soporte</p>
        </div>
        <button
          onClick={logout}
          className="w-75 h-10 inline-flex justify-center items-center border-rounded-3xl bg-gray-300"
        >
          <p className="text-l text-black">Cerrar Sesión</p>
        </button>
      </div>
      <BottomNavbar />
    </>
  );
}
