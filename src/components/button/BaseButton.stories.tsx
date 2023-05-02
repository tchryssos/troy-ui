import type { Meta, StoryObj } from '@storybook/react';

import { FlexBox, GridBox } from '../box';
import { Typography } from '../Typography';
import { BaseButton } from './BaseButton';
import { BaseButtonProps } from './types';

const meta: Meta<typeof BaseButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Buttons/BaseButton',
  component: BaseButton,
};

export default meta;

type Story = StoryObj<typeof BaseButton>;

const severities: NonNullable<BaseButtonProps['severity']>[] = [
  'normal',
  'secondary',
  'warning',
  'danger',
  'success',
];

function ButtonGrid({ variant }: { variant: BaseButtonProps['variant'] }) {
  return (
    <GridBox columns={3} maxWidth="500px" width="100%">
      {severities.map((severity) => (
        <FlexBox flexDirection="column" gap={4} key={severity}>
          <BaseButton
            disabled
            severity={severity}
            variant={variant}
            onClick={() => null}
          >
            <Typography variant="body-xs">
              {severity.charAt(0).toUpperCase() + severity.slice(1)}
            </Typography>
          </BaseButton>
        </FlexBox>
      ))}
    </GridBox>
  );
}

export const FillVariant: Story = {
  render: () => <ButtonGrid variant="fill" />,
};

export const OutlineVariant: Story = {
  render: () => <ButtonGrid variant="outline" />,
};

export const TextVariant: Story = {
  render: () => <ButtonGrid variant="text" />,
};
