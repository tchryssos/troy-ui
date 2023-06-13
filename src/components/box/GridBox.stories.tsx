import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';
import { GridBox } from './GridBox';

function BorderedBox({ children }: { children: React.ReactNode }) {
  return (
    <Box borderColor="green" borderStyle="solid" borderWidth={1} padding={4}>
      {children}
    </Box>
  );
}

const meta: Meta<typeof GridBox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Box/GridBox',
  component: GridBox,
};

export default meta;

type Story = StoryObj<typeof GridBox>;

export const WithSimpleColumns: Story = {
  render: () => (
    <GridBox columns={3} gap={8}>
      <BorderedBox>
        <p>First child</p>
      </BorderedBox>
      <BorderedBox>
        <p>Second child</p>
      </BorderedBox>
      <BorderedBox>
        <p>Third child</p>
      </BorderedBox>
    </GridBox>
  ),
};

export const WithTemplateColumns: Story = {
  render: () => (
    <GridBox gap={8} gridTemplateColumns="4fr 1fr 3fr">
      <BorderedBox>
        <p>First child</p>
      </BorderedBox>
      <BorderedBox>
        <p>Second child</p>
      </BorderedBox>
      <BorderedBox>
        <p>Third child</p>
      </BorderedBox>
    </GridBox>
  ),
};

export const WithTemplateColumnsAndRows: Story = {
  render: () => (
    <GridBox
      columnGap={8}
      gridTemplateColumns="1fr 2fr 1fr"
      gridTemplateRows="1fr 5fr 3fr"
      rowGap={16}
    >
      <BorderedBox>
        <p>First child</p>
      </BorderedBox>
      <BorderedBox>
        <p>Second child</p>
      </BorderedBox>
      <BorderedBox>
        <p>Third child</p>
      </BorderedBox>
      <BorderedBox>
        <p>Fourth child</p>
      </BorderedBox>
      <BorderedBox>
        <p>Fifth child</p>
      </BorderedBox>
      <BorderedBox>
        <p>Sixth child</p>
      </BorderedBox>
      <BorderedBox>
        <p>Seventh child</p>
      </BorderedBox>
      <BorderedBox>
        <p>Eighth child</p>
      </BorderedBox>
      <BorderedBox>
        <p>Ninth child</p>
      </BorderedBox>
    </GridBox>
  ),
};
