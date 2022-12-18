import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useContext } from 'react';

import { Box } from '~/components/box/Box';
import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { Button } from '~/components/Button';
import { ThemeContext } from '~/components/providers/ThemeProvider';
import { Text } from '~/components/Text';
import { ColorModeColors } from '~/typings/colorMode';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Theme',
  component: undefined,
} as ComponentMeta<any>;

export const Colors = () => {
  const { theme, setColorMode, colorMode } = useContext(ThemeContext);

  const onToggle = () => setColorMode(colorMode === 'dark' ? 'light' : 'dark');

  return (
    <FlexBox
      backgroundColor={theme.colors.background}
      flexDirection="column"
      gap={theme.spacing[16]}
      padding={theme.spacing[16]}
      width="100%"
    >
      <Text variant="title">Colors</Text>
      <Button onClick={onToggle}>Toggle Color Mode</Button>
      <GridBox columns={1} width="100%">
        <FlexBox
          gap={theme.spacing[8]}
          justifyContent="space-between"
          width="100%"
        >
          <Text fontWeight={theme.fontWeight.bold}>Title</Text>
          <Text fontWeight={theme.fontWeight.bold}>Value</Text>
          <Text fontWeight={theme.fontWeight.bold}>Swatch</Text>
        </FlexBox>
        {Object.keys(theme.colors).map((color) => (
          <FlexBox
            gap={theme.spacing[8]}
            justifyContent="space-between"
            key={color}
            width="100%"
          >
            <Text>{color}</Text>
            <Text>{theme.colors[color as keyof ColorModeColors]}</Text>
            <Box
              backgroundColor={theme.colors[color as keyof ColorModeColors]}
              borderColor="black"
              borderStyle="solid"
              borderWidth="1px"
              height="100px"
              width="100px"
            />
          </FlexBox>
        ))}
      </GridBox>
    </FlexBox>
  );
};
