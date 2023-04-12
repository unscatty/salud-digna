import {
  SaludCitasTab,
  SaludEstudiosTab,
  SaludNutriologoTab,
} from '~/constants/salud/salud-tabs';

SaludCitasTab.content = SaludCitas;
SaludEstudiosTab.content = SaludEstudios;
SaludNutriologoTab.content = SaludNutriologo;

export const SaludMainContents = [
  SaludCitasTab,
  SaludEstudiosTab,
  SaludNutriologoTab,
];
