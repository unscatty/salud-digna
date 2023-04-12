export default function EstudiosItem({ analysis }) {
  return (
    <li key={analysis.handle} className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-8 w-8" src={analysis.icon} alt="" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {analysis.name}
          </p>
          <p className="text-sm text-gray-500 truncate">
            Realizado el {analysis.date}
          </p>
        </div>
        <div>
          <span
            className={`${
              analysis.isReady
                ? 'bg-green-100 text-green-900'
                : 'bg-sky-100 text-sky-800'
            } inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}
          >
            {analysis.isReady ? 'Listo' : 'Pendiente'}
          </span>
        </div>
      </div>
    </li>
  );
}
