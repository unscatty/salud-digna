export default function SaludMainCard({ tab, children }) {
  return (
    <div className="flex flex-col h-full">
      <div className=" card flex-auto">
        <div className="flex gap-3 text-black items-center">
          <i className={`${tab.iconClass} w-5 h-5 text-black`} />
          <p className="font-bold">{tab.name}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
