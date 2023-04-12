export default function EDVMainCard({ tab, children }) {
  return (
    <div className="flex flex-col h-full">
      <div className=" card flex-auto">
        <div className="flex gap-3 text-black items-center">
          <i className={`${tab.iconClass} w-[14px] h-[14px] text-black`} />
          <p className="font-bold text-sm">{tab.name}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
