import { Tab } from '@headlessui/react';
import Publico from '~/components/comunidad/Publico';

export default function Comunidad() {
  return (
    <>
      <div className="w-full bg-white rounded-lg p-4">
        <ComponentHeader
          title="Comunidad"
          icon={
            <img src="/assets/icons/racha_arrow.svg" className="w-3 h-3"></img>
          }
        />

        <Tab.Group>
          <Tab.List
            className={
              'z-0 rounded-full shadow flex divide-x divide-first border-first border-1 text-xs font-bold'
            }
          >
            <Tab className={'w-1/2 border-blueGray'}>
              {({ selected }) => (
                <div
                  className={` ${
                    selected ? 'text-third bg-first' : 'text-first bg-third'
                  } rounded-l-full py-1`}
                >
                  Publico
                </div>
              )}
            </Tab>
            <Tab className={'w-1/2 border-blueGray'}>
              {({ selected }) => (
                <div
                  className={` ${
                    selected ? 'text-third bg-first' : 'text-first bg-third'
                  } rounded-r-full py-1`}
                >
                  Oficial
                </div>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel
              className={
                'w-full bg-white rounded-3xl flex flex-col items-center'
              }
            >
              <Publico />
            </Tab.Panel>
            <Tab.Panel
              className={
                'w-full bg-white flex rounded-3xl flex-col items-center'
              }
            >
              <Oficial />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
