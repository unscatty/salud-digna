import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '~/db/firebase-config';

export default function HomeHeader() {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      <p className="text-md font-bold text-third">
        Buenos días, {user ? user.displayName : 'Juan'}
      </p>
      <p className="text-xs text-third font-bold">
        Has perdido{' '}
        <span className="font-bold text-fourth font-extrabold">5.2kg</span>.
        ¡Sigue así!
      </p>
    </div>
  );
}
