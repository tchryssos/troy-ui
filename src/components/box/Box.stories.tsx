import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Box/Box',
  component: Box,
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Basic: Story = {
  render: () => (
    <Box>
      <p>This text is wrapped in a Box!</p>
    </Box>
  ),
};

export const Styled: Story = {
  render: () => (
    <Box
      borderColor="green"
      borderStyle="solid"
      borderWidth={3}
      height="50px"
      width="50px"
    />
  ),
};
