import styled from '@emotion/styled';
import { FocusEventHandler, MouseEventHandler } from 'react';

import {
  ALLOWED_COMMON_CSS_KEYS,
  AllowedCommonCssProps,
  filterCssProps,
} from '~/utils/css';
import { pxToRem } from '~/utils/pxToRem';

import { FlexBox } from './box/FlexBox';

export interface CoreButtonProps {
  onClick?: MouseEventHandler;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  transparent?: boolean;
  buttonLike?: boolean;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  id?: string;
}

export interface BaseButtonProps
  extends CoreButtonProps,
    AllowedCommonCssProps {
  children: React.ReactNode | React.ReactNode[];
}

type StyledProps = Pick<Required<BaseButtonProps>, 'transparent'>;

const StyledButton = styled.button<StyledProps>(
  ({ theme, transparent, ...rest }) => ({
    borderRadius: theme.borderRadius[4],
    color: theme.colors.text,
    cursor: 'pointer',
    minHeight: theme.spacing[32],
    minWidth: theme.spacing[32],
    backgroundColor: transparent ? 'transparent' : theme.colors.accentLight,
    border: transparent
      ? `${theme.borderWidth[1]} solid ${theme.colors.text}`
      : `${theme.borderWidth[1]} solid transparent`,
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
    ...filterCssProps(rest, [...ALLOWED_COMMON_CSS_KEYS], theme),
  })
);

const ButtonLikeCustom = styled(FlexBox)`
  width: fit-content;
`;

const ButtonLike = StyledButton.withComponent(ButtonLikeCustom);

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
  ...rest
}) => {
  if (buttonLike) {
    return (
      <ButtonLike
        alignItems="center"
        className={className}
        justifyContent="center"
        transparent={Boolean(transparent)}
        {...rest}
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
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
