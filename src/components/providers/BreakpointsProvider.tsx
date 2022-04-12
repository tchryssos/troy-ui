import { useEffect, useState } from 'react';

import { LightTheme, Theme } from '~/constants/theme';
import { BreakpointsContext } from '~/contexts/BreakpointsContext';
import { BreakpointSize } from '~/typings/theme';

interface BreakpointsProviderProps {
  theme?: Theme;
  children: React.ReactNode | React.ReactNode[];
}

export const BreakpointsProvider: React.FC<BreakpointsProviderProps> = ({
  theme = LightTheme,
  children,
}) => {
  const [windowBreakpoints, setWindowBreakpoints] = useState<BreakpointSize[]>([
    'xxs',
  ]);

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
        setWindowBreakpoints(
          arr.slice(0, e.matches ? i + 1 : i) as BreakpointSize[]
        );
      });
    });
  }, []);

  return (
    <BreakpointsContext.Provider value={windowBreakpoints}>
      {children}
    </BreakpointsContext.Provider>
  );
};
