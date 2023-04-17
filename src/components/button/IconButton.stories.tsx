import type { Meta, StoryObj } from '@storybook/react';

import { Gear } from '../icons';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Buttons/IconButton',
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Small: Story = {
  render: () => (
    <IconButton onClick={() => null}>
      <Gear title="Test gear" />
    </IconButton>
  ),
};

export const Medium: Story = {
  render: () => (
    <IconButton size="md" onClick={() => null}>
      <Gear title="Test gear" />
    </IconButton>
  ),
};

export const Large: Story = {
  render: () => (
    <IconButton size="lg" onClick={() => null}>
      <Gear title="Test gear" />
    </IconButton>
  ),
};

export const Disabled: Story = {
  render: () => (
    <IconButton disabled onClick={() => null}>
      <Gear title="Test gear" />
    </IconButton>
  ),
};

export const Loading: Story = {
  render: () => (
    <IconButton isLoading onClick={() => null}>
      <Gear title="Test gear" />
    </IconButton>
  ),
};
