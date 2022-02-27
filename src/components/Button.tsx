import styled from '@emotion/styled';
import { pxToRem } from '~/utils/pxToRem';

import { FlexBox } from '../box/FlexBox';
import { BaseButtonProps } from './types';

type StyledProps = Pick<Required<BaseButtonProps>, 'transparent'>;

const StyledButton = styled.button<StyledProps>(({ theme, transparent }) => ({
  color: theme.colors.text,
  cursor: 'pointer',
  minHeight: theme.spacing[32],
  minWidth: theme.spacing[32],
  backgroundColor: transparent ? 'transparent' : theme.colors.accentLight,
  border: transparent
    ? `${theme.border.borderWidth[1]} solid ${theme.colors.text}`
    : 'none',
  // Non-standard padding matches default button padding
  padding: `${pxToRem(1)} ${pxToRem(6)}`,
  ':hover, :active': {
    filter: `brightness(${theme.filters.brightnessMod})`,
  },
  ':disabled': {
    cursor: 'not-allowed',
    backgroundColor: theme.colors.accentHeavy,
    border: 'none',
    filter: 'brightness(1.0)',
  },
}));

const ButtonLike = StyledButton.withComponent(FlexBox);

export const Button: React.FC<BaseButtonProps> = ({
  onClick,
  className,
  type = 'button',
  disabled,
  children,
  transparent,
  buttonLike,
  onFocus,
  id,
}) => {
  if (buttonLike) {
    return (
      <ButtonLike
        center
        className={className}
        transparent={Boolean(transparent)}
      >
        {children}
      </ButtonLike>
    );
  }
  return (
    <StyledButton
      className={className}
      disabled={disabled || (!onClick && type !== 'submit')}
      id={id}
      // eslint-disable-next-line react/button-has-type
      transparent={Boolean(transparent)}
      type={type}
      onClick={onClick}
      onFocus={onFocus}
    >
      {children}
    </StyledButton>
  );
};
