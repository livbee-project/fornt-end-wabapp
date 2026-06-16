import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { listCardSurfaceHover, media, profileCardSurface } from '@/presentation/styles';

export const CardLink = styled(Link)`
  ${profileCardSurface}
  display: grid;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  transition: box-shadow var(--duration-fast) var(--ease-standard);

  &:hover {
    box-shadow: var(--shadow-card-hover);
  }
`;

export const Media = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface.subtle};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PaymentLine = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
`;

export const Body = styled.div`
  display: grid;
  gap: 8px;
  padding: 14px 14px 16px;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const MetaChip = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0 8px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.brand.primarySoft};
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
`;

export const BrandName = styled.strong`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
  letter-spacing: 0.02em;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.cardTitle};
  line-height: 1.3;
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  letter-spacing: -0.04em;
`;

export const Summary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: var(--font-body-small);
  line-height: 1.45;
`;

export const InfoList = styled.dl`
  display: grid;
  gap: 6px;
  margin: 2px 0 0;
  padding-top: 10px;
  border-top: 1px solid var(--color-border-subtle);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  dt {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin: 0;
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.typography.fontWeight.body};

    svg {
      width: 14px;
      height: 14px;
      color: ${({ theme }) => theme.colors.brand.primary};
    }
  }

  dd {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
    text-align: right;
  }
`;

export const ListCardCompactLink = styled(CardLink)`
  grid-template-columns: 112px minmax(0, 1fr);

  ${Media} {
    aspect-ratio: 1;
    min-height: 112px;
  }

  ${Body} {
    padding: 12px 12px 12px 0;
    align-content: center;
  }

  ${Summary} {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  ${media.tabletUp} {
    grid-template-columns: 140px minmax(0, 1fr);

    ${Media} {
      min-height: 140px;
    }
  }
`;

export const RequirementRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const RequirementChip = styled.span`
  ${listCardSurfaceHover}
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
