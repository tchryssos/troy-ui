import { Theme as CustomTheme } from '../constants/theme';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}

export type Spacing = keyof CustomTheme['spacing'];
export type Color = keyof CustomTheme['colors'];
export type BorderWidth = keyof CustomTheme['borderWidth'];
export type FontVariant = keyof CustomTheme['fontFamily'];
export type ImportUrl = `@import url('${string}')`;
