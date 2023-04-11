export default function HomeHeader(isSticky) {
  return (
    <div>
      <p className="text-xl font-bold text-third">Buenos días, Juan</p>
      <p className="text-xs/[10px] text-third font-bold">
        Has perdido{' '}
        <span className="font-bold text-fourth font-extrabold">5.2kg</span>.
        ¡Sigue así!
      </p>
    </div>
  );
}
