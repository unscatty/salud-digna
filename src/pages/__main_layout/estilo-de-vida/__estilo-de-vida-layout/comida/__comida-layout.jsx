import { EstiloDeVidaComidaTab } from '~/constants/estilo-de-vida/estilo-de-vida-tabs';
import { ComidaTabs } from '~/constants/estilo-de-vida/comida-tabs';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ComidaLayout() {
  return (
    <EDVMainCard tab={EstiloDeVidaComidaTab}>
      <div className="z-0 rounded-full shadow flex divide-x divide-first my-3 border-first border-1">
        {ComidaTabs.map((tab, tabIdx) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              classNames(
                isActive ? 'text-third bg-first' : 'text-first bg-third',
                tabIdx === 0 ? 'rounded-l-full' : '',
                tabIdx === ComidaTabs.length - 1 ? 'rounded-r-full' : '',
                'min-w-0 flex-auto overflow-hidden py-1 px-4 text-sm font-medium text-center focus:z-10',
              )
            }
          >
            <span>{tab.name}</span>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </EDVMainCard>
  );
}
