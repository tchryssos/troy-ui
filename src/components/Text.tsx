import styled from '@emotion/styled';
import {
  ALLOWED_COMMON_CSS_KEYS,
  AllowedCommonCssProps,
  ALLOWED_TEXT_CSS_KEYS,
  AllowedTextCssProps,
  filterCssProps,
} from './propUtils';

type TextProps = AllowedCommonCssProps &
  AllowedTextCssProps & {
    className?: string;
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    variant?: 'body' | 'subBody' | 'title';
  };

export const Text: React.FC<TextProps> = styled('span')<TextProps>(
  ({ as, variant, ...rest }) => ({
    margin: 0,
    padding: 0,
    fontWeight: 400,
    ...((variant === 'body' || as === 'p') && {
      fontSize: '1rem',
    }),
    ...(variant === 'subBody' && {
      fontSize: '0.875rem',
    }),
    ...((variant === 'title' || as?.includes('h')) && {
      fontSize: '2rem',
    }),
    ...filterCssProps(rest, [
      ...ALLOWED_COMMON_CSS_KEYS,
      ...ALLOWED_TEXT_CSS_KEYS,
    ]),
  })
);
