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
      first: '#74B79D',
      second: '#C2E3C1',
      third: '#FFF',
      fourth: '#12895A',
      iconActive: '#68a961',
      iconInactive: '#868589',
    },
  },
  shortcuts: [
    ['px-global', 'px-6'],
    ['mx-global', 'mx-6'],
    ['card', 'bg-white shadow-lg rounded-2xl p4']
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
