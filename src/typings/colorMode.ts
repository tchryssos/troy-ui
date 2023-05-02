export type ColorHash = `#${string}`;
export type ColorRgba = `rgba(${number},${number},${number},${number})`;
export interface ColorModeColors {
  primary: ColorHash;
  background: ColorHash;
  text: ColorHash;
  textAccent: ColorHash;
  success: ColorHash;
  warning: ColorHash;
  danger: ColorHash;
  accentHeavy: ColorHash;
  accentLight: ColorHash;
  smudge: ColorRgba;
}

export type ColorMode = 'light' | 'dark';
