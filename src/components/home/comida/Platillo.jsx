const colors = {
  active: {
    background: 'fifth',
    calorias: 'white',
    tiempo: 'white',
    descripcion: 'white',
  },
  inactive: {
    background: 'second',
    calorias: 'iconActive',
    tiempo: 'fourth',
    descripcion: 'black',
  },
};

export default function Platillo(props) {
  return (
    <div
      className={`platillo card bg-${
        colors[props.state].background
      } grid grid-rows-[auto_auto_auto] gap-2`}
    >
      <div className="platillo_header text-xs text-center">
        <p className={`tiempo font-bold text-${colors[props.state].tiempo}`}>
          {props.tiempo}
        </p>
        <p
          className={`calorias font-semibold text-${
            colors[props.state].calorias
          }`}
        >
          {props.calorias}
        </p>
      </div>
      <div className="platillo_body">{props.logo}</div>
      <div
        className={`platillo_descripcion text-xs text-center font-600 text-${
          colors[props.state].descripcion
        }`}
      >
        {props.descripcion}
      </div>
    </div>
  );
}
