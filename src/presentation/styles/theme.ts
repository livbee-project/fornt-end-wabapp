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

/** styled-components DefaultTheme에 주입할 앱 테마 객체 */
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

/** AppTheme 타입 — theme 객체 구조 */
export type AppTheme = typeof theme;
