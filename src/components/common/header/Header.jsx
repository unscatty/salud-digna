import { NavigationItems } from '~/constants/navigation';

// The navigation items are mapped to a new array of objects, to assign them a header component.
const HeaderItems = NavigationItems.map((navItem) => {
  // For home page, we want to render a custom header
  if (navItem.path === '/') {
    return {
      ...navItem,
      headerComponent: <HomeHeader />,
    };
  }

  return {
    ...navItem,
    headerComponent: (
      <HeaderBuilder title={navItem.name} iconClass={navItem.iconClass} />
    ),
  };
});

// To build the header with page name and icon
function HeaderBuilder({ title, iconClass }) {
  return (
    <div className="inline-flex gap-3 items-center">
      <i className={`${iconClass} text-black w-5 h-5 bg-black`} />
      <p className="text-4 font-bold">{title}</p>
    </div>
  );
}

export default function Header() {
  const { pathname } = useLocation();

  // Get header component that matches current path
  const activeHeader = useMemo(() => {
    const activeItem = HeaderItems.find((item) => item.path === pathname);

    return activeItem.headerComponent ?? <HomeHeader />;
  }, [pathname]);

  return (
    <div className="sticky top-0 flex justify-between text-black py-1 bg-primary mt-4 px-6">
      {activeHeader}
      <div className="inline-flex justify-center items-center bg-[#F5BBC0] aspect-square rounded rounded-xl h-10">
        <i className="i-heroicons:user-20-solid text-white w-6 h-6 aspect-square" />
      </div>
    </div>
  );
}
