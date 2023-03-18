import { ComponentMeta } from '@storybook/react';
import { useContext } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { ThemeContext } from '~/components/providers/ThemeProvider';
import { Typography } from '~/components/Typography';

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
          <Typography fontWeight={theme.fontWeight.bold}>Title</Typography>
        </th>
        <th>
          <Typography fontWeight={theme.fontWeight.bold}>Path</Typography>
        </th>
        <th>
          <Typography fontWeight={theme.fontWeight.bold}>
            Example Typography
          </Typography>
        </th>
      </tr>
      {Object.keys(theme.fontFamily).map((ff) => (
        <tr key={ff}>
          <td style={{ paddingRight: '1rem' }}>
            <Typography fontFamily="monospace">{ff}</Typography>
          </td>
          <td style={{ paddingRight: '1rem' }}>
            <Typography fontFamily="monospace">
              theme.fontFamily.{ff}
            </Typography>
          </td>
          <td>
            <FlexBox
              flexDirection="column"
              gap={theme.spacing[4]}
              marginBottom={theme.spacing[16]}
            >
              <Typography fontFamily={ff}>
                Cheap office coffee / Stays pumping through my veins / (Pumping
                through my veins now) / I work for the man, yeah / But you know
                I love the chains / (I love the chains)
              </Typography>
            </FlexBox>
          </td>
        </tr>
      ))}
    </table>
  );
};
