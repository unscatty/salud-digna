import { Tab } from '@headlessui/react';
import { ComidaTabs } from '~/constants/estilo-de-vida/comida-tabs';
import { EstiloDeVidaComidaTab } from '~/constants/estilo-de-vida/estilo-de-vida-tabs';
import { Fragment } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function EDVComida() {
  return (
    <EDVMainCard tab={EstiloDeVidaComidaTab}>
      <Tab.Group defaultIndex={0}>
        <Tab.List className="z-0 rounded-full shadow flex divide-x divide-first my-3 border-first border-1">
          {ComidaContents.map((tab, tabIdx) => (
            <Tab key={tab.name} as={Fragment}>
              {({ selected }) => (
                <button
                  className={classNames(
                    selected ? 'text-third bg-first' : 'text-first bg-third',
                    tabIdx === 0 ? 'rounded-l-full' : '',
                    tabIdx === ComidaTabs.length - 1 ? 'rounded-r-full' : '',
                    'min-w-0 flex-auto overflow-hidden py-1 px-4 text-xs font-medium text-center focus:z-10 focus:outline-none',
                  )}
                >
                  {tab.name}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {ComidaContents.map((tab) => (
            <Tab.Panel as={Fragment} key={tab.name}>
              <tab.content />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </EDVMainCard>
  );
}
