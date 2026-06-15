import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { listCardSurface, media } from '@/presentation/styles';

export const PageRoot = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.surface.default};
`;

export const HomeMain = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.contentGutterMobile} 24px;
  overflow: hidden;

  ${media.tabletUp} {
    padding: 22px ${({ theme }) => theme.layout.contentGutterDesktop} 32px;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  width: calc(100% + (${({ theme }) => theme.layout.contentGutterMobile} * 2));
  min-height: 304px;
  margin: 0 calc(${({ theme }) => theme.layout.contentGutterMobile} * -1);
  overflow: hidden;
  background: linear-gradient(105deg, #f8faff 0%, #eef2ff 62%, #eaf1f7 100%);

  ${media.tabletUp} {
    width: 100%;
    min-height: 360px;
    margin: 0;
    border-radius: ${({ theme }) => theme.radius.xl};
  }
`;

export const HeroCopy = styled.div`
  position: relative;
  z-index: 2;
  width: 58%;
  padding: 34px 0 0 20px;

  ${media.tabletUp} {
    width: 48%;
    padding: 54px 0 0 44px;
  }
`;

export const HeroEyebrow = styled.span`
  display: inline-flex;
  height: 25px;
  align-items: center;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: rgb(255 255 255 / 78%);
  color: ${({ theme }) => theme.colors.brand.primary};
  box-shadow: var(--shadow-card);
  font-size: var(--font-chip);
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
`;

export const HeroTitle = styled.h1`
  margin: 13px 0 10px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 27px;
  line-height: 1.13;
  letter-spacing: -0.07em;
  white-space: pre-line;

  &::first-line {
    color: ${({ theme }) => theme.colors.brand.primary};
  }

  ${media.tabletUp} {
    font-size: 38px;
  }
`;

export const HeroDescription = styled.p`
  max-width: 190px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: var(--font-body);
  line-height: var(--line-body);
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
  word-break: keep-all;

  ${media.tabletUp} {
    max-width: 330px;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 36.5%;
  height: 100%;
  max-height: 304px;
  object-fit: contain;
  object-position: right bottom;

  ${media.tabletUp} {
    width: 32%;
    max-height: 360px;
  }
`;

export const HeroPagination = styled.div`
  position: absolute;
  bottom: 18px;
  left: 20px;
  z-index: 2;
  display: inline-flex;
  gap: 7px;
`;

export const HeroDot = styled.span<{ $active?: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.brand.primary : theme.colors.border.default};
`;

export const HomeSection = styled.section`
  position: relative;
  margin: 0 calc(${({ theme }) => theme.layout.contentGutterMobile} * -1);
  padding: 28px ${({ theme }) => theme.layout.contentGutterMobile} 32px;
  border-top: 8px solid ${({ theme }) => theme.colors.surface.subtle};
  box-shadow: inset 0 1px 0 var(--color-border-subtle);

  ${media.tabletUp} {
    margin-right: calc(${({ theme }) => theme.layout.contentGutterDesktop} * -1);
    margin-left: calc(${({ theme }) => theme.layout.contentGutterDesktop} * -1);
    padding-right: ${({ theme }) => theme.layout.contentGutterDesktop};
    padding-left: ${({ theme }) => theme.layout.contentGutterDesktop};
  }
`;

export const SectionHeaderRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: 14px;
`;

export const SectionHeading = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 20px;
  line-height: 1.18;
  letter-spacing: -0.05em;
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};

  em,
  i {
    color: ${({ theme }) => theme.colors.brand.primary};
    font-style: normal;
  }
`;

export const SectionSubtitle = styled.p`
  margin: 5px 0 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 12.5px;
  line-height: 1.36;
  font-weight: ${({ theme }) => theme.typography.fontWeight.body};
`;

export const SectionMoreLink = styled(Link)`
  flex: 0 0 auto;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
  text-decoration: none;
`;

export const HorizontalScroll = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-right: calc(${({ theme }) => theme.layout.contentGutterMobile} * -1);
  padding: 2px ${({ theme }) => theme.layout.contentGutterMobile} 11px 1px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.tabletUp} {
    gap: ${({ theme }) => theme.spacing[4]};
    margin-right: 0;
    padding-right: 2px;
  }
`;

export const NewsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
`;

const cardBase = css`
  ${listCardSurface}
  flex: 0 0 auto;
  display: block;
  min-width: 0;
  overflow: hidden;
  scroll-snap-align: start;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
