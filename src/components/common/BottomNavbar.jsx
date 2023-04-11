import { NavigationItems } from '~/constants/navigation';

export default function BottomNavbar() {
  return (
    <div
      className="fixed bottom-0 m-6 my-5 z-0 inline-flex shadow-sm rounded-full justify-evenly bg-white h-14 bg-black-500 shadow-lg  shadow-black/50"
      style={{ width: 'calc(100vw - 48px)' }}
    >
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
  );
}
