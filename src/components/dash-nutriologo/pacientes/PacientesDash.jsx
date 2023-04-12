import ComponentGen from '../ComponentGen';

export default function PacientesDash() {
  return (
    <div className="bg-white rounded-2 mb-4 p-5">
      <ComponentGen
        icon={
          <i className="i-heroicons:calendar-20-solid color-blueGray w-3 h-3"></i>
        }
        title="Pacientes"
        link="/pacientes"
      />
      <h1 className="text-2xl font-bold mt-4">Aqui va lo de Pacientes</h1>
    </div>
  );
}
