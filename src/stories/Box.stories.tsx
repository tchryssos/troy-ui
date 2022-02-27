import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box as BoxComponent } from '~/components/Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Box',
  component: BoxComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
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

export const FlexBox = Template.bind({});
FlexBox.args = {
  children: (
    <>
      <img src="https://static.wikia.nocookie.net/kingofthehill/images/c/c4/Hank_Hill.png" />
      <img src="https://static.wikia.nocookie.net/kingofthehill/images/c/c7/Bobby.png" />
    </>
  ),
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
};

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
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
};
