import { EstiloDeVidaTabs } from '~/constants/estilo-de-vida/estilo-de-vida-tabs';

export default function EstiloDeVida() {
  return <Navigate to={EstiloDeVidaTabs[0].path} />;
}
