import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from '~/components/Text';

import { COMMON_ARG_TYPES } from './argTypes';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ...COMMON_ARG_TYPES,
  },
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const SubBody = Template.bind({});
SubBody.args = {
  variant: 'subBody',
  children:
    "I've seen your picture / Your name in lights above it / This is your big debut / It's like a dream come true / So won't you smile for the camera / I know they're gonna love it, Peg",
};

export const Body = Template.bind({});
Body.args = {
  children:
    "I've seen your picture / Your name in lights above it / This is your big debut / It's like a dream come true / So won't you smile for the camera / I know they're gonna love it, Peg",
  variant: 'body',
};

export const Title = Template.bind({});
Title.args = {
  variant: 'title',
  children:
    "I've seen your picture / Your name in lights above it / This is your big debut / It's like a dream come true / So won't you smile for the camera / I know they're gonna love it, Peg",
};

export const AsPTag = Template.bind({});
AsPTag.args = {
  children:
    "I've seen your picture / Your name in lights above it / This is your big debut / It's like a dream come true / So won't you smile for the camera / I know they're gonna love it, Peg",
  as: 'p',
};

export const AsHTag = Template.bind({});
AsHTag.args = {
  children:
    "I've seen your picture / Your name in lights above it / This is your big debut / It's like a dream come true / So won't you smile for the camera / I know they're gonna love it, Peg",
  as: 'h1',
};
