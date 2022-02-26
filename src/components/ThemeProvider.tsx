import { StandardTheme, Theme } from '~/constants/theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import merge from 'lodash.merge';

interface ThemeProviderProps {
  themeOverrides: Partial<Theme>;
  children: React.ReactNode | React.ReactNode[];
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  themeOverrides,
  children,
}) => (
  <EmotionThemeProvider theme={merge(StandardTheme, themeOverrides)}>
    {children}
  </EmotionThemeProvider>
);
