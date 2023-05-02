import styled from '@emotion/styled';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { forwardRef } from 'react';

import { pxToRem } from '../../utils/pxToRem';
import { FlexBox } from '../box/FlexBox';
import { getButtonStyles } from './getButtonStyles';
import { BaseButtonProps } from './types';

type StyledProps = Pick<Required<BaseButtonProps>, 'variant' | 'severity'>;

const StyledButton = styled(ButtonUnstyled)<StyledProps>(
  ({ theme, variant, severity }) => ({
    ...getButtonStyles(theme, variant, severity),
    cursor: 'pointer',
    minHeight: theme.spacing[32],
    minWidth: theme.spacing[32],
    borderRadius: theme.spacing[2],
    borderWidth: theme.borderWidth[2],
    borderStyle: 'solid',
    // Non-standard padding matches default button padding
    padding: `${pxToRem(1)} ${pxToRem(6)}`,
    ':disabled': {
      cursor: 'not-allowed',
      filter: 'brightness(1.0)',
    },
    transition: 'background-color 0.25s, filter 0.25s',
  })
);

const ButtonLike = StyledButton.withComponent(FlexBox);

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  function BaseButton(
    {
      onClick,
      className,
      type = 'button',
      disabled,
      children,
      variant = 'text',
      buttonLike,
      severity = 'normal',
      ...rest
    },
    forwardedRef
  ) {
    if (buttonLike) {
      return (
        <ButtonLike
          center
          className={className}
          /**
           * Because of the `.withComponent` trickery we're doing here
           * to get the button styles on a FlexBox, ts isn't happy with this ref
           * being typed as a Button or a Div. HOPEFULLY no one does anything too crazy
           * with this ref to the point where we actually run into a problem, so
           * I'm just ignoring this error.
           */
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={forwardedRef as any}
          severity={severity}
          variant={variant}
        >
          {children}
        </ButtonLike>
      );
    }
    return (
      <StyledButton
        {...rest}
        className={className}
        disabled={disabled || (!onClick && type !== 'submit')}
        ref={forwardedRef}
        severity={severity}
        type={type}
        variant={variant}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    );
  }
);
