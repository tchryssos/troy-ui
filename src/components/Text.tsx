import styled from '@emotion/styled';

import {
  AllowedCommonCssProps,
  AllowedTextCssProps,
  filterCssProps,
} from '../utils/css';

type TextProps = AllowedCommonCssProps &
  AllowedTextCssProps & {
    className?: string;
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    variant?:
      | 'body-sm'
      | 'body'
      | 'body-lg'
      | 'title-sm'
      | 'title'
      | 'title-lg'
      | 'title-xl';
  };

export const Text: React.FC<TextProps> = styled('span')<TextProps>(
  ({ as, variant, theme, ...rest }) => ({
    fontWeight: theme.fontWeight.regular,
    fontFamily: theme.fontFamily.base,
    ...(variant === 'body-sm' && {
      fontSize: theme.fontSize[14],
    }),
    ...((variant === 'body' || as === 'p') && {
      fontSize: theme.fontSize[16],
    }),
    ...(variant === 'body-lg' && {
      fontSize: theme.fontSize[18],
    }),
    ...((variant === 'title-sm' ||
      as === 'h4' ||
      as === 'h5' ||
      as === 'h6') && {
      fontSize: theme.fontSize[20],
    }),
    ...((variant === 'title' || as === 'h3') && {
      fontSize: theme.fontSize[24],
    }),
    ...((variant === 'title-lg' || as === 'h2') && {
      fontSize: theme.fontSize[32],
    }),
    ...((variant === 'title-xl' || as === 'h1') && {
      fontSize: theme.fontSize[56],
    }),
    ...filterCssProps(rest, theme),
  })
);
