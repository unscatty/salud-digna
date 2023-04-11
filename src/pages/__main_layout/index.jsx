export default function index() {
  return (
    <>
      <div className="p-5 bg-white rounded-lg">
        <Racha />
        <div className=" grid grid-cols-2 gap-4">
          <div className="bg-blue-200 rounded-lg aspect-square"></div>
          <div className="bg-green-100 rounded-lg aspect-square"></div>
          <div className="bg-red-200 rounded-lg aspect-square"></div>
          <div className="bg-yellow-100 rounded-lg aspect-square"></div>
        </div>
      </div>
    </>
  );
}
