import { createContext } from 'react';

type NavContext = {
  navPortalNode: HTMLDivElement | undefined;
};

export const NavContext = createContext<NavContext>({
  navPortalNode: undefined,
});
