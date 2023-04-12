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
      } grid grid-rows-[auto_auto_auto] gap-2 position-relative`}
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
      {props.state === 'active' && (
        <span class="position-absolute left-50% translate-[-50%] translate-y-[-50%] text-[8px]  font-semibold inline-block  px-2 uppercase rounded-full text-fifth bg-second uppercase last:mr-0 mr-1 font-bold drop-shadow-md">
          HORA
        </span>
      )}
    </div>
  );
}
