export default function RecetasPlatillo(props) {
  return (
    <div className=" card p-2">
      <div className={`text-center  text-xs text-black text-xs flex gap-2 flex-col`}>
        <p className=" ">{props.comida}</p>
        {props.icon}
      </div>
    </div>
  );
}
