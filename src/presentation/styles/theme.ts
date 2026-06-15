import {
  breakpoints,
  colors,
  layout,
  motion,
  radius,
  shadow,
  spacing,
  typography,
} from './tokens';

export const theme = {
  colors,
  layout,
  spacing,
  radius,
  shadow,
  motion,
  typography,
  breakpoints,
} as const;

export type AppTheme = typeof theme;
