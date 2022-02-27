import { AllowedCommonCssProps, AllowedGridBoxCssProps } from '~/utils/css';
import { pxToRem } from '~/utils/pxToRem';
import { Box } from './Box';

type GridBoxProps = Omit<AllowedCommonCssProps, 'display'> &
  AllowedGridBoxCssProps & {
    columns: number;
    className?: string;
  };

export const GridBox: React.FC<GridBoxProps> = ({
  children,
  columns = 2,
  gridTemplateColumns,
  columnGap,
  rowGap,
  ...rest
}) => (
  <Box
    display="grid"
    gridTemplateColumns={gridTemplateColumns || `repeat(${columns}, 1fr)`}
    columnGap={columnGap || pxToRem(8)}
    rowGap={rowGap || pxToRem(8)}
    {...rest}
  >
    {children}
  </Box>
);
