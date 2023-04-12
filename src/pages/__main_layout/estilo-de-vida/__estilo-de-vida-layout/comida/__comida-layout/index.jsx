import { ComidaTabs } from '~/constants/estilo-de-vida/comida-tabs';

export default function Comida() {
  return <Navigate to={ComidaTabs[0].path} />;
}
