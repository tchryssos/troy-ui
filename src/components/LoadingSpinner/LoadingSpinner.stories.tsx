import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '../box';
import { LoadingPageSpinner, LoadingSpinner } from './index';

const meta: Meta<typeof LoadingSpinner> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'LoadingSpinner',
  component: LoadingPageSpinner,
};

export default meta;

type SpinnerStory = StoryObj<typeof LoadingSpinner>;

export const Spinner: SpinnerStory = {
  render: () => (
    <Box width="64px">
      <LoadingSpinner title="Loading" />
    </Box>
  ),
};

type PageStory = StoryObj<typeof LoadingPageSpinner>;

export const FullPage: PageStory = {
  args: {
    title: 'Loading',
  },
};
