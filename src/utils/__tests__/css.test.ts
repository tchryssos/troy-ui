import { themes } from '~/constants/theme';

import { ALLOWED_COMMON_CSS_KEYS, filterCssProps } from '../css';

describe('CSS Utilities', () => {
  describe('filterCssProps', () => {
    it('should filter out non-css props based on css allow-list', () => {
      const props = {
        marginTop: '10px',
        variant: 'primary',
      };

      const filtered = filterCssProps(
        props,
        [...ALLOWED_COMMON_CSS_KEYS],
        themes.light
      );
      expect(filtered).toEqual({ marginTop: '10px' });
    });
    it('should re-assign props that draw from the custom theme to their themed variants rather than directly set them as css props', () => {
      const props = {
        marginTop: '10px',
        backgroundColor: 'danger',
        variant: 'primary',
      };

      const filtered = filterCssProps(
        props,
        [...ALLOWED_COMMON_CSS_KEYS],
        themes.light
      );
      expect(filtered).toEqual({
        marginTop: '10px',
        backgroundColor: themes.light.colors.danger,
      });
    });
    it('should pass through props that have a corresponding custom theme value, but aren\'t being set to a specific theme value (ex. setting color to "red" rather than "danger")', () => {
      const props = {
        marginTop: '10px',
        backgroundColor: 'red',
        variant: 'primary',
      };

      const filtered = filterCssProps(
        props,
        [...ALLOWED_COMMON_CSS_KEYS],
        themes.light
      );
      expect(filtered).toEqual({
        marginTop: '10px',
        backgroundColor: 'red',
      });
    });
  });
});
