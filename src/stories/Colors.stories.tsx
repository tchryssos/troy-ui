import { ComponentMeta } from '@storybook/react';
import { useContext } from 'react';

import { Box } from '~/components/box/Box';
import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { ThemeContext } from '~/components/providers/ThemeProvider';
import { Text } from '~/components/Text';
import { ColorModeColors } from '~/typings/colorMode';
import { pxToRem } from '~/utils/pxToRem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Theme/Colors',
  component: undefined,
} as ComponentMeta<never>;

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
      <Button onClick={onToggle}>Toggle Color Mode</Button>
      <table style={{ width: '100%', textAlign: 'left' }}>
        <tr>
          <th>
            <Text fontWeight={theme.fontWeight.bold}>Title</Text>
          </th>
          <th>
            <Text fontWeight={theme.fontWeight.bold}>Value</Text>
          </th>
          <th>
            <Text fontWeight={theme.fontWeight.bold}>Swatch</Text>
          </th>
        </tr>
        {Object.keys(theme.colors).map((color) => (
          <tr key={color}>
            <td>
              <Text>{color}</Text>
            </td>
            <td>
              <Text>{theme.colors[color as keyof ColorModeColors]}</Text>
            </td>
            <td>
              <Box
                backgroundColor={theme.colors[color as keyof ColorModeColors]}
                borderColor={theme.colors.text}
                borderStyle="solid"
                borderWidth="1px"
                height={pxToRem(100)}
                width={pxToRem(150)}
              />
            </td>
          </tr>
        ))}
      </table>
    </FlexBox>
  );
};
