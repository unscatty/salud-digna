import { Tab } from '@headlessui/react';
import Publicacion from '~/components/comunidad/Publicacion';

export default function Comunidad() {
  return (
    <>
      <div className="container ">
        <div className="text-white text-center font-bold w-full mt-2 bg-[#3E9F79] aspect-[6] rounded-2xl flex justify-center">
          <p className="self-center">Comparte tu progreso con los demas</p>
        </div>

        <Tab.Group>
          <Tab.List className={'w-full flex justify-center mt-5 mb-5'}>
            <Tab className={'w-1/2 border-blueGray'}>
              {({ selected }) => (
                <div
                  className={`${
                    selected ? 'bg-second' : 'bg-white'
                  } w-full  rounded-1`}
                >
                  Publico
                </div>
              )}
            </Tab>
            <Tab className={'w-1/2 border-blueGray'}>
              {({ selected }) => (
                <div
                  className={`${
                    selected ? 'bg-second' : 'bg-light'
                  } w-full  rounded-1`}
                >
                  Oficial
                </div>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel
              className={
                'w-full bg-white rounded-3xl flex flex-col items-center pt-5 mt-5'
              }
            >
              <Publicacion className={''} />
            </Tab.Panel>
            <Tab.Panel
              className={
                'w-full bg-white flex rounded-3xl flex-col items-center pt-5'
              }
            >
              <Publicacion className={''} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
