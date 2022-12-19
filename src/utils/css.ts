// eslint-disable-next-line import/no-extraneous-dependencies
import * as CSS from 'csstype';

import { Theme } from '~/constants/theme';

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

type AllowedCssProps = AllowedCommonCssProps &
  AllowedTextCssProps &
  AllowedFlexboxCssProps &
  AllowedGridBoxCssProps;

const CUSTOM_THEME_CSS_PROPS: Record<keyof AllowedCssProps, keyof Theme> = {
  backgroundColor: 'colors',
  color: 'colors',
  borderColor: 'colors',
  margin: 'spacing',
  marginBottom: 'spacing',
  marginLeft: 'spacing',
  marginRight: 'spacing',
  marginTop: 'spacing',
  padding: 'spacing',
  paddingBottom: 'spacing',
  paddingLeft: 'spacing',
  paddingRight: 'spacing',
  paddingTop: 'spacing',
  gap: 'spacing',
  rowGap: 'spacing',
  columnGap: 'spacing',
  fontWeight: 'fontWeight',
  fontFamily: 'fontFamily',
  borderWidth: 'borderWidth',
  borderBottomWidth: 'borderRadius',
  fontSize: 'fontSize',
};

export const filterCssProps = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any>,
  allowedPropKeys: (keyof CSS.Properties)[],
  theme: Theme
) =>
  Object.keys(props).reduce((propObj, currPropKey) => {
    const nextPropObj = { ...propObj };
    // If the current prop key exists in the list of allowed
    // css properties...
    if ((allowedPropKeys as string[]).includes(currPropKey)) {
      // ... AND is one of the properties with a corresponding
      // custom theme value...
      if (Object.keys(CUSTOM_THEME_CSS_PROPS).includes(currPropKey)) {
        // ... pass the themed value to the filtered props
        // IF the prop's value is one of the subkeys,
        // otherwise, pass the prop through to the filtered props
        const themePropKey: keyof Theme =
          CUSTOM_THEME_CSS_PROPS[currPropKey as keyof AllowedCssProps];
        if (Object.keys(theme[themePropKey]).includes(props[currPropKey])) {
          (nextPropObj as Record<string, unknown>)[currPropKey] = [
            themePropKey,
          ][props[currPropKey]];
        } else {
          (nextPropObj as Record<string, unknown>)[currPropKey] =
            props[currPropKey];
        }
      } else {
        // ...pass it through to the filtered props
        (nextPropObj as Record<string, unknown>)[currPropKey] =
          props[currPropKey];
      }
    }
    return nextPropObj;
  }, {} as Partial<CSS.Properties>);
