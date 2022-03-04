import { ComponentMeta, ComponentStory } from '@storybook/react';

import { GridBox as GridBoxComponent } from '~/components/box/GridBox';

import { COMMON_ARG_TYPES } from './argTypes';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Box/GridBox',
  component: GridBoxComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ...COMMON_ARG_TYPES,
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
      <div style={{ border: '1px solid black', padding: '1rem' }}>Squirtle</div>
      <div style={{ border: '1px solid black', padding: '1rem' }}>
        Charmander
      </div>
      <div style={{ border: '1px solid black', padding: '1rem' }}>
        Bulbasaur
      </div>
      <div style={{ border: '1px solid black', padding: '1rem' }}>
        Cyndaquil
      </div>
      <div style={{ border: '1px solid black', padding: '1rem' }}>Totodile</div>
      <div style={{ border: '1px solid black', padding: '1rem' }}>
        Chikorita
      </div>
    </>
  ),
};
