import {
  colors,
  layout,
  motion,
  radius,
  shadow,
  spacing,
  typography,
} from './tokens';

/**
 * :root에 주입할 CSS custom properties.
 * styled-components theme와 동일한 tokens.ts를 참조한다.
 */
export const cssVariableDefinitions = {
  '--color-brand-primary': colors.brand.primary,
  '--color-brand-primary-hover': colors.brand.primaryHover,
  '--color-brand-primary-soft': colors.brand.primarySoft,
  '--color-text-primary': colors.text.primary,
  '--color-text-secondary': colors.text.secondary,
  '--color-text-muted': colors.text.muted,
  '--color-text-inverse': colors.text.inverse,
  '--color-surface': colors.surface.default,
  '--color-surface-subtle': colors.surface.subtle,
  '--color-border': colors.border.default,
  '--color-border-subtle': colors.border.subtle,
  '--color-success': colors.status.success,
  '--color-danger': colors.status.danger,

  '--content-width': layout.contentWidth,
  '--content-gutter-mobile': layout.contentGutterMobile,
  '--content-gutter-desktop': layout.contentGutterDesktop,

  '--space-1': spacing[1],
  '--space-2': spacing[2],
  '--space-3': spacing[3],
  '--space-4': spacing[4],
  '--space-5': spacing[5],
  '--space-6': spacing[6],
  '--space-8': spacing[8],
  '--space-10': spacing[10],
  '--space-12': spacing[12],

  '--radius-sm': radius.sm,
  '--radius-md': radius.md,
  '--radius-lg': radius.lg,
  '--radius-xl': radius.xl,
  '--radius-round': radius.round,

  '--shadow-card': shadow.card,
  '--shadow-card-hover': shadow.cardHover,
  '--shadow-list-card': shadow.listCard,
  '--shadow-floating': shadow.floating,
  '--section-shadow': shadow.section,

  '--duration-fast': motion.durationFast,
  '--duration-normal': motion.durationNormal,
  '--ease-standard': motion.easeStandard,

  /* 레거시 alias — 기존 CSS·컴포넌트 이식 시 호환 */
  '--primary': colors.brand.primary,
  '--primary-dark': colors.brand.primaryHover,
  '--primary-light': colors.brand.primarySoft,
  '--accent-pink': colors.brand.primary,
  '--accent-soft-pink': colors.brand.primarySoft,
  '--icon-point': colors.brand.primary,
  '--icon-point-dark': colors.brand.primaryHover,
  '--icon-point-soft': colors.brand.primarySoft,
  '--background': colors.surface.default,
  '--soft-background': colors.surface.subtle,
  '--card': colors.surface.default,
  '--border': colors.border.default,
  '--section-border': colors.border.subtle,
  '--text': colors.text.primary,
  '--sub-text': colors.text.secondary,
  '--muted-text': colors.text.muted,
  '--danger': colors.status.danger,
  '--success': colors.status.success,
  '--shadow': shadow.card,

  '--font-family-base': typography.fontFamilyBase,
  '--font-h1': typography.fontSize.h1,
  '--font-h2': typography.fontSize.h2,
  '--font-h3': typography.fontSize.h3,
  '--font-card-title': typography.fontSize.cardTitle,
  '--font-body': typography.fontSize.body,
  '--font-body-small': typography.fontSize.bodySmall,
  '--font-meta': typography.fontSize.meta,
  '--font-chip': typography.fontSize.chip,
  '--font-button': typography.fontSize.button,
  '--font-back-header': typography.fontSize.backHeader,
  '--font-home-card-title': typography.fontSize.homeCardTitle,
  '--line-title': String(typography.lineHeight.title),
  '--line-body': String(typography.lineHeight.body),
  '--weight-title': String(typography.fontWeight.title),
  '--weight-body': String(typography.fontWeight.body),
  '--weight-meta': String(typography.fontWeight.meta),
} as const;

export function toCssVariableBlock(
  definitions: Record<string, string>,
): string {
  return Object.entries(definitions)
    .map(([name, value]) => `${name}: ${value};`)
    .join('\n  ');
}
