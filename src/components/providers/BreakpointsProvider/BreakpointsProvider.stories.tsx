import type { Meta, StoryObj } from '@storybook/react';
import { useContext } from 'react';

import { FlexBox } from '../../box';
import { Typography } from '../../Typography';
import { BreakpointsContext, BreakpointsProvider } from '.';

const meta: Meta<typeof BreakpointsProvider> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Providers/BreakpointsProvider',
  component: BreakpointsProvider,
};

export default meta;

type Story = StoryObj<typeof BreakpointsProvider>;

function BreakpointChild() {
  const breakpointsArr = useContext(BreakpointsContext);

  return (
    <FlexBox flexDirection="column" gap={8}>
      <Typography>
        The current breakpoint is &quot;
        {breakpointsArr[breakpointsArr.length - 1]}&quot;.
      </Typography>
      <Typography variant="body-xs">
        Resize the story window (not your browser window) to see changes
      </Typography>
    </FlexBox>
  );
}

export const ExampleConsumer: Story = {
  render: () => (
    <BreakpointsProvider>
      <BreakpointChild />
    </BreakpointsProvider>
  ),
};
