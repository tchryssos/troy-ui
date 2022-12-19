import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FlexBox } from '~/components/box/FlexBox';
import { Theme } from '~/constants/theme';
import { pxToRem } from '~/utils/pxToRem';

const marPadZero = css`
  margin: 0;
  padding: 0;
`;

const baseStyle = css`
  height: 100%;
  width: 100%;
  ${marPadZero};
`;

export const createGlobalStyles = (theme: Theme) => css`
  html {
    background-color: ${theme.colors.background};
    ${baseStyle};
  }
  body {
    ${baseStyle};
    position: relative;
    box-sizing: border-box;
    font-family: ${theme.fontFamily.base};
    color: ${theme.colors.text};
  }
  #app,
  #__next {
    ${baseStyle};
  }
  div,
  input,
  select,
  textarea,
  ul,
  li {
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  input,
  select,
  textarea {
    font-family: ${theme.fontFamily.base};
    background-color: ${theme.colors.accentLight};
    color: ${theme.colors.text};
    border-radius: ${pxToRem(4)};
    border-width: ${theme.borderWidth[1]};
    :disabled {
      background-color: ${theme.colors.smudge};
    }
  }
  p,
  h1,
  h2,
  h3,
  pre,
  figure,
  ul,
  li {
    ${marPadZero};
  }
`;

export const GlobalWrapper = styled(FlexBox)`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;
