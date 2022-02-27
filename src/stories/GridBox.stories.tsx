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
      <div style={{ border: '1px solid black' }}>Squirtle</div>
      <div style={{ border: '1px solid black' }}>Charmander</div>
      <div style={{ border: '1px solid black' }}>Bulbasaur</div>
      <div style={{ border: '1px solid black' }}>Cyndaquil</div>
      <div style={{ border: '1px solid black' }}>Totodile</div>
      <div style={{ border: '1px solid black' }}>Chikorita</div>
    </>
  ),
};
