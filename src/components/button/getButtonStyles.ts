import { CSSObject } from '@emotion/react';

import { Theme } from '../../constants/theme';
import { BaseButtonProps } from './types';

type ButtonVariants = Record<
  NonNullable<BaseButtonProps['variant']>,
  Record<NonNullable<BaseButtonProps['severity']>, CSSObject>
>;

export const getButtonStyles = (
  theme: Theme,
  variant: NonNullable<BaseButtonProps['variant']>,
  severity: NonNullable<BaseButtonProps['severity']>
) => {
  const { colors, filters, colorMode } = theme;

  const bgOrTextColor = colorMode === 'light' ? colors.background : colors.text;

  const fillSharedStyles: CSSObject = {
    borderColor: 'transparent',
    ':hover': {
      filter: `brightness(${theme.filters.brightnessMod})`,
    },
  };

  const outlineSharedStyles: CSSObject = {
    backgroundColor: 'transparent',
    ':hover': {
      backgroundColor: colors.smudge,
    },
  };

  const textSharedStyles: CSSObject = {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    ':hover': {
      backgroundColor: colors.smudge,
    },
  };

  const buttonVariants: ButtonVariants = {
    fill: {
      normal: {
        backgroundColor: colors.primary,
        color: bgOrTextColor,
        ...fillSharedStyles,
      },
      secondary: {
        backgroundColor: colors.accentLight,
        color: colors.text,
        ...fillSharedStyles,
      },
      warning: {
        backgroundColor: colors.warning,
        color: bgOrTextColor,
        ...fillSharedStyles,
      },
      danger: {
        backgroundColor: colors.danger,
        color: bgOrTextColor,
        ...fillSharedStyles,
      },
      success: {
        backgroundColor: colors.success,
        color: bgOrTextColor,
        ...fillSharedStyles,
      },
    },
    outline: {
      normal: {
        color: colors.primary,
        borderColor: colors.primary,
        ...outlineSharedStyles,
      },
      secondary: {
        color: colors.text,
        borderColor: colors.text,
        ...outlineSharedStyles,
      },
      warning: {
        color: colors.warning,
        borderColor: colors.warning,
        ...outlineSharedStyles,
      },
      danger: {
        color: colors.danger,
        borderColor: colors.danger,
        ...outlineSharedStyles,
      },
      success: {
        color: colors.success,
        borderColor: colors.success,
        ...outlineSharedStyles,
      },
    },
    text: {
      normal: {
        color: colors.primary,
        ...textSharedStyles,
      },
      secondary: {
        color: colors.text,
        ...textSharedStyles,
      },
      warning: {
        color: colors.warning,
        ...textSharedStyles,
      },
      danger: {
        color: colors.danger,
        ...textSharedStyles,
      },
      success: {
        color: colors.success,
        ...textSharedStyles,
      },
    },
  };

  return buttonVariants[variant][severity];
};
