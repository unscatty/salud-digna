// ComponentHeader is a function that returns a header element using tailwindcss
export default function ComponentHeader(props) {
  return (
    <header className="flex gap-4">
      {props.icon}
      <p className="text-2xl font-bold">{props.title}</p>
    </header>
  );
}
