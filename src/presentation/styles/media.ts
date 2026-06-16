import { breakpoints } from './tokens';

/** 반응형 breakpoint 미디어 쿼리 문자열 */
export const media = {
  mobile: `@media (max-width: ${breakpoints.mobileMax}px)`,
  tablet: `@media (min-width: ${breakpoints.tabletMin}px) and (max-width: ${breakpoints.tabletMax}px)`,
  tabletUp: `@media (min-width: ${breakpoints.tabletMin}px)`,
  desktop: `@media (min-width: ${breakpoints.desktopMin}px)`,
} as const;
