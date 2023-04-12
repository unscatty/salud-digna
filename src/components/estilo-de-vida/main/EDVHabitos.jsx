import { EstiloDeVidaHabitosTab } from '~/constants/estilo-de-vida/estilo-de-vida-tabs';
<<<<<<< HEAD
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
=======

export default function EDVHabitos() {
  return <EDVMainCard tab={EstiloDeVidaHabitosTab}></EDVMainCard>;
>>>>>>> 3b720c3f24502aa28a601f0a699b6b369c6e28fc
}
