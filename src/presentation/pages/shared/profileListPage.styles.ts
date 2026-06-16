import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { listPageFab, media } from '@/presentation/styles';

export const ListPageRoot = styled.div`
  min-height: 100vh;
  padding-bottom: calc(${({ theme }) => theme.layout.bottomNavHeight} + 88px);
  background: ${({ theme }) => theme.colors.surface.default};

  ${media.desktop} {
    padding-bottom: 96px;
  }
`;

export const ListPageMain = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 34px ${({ theme }) => theme.layout.contentGutterMobile} 0;
  overflow: hidden;

  ${media.tabletUp} {
    padding: 34px ${({ theme }) => theme.layout.contentGutterDesktop} 0;
  }
`;

export const ListSection = styled.section`
  margin: 0;
  padding: 0;
`;

export const SubSectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: var(--font-h2);
    line-height: var(--line-title);
    font-weight: var(--weight-title);
    letter-spacing: -0.045em;

    em {
      color: ${({ theme }) => theme.colors.brand.primary};
      font-style: normal;
    }
  }

  p {
    margin: 6px 0 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 12.5px;
    line-height: 1.4;
    font-weight: 640;
  }

  > span {
    flex: 0 0 auto;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 12px;
    font-weight: 760;
  }
`;

export const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`;

export const ProfileGridCardLink = styled(Link)`
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: #fff;
  box-shadow: var(--shadow-list-card);
  color: inherit;
  text-decoration: none;
`;

export const ProfileGridImage = styled.div`
  overflow: hidden;
  aspect-ratio: 3 / 4;
  background: ${({ theme }) => theme.colors.surface.subtle};

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileGridBody = styled.div`
  padding: 12px;
`;

export const ProfileGridTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  strong {
    min-width: 0;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 15px;
    line-height: 1.28;
    font-weight: 820;
    letter-spacing: -0.045em;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ProfileGridMessageIcon = styled.span`
  flex: 0 0 auto;
  display: inline-grid;
  place-items: center;
  width: 20px;
  height: 20px;
  margin-left: auto;
  border: 1px solid #eadff8;
  border-radius: 50%;
  background: #fff;
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 9px;
  font-weight: 900;
`;

export const ProfileGridInlineChip = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 0 8px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.brand.primarySoft};
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 10px;
  font-weight: 760;
`;

export const ProfileGridSummary = styled.p`
  min-height: 3.84em;
  margin: 8px 0 0;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 12px;
  line-height: 1.28;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ProfileGridMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 11px;

  span {
    display: inline-flex;
    align-items: center;
    min-height: 23px;
    padding: 0 8px;
    border-radius: ${({ theme }) => theme.radius.round};
    background: ${({ theme }) => theme.colors.brand.primarySoft};
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: 10.5px;
    font-weight: 760;
  }
`;

export const ListCreateFab = styled(Link)`
  ${listPageFab}
  display: inline-grid;
  place-items: center;
  text-decoration: none;

  svg {
    width: 26px;
    height: 26px;
  }
`;
