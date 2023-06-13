import { Typography } from '../Typography';
import { BaseButton } from './BaseButton';
import { CoreButtonProps } from './types';

interface TextButtonProps extends CoreButtonProps {
  label: string;
  transparent?: boolean;
}

export function TextButton({ label, ...rest }: TextButtonProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BaseButton {...rest}>
      <Typography as="span" variant="body">
        {label}
      </Typography>
    </BaseButton>
  );
}
