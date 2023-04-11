import { NavigationItems } from '~/constants/navigation';

export default function BottomNavbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const scroll = useScroll(document);
  const threshold = 10;

  useEffect(() => {
    if (!scroll) return;

    if (scroll.top > prevScrollPos && scroll.top - prevScrollPos > threshold) {
      setVisible(false);
    } else if (
      scroll.top < prevScrollPos &&
      prevScrollPos - scroll.top > threshold
    ) {
      setVisible(true);
    }

    setPrevScrollPos(scroll.top);
  }, [scroll]);

  return (
    <>
      <div
        className={`transition ease-in-out duration-300 ${
          visible ? '' : 'translate-y-20'
        } fixed bottom-0 m-auto my-5 z-0 w-full px-global`}
      >
        <div className="inline-flex rounded-full justify-evenly bg-white h-14 bg-black-500 w-full shadow-[0px_5px_2px_0_rgba(0,0,0,0.35)]">
          {NavigationItems.map((navItem) => {
            return (
              <NavLink
                key={navItem.name}
                activeClassName="text-icon-active"
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-icon-active' : 'text-icon-inactive'
                  } relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400`
                }
                to={navItem.path}
              >
                <i className={`${navItem.iconClass} w-6 h-6`} />
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
