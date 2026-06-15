export const formatWon = (value: number) =>
  `${Math.round(value / 10_000).toLocaleString('ko-KR')}만원`;

export const formatDate = (value?: string, fallback = '미정') => {
  if (!value) return fallback;
  return value.replace(/-/g, '.');
};
