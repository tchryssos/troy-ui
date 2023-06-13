import type { Meta, StoryObj } from '@storybook/react';

import { TextButton } from './TextButton';

const meta: Meta<typeof TextButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Buttons/TextButton',
  component: TextButton,
};

export default meta;

type Story = StoryObj<typeof TextButton>;

export const Basic: Story = {
  args: {
    label: 'Click me',
  },
};
