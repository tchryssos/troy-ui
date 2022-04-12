import { useState } from 'react';

import { Theme, themes } from '~/constants/theme';
import { ColorMode } from '~/typings/colorMode';

import { BreakpointsProvider } from './BreakpointsProvider';
import { ThemeProvider } from './ThemeProvider';

interface AppWrapperProps {
  children: React.ReactNode | React.ReactNode[];
  customTheme?: Partial<Theme>;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({
  children,
  customTheme,
}) => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  const theme = themes[colorMode];

  return (
    <ThemeProvider customTheme={customTheme} theme={theme}>
      <BreakpointsProvider theme={theme}>{children}</BreakpointsProvider>
    </ThemeProvider>
  );
};
