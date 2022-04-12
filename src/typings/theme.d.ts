import { LightTheme, Theme as CustomTheme } from '~/constants/theme';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}

export type Spacing = keyof CustomTheme['spacing'];
export type Color = keyof CustomTheme['colors'];
export type BorderWidth = keyof CustomTheme['border']['borderWidth'];
export type BreakpointSize = keyof typeof LightTheme.breakpointValues;
export type FontVariant = keyof CustomTheme['fontFamily'];
