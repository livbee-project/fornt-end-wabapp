import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media, profileCardSurface } from '@/presentation/styles';

export const CardLink = styled(Link)`
  ${profileCardSurface}
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 14px;
  color: inherit;
  text-decoration: none;
  transition: box-shadow var(--duration-fast) var(--ease-standard);

  &:hover {
    box-shadow: var(--shadow-card-hover);
  }

  ${media.tabletUp} {
    grid-template-columns: 96px minmax(0, 1fr) auto;
    padding: 16px;
  }
`;

export const Avatar = styled.div`
  width: 72px;
  height: 72px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.surface.subtle};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tabletUp} {
    width: 80px;
    height: 80px;
  }
`;

export const Body = styled.div`
  display: grid;
  gap: 6px;
  min-width: 0;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;

  strong {
    overflow: hidden;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.cardTitle};
    font-weight: ${({ theme }) => theme.typography.fontWeight.title};
    white-space: nowrap;
    text-overflow: ellipsis;
    letter-spacing: -0.04em;
  }
`;

export const CategoryChip = styled.span`
  flex-shrink: 0;
  min-height: 22px;
  padding: 0 8px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.brand.primarySoft};
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
`;

export const Summary = styled.p`
  margin: 0;
  display: -webkit-box;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: var(--font-body-small);
  line-height: 1.45;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const MetaChip = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 23px;
  padding: 0 8px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.brand.primarySoft};
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: var(--font-chip);
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
`;

export const MessageIcon = styled.span`
  display: inline-grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.brand.primarySoft};
  color: ${({ theme }) => theme.colors.brand.primary};

  svg {
    width: 18px;
    height: 18px;
  }
`;
