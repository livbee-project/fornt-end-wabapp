import { css } from 'styled-components';

/** 쇼호스트·모델·공고 목록/상세/등록 카드 — 테두리 없음, 옅은 그림자 */
export const profileCardSurface = css`
  border: 0;
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
`;

/** 홈·콘텐츠 목록 카드 — 1px 테두리 + 목록용 그림자 */
export const listCardSurface = css`
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-list-card);
`;

export const listCardSurfaceHover = css`
  ${listCardSurface}
  transition: box-shadow var(--duration-fast) var(--ease-standard);

  &:hover {
    box-shadow: var(--shadow-card-hover);
  }
`;

/** 목록 페이지 FAB 공통 위치·크기 */
export const listPageFab = css`
  position: fixed;
  right: ${({ theme }) => theme.layout.listFab.right};
  bottom: ${({ theme }) => theme.layout.listFab.bottom};
  width: ${({ theme }) => theme.layout.listFab.size};
  height: ${({ theme }) => theme.layout.listFab.size};
  border: 0;
  border-radius: var(--radius-round);
  background: var(--color-brand-primary);
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-floating);
  cursor: pointer;
`;
