export default function MasEjercicios() {
  return (
    <div className="racha-container">
      <div className="racha-container_days">
        <ComponentHeader
          title="Mas Ejercicios"
          icon={
            <img src="/assets/icons/racha_arrow.svg" className="w-3 h-3"></img>
          }
        />
      </div>
      <div className="flex gap-3">
        <EjercicioCard
          ejercicio="Caminata"
          tiempo="30 minutos"
          image={'/assets/caminata.svg'}
        />
        <EjercicioCard
          ejercicio="Estiramiento"
          tiempo="15 minutos"
          image={'/assets/estiramiento.svg'}
        />
      </div>
    </div>
  );
}
