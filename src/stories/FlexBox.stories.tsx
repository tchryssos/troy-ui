import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FlexBox as FlexBoxComponent } from '~/components/box/FlexBox';

import { COMMON_ARG_TYPES } from './argTypes';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Box/FlexBox',
  component: FlexBoxComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ...COMMON_ARG_TYPES,
  },
} as ComponentMeta<typeof FlexBoxComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FlexBoxComponent> = (args) => (
  <FlexBoxComponent {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const FlexBox = Template.bind({});
FlexBox.args = {
  children: (
    <>
      <img
        alt="Hank Hill"
        src="https://static.wikia.nocookie.net/kingofthehill/images/c/c4/Hank_Hill.png"
      />
      <img
        alt="Bobby Hill"
        src="https://static.wikia.nocookie.net/kingofthehill/images/c/c7/Bobby.png"
      />
    </>
  ),
  width: '100%',
  justifyContent: 'space-between',
};
