<<<<<<< HEAD
import { React, useState } from 'react';

export default function DespensaItem(props) {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

=======
export default function DespensaItem(props) {
>>>>>>> 3b720c3f24502aa28a601f0a699b6b369c6e28fc
  return (
    <div className=" card p-2 position-relative">
      <div
        className={`text-center  text-xs text-black text-xs flex gap-2 flex-col`}
      >
        <div className="position-relative">
          {props.icon}
          <span class="position-absolute right-0 bottom-0 translate-x-[-50%]  text-[8px]  font-semibold inline-block  px-2 uppercase rounded-full text-third bg-iconActive uppercase last:mr-0 mr-1 font-bold drop-shadow-md ">
<<<<<<< HEAD
            {counter}
          </span>
        </div>
        <span
          class="minus-icon position-absolute right-0 top-0   text-[8px]  font-semibold  uppercase rounded-full text-third bg-fifth uppercase last:mr-0  font-bold drop-shadow-md aspect-square flex items-center h-5 w-5 justify-center"
          onClick={increase}
        >
          +
        </span>
        <span
          class="minus-icon position-absolute left-0 top-0   text-[8px]  font-semibold inline-block  px-2 uppercase rounded-full text-third bg-red uppercase last:mr-0  font-bold drop-shadow-md aspect-square flex items-center h-5 w-5"
          onClick={decrease}
        >
=======
            1
          </span>
        </div>
        <span class="minus-icon position-absolute right-0 top-0   text-[8px]  font-semibold  uppercase rounded-full text-third bg-fifth uppercase last:mr-0  font-bold drop-shadow-md aspect-square flex items-center h-5 w-5 justify-center">
          +
        </span>
        <span class="minus-icon position-absolute left-0 top-0   text-[8px]  font-semibold inline-block  px-2 uppercase rounded-full text-third bg-red uppercase last:mr-0  font-bold drop-shadow-md aspect-square flex items-center h-5 w-5">
>>>>>>> 3b720c3f24502aa28a601f0a699b6b369c6e28fc
          -
        </span>
        <p className=" ">{props.comida}</p>
      </div>
    </div>
  );
}
