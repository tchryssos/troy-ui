import { createContext, useEffect, useState } from 'react';

import { useTheme } from '../../../hooks/theme';
import { BreakpointSize } from '../../../typings/breakpoints';

export const BreakpointsContext = createContext<BreakpointSize[]>(['xxs']);

interface BreakpointsProviderProps {
  children: React.ReactNode;
  resizeCallback?: (e: MediaQueryListEvent) => void;
  overrides?: BreakpointSize[];
}

export function BreakpointsProvider({
  children,
  overrides,
  resizeCallback,
}: BreakpointsProviderProps) {
  const theme = useTheme();

  const [windowBreakpoints, setWindowBreakpoints] = useState<BreakpointSize[]>(
    overrides || ['xxs']
  );

  useEffect(() => {
    Object.keys(theme.breakpointValues).forEach((key, i, arr) => {
      const queryAdjective = key === 'xss' ? 'max' : 'min';
      const query = globalThis.matchMedia(
        `(${queryAdjective}-width: ${
          theme.breakpointValues[key as BreakpointSize]
        }px)`
      );
      if (query.matches) {
        setWindowBreakpoints(arr.slice(0, i + 1) as BreakpointSize[]);
      }
      query.addEventListener('change', (e) => {
        resizeCallback?.(e);
        setWindowBreakpoints(
          arr.slice(0, e.matches ? i + 1 : i) as BreakpointSize[]
        );
      });
    });
  }, [resizeCallback, theme]);

  return (
    <BreakpointsContext.Provider value={windowBreakpoints}>
      {children}
    </BreakpointsContext.Provider>
  );
}
