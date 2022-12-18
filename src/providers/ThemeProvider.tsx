import { createContext, useMemo, useState } from 'react';

import { Theme, themes } from '~/constants/theme';
import { ColorMode } from '~/typings/colorMode';

interface ThemeContextObj {
  theme: Theme;
  setColorMode: (colorMode: ColorMode) => void;
  colorMode: ColorMode;
}

const ThemeContext = createContext<ThemeContextObj>({
  theme: themes.light,
  setColorMode: () => null,
  colorMode: 'light',
});

interface ThemeProviderProps {
  children: React.ReactNode;
  overrides?: Partial<typeof themes>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  overrides,
}) => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  const theme = useMemo(
    () => ({
      ...themes[colorMode],
      ...overrides,
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
      {children}
    </ThemeContext.Provider>
  );
};
