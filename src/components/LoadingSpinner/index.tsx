import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { FlexBox } from '../box/FlexBox';
import { Icon } from '../icons/Icon';
import { IconProps } from '../icons/types';

const Path = styled.path<Pick<IconProps, 'color'>>`
  fill: ${({ color = 'text', theme }) => theme.colors[color]};
`;

function LoadingQuarter({ className, color, title, titleId }: IconProps) {
  return (
    <Icon className={className} title={title} titleId={titleId}>
      <Path color={color} d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8Z" />
    </Icon>
  );
}

const LoadingOuter = styled(FlexBox)`
  width: 100%;
`;

const LoadingInner = styled(FlexBox)(({ theme }) => ({
  width: '25%',
  [theme.breakpoints.xs]: {
    width: '15%',
  },
  [theme.breakpoints.md]: {
    width: '12%',
  },
  [theme.breakpoints.lg]: {
    width: '10%',
  },
}));

const LoadingSpin = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const LoadingSpinner = styled(LoadingQuarter)`
  animation: ${LoadingSpin} 1s linear infinite;
`;

interface LoadingSpinnerProps {
  title: string;
  titleId?: string;
}

export function LoadingPageSpinner({ title, titleId }: LoadingSpinnerProps) {
  return (
    <LoadingOuter center>
      <LoadingInner>
        <LoadingSpinner title={title} titleId={titleId || `${title}-id`} />
      </LoadingInner>
    </LoadingOuter>
  );
}
