import type { Meta, StoryObj } from '@storybook/react';

import { Box, FlexBox, GridBox, Typography } from '../components';
import { useTheme } from '../hooks';
import { Theme } from './theme';

const meta: Meta<React.ReactNode> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Foundations/Theme',
  component: undefined,
};

export default meta;

function ExampleGrid({
  labels,
  themeKey,
  children,
}: {
  labels: [string, string, string];
  themeKey: keyof Theme;
  children: (props: {
    theme: Theme;
    key: string;
    value: string;
  }) => React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <FlexBox flexDirection="column" gap={8} padding={16} width="100%">
      <GridBox columns={3}>
        <Typography fontFamily="monospace" fontWeight={600} variant="body-sm">
          {labels[0]}
        </Typography>
        <Typography fontFamily="monospace" fontWeight={600} variant="body-sm">
          {labels[1]}
        </Typography>
        <Typography fontFamily="monospace" fontWeight={600} variant="body-sm">
          {labels[2]}
        </Typography>
      </GridBox>
      {Object.entries(theme[themeKey]).map(([key, value]) => (
        <FlexBox flexDirection="column" gap={8} key={key}>
          <Box
            backgroundColor="text"
            height={theme.borderWidth[1]}
            width="100%"
          />
          <GridBox columns={3}>
            <Typography fontFamily="monospace" variant="body-sm">
              {key}
            </Typography>
            <Typography fontFamily="monospace" variant="body-sm">
              {value}
            </Typography>
            {children({ theme, key, value })}
          </GridBox>
        </FlexBox>
      ))}
    </FlexBox>
  );
}

export const Palette: StoryObj<unknown> = {
  render: () => (
    <ExampleGrid labels={['Key', 'Color Value', 'Swatch']} themeKey="colors">
      {({ theme, key }) => (
        <Box
          backgroundColor={key}
          borderColor="text"
          borderStyle="solid"
          borderWidth={1}
          height={theme.spacing[48]}
        />
      )}
    </ExampleGrid>
  ),
};

const exampleText =
  'Wolodarsky, go get the keys to that fishing boat, and throw them in the water. No, wait. They might have another set. Just blow it up.';

export const Fonts: StoryObj<unknown> = {
  render: () => (
    <ExampleGrid
      labels={['Key', 'Font Value', 'Example']}
      themeKey="fontFamily"
    >
      {({ key }) => <Typography fontFamily={key}>{exampleText}</Typography>}
    </ExampleGrid>
  ),
};
