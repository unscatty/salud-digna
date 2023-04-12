export default function DespensaItem(props) {
  return (
    <div className=" card p-2 position-relative">
      <div
        className={`text-center  text-xs text-black text-xs flex gap-2 flex-col`}
      >
        <div className="position-relative">
          {props.icon}
          <span class="position-absolute right-0 bottom-0 translate-x-[-50%]  text-[8px]  font-semibold inline-block  px-2 uppercase rounded-full text-third bg-iconActive uppercase last:mr-0 mr-1 font-bold drop-shadow-md ">
            1
          </span>
        </div>
        <span class="minus-icon position-absolute right-0 top-0   text-[8px]  font-semibold  uppercase rounded-full text-third bg-fifth uppercase last:mr-0  font-bold drop-shadow-md aspect-square flex items-center h-5 w-5 justify-center">
          +
        </span>
        <span class="minus-icon position-absolute left-0 top-0   text-[8px]  font-semibold inline-block  px-2 uppercase rounded-full text-third bg-red uppercase last:mr-0  font-bold drop-shadow-md aspect-square flex items-center h-5 w-5">
          -
        </span>
        <p className=" ">{props.comida}</p>
      </div>
    </div>
  );
}
