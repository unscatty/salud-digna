export default function RegistroItem() {
  return (
    <div className="item-container flex bg-third w-full p-1.5 rounded justify-between">
      <div className="checkbox flex items-center ">
        <div className="flex items-center items-center gap-2 text-xs font-medium">
          <img src="/src/assets/yogurt.png" className="w-5 h-5"></img>
          <p>Yogurt</p>
        </div>
      </div>
      <div className="counter-container flex gap-3 items-center">
        <span className="minus-icon  text-[8px]  font-semibold inline-block uppercase rounded-full text-third bg-red uppercase last:mr-0  font-bold drop-shadow-md aspect-square flex items-center w-5 h-5 justify-center">
          -
        </span>
      </div>
    </div>
  );
}