`;

const cardTitle = css`
  display: block;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  letter-spacing: -0.04em;
`;

const clamp2 = css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ratioBox = css`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface.subtle};

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LiveCardLink = styled(Link)`
  ${cardBase}
  width: 150px;

  ${media.tabletUp} {
    width: 190px;
  }

  @media (min-width: 1180px) {
    width: 204px;
  }
`;

export const LiveMedia = styled.div`
  ${ratioBox}
  aspect-ratio: 4 / 5;
`;

export const LiveCardBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 12px;

  strong {
    ${cardTitle}
    ${clamp2}
    font-size: ${({ theme }) => theme.typography.fontSize.homeCardTitle};
    line-height: 1.28;
  }

  em {
    overflow: hidden;
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: 12px;
    font-style: normal;
    font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  small {
    overflow: hidden;
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const LiveProductRow = styled.div`
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  align-items: center;
  gap: 9px;
  min-height: 58px;
  padding: 8px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.brand.primarySoft};

  span {
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: var(--font-chip);
    font-weight: ${({ theme }) => theme.typography.fontWeight.body};
  }

  p {
    margin: 4px 0 0;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const LiveProductThumb = styled.div`
  width: 44px;
  height: 44px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.surface.default};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BrandCardLink = styled(Link)`
  ${cardBase}
  width: 246px;

  ${media.tabletUp} {
    width: 286px;
  }

  @media (min-width: 1180px) {
    width: 304px;
  }
`;

export const BrandMedia = styled.div`
  ${ratioBox}
  aspect-ratio: 4 / 3;
`;

export const PaymentBadge = styled.span`
  position: absolute;
  right: 9px;
  bottom: 9px;
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  font-size: var(--font-meta);
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
`;

export const BrandCardBody = styled.div`
  padding: 12px;

  > strong {
    ${cardTitle}
    font-size: 16px;
  }
`;

export const CampaignTitle = styled.p`
  ${clamp2}
  margin: 7px 0 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.homeCardTitle};
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  line-height: 1.28;
`;

export const CampaignSummary = styled.p`
  ${clamp2}
  margin: 7px 0 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 12px;
  line-height: 1.42;
`;

export const CampaignInfoList = styled.dl`
  display: grid;
  gap: 6px;
  margin: 12px 0 0;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  dt {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.typography.fontWeight.meta};

    svg {
      width: 14px;
      height: 14px;
      color: ${({ theme }) => theme.colors.brand.primary};
    }
  }

  dd {
    margin: 0;
    overflow: hidden;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const HostCardLink = styled(Link)`
  ${cardBase}
  width: 148px;
  padding-bottom: 12px;

  ${media.tabletUp} {
    width: 180px;
  }

  @media (min-width: 1180px) {
    width: 198px;
  }
`;

export const HostAvatar = styled.div`
  display: grid;
  place-items: center;
  padding: 16px 12px 8px;

  img {
    width: 72px;
    height: 72px;
    border-radius: ${({ theme }) => theme.radius.round};
    object-fit: cover;
    background: ${({ theme }) => theme.colors.surface.subtle};
  }
`;

export const ModelCardLink = styled(Link)`
  ${cardBase}
  width: 148px;

  ${media.tabletUp} {
    width: 180px;
  }

  @media (min-width: 1180px) {
    width: 198px;
  }
`;

export const ModelMedia = styled.div`
  ${ratioBox}
  aspect-ratio: 4 / 5;
`;

export const ProfileCardBody = styled.div`
  padding: 12px;

  p {
    ${clamp2}
    margin: 7px 0 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 12px;
    line-height: 1.42;
  }
`;

export const ProfileTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  strong {
    ${cardTitle}
    min-width: 0;
    overflow: hidden;
    font-size: ${({ theme }) => theme.typography.fontSize.homeCardTitle};
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  svg {
    flex: 0 0 auto;
    width: 17px;
    height: 17px;
    margin-left: auto;
    color: ${({ theme }) => theme.colors.brand.primary};
  }
`;

export const RoleChip = styled.span`
  flex-shrink: 0;
  padding: 3px 6px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.brand.primarySoft};
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: var(--font-chip);
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
`;

export const ProfileMeta = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;
  margin-top: 11px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  span {
    display: inline-flex;
    flex-shrink: 0;
    min-height: 23px;
    align-items: center;
    padding: 0 8px;
    border-radius: ${({ theme }) => theme.radius.round};
    background: ${({ theme }) => theme.colors.brand.primarySoft};
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: var(--font-chip);
    font-weight: ${({ theme }) => theme.typography.fontWeight.title};
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  span:last-child {
    background: ${({ theme }) => theme.colors.surface.subtle};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const ClipCardLink = styled(Link)`
  flex: 0 0 auto;
  display: block;
  width: 112px;
  min-width: 0;
  scroll-snap-align: start;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  ${media.tabletUp} {
    width: 150px;
  }

  @media (min-width: 1180px) {
    width: 168px;
  }
`;

export const ClipMedia = styled.div`
  ${ratioBox}
  aspect-ratio: 9 / 16;
  border: 1px solid var(--color-border);
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: var(--shadow-list-card);
`;

export const PlayButton = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  transform: translate(-50%, -50%);
  border-radius: ${({ theme }) => theme.radius.round};
  background: rgb(255 255 255 / 90%);
  color: ${({ theme }) => theme.colors.brand.primary};

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ClipCardBody = styled.div`
  padding: 8px 0 0;

  strong {
    ${cardTitle}
    ${clamp2}
    font-size: ${({ theme }) => theme.typography.fontSize.homeCardTitle};
    line-height: 1.28;
  }

  p {
    ${clamp2}
    margin: 7px 0 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 12px;
    line-height: 1.35;
    font-weight: ${({ theme }) => theme.typography.fontWeight.body};
  }
`;

export const NewsCardLink = styled(Link)`
  ${cardBase}
  display: block;
`;

export const NewsThumb = styled.div`
  ${ratioBox}
  aspect-ratio: 16 / 9;

  span {
    position: absolute;
    top: 9px;
    left: 9px;
    display: inline-flex;
    align-items: center;
    min-height: 26px;
    padding: 0 10px;
    border-radius: ${({ theme }) => theme.radius.round};
    background: ${({ theme }) => theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
    font-size: var(--font-chip);
    font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  }
`;

export const NewsCardBody = styled.div`
  padding: 11px 12px 13px;

  strong {
    ${cardTitle}
    ${clamp2}
    font-size: ${({ theme }) => theme.typography.fontSize.homeCardTitle};
    line-height: 1.28;
  }

  p {
    margin: 8px 0 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 12px;
    line-height: 1.35;
    font-weight: ${({ theme }) => theme.typography.fontWeight.body};
  }
`;

export const FooterRoot = styled.footer`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin: 26px auto 0;
  padding: 28px ${({ theme }) => theme.layout.contentGutterMobile}
    calc(${({ theme }) => theme.layout.bottomNavHeight} + 24px + env(safe-area-inset-bottom));
  border-top: 1px solid var(--color-border-subtle);
  background: ${({ theme }) => theme.colors.surface.default};
  color: ${({ theme }) => theme.colors.text.primary};

  ${media.tabletUp} {
    margin-top: 34px;
    padding: 34px ${({ theme }) => theme.layout.contentGutterDesktop} 48px;
  }
`;

export const FooterBrandRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const FooterLogo = styled(Link)`
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 22px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  text-decoration: none;
`;

export const FooterLanguageButton = styled.button`
  display: inline-flex;
  min-height: 30px;
  align-items: center;
  gap: 5px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 18px;
  line-height: 1;
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const FooterLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 22px;

  a {
    position: relative;
    display: inline-flex;
    min-height: 22px;
    align-items: center;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 13px;
    font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
    letter-spacing: -0.035em;
    text-decoration: none;
  }

  a + a {
    margin-left: 12px;
    padding-left: 13px;
  }

  a + a::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 1px;
    height: 11px;
    transform: translateY(-50%);
    background: var(--border);
  }
`;

export const FooterCompany = styled.div`
  display: grid;
  gap: 2px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 11px;
  line-height: 1.42;
  font-weight: ${({ theme }) => theme.typography.fontWeight.body};
  letter-spacing: -0.035em;

  p {
    margin: 0;
    word-break: keep-all;
  }

  a {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  ${media.tabletUp} {
    max-width: 680px;
    font-size: 11.5px;
  }
`;

export const FooterTopLink = styled.a`
  display: grid;
  width: 34px;
  height: 34px;
  margin: 32px auto 0;
  place-items: center;
  border-radius: ${({ theme }) => theme.radius.round};
  color: ${({ theme }) => theme.colors.text.primary};

  svg {
    width: 24px;
    height: 24px;
  }
`;
