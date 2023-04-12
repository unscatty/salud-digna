export default function EjercicioCard(props) {
  return (
    <div className="card flex flex-col items-center justify-between p-4">
      <div className="card-header text-xs text-center font-bold">
        <p>{props.ejercicio}</p>
        <p>{props.tiempo}</p>
      </div>
      <div>
        <img src={props.image} alt="ejercicio" className="w-100" />
      </div>
    </div>
  );
}
