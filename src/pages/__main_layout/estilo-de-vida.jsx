export default function EstiloDeVida() {
  return (
    <div className="container">
      <div className="w-full mt-2 bg-gray-6 aspect-[3] rounded-2xl"></div>
      <div className="grid grid-cols-3 gap-3.5 mt-4 mb-2">
        {Array(3)
          .fill()
          .map((_, index) => (
            <div className="flex flex-col gap-2">
              <div
                key={index}
                className="rounded-2xl aspect-[3] bg-gray-5"
              ></div>
              <div
                key={index}
                className="rounded-2xl aspect-[0.5] bg-gray-3"
              ></div>
            </div>
          ))}
      </div>
      <div className="-mx-global px-global flex overflow-x-auto gap-3.5 my-4 no-scrollbar">
        {Array(10)
          .fill()
          .map((_, index) => (
            <div
              key={index + 99}
              className={`flex-shrink-0 w-25 aspect-square rounded-2xl ${
                index % 2 === 0 ? 'bg-gray-3' : 'bg-gray-5'
              }`}
            ></div>
          ))}
      </div>
      <div className="grid grid-cols-3 gap-3.5 my-6 bg-gray-3 h-8 rounded-xl" />
      <div className="grid grid-cols-3 gap-3.5 mt-4 mb-2">
        {Array(18)
          .fill()
          .map((_, index) => (
            <div className="flex flex-col gap-2">
              <div
                key={index}
                className={`rounded-2xl aspect-square ${
                  (index - 1) % 3 === 0 ? 'bg-gray-5' : 'bg-gray-3'
                }`}
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
}
