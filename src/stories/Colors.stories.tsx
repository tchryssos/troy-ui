import { ComponentMeta } from '@storybook/react';
import { useContext } from 'react';

import { Box } from '~/components/box/Box';
import { FlexBox } from '~/components/box/FlexBox';
import { BaseButton } from '~/components/button/BaseButton';
import { ThemeContext } from '~/components/providers/ThemeProvider';
import { Typography } from '~/components/Typography';
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
      <BaseButton onClick={onToggle}>Toggle Color Mode</BaseButton>
      <table style={{ width: '100%', textAlign: 'left' }}>
        <tr>
          <th>
            <Typography fontWeight={theme.fontWeight.bold}>Title</Typography>
          </th>
          <th>
            <Typography fontWeight={theme.fontWeight.bold}>Path</Typography>
          </th>
          <th>
            <Typography fontWeight={theme.fontWeight.bold}>Swatch</Typography>
          </th>
        </tr>
        {Object.keys(theme.colors).map((color) => (
          <tr key={color}>
            <td>
              <Typography fontFamily="monospace">{color}</Typography>
            </td>
            <td>
              <Typography fontFamily="monospace">
                theme.colors.{color}
              </Typography>
            </td>
            <td>
              <FlexBox
                flexDirection="column"
                gap={theme.spacing[4]}
                marginBottom={theme.spacing[16]}
              >
                <Box
                  backgroundColor={theme.colors[color as keyof ColorModeColors]}
                  borderColor={theme.colors.text}
                  borderStyle="solid"
                  borderWidth="1px"
                  height={pxToRem(100)}
                  width={pxToRem(150)}
                />
                <Typography fontFamily="monospace">
                  {theme.colors[color as keyof ColorModeColors]}
                </Typography>
              </FlexBox>
            </td>
          </tr>
        ))}
      </table>
    </FlexBox>
  );
};
