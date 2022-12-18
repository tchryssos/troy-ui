import { createContext, useEffect, useState } from 'react';

import { Breakpoints } from '~/constants/theme';
import { useTheme } from '~/hooks/theme';

const BreakpointsContext = createContext<Breakpoints[]>(['xxs']);

interface BreakpointsProviderProps {
  children: React.ReactNode;
  resizeCallback?: (e: MediaQueryListEvent) => void;
  overrides?: Breakpoints[];
}

export const BreakpointsProvider: React.FC<BreakpointsProviderProps> = ({
  children,
  overrides,
  resizeCallback,
}) => {
  const theme = useTheme();

  const [windowBreakpoints, setWindowBreakpoints] = useState<Breakpoints[]>(
    overrides || ['xxs']
  );

  useEffect(() => {
    Object.keys(theme.breakpointValues).forEach((key, i, arr) => {
      const queryAdjective = key === 'xss' ? 'max' : 'min';
      const query = globalThis.matchMedia(
        `(${queryAdjective}-width: ${
          theme.breakpointValues[key as Breakpoints]
        }px)`
      );
      if (query.matches) {
        setWindowBreakpoints(arr.slice(0, i + 1) as Breakpoints[]);
      }
      query.addEventListener('change', (e) => {
        resizeCallback?.(e);
        setWindowBreakpoints(
          arr.slice(0, e.matches ? i + 1 : i) as Breakpoints[]
        );
      });
    });
  }, [resizeCallback, theme]);

  return (
    <BreakpointsContext.Provider value={windowBreakpoints}>
      {children}
    </BreakpointsContext.Provider>
  );
};
