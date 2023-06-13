import type { Meta, StoryObj } from '@storybook/react';
import { useContext } from 'react';

import { FlexBox } from '../../box';
import { Typography } from '../../Typography';
import { ThemeContext, ThemeProvider } from '.';

const meta: Meta<typeof ThemeProvider> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Providers/ThemeProvider',
  component: ThemeProvider,
};

export default meta;

type Story = StoryObj<typeof ThemeProvider>;

function ThemeChild() {
  const {
    colorMode,
    theme: { colors },
  } = useContext(ThemeContext);

  const colorNames = Object.keys(colors).map((color) => `"${color}"`);

  return (
    <FlexBox flexDirection="column" gap={8}>
      <Typography>The current color mode is {colorMode}.</Typography>
      <Typography>
        The available theme colors are {colorNames.join(', ')}.
      </Typography>
    </FlexBox>
  );
}

export const AccessingTheme: Story = {
  render: () => <ThemeChild />,
};
