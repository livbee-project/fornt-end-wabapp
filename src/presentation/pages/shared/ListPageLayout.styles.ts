import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { listPageFab, media } from '@/presentation/styles';

export const PageRoot = styled.div`
  min-height: 100vh;
  padding-bottom: calc(${({ theme }) => theme.layout.bottomNavHeight} + 88px);
  background: ${({ theme }) => theme.colors.surface.default};

  ${media.desktop} {
    padding-bottom: 96px;
  }
`;

export const PageMain = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin: 0 auto;
  padding: 20px ${({ theme }) => theme.layout.contentGutterMobile} 0;

  ${media.tabletUp} {
    padding: 28px ${({ theme }) => theme.layout.contentGutterDesktop} 0;
  }
`;

export const PageHeading = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: -0.05em;
`;

export const PageDescription = styled.p`
  margin: 8px 0 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: var(--font-body-small);
  line-height: 1.45;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 18px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterChip = styled.button<{ $active?: boolean }>`
  flex: 0 0 auto;
  min-height: 34px;
  padding: 0 14px;
  border: 1px solid
    ${({ $active, theme }) => ($active ? theme.colors.brand.primary : theme.colors.border.default)};
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.brand.primarySoft : theme.colors.surface.default};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.brand.primary : theme.colors.text.secondary};
  font-size: var(--font-body-small);
  font-weight: ${({ $active, theme }) =>
    $active ? theme.typography.fontWeight.meta : theme.typography.fontWeight.body};
  cursor: pointer;
`;

export const ResultMeta = styled.p`
  margin: 14px 0 12px;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 12px;
`;

export const ItemList = styled.div`
  display: grid;
  gap: 14px;
`;

export const EmptyState = styled.div`
  padding: 48px 0;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: var(--font-body-small);
  text-align: center;
`;

export const CreateFab = styled(Link)`
  ${listPageFab}
  display: inline-grid;
  place-items: center;
  text-decoration: none;

  svg {
    width: 28px;
    height: 28px;
  }
`;
