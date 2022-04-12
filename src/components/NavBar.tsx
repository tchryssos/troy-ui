import styled from '@emotion/styled';

import { useBreakpointsLessThan } from '~/hooks/breakpoints';
import { Spacing } from '~/typings/theme';

import { FlexBox } from './box/FlexBox';

interface NavBarProps {
  setNavPortalNode: (node: HTMLDivElement) => void;
  className?: string;
  /**
   * @remarks
   * `children` will be placed at the BEGINNING of the NavBar, while
   * items within the portal will be after them. Use `children` for things like
   * a logo, a home link, etc.
   */
  children: React.ReactNode;
  withBorder: boolean;
  navItemFlexGap?: Spacing;
}

const NavBarWrapper = styled(FlexBox)<{ withBorder: boolean }>(
  ({ theme, withBorder }) => ({
    position: 'fixed',
    backgroundColor: theme.colors.background,
    top: 0,
    left: 0,
    width: '100%',
    padding: theme.spacing[16],
    borderBottom: withBorder
      ? `${theme.border.borderWidth[1]} solid ${theme.colors.accentHeavy}`
      : '',
    [theme.breakpoints.sm]: {
      padding: `${theme.spacing[16]} ${theme.spacing[32]}`,
    },
    zIndex: 100,
  })
);

const Portal = styled.div<{ flexGap: Spacing }>`
  display: flex;
  align-items: center;
  gap: ${({ theme, flexGap }) => theme.spacing[flexGap]};
`;

export const NavBar: React.FC<NavBarProps> = ({
  setNavPortalNode,
  className,
  children,
  withBorder = true,
  navItemFlexGap,
}) => {
  const isXxs = useBreakpointsLessThan('xs');
  const flexGap = isXxs ? 8 : 16;

  return (
    <NavBarWrapper className={className} withBorder={withBorder}>
      {children}
      <Portal flexGap={navItemFlexGap || flexGap} ref={setNavPortalNode} />
    </NavBarWrapper>
  );
};
