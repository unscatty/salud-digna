import { MainNavigationItemsNutri } from '../../constants/nutri-navigations';

export default function BottomNavbarNutriologo() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const scroll = useScroll(document);
  const threshold = 10;

  return (
    <>
      <div
        className={`transition ease-in-out duration-300 ${
          visible ? '' : 'translate-y-20'
        } fixed bottom-0 m-auto my-5 z-0 w-full px-global`}
      >
        <div className="inline-flex rounded-full justify-evenly bg-white h-14 bg-black-500 w-full shadow-[0px_5px_2px_0_rgba(0,0,0,0.35)]">
          {MainNavigationItemsNutri.map((navItem) => {
            return (
              <NavLink
                key={navItem.name}
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-icon-active' : 'text-icon-inactive'
                  } relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400`
                }
                to={navItem.path}
              >
                <i className={`${navItem.iconClass} w-6 h-6 text-gray-400 `} />
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
