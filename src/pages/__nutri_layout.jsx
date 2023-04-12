// import { NutriHeader } from '../components/common/header/NutriHeader.jsx';

import NutriHeader from '~/components/common/header/NutriHeader';

export default function NutriLayout() {
  return (
    <div>
      {/* <NutriHeader /> */}
      <NutriHeader />
      <div className="container px-global text-black pb-[100]">
        {/* Main content goes here */}
        <Outlet />
        {/* End on main content */}
      </div>
      <BottomNavbarNutriologo />
    </div>
    // <div>nutri dashboard</div>
  );
}
