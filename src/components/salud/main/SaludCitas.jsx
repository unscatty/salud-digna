export default function SaludCitas({ tab }) {
  return (
    <div className="flex flex-col h-full">
      <div className="card p-3 mb-2">
        <Calendar />
      </div>
      <div className=" card flex-auto">
        <div className="flex gap-3 text-black items-center">
          <i className={`${tab.iconClass} w-5 h-5 text-black`} />
          <p className="font-bold">{tab.name}</p>
          <div className="bg-gray-100 ml-auto p-2.5 rounded-full shadow-sm">
            <div className="i-mdi:qrcode-scan  w-5 h-5 text-black" />
          </div>
        </div>
        <div className="card-second my-3">
          <div className="flex gap-3 text-black items-center">
            <p className="font-bold text-sm">Mis citas</p>
            <button
              type="button"
              className="ml-auto inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-md text-white bg-first"
            >
              Nueva cita
            </button>
          </div>
          <div className="card p-3 my-3">
            <CitaList />
          </div>
        </div>
      </div>
    </div>
  );
}
