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

function ButtonGrid({
  variant,
  disabled,
}: {
  variant: BaseButtonProps['variant'];
  disabled?: boolean;
}) {
  return (
    <GridBox columns={3} maxWidth="500px" width="100%">
      {severities.map((severity) => (
        <FlexBox flexDirection="column" gap={4} key={severity}>
          <BaseButton
            disabled={disabled}
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

function ButtonDisplay({ variant }: { variant: BaseButtonProps['variant'] }) {
  return (
    <FlexBox flexDirection="column" gap={16} width="100%">
      <FlexBox flexDirection="column" gap={8} width="100%">
        <Typography>Normal</Typography>
        <ButtonGrid variant={variant} />
      </FlexBox>
      <FlexBox flexDirection="column" gap={8} width="100%">
        <Typography>Disabled</Typography>
        <ButtonGrid disabled variant={variant} />
      </FlexBox>
    </FlexBox>
  );
}

export const FillVariant: Story = {
  render: () => <ButtonDisplay variant="fill" />,
};

export const OutlineVariant: Story = {
  render: () => <ButtonDisplay variant="outline" />,
};

export const TextVariant: Story = {
  render: () => <ButtonDisplay variant="text" />,
};
