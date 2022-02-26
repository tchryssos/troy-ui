import * as CSS from 'csstype';
import styled from '@emotion/styled';
import { CommonAllowedCss } from './types';

type TextAllowedCss = Pick<CSS.Properties, 'lineClamp' | 'lineHeight'>;

interface TextProps extends CommonAllowedCss, TextAllowedCss {
  className?: string;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'body' | 'subBody' | 'title';
}

const DefaultText = styled('span')<TextProps>``;

export const Text: React.FC<TextProps> = (props) => <DefaultText {...props} />;
