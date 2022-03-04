import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box as BoxComponent } from '~/components/box/Box';

import { COMMON_ARG_TYPES } from './argTypes';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Box/Box',
  component: BoxComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ...COMMON_ARG_TYPES,
  },
} as ComponentMeta<typeof BoxComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BoxComponent> = (args) => (
  <BoxComponent {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Box = Template.bind({});
Box.args = {
  children: 'I am in a box',
};
