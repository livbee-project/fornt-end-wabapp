import styled from 'styled-components';
import { media, profileCardSurface } from '@/presentation/styles';

export const PageRoot = styled.div`
  min-height: 100vh;
  padding-bottom: calc(${({ theme }) => theme.layout.bottomNavHeight} + 88px);
  background: ${({ theme }) => theme.colors.surface.default};

  ${media.desktop} {
    padding-bottom: 96px;
  }
`;

export const Cover = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface.subtle};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tabletUp} {
    max-width: ${({ theme }) => theme.layout.contentWidth};
    margin: 0 auto;
    border-radius: 0 0 ${({ theme }) => theme.radius.xl} ${({ theme }) => theme.radius.xl};
  }
`;

export const Content = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin: 0 auto;
  padding: 18px ${({ theme }) => theme.layout.contentGutterMobile} 0;

  ${media.tabletUp} {
    padding: 24px ${({ theme }) => theme.layout.contentGutterDesktop} 0;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const MetaChip = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.brand.primarySoft};
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
`;

export const BrandName = styled.p`
  margin: 12px 0 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
  letter-spacing: 0.03em;
`;

export const Title = styled.h1`
  margin: 6px 0 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: -0.05em;
`;

export const Summary = styled.p`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: var(--font-body);
  line-height: 1.5;
`;

export const PaymentCard = styled.div`
  ${profileCardSurface}
  display: grid;
  gap: 4px;
  margin-top: 18px;
  padding: 16px;
`;

export const PaymentLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 12px;
`;

export const PaymentValue = styled.strong`
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 22px;
  line-height: 1.2;
  letter-spacing: -0.04em;
`;

export const Section = styled.section`
  margin-top: 24px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: -0.04em;
`;

export const InfoCard = styled.dl`
  ${profileCardSurface}
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 16px;

  div {
    display: grid;
    gap: 4px;
  }

  dt {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 12px;
  }

  dd {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: var(--font-body-small);
    line-height: 1.45;
    font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
    white-space: pre-line;
  }
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: var(--font-body-small);
  line-height: 1.6;
  white-space: pre-line;
`;

export const RequirementList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const RequirementItem = styled.li`
  ${profileCardSurface}
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
`;

export const NotFoundCard = styled.div`
  ${profileCardSurface}
  margin-top: 20px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: var(--font-body-small);
  line-height: 1.5;
`;
