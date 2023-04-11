import { NavigationItems } from '~/constants/navigation';

// The navigation items are mapped to a new array of objects, to assign them a header component.
const HeaderItems = NavigationItems.map((navItem) => {
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
        } text-black bg-black`}
      />
      <p className="text-4 font-bold">{title}</p>
    </div>
  );
}

export default function Header() {
  const { pathname } = useLocation();

  const [isSticky, setSticky] = useState(false);

  // Get header component that matches current path
  const activeHeader = useMemo(() => {
    const activeItem = HeaderItems.find((item) => item.path === pathname);

    return activeItem.headerComponent ?? HomeHeader;
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
      className={`sticky -top-4 flex pt-5 pb-1 justify-between text-black bg-primary px-global ${
        isSticky ? 'shadow-[0px_5px_10px_0_rgba(0,0,0,0.35)]' : ''
      }`}
      ref={headerRef}
    >
      {activeHeader(isSticky)}
      <div className="inline-flex justify-center items-center bg-[#F5BBC0] aspect-square rounded rounded-xl h-10">
        <i className="i-heroicons:user-20-solid text-white w-6 h-6 aspect-square" />
      </div>
    </div>
  );
}
