export default function Salud() {
  return (
    <div className="container">
      <div className="w-full mt-2 bg-gray-6 aspect-[2] rounded-2xl"></div>
      <div className="grid grid-cols-3 gap-3.5 mt-4 mb-2">
        {Array(3)
          .fill()
          .map((_, index) => (
            <div className="flex flex-col gap-2">
              <div
                key={index}
                className="rounded-2xl aspect-[3] bg-gray-5"
              ></div>
            </div>
          ))}
      </div>
      <div className="w-full mt-2 bg-gray-6 aspect-[1] rounded-2xl"></div>
    </div>
  );
}
