import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box, BoxProps } from '~/components/box/Box';
import { GridBox as GridBoxComponent } from '~/components/box/GridBox';

import { COMMON_ARG_TYPES } from './argTypes';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/GridBox',
  component: GridBoxComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ...COMMON_ARG_TYPES,
  },
} as ComponentMeta<typeof GridBoxComponent>;

const boxProps: BoxProps = {
  padding: 16,
  borderColor: 'text',
  borderStyle: 'solid',
  borderWidth: 1,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GridBoxComponent> = (args) => (
  <GridBoxComponent {...args}>
    <Box {...boxProps}>Squirtle</Box>
    <Box {...boxProps}>Charmander</Box>
    <Box {...boxProps}>Bulbasaur</Box>
    <Box {...boxProps}>Cyndaquil</Box>
    <Box {...boxProps}>Totodile</Box>
    <Box {...boxProps}>Chikorita</Box>
  </GridBoxComponent>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const GridBox = Template.bind({});
GridBox.args = {};
