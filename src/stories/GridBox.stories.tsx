import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GridBox as GridBoxComponent } from '~/components/box/GridBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Box/GridBox',
  component: GridBoxComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof GridBoxComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GridBoxComponent> = (args) => (
  <GridBoxComponent {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const GridBox = Template.bind({});
GridBox.args = {
  children: (
    <>
      <img src="https://static.wikia.nocookie.net/kingofthehill/images/c/c4/Hank_Hill.png" />
      <img src="https://static.wikia.nocookie.net/kingofthehill/images/c/c7/Bobby.png" />
    </>
  ),
  width: '100%',
  justifyContent: 'space-between',
};
