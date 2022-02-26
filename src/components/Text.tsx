import styled from '@emotion/styled';
import {
  ALLOWED_COMMON_CSS_KEYS,
  AllowedCommonCssProps,
  ALLOWED_TEXT_CSS_KEYS,
  AllowedTextCssProps,
  filterCssProps,
} from '../utils/css';

type TextProps = AllowedCommonCssProps &
  AllowedTextCssProps & {
    className?: string;
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    variant?: 'body' | 'subBody' | 'title';
  };

export const Text: React.FC<TextProps> = styled('span')<TextProps>(
  ({ as, variant, theme, ...rest }) => {
    console.log(as, variant, theme);
    return {
      margin: 0,
      padding: 0,
      fontWeight: theme.fontWeight.regular,
      fontFamily: theme.fontFamily.normal,
      ...((variant === 'body' || as === 'p') && {
        fontSize: theme.fontSize.body,
      }),
      ...(variant === 'subBody' && {
        fontSize: theme.fontSize.subBody,
      }),
      ...((variant === 'title' || as?.includes('h')) && {
        fontSize: theme.fontSize.title,
      }),
      ...filterCssProps(rest, [
        ...ALLOWED_COMMON_CSS_KEYS,
        ...ALLOWED_TEXT_CSS_KEYS,
      ]),
    };
  }
);
