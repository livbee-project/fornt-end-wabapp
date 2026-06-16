/** 금액을 만원 단위 한국어 문자열로 포맷한다. */
export const formatWon = (value: number) =>
  `${Math.round(value / 10_000).toLocaleString('ko-KR')}만원`;

/** ISO 날짜를 화면 표시용(YYYY.MM.DD)으로 변환한다. */
export const formatDate = (value?: string, fallback = '미정') => {
  if (!value) return fallback;
  return value.replace(/-/g, '.');
};

/** 바이트 크기를 B/KB/MB 단위 문자열로 포맷한다. */
export const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
};
