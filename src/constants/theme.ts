import { BreakpointObject } from '../typings/breakpoints';
import { ColorModeColors, ColorRgba } from '../typings/colorMode';
import { pxToRem } from '../utils/pxToRem';

// START - BREAKPOINTS - START
const breakpointValues: BreakpointObject<number> = {
  xxs: 479,
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
};

const breakpoints: BreakpointObject<`@media only screen and (${string}-width: ${number}px)`> =
  {
    xxs: `@media only screen and (max-width: ${breakpointValues.xxs}px)`,
    xs: `@media only screen and (min-width: ${breakpointValues.xs}px)`,
    sm: `@media only screen and (min-width: ${breakpointValues.sm}px)`,
    md: `@media only screen and (min-width: ${breakpointValues.md}px)`,
    lg: `@media only screen and (min-width: ${breakpointValues.lg}px)`,
    xl: `@media only screen and (min-width: ${breakpointValues.xl}px)`,
  };
// END - BREAKPOINTS - END

// START - COLORS - START
const lightModeColors: ColorModeColors = {
  background: '#fafafa',
  text: '#17242b',
  textAccent: '#4d4d4c',
  success: '#00784e',
  warning: '#c29e3b',
  danger: '#db0033',
  accentHeavy: '#adadad',
  accentLight: '#e8e8e8',
  smudge: 'rgba(0,0,0,0.05)',
};

const darkModeColors: ColorModeColors = {
  background: '#1d1f21',
  text: '#c5c8c6',
  textAccent: '#969896',
  success: '#6fbd68',
  warning: '#e9c47e',
  danger: '#9a4d4d',
  accentHeavy: '#2a3c3e',
  accentLight: '#505253',
  smudge: 'rgba(255,255,255,0.1)',
};

interface SharedFilters {
  darken: ColorRgba;
  lighten: ColorRgba;
}

const sharedFilters: SharedFilters = {
  darken: 'rgba(0,0,0,0.5)',
  lighten: 'rgba(255,255,255,0.5)',
};

const lightModeFilters = {
  brightnessMod: 0.8,
  ...sharedFilters,
};

const darkModeFilters = {
  brightnessMod: 1.2,
  ...sharedFilters,
};
// END - COLORS - END

const baseTheme = {
  breakpointValues,
  breakpoints,
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
  borderWidth: {
    1: pxToRem(1),
    3: pxToRem(3),
  },
  borderRadius: {
    2: pxToRem(2),
    4: pxToRem(4),
    round: '50%',
  },
  fontSize: {
    14: pxToRem(14),
    16: pxToRem(16),
    18: pxToRem(18),
    20: pxToRem(20),
    24: pxToRem(24),
    32: pxToRem(32),
    40: pxToRem(40),
    56: pxToRem(56),
    64: pxToRem(64),
  },
  fontFamily: {
    normal:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,'Helvetica Neue', sans-serif;",
    monospace: "Menlo, Monaco, Consolas, 'Courier New', monospace",
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

export const DarkTheme = {
  ...baseTheme,
  colors: darkModeColors,
  filters: darkModeFilters,
};

export const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export type ThemeShape = typeof LightTheme;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Theme extends ThemeShape {}
