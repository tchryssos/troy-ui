import { AllowedCommonCssProps, AllowedFlexboxCssProps } from '~/utils/css';
import { Box } from './Box';

type FlexBoxProps = Omit<AllowedCommonCssProps, 'display'> &
  AllowedFlexboxCssProps & {
    className?: string;
    center?: boolean;
  };

export const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  flexWrap,
  center,
  justifyContent,
  alignItems,
  ...rest
}) => (
  <Box
    display="flex"
    flexWrap={flexWrap || 'wrap'}
    justifyContent={justifyContent || (center ? 'center' : 'flex-start')}
    alignItems={alignItems || (center ? 'center' : 'flex-start')}
    {...rest}
  >
    {children}
  </Box>
);
