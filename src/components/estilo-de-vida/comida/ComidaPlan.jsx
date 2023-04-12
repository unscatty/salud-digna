import PlanDelDia from './comida-plan/plan-del-dia/PlanDelDia';
import Recetas from './comida-plan/recetas/Recetas';

export default function ComidaPlan() {
  return (
    <ComidaMainCard>
      <PlanDelDia />
      <Recetas />
    </ComidaMainCard>
  );
}
