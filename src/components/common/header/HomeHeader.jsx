export default function HomeHeader({ user }) {
  return (
    <div>
      <p className="text-xl font-bold text-third">
        Buenos días, {user ? user.displayName : 'Juan'}
      </p>
      <p className="text-xs/[10px] text-third font-bold">
        Has perdido{' '}
        <span className="font-bold text-fourth font-extrabold">5.2kg</span>.
        ¡Sigue así!
      </p>
    </div>
  );
}
