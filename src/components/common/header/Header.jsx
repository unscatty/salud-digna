import { Link, matchPath } from 'react-router-dom';
import { MainNavigationItems } from '~/constants/main-navigation';
// The navigation items are mapped to a new array of objects, to assign them a header component.
const HeaderItems = MainNavigationItems.map((navItem) => {
  // For home page, we want to render a custom header
  if (navItem.path === '/') {
    return {
      ...navItem,
      headerComponent: HomeHeader,
    };
  }

  // Other nav items will render a header with page name and icon
  return {
    ...navItem,
    headerComponent: (isSticky) => (
      <HeaderBuilder
        title={navItem.name}
        iconClass={navItem.iconClass}
        isSticky={isSticky}
      />
    ),
  };
});

// To build the header with page name and icon
function HeaderBuilder({ title, iconClass, isSticky }) {
  return (
    <div className="inline-flex gap-3 items-center">
      <i
        // Change icon size based on sticky state
        className={`${iconClass} ${
          isSticky ? 'w-7 h-7' : 'w-5 h-5'
        } text-third`}
      />
      <p className="text-4 font-bold text-third">{title}</p>
    </div>
  );
}

export default function Header() {
  const { pathname } = useLocation();

  const [isSticky, setSticky] = useState(false);

  // Get header component that matches current path
  const activeHeader = useMemo(() => {
    if (pathname === '/') {
      return HomeHeader;
    }

    const activeItem = HeaderItems.filter((item) => item.path !== '/').find(
      (item) => {
        const match = matchPath(`${item.path}/*`, pathname);
        return match !== null;
      },
    );

    return activeItem?.headerComponent ?? HomeHeader;
  }, [pathname]);

  const headerRef = useRef(null);

  // Use intersection observer to detect when header is sticky
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setSticky(e.intersectionRatio < 1),
      { threshold: [1] },
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [headerRef]);
  return (
    <div
      className={`sticky -top-4 flex py-5 justify-between text-black px-global bg-first z-999 ${
        isSticky ? 'shadow-[0px_5px_10px_0_rgba(0,0,0,0.35)]' : ''
      }`}
      ref={headerRef}
    >
      {activeHeader(isSticky)}
      <div className="inline-flex justify-between gap-2 items-center">
        <div className="inline-flex justify-center items-center bg-third aspect-square rounded-full h-8 shadow-md">
          <i className="i-heroicons:bell text-gray-8 w-5.5 h-5.5 aspect-square" />
          <span className="absolute -translate-y-2 translate-x-2 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
          </span>
        </div>
        <Link to="perfil">
          <div className="inline-flex justify-center items-center bg-third aspect-square rounded rounded-xl h-10 shadow-md">
            <i className="i-heroicons:user-20-solid text-fourth w-6 h-6 aspect-square" />
          </div>
        </Link>
      </div>
    </div>
  );
}
