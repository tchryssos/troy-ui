import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { createContext, useMemo, useState } from 'react';

import { Theme, themes } from '../../../constants/theme';
import { ColorMode } from '../../../typings/colorMode';
import { createGlobalStyles, GlobalWrapper } from './rootStyles';

interface ThemeContextObj {
  theme: Theme;
  setColorMode: (colorMode: ColorMode) => void;
  colorMode: ColorMode;
}

export const ThemeContext = createContext<ThemeContextObj>({
  theme: themes.light,
  setColorMode: () => null,
  colorMode: 'light',
});

interface ThemeProviderProps {
  children: React.ReactNode;
  overrides?: Partial<typeof themes>;
  ignoreCssReset?: boolean;
}

export function ThemeProvider({
  children,
  overrides,
  ignoreCssReset,
}: ThemeProviderProps) {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  const theme = useMemo(
    () => ({
      ...themes[colorMode],
      ...overrides?.[colorMode],
    }),
    [overrides, colorMode]
  );

  const contextValue = useMemo(
    () => ({
      theme,
      setColorMode,
      colorMode,
    }),
    [theme, setColorMode, colorMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <EmotionThemeProvider theme={theme}>
        <GlobalWrapper>
          {!ignoreCssReset && <Global styles={createGlobalStyles(theme)} />}
          {children}
        </GlobalWrapper>
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
}
