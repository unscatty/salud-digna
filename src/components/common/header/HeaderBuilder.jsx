export default function HeaderBuilder({ title, iconClass }) {
  return (
    <div className="inline-flex gap-4 items-center">
      <i className={`${iconClass} text-black w-5 h-5 bg-black`} />
      <p className="text-5">{title}</p>
    </div>
  );
}
