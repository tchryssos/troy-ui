import { useContext } from 'react';

import { ThemeContext } from '../components/providers/ThemeProvider';

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);

  return theme;
};
