// Componente cuadrado que muestre los 7 dias de la semana y el numero de rachas que se han hecho. Si el dia fue cumplido se pone de otro color

const colors = {
  active: {
    background: 'fifth',
    text: 'third',
  },
  inactive: {
    background: 'third',
    text: 'fifth',
  },
};

export default function RachaDia(props) {
  return (
    <div className="racha_dia flex">
      <div
        className={`racha_dia__container bg-${
          colors[props.state].background
        } rounded text-third font-bold`}
      >
        <div
          className={`racha_dia__container__date text-center p-1 text-xs text-${
            colors[props.state].text
          }`}
        >
          <p className="racha_dia__container__day__text ">{props.day}</p>
          <p className="racha_dia_container_month_texy ">{props.month}</p>
        </div>
      </div>
    </div>
  );
}
