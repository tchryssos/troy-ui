import styled from '@emotion/styled';

import { Typography } from '../Typography';
import { BaseButton } from './BaseButton';
import { CoreButtonProps } from './types';

interface TextButtonProps extends CoreButtonProps {
  label: string;
  transparent?: boolean;
}

const StyledButton = styled(BaseButton)<Pick<TextButtonProps, 'transparent'>>(
  ({ transparent }) => ({
    ...(transparent && {
      backgroundColor: 'transparent',
      border: 'none',
      padding: 0,
    }),
  })
);

export function TextButton({ label, ...rest }: TextButtonProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledButton {...rest}>
      <Typography as="span" variant="body">
        {label}
      </Typography>
    </StyledButton>
  );
}
