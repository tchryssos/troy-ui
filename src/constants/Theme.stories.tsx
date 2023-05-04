import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';

import { Box, GridBox, Typography } from '../components';
import { useTheme } from '../hooks';
import { pxToRem } from '../utils';
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

const GridText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.monospace,
  width: 'fit-content',
  height: 'fit-content',
  padding: theme.spacing[4],
}));

function ExampleGrid({
  labels,
  themeKey,
  gridTemplateColumns,
  children,
  className,
}: {
  labels: [string, string, string];
  themeKey: keyof Theme;
  gridTemplateColumns?: string;
  className?: string;
  children: (props: {
    theme: Theme;
    key: string;
    value: string;
  }) => React.ReactNode;
}) {
  const theme = useTheme();
  const columnsVal = gridTemplateColumns || 'repeat(3, 1fr)';
  return (
    <GridBox
      className={className}
      gap={16}
      gridTemplateColumns={columnsVal}
      maxWidth={pxToRem(theme.breakpointValues.lg)}
      padding={16}
      width="100%"
    >
      <GridText fontWeight="bold" variant="body-xs">
        {labels[0]}
      </GridText>
      <GridText fontWeight="bold" variant="body-xs">
        {labels[1]}
      </GridText>
      <GridText fontWeight="bold" variant="body-xs">
        {labels[2]}
      </GridText>
      {Object.entries(theme[themeKey]).map(([key, value]) => (
        <>
          <Box
            backgroundColor="text"
            gridColumn="span 3"
            height={theme.borderWidth[1]}
            width="100%"
          />
          <GridText backgroundColor="smudge" variant="body-xs">
            {key}
          </GridText>
          <GridText backgroundColor="smudge" variant="body-xs">
            {value}
          </GridText>
          {children({ theme, key, value })}
        </>
      ))}
    </GridBox>
  );
}

export const Colors: StoryObj<unknown> = {
  name: 'colors',
  render: () => (
    <ExampleGrid
      gridTemplateColumns="1fr 1fr 2fr"
      labels={['Key', 'Color Value', 'Swatch']}
      themeKey="colors"
    >
      {({ key }) => (
        <Box
          backgroundColor={key}
          borderColor="text"
          borderStyle="solid"
          borderWidth={1}
          height={48}
        />
      )}
    </ExampleGrid>
  ),
};

const exampleText =
  'Wolodarsky, go get the keys to that fishing boat, and throw them in the water. No, wait. They might have another set. Just blow it up.';

export const FontFamilies: StoryObj<unknown> = {
  name: 'fontFamily',
  render: () => (
    <ExampleGrid
      gridTemplateColumns="auto 2fr 3fr"
      labels={['Key', 'Font Value', 'Example Text']}
      themeKey="fontFamily"
    >
      {({ key }) => <Typography fontFamily={key}>{exampleText}</Typography>}
    </ExampleGrid>
  ),
};

export const FontSizes: StoryObj<unknown> = {
  name: 'fontSize',
  render: () => (
    <ExampleGrid
      gridTemplateColumns="1fr 1fr 2fr"
      labels={['Key', 'Size Value', 'Example Text']}
      themeKey="fontSize"
    >
      {({ key }) => <Typography fontSize={key}>{exampleText}</Typography>}
    </ExampleGrid>
  ),
};

export const FontWeights: StoryObj<unknown> = {
  name: 'fontWeight',
  render: () => (
    <ExampleGrid
      gridTemplateColumns="1fr 1fr 2fr"
      labels={['Key', 'Weight Value', 'Example Text']}
      themeKey="fontWeight"
    >
      {({ key }) => <Typography fontWeight={key}>{exampleText}</Typography>}
    </ExampleGrid>
  ),
};

export const Spacing: StoryObj<unknown> = {
  name: 'spacing',
  render: () => (
    <ExampleGrid labels={['Key', 'Size Value', 'Example']} themeKey="spacing">
      {({ key }) => (
        <Box
          backgroundColor="text"
          height={key}
          justifySelf="start"
          width={key}
        />
      )}
    </ExampleGrid>
  ),
};

export const BorderWidth: StoryObj<unknown> = {
  name: 'borderWidth',
  render: () => (
    <ExampleGrid
      labels={['Key', 'Width Value', 'Example']}
      themeKey="borderWidth"
    >
      {({ key }) => (
        <Box
          borderColor="text"
          borderStyle="solid"
          borderWidth={key}
          height={64}
          justifySelf="start"
          width={64}
        />
      )}
    </ExampleGrid>
  ),
};

export const BorderRadius: StoryObj<unknown> = {
  name: 'borderRadius',
  render: () => (
    <ExampleGrid
      labels={['Key', 'Width Value', 'Example']}
      themeKey="borderRadius"
    >
      {({ value }) => (
        <Box
          borderColor="text"
          borderRadius={value}
          borderStyle="solid"
          borderWidth={2}
          height={64}
          justifySelf="start"
          width={64}
        />
      )}
    </ExampleGrid>
  ),
};

const BreakpointGrid = styled(ExampleGrid)`
  overflow: scroll;
`;

export const BreakpointValues: StoryObj<unknown> = {
  name: 'breakpointValues',
  render: () => (
    <BreakpointGrid
      gridTemplateColumns="auto auto 1fr"
      labels={['Key', 'Width Value', 'Example']}
      themeKey="breakpointValues"
    >
      {({ value }) => (
        <Box height={64} position="relative">
          <Box
            backgroundColor="text"
            height={64}
            left={0}
            position="absolute"
            top={0}
            width={pxToRem(value as unknown as number)}
          />
        </Box>
      )}
    </BreakpointGrid>
  ),
};
