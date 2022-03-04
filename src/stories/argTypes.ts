import { ALLOWED_COMMON_CSS_KEYS } from '~/utils/css';

export const COMMON_ARG_TYPES = {
  ...ALLOWED_COMMON_CSS_KEYS.reduce(
    (argObj: Record<string, { control: string }>, currKey) => {
      const nextObj = { ...argObj };
      nextObj[currKey as string] = { control: 'text' };
      return nextObj;
    },
    {}
  ),
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
};
