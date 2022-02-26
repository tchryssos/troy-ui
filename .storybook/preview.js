import { addDecorator } from '@storybook/react';

import { StandardTheme } from '../src/constants/theme';
import { ThemeProvider } from '../src/components/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
));
