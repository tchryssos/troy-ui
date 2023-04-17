import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './index';

const meta: Meta<typeof Typography> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Typography',
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Basic: Story = {
  args: {
    children:
      "I've seen your picture / Your name in lights above it / This is your big debut / It's like a dream come true",
  },
};

export const h1: Story = {
  name: 'As h1',
  args: {
    ...Basic.args,
    as: 'h1',
  },
};

export const h2: Story = {
  name: 'As h2',
  args: {
    ...Basic.args,
    as: 'h2',
  },
};

export const h3: Story = {
  name: 'As h3',
  args: {
    ...Basic.args,
    as: 'h3',
  },
};

export const h4: Story = {
  name: 'As h4',
  args: {
    ...Basic.args,
    as: 'h4',
  },
};

export const h5: Story = {
  name: 'As h5',
  args: {
    ...Basic.args,
    as: 'h5',
  },
};

export const h6: Story = {
  name: 'As h6',
  args: {
    ...Basic.args,
    as: 'h6',
  },
};
