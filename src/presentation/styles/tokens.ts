/** LIVBEE 디자인 토큰 단일 원본 — theme·GlobalStyle이 여기서 파생된다. */

/** 색상 디자인 토큰 */
export const colors = {
  brand: {
    primary: '#687cf4',
    primaryHover: '#4f63d8',
    primarySoft: '#eef2ff',
  },
  text: {
    primary: '#24212b',
    secondary: '#716a7d',
    muted: '#a39caf',
    inverse: '#ffffff',
  },
  surface: {
    default: '#ffffff',
    subtle: '#f8faff',
  },
  border: {
    default: '#e6eaff',
    subtle: '#eef2ff',
  },
  status: {
    success: '#12a894',
    danger: '#ff5a6a',
  },
} as const;

/** 레이아웃·FAB·폼 치수 토큰 */
export const layout = {
  contentWidth: '1280px',
  contentGutterMobile: '16px',
  contentGutterDesktop: '24px',
  listFab: {
    size: '62px',
    right: '22px',
    bottom: '84px',
    iconSize: '26px',
  },
  bottomNavHeight: '74px',
  form: {
    inputHeight: '46px',
    textareaMinHeight: '96px',
  },
} as const;

/** spacing 스케일 토큰 */
export const spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
} as const;

/** border-radius 토큰 */
export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  round: '999px',
} as const;

/** box-shadow 토큰 */
export const shadow = {
  card: '0 2px 8px rgb(54 80 180 / 5%)',
  cardHover: '0 3px 10px rgb(54 80 180 / 6%)',
  listCard: '0 3px 10px rgb(54 80 180 / 10%)',
  floating: '0 12px 32px rgb(54 80 180 / 14%)',
  section: '0 -8px 20px rgb(54 80 180 / 3%)',
} as const;

/** transition duration·easing 토큰 */
export const motion = {
  durationFast: '150ms',
  durationNormal: '250ms',
  easeStandard: 'ease',
} as const;

/** 폰트 패밀리·크기·굵기 타이포 토큰 */
export const typography = {
  fontFamilyBase:
    '"NEXON Lv2 Gothic", "NEXON Lv2 Gothic OTF", "NexonLv2Gothic", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif',
  fontSize: {
    h1: '20px',
    h2: '20px',
    h3: '18px',
    cardTitle: '17px',
    body: '13px',
    bodySmall: '12px',
    meta: '11px',
    chip: '10.5px',
    button: '11px',
    backHeader: '18px',
    homeCardTitle: '15px',
  },
  lineHeight: {
    title: 1.18,
    body: 1.45,
    h3: 1.25,
  },
  fontWeight: {
    title: 900,
    body: 700,
    meta: 800,
  },
  letterSpacing: {
    h1: '-0.05em',
    h2: '-0.04em',
    h3: '-0.04em',
  },
} as const;

/** 반응형 breakpoint(px) 토큰 */
export const breakpoints = {
  mobileMax: 767,
  tabletMin: 768,
  tabletMax: 1023,
  desktopMin: 1024,
} as const;
