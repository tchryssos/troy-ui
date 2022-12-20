import { themes } from '~/constants/theme';

import { filterCssProps } from '../css';

describe('CSS Utilities', () => {
  describe('filterCssProps', () => {
    it('should allow all props to pass through, regardless of css validity', () => {
      const props = {
        marginTop: '10px',
        variant: 'primary',
      };

      const filtered = filterCssProps(props, themes.light);
      expect(filtered).toEqual({ marginTop: '10px', variant: 'primary' });
    });
    it('should re-assign props that draw from the custom theme to their themed variants rather than directly set them as css props', () => {
      const props = {
        marginTop: '10px',
        backgroundColor: 'danger',
        variant: 'primary',
      };

      const filtered = filterCssProps(props, themes.light);
      expect(filtered).toEqual({
        marginTop: '10px',
        backgroundColor: themes.light.colors.danger,
        variant: 'primary',
      });
    });
  });
});
