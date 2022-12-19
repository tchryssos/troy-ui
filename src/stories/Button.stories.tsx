import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button as ButtonComponent } from '~/components/Button';

import { COMMON_ARG_TYPES } from './argTypes';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Buttons/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ...COMMON_ARG_TYPES,
  },
} as ComponentMeta<typeof ButtonComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent
    {...args}
    onClick={() =>
      alert(
        '\u2669\u2669HE CAME FROM SOMEWHERE BACK IN HER LONG AGO\u2669\u2669'
      )
    }
  />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Button = Template.bind({});
Button.args = {
  children: 'Click on me',
};

export const Transparent = Template.bind({});
Transparent.args = {
  children: 'Click on me',
  transparent: true,
};

export const ButtonLike = Template.bind({});
ButtonLike.args = {
  children: 'This looks like a button',
  buttonLike: true,
};
