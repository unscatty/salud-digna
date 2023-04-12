import EjercicioCard from './EjercicioCard';

export default function EjercicioDelDia() {
  return (
    <div className="p-5 bg-second rounded-lg ">
      <div className="racha-container_days">
        <ComponentHeader
          title="Ejercicios de hoy"
          icon={<i className="i-fa6-solid:dumbbell color-black w-3 h-3"></i>}
          link="estilo-de-vida"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <EjercicioCard
          ejercicio="Caminata"
          tiempo="30 minutos"
          image={'/src/assets/caminata.svg'}
        />
        <EjercicioCard
          ejercicio="Estiramiento"
          tiempo="15 minutos"
          image={'/src/assets/estiramiento.svg'}
        />
      </div>
    </div>
  );
}
