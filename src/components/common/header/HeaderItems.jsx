import { NavigationItems } from '~/constants/navigation';

export const HeaderItems = NavigationItems.map((navItem) => {
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
