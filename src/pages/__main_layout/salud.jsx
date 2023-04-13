import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { SaludMainContents } from '~/components/salud/SaludMainContents';
// import

export default function Salud() {
  return (
    <div className="container">
      <div className="card p-3">
        <Calendar />
      </div>
      <Tab.Group defaultIndex={0}>
        <Tab.List className="grid grid-cols-3 gap-3.5 my-3">
          {SaludMainContents.map((tab) => (
            <Tab as={Fragment} key={tab.name}>
              {({ selected }) => (
                <button
                  className={`${
                    selected ? 'bg-third' : 'bg-second'
                  } rounded-full p-1 text-center text-sm font-bold text-fourth focus:outline-none`}
                >
                  {tab.name}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="container">
          {SaludMainContents.map((tab) => (
            <Tab.Panel key={tab.name}>
              <tab.content tab={tab} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
