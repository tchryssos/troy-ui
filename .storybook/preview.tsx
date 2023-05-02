import type { Preview } from '@storybook/react';
import React, { useContext } from 'react';
import {
  ThemeProvider,
  ThemeContext,
} from '../src/components/providers/ThemeProvider';
import { TextButton } from '../src/components/button/TextButton';
import { FlexBox } from '../src/components/box/FlexBox';

function ColorModeToggle() {
  const { setColorMode, colorMode } = useContext(ThemeContext);

  const onClick = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <TextButton onClick={onClick} label={colorMode === 'light' ? '☀️' : '🌙'} />
  );
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <FlexBox
          justifyContent="flex-end"
          position="absolute"
          top={0}
          right={0}
        >
          <ColorModeToggle />
        </FlexBox>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
