import {
  ComidaMisAlimentosTab,
  ComidaPlanTab,
  ComidaRegistroTab,
} from '~/constants/estilo-de-vida/comida-tabs';

ComidaPlanTab.content = ComidaPlan;
ComidaMisAlimentosTab.content = ComidaMisAlimentos;
ComidaRegistroTab.content = ComidaRegistro;

export const ComidaContents = [
  ComidaPlanTab,
  ComidaMisAlimentosTab,
  ComidaRegistroTab,
];
