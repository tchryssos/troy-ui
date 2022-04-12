import { ColorModeColors } from '~/typings/colorMode';
import { pxToRem } from '~/utils/pxToRem';

const breakpointValues = {
  xxs: 479,
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
};

const lightModeColors: ColorModeColors = {
  background: '#fafafa',
  text: '#17242b',
  success: '#00784e',
  danger: '#db0033',
  accentHeavy: '#adadad',
  accentLight: '#e8e8e8',
  smudge: 'rgba(0,0,0,0.05)',
};

const lightModeFilters = {
  brightnessMod: 0.9,
};

const baseTheme = {
  breakpointValues,
  breakpoints: {
    xxs: `@media only screen and (max-width: ${breakpointValues.xxs}px)`,
    xs: `@media only screen and (min-width: ${breakpointValues.xs}px)`,
    sm: `@media only screen and (min-width: ${breakpointValues.sm}px)`,
    md: `@media only screen and (min-width: ${breakpointValues.md}px)`,
    lg: `@media only screen and (min-width: ${breakpointValues.lg}px)`,
    xl: `@media only screen and (min-width: ${breakpointValues.xl}px)`,
  },
  spacing: {
    0: pxToRem(0),
    2: pxToRem(2),
    4: pxToRem(4),
    8: pxToRem(8),
    10: pxToRem(10),
    12: pxToRem(12),
    16: pxToRem(16),
    20: pxToRem(20),
    24: pxToRem(24),
    32: pxToRem(32),
    40: pxToRem(40),
    48: pxToRem(48),
    64: pxToRem(64),
    80: pxToRem(80),
    96: pxToRem(96),
    128: pxToRem(128),
  },
  border: {
    borderWidth: {
      1: pxToRem(1),
      3: pxToRem(3),
    },
    borderRadius: {
      2: pxToRem(2),
      4: pxToRem(4),
      round: '50%',
    },
  },
  fontSize: {
    subBody: pxToRem(12),
    body: pxToRem(14),
    title: pxToRem(24),
  },
  fontFamily: {
    normal:
      "'Hiragino Kaku Gothic Pro', 'メイリオ', 'ＭＳ Ｐゴシック', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  lineHeight: {
    normal: 1.2,
  },
  fontWeight: {
    light: 200,
    regular: 400,
    bold: 700,
    black: 800,
  },
};

export const LightTheme = {
  ...baseTheme,
  colors: lightModeColors,
  filters: lightModeFilters,
};

export const themes = {
  light: LightTheme,
};

export type ThemeShape = typeof LightTheme;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Theme extends ThemeShape {}
