import styled from '@emotion/styled';
import {
  AllowedCommonCssProps,
  AllowedFlexboxCssProps,
  AllowedGridBoxCssProps,
  ALLOWED_COMMON_CSS_KEYS,
  ALLOWED_FLEXBOX_CSS_KEYS,
  ALLOWED_GRIDBOX_CSS_KEYS,
  filterCssProps,
} from '~/utils/css';

type BoxProps = AllowedCommonCssProps &
  AllowedFlexboxCssProps &
  AllowedGridBoxCssProps;

export const Box: React.FC<BoxProps> = styled('div')<BoxProps>((props) => ({
  ...filterCssProps(props, [
    ...ALLOWED_COMMON_CSS_KEYS,
    ...(props.display === 'flex' || props.display === 'inline-flex'
      ? ALLOWED_FLEXBOX_CSS_KEYS
      : props.display === 'grid'
      ? ALLOWED_GRIDBOX_CSS_KEYS
      : []),
  ]),
}));
