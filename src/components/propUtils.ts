import * as CSS from 'csstype';

export const ALLOWED_COMMON_CSS_KEYS = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'display',
  'color',
  'background',
  'backgroundColor',
  'fontFamily',
  'fontStyle',
  'fontWeight',
  'lineHeight',
  'width',
  'height',
  'maxWidth',
  'maxHeight',
  'border',
  'borderWidth',
  'borderColor',
  'borderStyle',
  'borderTop',
  'borderTopWidth',
  'borderTopColor',
  'borderTopStyle',
  'borderRight',
  'borderRightWidth',
  'borderRightColor',
  'borderRightStyle',
  'borderBottom',
  'borderBottomWidth',
  'borderBottomColor',
  'borderBottomStyle',
  'borderLeft',
  'borderLeftWidth',
  'borderLeftColor',
  'borderLeftStyle',
  'position',
  'boxShadow',
] as const;

export type AllowedCommonCssProps = {
  [k in typeof ALLOWED_COMMON_CSS_KEYS[number]]: CSS.Properties[k];
};

export const ALLOWED_TEXT_CSS_KEYS = ['lineHeight', 'lineClamp'] as const;

export type AllowedTextCssProps = {
  [k in typeof ALLOWED_TEXT_CSS_KEYS[number]]: CSS.Properties[k];
};

export const filterCssProps = (
  props: Record<string, any>,
  allowedPropKeys: (keyof CSS.Properties)[]
) =>
  Object.keys(props).reduce((propObj, currPropKey) => {
    const nextPropObj = { ...propObj };
    if ((allowedPropKeys as string[]).includes(currPropKey)) {
      (nextPropObj as Record<string, unknown>)[currPropKey] =
        props[currPropKey];
    }
    return nextPropObj;
  }, {} as Partial<CSS.Properties>);
