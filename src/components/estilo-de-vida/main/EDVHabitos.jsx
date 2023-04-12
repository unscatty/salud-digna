import { EstiloDeVidaHabitosTab } from '~/constants/estilo-de-vida/estilo-de-vida-tabs';
import RutaDeHabitos from '../habitos/RutaDeHabitos';
import MalosHabitos from '../habitos/MalosHabitos';

export default function EDVHabitos() {
  return (
    <EDVMainCard tab={EstiloDeVidaHabitosTab}>
      <div className="card bg-second p-4 mt-4">
        <RutaDeHabitos />
        <MalosHabitos />
      </div>
    </EDVMainCard>
  );
}
