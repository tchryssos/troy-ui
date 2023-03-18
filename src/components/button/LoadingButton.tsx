import styled from '@emotion/styled';

import { LoadingSpinner } from '../LoadingSpinner';
import { Typography } from '../Typography';
import { BaseButton } from './BaseButton';

type LoadingButtonBaseProps = {
  disabled?: boolean;
  loading: boolean;
  label: string;
};

type SubmitProps = {
  type: 'submit';
  onClick?: never;
};

type ButtonProps = {
  type: 'button';
  onClick: () => void;
};

type LoadingButtonProps = LoadingButtonBaseProps &
  (SubmitProps | ButtonProps) & {
    className?: string;
  };

const Spinner = styled(LoadingSpinner)`
  max-height: ${({ theme }) => theme.fontSize[18]};
`;

const Button = styled(BaseButton)<Pick<LoadingButtonProps, 'loading'>>(
  ({ loading }) => ({
    ...(loading && {
      display: 'flex',
      alignItems: 'center',
    }),
  })
);

export function LoadingButton({
  disabled,
  loading,
  label,
  type = 'button',
  onClick,
  className,
}: LoadingButtonProps) {
  return (
    <Button
      className={className}
      disabled={disabled || loading}
      loading={loading}
      type={type}
      onClick={onClick}
    >
      {loading ? (
        <Spinner title="Loading" titleId="loading-button" />
      ) : (
        <Typography as="span" variant="body">
          {label}
        </Typography>
      )}
    </Button>
  );
}
