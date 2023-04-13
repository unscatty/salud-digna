export default function ListaItem({ comida }) {
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

  return (
    <div className="item-container flex bg-third w-full p-1.5 rounded justify-between">
      <div className="checkbox flex items-center ">
        <div className="flex items-center mr-4">
          <input
            id="green-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="green-checkbox"
            className="ml-4 text-xs font-medium text-gray-900 dark:text-gray-300 flex gap-2"
          >
            <img src="/assets/yogurt.png" className="w-5 h-5"></img>
            <p>{comida.name}</p>
          </label>
        </div>
      </div>
      <div className="counter-container flex gap-3 items-center">
        <span
          className="minus-icon  text-[8px]  font-semibold inline-block uppercase rounded-full text-third bg-red uppercase last:mr-0  font-bold drop-shadow-md aspect-square flex items-center w-5 h-5 justify-center cursor-pointer"
          onClick={decrease}
        >
          -
        </span>
        <span className="text-xs">{counter}</span>
        <span
          className="minus-icon text-[8px]  font-semibold inline-block  w-5 h-5 justify-center uppercase rounded-full text-third bg-fifth uppercase last:mr-0  font-bold drop-shadow-md aspect-square flex items-center cursor-pointer"
          onClick={increase}
        >
          +
        </span>
      </div>
    </div>
  );
}
