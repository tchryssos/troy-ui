import type { Meta, StoryObj } from '@storybook/react';

import { Box, FlexBox, GridBox, Typography } from '../components';
import { useTheme } from '../hooks';
import { pxToRem } from '../utils';

const meta: Meta<React.ReactNode> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Foundations/Theme',
  component: undefined,
};

export default meta;

function PaletteGrid() {
  const theme = useTheme();

  return (
    <FlexBox flexDirection="column" gap={8} padding={16} width="100%">
      {Object.entries(theme.colors).map(([key, value]) => (
        <FlexBox flexDirection="column" gap={8} key={key}>
          <Box
            backgroundColor="text"
            height={theme.borderWidth[1]}
            width="100%"
          />
          <GridBox columns={3}>
            <Typography variant="body-sm">{key}</Typography>
            <Typography variant="body-sm">{value}</Typography>
            <Box
              backgroundColor={value}
              borderColor="text"
              borderStyle="solid"
              borderWidth={1}
              height={theme.spacing[48]}
            />
          </GridBox>
        </FlexBox>
      ))}
    </FlexBox>
  );
}

export const Palette: StoryObj<typeof PaletteGrid> = {
  render: () => <PaletteGrid />,
};
