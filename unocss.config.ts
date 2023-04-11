import { presetForms } from '@julr/unocss-preset-forms';
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import presetAutoprefixer from 'unocss-preset-autoprefixer';

import { NavigationItems } from './src/constants/navigation';

export default defineConfig({
  theme: {
    colors: {
      primary: '#F7F7F7',
      iconActive: '#68a961',
      iconInactive: '#868589',
    },
  },
  shortcuts: [
    ['px-global', 'px-6'],
    ['mx-global', 'mx-6'],
  ],
  presets: [
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    presetForms(),
    presetWind(),
    presetAutoprefixer(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    'prose',
    'prose-sm',
    'm-auto',
    'text-left',
    ...NavigationItems.map((item) => item.iconClass),
  ],
});
