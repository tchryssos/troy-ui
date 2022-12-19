import { ComponentMeta } from '@storybook/react';
import { useContext } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { ThemeContext } from '~/components/providers/ThemeProvider';
import { Text } from '~/components/Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Theme/FontFamilies',
  component: undefined,
} as ComponentMeta<never>;

export const FontFamilies = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <table style={{ width: '100%', textAlign: 'left' }}>
      <tr>
        <th>
          <Text fontWeight={theme.fontWeight.bold}>Title</Text>
        </th>
        <th>
          <Text fontWeight={theme.fontWeight.bold}>Path</Text>
        </th>
        <th>
          <Text fontWeight={theme.fontWeight.bold}>Example Text</Text>
        </th>
      </tr>
      {Object.keys(theme.fontFamily).map((ff) => (
        <tr key={ff}>
          <td style={{ paddingRight: '1rem' }}>
            <Text fontFamily="monospace">{ff}</Text>
          </td>
          <td style={{ paddingRight: '1rem' }}>
            <Text fontFamily="monospace">theme.fontFamily.{ff}</Text>
          </td>
          <td>
            <FlexBox
              flexDirection="column"
              gap={theme.spacing[4]}
              marginBottom={theme.spacing[16]}
            >
              <Text fontFamily={ff}>
                Cheap office coffee / Stays pumping through my veins / (Pumping
                through my veins now) / I work for the man, yeah / But you know
                I love the chains / (I love the chains)
              </Text>
            </FlexBox>
          </td>
        </tr>
      ))}
    </table>
  );
};
