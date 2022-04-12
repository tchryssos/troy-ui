/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';

import {
  ALLOWED_COMMON_CSS_KEYS,
  ALLOWED_FLEXBOX_CSS_KEYS,
  ALLOWED_GRIDBOX_CSS_KEYS,
  AllowedCommonCssProps,
  AllowedFlexboxCssProps,
  AllowedGridBoxCssProps,
  filterCssProps,
} from '~/utils/css';

type BoxProps = AllowedCommonCssProps &
  AllowedFlexboxCssProps &
  AllowedGridBoxCssProps & {
    className?: string;
  };

export const Box: React.FC<BoxProps> = styled('div')<BoxProps>((props) => ({
  ...filterCssProps(props, [
    ...ALLOWED_COMMON_CSS_KEYS,
    ...(props.display === 'flex' || props.display === 'inline-flex'
      ? ALLOWED_FLEXBOX_CSS_KEYS
      : props.display === 'grid' || props.display === 'inline-grid'
      ? ALLOWED_GRIDBOX_CSS_KEYS
      : []),
  ]),
}));
