import { EstiloDeVidaTabs } from '../../../constants/estilo-de-vida/estilo-de-vida-tabs';

export default function EstiloDeVidaLayout() {
  return (
    <div className="container">
      <div className="w-full mt-2 bg-white -6 aspect-[5] rounded-2xl">
        <div className="flex flex-col justify-center items-center h-full m-5px text-xs">
          “Deje que los alimentos sean su medicina y que la medicina sea su
          alimento”
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3.5 my-3">
        {EstiloDeVidaTabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              `${
                isActive ? 'bg-third' : ''
              } rounded-full p-1 text-center bg-second text-sm font-bold text-fourth`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
