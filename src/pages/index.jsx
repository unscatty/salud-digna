export default function index() {
	return (
		<>
			<BottomNavbar />
			<Header />
			<div className="h-20 bg-gray mx-10 rounded-lg p-10 mb-5">Racha</div>

			<div className="mx-10 p-5 bg-white rounded-lg">
				<div className="flex align-center gap-2">
					<i className="i-heroicons:chart-bar-20-solid color-black"></i>
					<p className="text-black pb-5 font-bold">Abril 10 2023</p>
				</div>

				<div className=" grid grid-cols-2 gap-4">
					<div
						className="bg-blue-200 rounded-lg"
						style={{ aspectRatio: "1/1" }}
					></div>
					<div
						className="bg-green-100 rounded-lg"
						style={{ aspectRatio: "1/1" }}
					></div>
					<div
						className="bg-red-200 rounded-lg"
						style={{ aspectRatio: "1/1" }}
					></div>
					<div
						className="bg-yellow-100 rounded-lg"
						style={{ aspectRatio: "1/1" }}
					></div>
				</div>
			</div>
		</>
	);
}
