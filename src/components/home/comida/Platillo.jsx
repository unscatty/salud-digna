export default function Platillo(props) {
  return (
    <div className="platillo card bg-second grid grid-rows-[auto_auto_auto]">
      <div className="platillo_header text-xs text-center">
        <p className="tiempo font-bold text-fourth">{props.tiempo}</p>
        <p className="calorias font-semibold text-iconActive">{props.calorias}</p>
      </div>
      <div className="platillo_body">{props.logo}</div>
      <div className="platillo_descripcion text-xs">{props.descripcion}</div>
    </div>
  );
}
