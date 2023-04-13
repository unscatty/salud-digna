export default function ComponentGen(props) {
  return (
    <header className="flex gap-3 items-center pb-3">
      {props.icon}

      <p className="text-xs font-semibold ">{props.title}</p>
      {props.link ? (
        <NavLink
          to={props.link}
          className="text-xs font-bold text-fifth ml-auto"
        >
          Ver Más
        </NavLink>
      ) : (
        ''
      )}
    </header>
  );
}
