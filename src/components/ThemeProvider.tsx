import { StandardTheme, Theme } from '~/constants/theme';
import {
  css,
  Global,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';
import merge from 'lodash.merge';
import { pxToRem } from '~/utils/pxToRem';

interface ThemeProviderProps {
  theme?: Partial<Theme>;
  children: React.ReactNode | React.ReactNode[];
}

const marPadZero = css`
  margin: 0;
  padding: 0;
`;

const baseStyle = css`
  height: 100%;
  width: 100%;
  ${marPadZero};
`;

const createGlobalStyles = (theme: Theme) => css`
  /* @import url(''); */
  html {
    background-color: ${theme.colors.background};
    ${baseStyle};
  }
  body {
    ${baseStyle};
    position: relative;
    box-sizing: border-box;
    font-family: ${theme.fontFamily.normal};
    color: ${theme.colors.text};
  }
  #app,
  #__next {
    ${baseStyle};
  }
  div,
  input,
  select,
  textarea {
    box-sizing: border-box;
  }
  input,
  select,
  textarea {
    font-family: ${theme.fontFamily.normal};
    background-color: ${theme.colors.accentLight};
    color: ${theme.colors.text};
    border-radius: ${pxToRem(4)};
    border-width: ${theme.border.borderWidth[1]};
    :disabled {
      background-color: ${theme.colors.smudge};
    }
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  figure {
    ${marPadZero};
  }
`;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const mergedTheme = merge(StandardTheme, theme);
  return (
    <EmotionThemeProvider theme={mergedTheme}>
      <Global styles={createGlobalStyles(mergedTheme)} />
      {children}
    </EmotionThemeProvider>
  );
};
