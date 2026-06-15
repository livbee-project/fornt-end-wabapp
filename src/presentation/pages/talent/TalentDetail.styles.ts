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

export const Content = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.contentGutterMobile};

  ${media.tabletUp} {
    padding: 0 ${({ theme }) => theme.layout.contentGutterDesktop};
  }
`;

export const HostHero = styled.section`
  display: grid;
  justify-items: center;
  gap: 12px;
  padding: 24px 0 8px;
  text-align: center;
`;

export const HostAvatar = styled.div`
  width: 112px;
  height: 112px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.surface.subtle};
  box-shadow: var(--shadow-card);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ModelCover = styled.div`
  aspect-ratio: 4 / 5;
  max-height: 420px;
  overflow: hidden;
  margin: 0 calc(${({ theme }) => theme.layout.contentGutterMobile} * -1);
  background: ${({ theme }) => theme.colors.surface.subtle};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tabletUp} {
    margin: 0;
    border-radius: 0 0 ${({ theme }) => theme.radius.xl} ${({ theme }) => theme.radius.xl};
  }
`;

export const Name = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: -0.05em;
`;

export const Summary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: var(--font-body);
  line-height: 1.5;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

export const Section = styled.section`
  margin-top: 22px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: -0.04em;
`;

export const InfoCard = styled.div`
  ${profileCardSurface}
  padding: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: var(--font-body-small);
  line-height: 1.6;
  white-space: pre-line;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TagChip = styled.span`
  ${profileCardSurface}
  min-height: 30px;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
  line-height: 30px;
`;

export const ActionBar = styled.div`
  position: fixed;
  right: 0;
  bottom: ${({ theme }) => theme.layout.bottomNavHeight};
  left: 0;
  z-index: 80;
  padding: 12px ${({ theme }) => theme.layout.contentGutterMobile}
    calc(12px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid var(--color-border-subtle);
  background: rgb(255 255 255 / 96%);
  backdrop-filter: blur(12px);

  ${media.desktop} {
    bottom: 0;
    left: 96px;
    padding-right: ${({ theme }) => theme.layout.contentGutterDesktop};
    padding-left: ${({ theme }) => theme.layout.contentGutterDesktop};
  }
`;

export const ActionBarInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 8px;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin: 0 auto;
`;

export const SecondaryButton = styled.button`
  min-height: 52px;
  border: 0;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.brand.primarySoft};
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: var(--font-button);
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  min-height: 52px;
  border: 0;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  font-size: var(--font-button);
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  cursor: pointer;
`;

export const ModelHero = styled.section`
  margin-top: 18px;
`;

export const ModelSummary = styled(Summary)`
  margin-top: 8px;
`;

export const ModelMetaRow = styled(MetaRow)`
  justify-content: flex-start;
  margin-top: 12px;
`;

export const NotFoundCard = styled.div`
  ${profileCardSurface}
  margin-top: 20px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: var(--font-body-small);
  line-height: 1.5;
`;

