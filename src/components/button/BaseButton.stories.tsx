import type { Meta, StoryObj } from '@storybook/react';

import { BaseButton } from './BaseButton';

const meta: Meta<typeof BaseButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Buttons/BaseButton',
  component: BaseButton,
};

export default meta;

type Story = StoryObj<typeof BaseButton>;

export const Normal: Story = {
  args: {
    children: 'Click Me',
    onClick: () => null,
  },
};

export const Transparent: Story = {
  args: {
    ...Normal.args,
    transparent: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Normal.args,
    disabled: true,
  },
};

export const Danger: Story = {
  args: {
    ...Normal.args,
    severity: 'danger',
  },
};

export const Warning: Story = {
  args: {
    ...Normal.args,
    severity: 'warning',
  },
};

export const Success: Story = {
  args: {
    ...Normal.args,
    severity: 'success',
  },
};

export const Secondary: Story = {
  args: {
    ...Normal.args,
    severity: 'secondary',
  },
};

export const ButtonLike: Story = {
  render: () => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BaseButton {...Normal.args}>
      <a href="/">This child is a link</a>
    </BaseButton>
  ),
};
