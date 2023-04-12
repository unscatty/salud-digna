import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
// import { EstiloDeVidaTabs } from '~/constants/estilo-de-vida/';

export default function EstiloDeVidaLayout() {
  return (
    <div className="container">
      <div className="w-full bg-white rounded-2xl p-4">
        <div className="flex flex-col h-full text-xs ">
          <p className='self-left mb-1 font-semibold'>Frase del día</p>
          <p className='font-italic'>
            “Deje que los alimentos sean su medicina y que la medicina sea su
            alimento”
          </p>
        </div>
      </div>
      <Tab.Group defaultIndex={0}>
        <Tab.List className="grid grid-cols-3 gap-3.5 my-3">
          {EstiloDeVidaContents.map((tab) => (
            <Tab as={Fragment} key={tab.name}>
              {({ selected }) => (
                <button
                  className={`${
                    selected ? 'bg-third' : 'bg-second'
                  } rounded-full p-1 text-center text-xs font-bold text-fourth focus:outline-none`}
                >
                  {tab.name}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {EstiloDeVidaContents.map((tab) => (
            <Tab.Panel as={Fragment} key={tab.name}>
              <tab.content />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
