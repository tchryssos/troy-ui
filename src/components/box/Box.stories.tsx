import type { Meta } from '@storybook/react';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Box',
  component: Box,
};

export default meta;
