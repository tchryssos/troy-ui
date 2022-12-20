// eslint-disable-next-line import/no-extraneous-dependencies
import * as CSS from 'csstype';

import { Theme } from '~/constants/theme';
import { Spacing } from '~/typings/theme';

export const ALLOWED_COMMON_CSS_KEYS = [
  'alignSelf',
  'background',
  'backgroundColor',
  'border',
  'borderBottom',
  'borderBottomColor',
  'borderBottomStyle',
  'borderBottomWidth',
  'borderColor',
  'borderLeft',
  'borderLeftColor',
  'borderLeftStyle',
  'borderLeftWidth',
  'borderRight',
  'borderRightColor',
  'borderRightStyle',
  'borderRightWidth',
  'borderStyle',
  'borderTop',
  'borderTopColor',
  'borderTopStyle',
  'borderTopWidth',
  'borderWidth',
  'bottom',
  'boxShadow',
  'color',
  'display',
  'fontFamily',
  'fontStyle',
  'fontSize',
  'fontWeight',
  'gridColumnEnd',
  'gridColumnStart',
  'gridRowEnd',
  'gridRowStart',
  'height',
  'justifySelf',
  'left',
  'lineHeight',
  'margin',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'maxHeight',
  'maxWidth',
  'overflow',
  'padding',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'position',
  'right',
  'textOverflow',
  'top',
  'width',
] as const;

const CUSTOM_CSS_SPACING_KEYS = [
  'marginX',
  'marginY',
  'paddingX',
  'paddingY',
] as const;
type AllowedCustomCssSpacingProps = {
  [k in typeof CUSTOM_CSS_SPACING_KEYS[number]]?:
    | Spacing
    | CSS.Properties['margin'];
};

export type AllowedCommonCssProps = {
  [k in typeof ALLOWED_COMMON_CSS_KEYS[number]]?: CSS.Properties[k];
};

export const ALLOWED_TEXT_CSS_KEYS = ['lineHeight', 'lineClamp'] as const;

export type AllowedTextCssProps = {
  [k in typeof ALLOWED_TEXT_CSS_KEYS[number]]?: CSS.Properties[k];
};

export const ALLOWED_FLEXBOX_CSS_KEYS = [
  'gap',
  'justifyContent',
  'alignItems',
  'flex',
  'flexDirection',
  'flexWrap',
] as const;

export type AllowedFlexboxCssProps = {
  [k in typeof ALLOWED_FLEXBOX_CSS_KEYS[number]]?: CSS.Properties[k];
};

export const ALLOWED_GRIDBOX_CSS_KEYS = [
  'gap',
  'rowGap',
  'columnGap',
  'gridTemplateColumns',
  'gridTemplateRows',
  'justifyItems',
  'alignItems',
  'placeItems',
  'justifyContent',
  'alignContent',
  'grid',
] as const;

export type AllowedGridBoxCssProps = {
  [k in typeof ALLOWED_GRIDBOX_CSS_KEYS[number]]?: CSS.Properties[k];
};

type AllowedCustomCssProps = AllowedCustomCssSpacingProps;

type AllowedCssProps = AllowedCommonCssProps &
  AllowedTextCssProps &
  AllowedFlexboxCssProps &
  AllowedGridBoxCssProps &
  AllowedCustomCssProps;

const CUSTOM_THEME_CSS_PROPS: {
  [k in keyof AllowedCssProps]: keyof Theme;
} = {
  backgroundColor: 'colors',
  color: 'colors',
  borderColor: 'colors',
  margin: 'spacing',
  marginBottom: 'spacing',
  marginLeft: 'spacing',
  marginRight: 'spacing',
  marginTop: 'spacing',
  marginX: 'spacing',
  marginY: 'spacing',
  padding: 'spacing',
  paddingBottom: 'spacing',
  paddingLeft: 'spacing',
  paddingRight: 'spacing',
  paddingTop: 'spacing',
  paddingX: 'spacing',
  paddingY: 'spacing',
  gap: 'spacing',
  rowGap: 'spacing',
  columnGap: 'spacing',
  fontWeight: 'fontWeight',
  fontFamily: 'fontFamily',
  borderWidth: 'borderWidth',
  borderBottomWidth: 'borderRadius',
  fontSize: 'fontSize',
};

const handleCustomThemeCssProps = (
  currPropKey: keyof AllowedCssProps,
  theme: Theme,
  propValue: string | number
) => {
  // ... get the corresponding theme key...
  const propCorrespondingThemeKey = CUSTOM_THEME_CSS_PROPS[currPropKey]!;
  // ... and if the value of the prop exists in the theme for that key...
  const propValueIsThemeSubkey = Object.keys(
    theme[propCorrespondingThemeKey]
  ).includes(propValue as string);
  if (propValueIsThemeSubkey) {
    // ... set the value of the prop to the corresponding theme value
    return theme[propCorrespondingThemeKey][
      propValue as keyof Theme[keyof Theme]
    ];
  }
  // ...otherwise, pass it through to the filtered props
  return propValue;
};

export const filterCssProps = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any>,
  theme: Theme
) =>
  Object.keys(props).reduce((propObj, currPropKey) => {
    const nextPropObj = { ...propObj } as Record<string, unknown>;
    // If the prop is one of the css props that uses the custom theme...
    const usesCustomTheme = Object.keys(CUSTOM_THEME_CSS_PROPS).includes(
      currPropKey
    );
    if (usesCustomTheme) {
      nextPropObj[currPropKey] = handleCustomThemeCssProps(
        currPropKey as keyof AllowedCssProps,
        theme,
        props[currPropKey]
      );
    } else {
      nextPropObj[currPropKey] = props[currPropKey];
    }
    return nextPropObj;
  }, {} as Partial<CSS.Properties>);
