const medAnaylisis = [
  {
    name: 'Rayos X',
    icon: '/estudios/008-x rays.svg',
    date: '2023/04/02',
    isReady: true,
  },
  {
    name: 'Electrocardiograma',
    icon: '/estudios/004-neurology.svg',
    date: '2023/03/28',
    isReady: true,
  },
  {
    name: 'Gastroenterología',
    icon: '/estudios/006-gastroenterology.svg',
    date: '2023/04/02',
  },
  {
    name: 'Oftalmología',
    icon: '/estudios/029-ophtalmology.svg',
    date: '2023/03/26',
  },
];

export default function EstudiosList() {
  return (
    <div>
      <div className="flow-root mt-6">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {medAnaylisis.map((analysis, index) => (
            <EstudiosItem key={index} analysis={analysis} />
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <a
          href="#"
          className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Ver más
        </a>
      </div>
    </div>
  );
}
