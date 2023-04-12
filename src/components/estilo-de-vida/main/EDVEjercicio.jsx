import { EstiloDeVidaEjercicioTab } from '~/constants/estilo-de-vida/estilo-de-vida-tabs';
import EjercicioDelDiaEjercicio from '../ejercicio/EjercicioDelDiaEjercicio';
import MiEjercicio from '../ejercicio/MiEjercicio';
import MasEjercicios from '../ejercicio/MasEjercicios';

export default function EDVEjercicio() {
  return (
    <EDVMainCard tab={EstiloDeVidaEjercicioTab}>
      <div className="card bg-second p-4 mt-4">
        <EjercicioDelDiaEjercicio />
        <MiEjercicio />
        <MasEjercicios />
      </div>
    </EDVMainCard>
  );
}
