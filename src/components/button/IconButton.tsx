import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef } from 'react';

import { LoadingSpinner } from '../LoadingSpinner';
import { BaseButton } from './BaseButton';
import { BaseButtonProps } from './types';

interface StandardButtonProps extends BaseButtonProps {
  size?: 'sm' | 'md' | 'lg';
}

export interface IconButtonProps extends StandardButtonProps {
  isLoading?: boolean;
}

export const getIconButtonSize = (
  size: IconButtonProps['size'],
  theme: Theme
) => {
  switch (size) {
    case 'md':
      return theme.spacing['40'];
      break;
    case 'lg':
      return theme.spacing['48'];
      break;
    default:
      return theme.spacing['32'];
  }
};

const IconSafeButton = styled(BaseButton)<Pick<IconButtonProps, 'size'>>(
  ({ theme, size }) => {
    const dimension = getIconButtonSize(size, theme);
    return {
      height: dimension,
      width: dimension,
      minWidth: dimension,
      minHeight: dimension,
      border: 'none',
      padding: theme.spacing[4],
    };
  }
);

const IconsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    { children, size = 'sm', isLoading, disabled, ...rest },
    forwardedRef
  ) {
    return (
      <IconSafeButton
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        disabled={disabled || isLoading}
        ref={forwardedRef}
        size={size}
      >
        <IconsWrapper>
          {isLoading ? <LoadingSpinner title="Loading" /> : children}
        </IconsWrapper>
      </IconSafeButton>
    );
  }
);
