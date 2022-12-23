/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';

import {
  AllowedCommonCssProps,
  AllowedFlexboxCssProps,
  AllowedGridBoxCssProps,
  makeCssPropStyles,
} from '~/utils/css';

type BoxProps = AllowedCommonCssProps &
  AllowedFlexboxCssProps &
  AllowedGridBoxCssProps & {
    className?: string;
  };

export const Box: React.FC<BoxProps> =
  styled('div')<BoxProps>(makeCssPropStyles);
