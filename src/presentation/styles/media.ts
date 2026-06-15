import { breakpoints } from './tokens';

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobileMax}px)`,
  tablet: `@media (min-width: ${breakpoints.tabletMin}px) and (max-width: ${breakpoints.tabletMax}px)`,
  tabletUp: `@media (min-width: ${breakpoints.tabletMin}px)`,
  desktop: `@media (min-width: ${breakpoints.desktopMin}px)`,
} as const;
