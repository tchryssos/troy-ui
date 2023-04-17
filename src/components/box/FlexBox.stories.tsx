import type { Meta, StoryObj } from '@storybook/react';

import { FlexBox } from './FlexBox';

const meta: Meta<typeof FlexBox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'FlexBox',
  component: FlexBox,
};

export default meta;

type Story = StoryObj<typeof FlexBox>;

export const Row: Story = {
  render: () => (
    <FlexBox gap={8}>
      <p>First child</p>
      <p>Second child</p>
    </FlexBox>
  ),
};

export const Column: Story = {
  render: () => (
    <FlexBox flexDirection="column" gap={8}>
      <p>First child</p>
      <p>Second child</p>
    </FlexBox>
  ),
};
