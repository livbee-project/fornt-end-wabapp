import styled from 'styled-components';
import { media } from '@/presentation/styles';

export const DetailPageRoot = styled.div`
  min-height: 100vh;
  padding-bottom: calc(${({ theme }) => theme.layout.bottomNavHeight} + 24px);
  background: ${({ theme }) => theme.colors.surface.default};
  color: var(--text);
`;

export const DetailMain = styled.main`
  max-width: 560px;
  margin: 0 auto;
  padding: 0 0 112px;

  ${media.tabletUp} {
    padding-top: 18px;
  }
`;

export const DetailTopbar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  display: grid;
  grid-template-columns: 42px 1fr 42px;
  align-items: center;
  height: 52px;
  padding: 0 14px;
  border-bottom: 1px solid var(--color-border);
  background: rgb(255 255 255 / 97%);
  backdrop-filter: blur(16px);

  ${media.tabletUp} {
    border: 1px solid var(--color-border);
    border-radius: 18px;
  }

  a,
  button {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 50%;
    background: #fff;
    color: var(--text);
    font-size: 24px;
    font-weight: 900;
    cursor: pointer;
    text-decoration: none;
  }

  strong {
    overflow: hidden;
    color: var(--text);
    font-size: 15px;
    font-weight: 900;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const InstagramProfile = styled.section`
  display: grid;
  grid-template-columns: 118px minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  padding: 18px 16px 12px;

  @media (max-width: 374px) {
    grid-template-columns: 104px minmax(0, 1fr);
    gap: 12px;
  }
`;

export const DetailPhoto = styled.div`
  overflow: hidden;
  aspect-ratio: 3 / 4;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  background: #f7f5fb;
  box-shadow: 0 8px 20px rgb(36 33 43 / 6%);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileSummary = styled.div`
  display: grid;
  align-content: start;
  gap: 8px;
  min-width: 0;
  padding-top: 4px;
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h1 {
    min-width: 0;
    margin: 0;
    overflow: hidden;
    color: var(--text);
    font-size: 22px;
    line-height: 1.16;
    letter-spacing: -0.7px;
    font-weight: 900;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 374px) {
      font-size: 20px;
    }
  }

  span {
    flex: 0 0 auto;
    display: inline-grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 1px solid #eadff8;
    border-radius: 50%;
    background: #fff;
    color: var(--primary);
    font-size: 10px;
    font-weight: 900;
  }
`;

export const RoleText = styled.p`
  margin: 0;
  color: var(--sub-text);
  font-size: 12.5px;
  line-height: 1.35;
  font-weight: 800;
`;

export const BasicMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  span {
    display: inline-flex;
    align-items: center;
    min-height: 25px;
    padding: 0 9px;
    border-radius: 999px;
    background: #faf8ff;
    color: var(--sub-text);
    font-size: 10.5px;
    font-weight: 900;

    &:first-child {
      background: var(--primary-light);
      color: var(--primary);
    }
  }
`;

export const BioSection = styled.section`
  display: grid;
  gap: 8px;
  padding: 0 16px 16px;

  > strong {
    color: var(--text);
    font-size: 14px;
    line-height: 1.38;
    font-weight: 900;
  }

  p {
    margin: 0;
    color: var(--sub-text);
    font-size: 12.5px;
    line-height: 1.45;
    font-weight: 650;
  }
`;

export const TagRow = styled.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  span {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    padding: 0 9px;
    border-radius: 999px;
    background: #fff0f6;
    color: var(--accent-pink);
    font-size: 10.5px;
    font-weight: 900;
  }
`;

export const PrivateCard = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin: 0 16px 16px;
  padding: 13px 14px;
  border: 1px solid #eadff8;
  border-radius: 16px;
  background: linear-gradient(135deg, #fff9fd 0%, #faf8ff 100%);

  strong {
    display: block;
    margin-bottom: 4px;
    color: var(--primary);
    font-size: 13px;
    font-weight: 900;
  }

  p {
    margin: 0;
    color: var(--sub-text);
    font-size: 12.5px;
    line-height: 1.45;
    font-weight: 650;
  }

  > span {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    height: 26px;
    padding: 0 10px;
    border-radius: 999px;
    background: var(--primary-light);
    color: var(--primary);
    font-size: 11px;
    font-weight: 900;
  }
`;

export const DetailTabs = styled.nav<{ $columns: number }>`
  position: sticky;
  top: 52px;
  z-index: 40;
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  border-top: 8px solid #f2f3f5;
  border-bottom: 1px solid var(--color-border);
  background: rgb(255 255 255 / 98%);
  backdrop-filter: blur(14px);

  button {
    position: relative;
    height: 46px;
    border: 0;
    background: transparent;
    color: var(--sub-text);
    font-size: 12.5px;
    font-weight: 900;
    cursor: pointer;

    &.active {
      color: var(--text);

      &::after {
        content: '';
        position: absolute;
        left: 18px;
        right: 18px;
        bottom: 0;
        height: 3px;
        border-radius: 999px;
        background: var(--primary);
      }
    }
  }
`;

export const TabPanel = styled.section`
  padding: 16px;
`;

export const InfoList = styled.dl`
  display: grid;
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: #fff;

  div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 14px;
    border-bottom: 1px solid var(--color-border);

    &:last-child {
      border-bottom: 0;
    }
  }

  dt {
    color: var(--text);
    font-size: 12.5px;
    font-weight: 900;
  }

  dd {
    margin: 0;
    color: var(--sub-text);
    font-size: 12.5px;
    font-weight: 700;
    text-align: right;
  }
`;

export const FileList = styled.div`
  display: grid;
  gap: 12px;
`;

export const FileCard = styled.article`
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  overflow: hidden;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: #fff;
  box-shadow: var(--shadow-list-card);

  section {
    display: grid;
    align-content: center;
    gap: 6px;
    min-width: 0;
  }

  strong {
    overflow: hidden;
    color: var(--text);
    font-size: 14px;
    line-height: 1.25;
    font-weight: 900;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    margin: 0;
    color: var(--sub-text);
    font-size: 12.5px;
    line-height: 1.45;
    font-weight: 650;
  }

  span {
    justify-self: start;
    display: inline-flex;
    align-items: center;
    min-height: 23px;
    padding: 0 8px;
    border-radius: 999px;
    background: var(--primary-light);
    color: var(--primary);
    font-size: 10.5px;
    font-weight: 900;
  }
`;

export const FileIcon = styled.div`
  display: grid;
  place-items: center;
  width: 64px;
  height: 76px;
  border: 1px solid #eadff8;
  border-radius: 14px;
  background: linear-gradient(135deg, #fff9fd 0%, #faf8ff 100%);
  color: var(--primary);
  font-size: 13px;
  font-weight: 900;
`;

export const LiveLinkList = styled.div`
  display: grid;
  gap: 12px;
`;

export const LiveLinkCard = styled.a`
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  overflow: hidden;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: #fff;
  box-shadow: var(--shadow-list-card);
  color: inherit;
  text-decoration: none;

  section {
    display: grid;
    align-content: center;
    gap: 6px;
    min-width: 0;
  }

  strong {
    overflow: hidden;
    color: var(--text);
    font-size: 14px;
    line-height: 1.25;
    font-weight: 900;
  }

  p {
    margin: 0;
    overflow: hidden;
    color: var(--sub-text);
    font-size: 12.5px;
    line-height: 1.45;
    font-weight: 650;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  span {
    justify-self: start;
    display: inline-flex;
    align-items: center;
    min-height: 23px;
    padding: 0 8px;
    border-radius: 999px;
    background: var(--primary-light);
    color: var(--primary);
    font-size: 10.5px;
    font-weight: 900;
  }
`;

export const LiveLinkIcon = styled.div`
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border: 1px solid #eadff8;
  border-radius: 14px;
  background: linear-gradient(135deg, #fff9fd 0%, #faf8ff 100%);
  color: var(--primary);
  font-size: 11px;
  font-weight: 900;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin: 0 -16px;

  button {
    overflow: hidden;
    aspect-ratio: 1;
    border: 0;
    padding: 0;
    background: #f7f5fb;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const DetailBottomCta = styled.section`
  margin-top: 8px;
  padding: 16px 16px calc(8px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid var(--color-border-subtle);
  background: ${({ theme }) => theme.colors.surface.default};

  button {
    width: 100%;
    height: 48px;
    border: 1px solid var(--primary);
    border-radius: 15px;
    background: var(--primary);
    color: #fff;
    font-size: 14px;
    font-weight: 900;
    box-shadow: 0 10px 20px rgb(123 77 255 / 16%);
    cursor: pointer;

    &:disabled {
      border-color: #d8dce8;
      background: #d8dce8;
      box-shadow: none;
      cursor: not-allowed;
    }
  }
`;

/** @deprecated DetailBottomCta 사용 */
export const ActionRow = DetailBottomCta;

export const NotFoundWrap = styled.div`
  padding: 48px 16px;
  color: var(--sub-text);
  font-size: 14px;
  text-align: center;
`;

/* Campaign detail (job style) */
export const JobProfileCard = styled.section`
  display: block;
  padding: 18px 16px 12px;
`;

export const JobSummary = styled.div`
  display: grid;
  align-content: start;
  gap: 8px;
  min-width: 0;
  padding-top: 2px;

  h1 {
    min-width: 0;
    margin: 0;
    overflow: hidden;
    color: var(--text);
    font-size: 21px;
    line-height: 1.18;
    letter-spacing: -0.055em;
    font-weight: 950;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
      font-size: 26px;
    }
  }

  p {
    margin: 0;
    color: var(--sub-text);
    font-size: 12.5px;
    line-height: 1.42;
    font-weight: 720;
    word-break: keep-all;
  }
`;

export const JobBrandRow = styled.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  span,
  em {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    min-height: 23px;
    padding: 0 8px;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 900;
    white-space: nowrap;
  }

  span {
    background: var(--primary-light);
    color: var(--primary);
  }

  em {
    background: #f6f7fb;
    color: var(--sub-text);
    font-style: normal;
  }
`;

export const JobChipRow = styled(JobBrandRow)`
  span {
    background: #f6f7fb;
    color: var(--sub-text);

    &:first-child {
      background: var(--primary-light);
      color: var(--primary);
    }
  }
`;

export const JobSection = styled.section`
  display: grid;
  gap: 10px;
  margin: 0 16px 16px;

  h2 {
    margin: 0;
    color: var(--text);
    font-size: 15px;
    font-weight: 950;
    line-height: 1.2;
    letter-spacing: -0.04em;
  }
`;

export const JobNoticeList = styled.ul`
  display: grid;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: #fff;
  list-style: none;

  li {
    position: relative;
    padding: 13px 14px 13px 38px;
    border-bottom: 1px solid var(--color-border);
    color: var(--sub-text);
    font-size: 12.5px;
    font-weight: 740;
    line-height: 1.45;
    word-break: keep-all;

    &:last-child {
      border-bottom: 0;
    }

    &::before {
      content: '✓';
      position: absolute;
      left: 14px;
      top: 13px;
      display: grid;
      place-items: center;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      background: var(--primary-light);
      color: var(--primary);
      font-size: 10px;
      font-weight: 950;
    }
  }
`;

export const JobCompleteCard = styled(PrivateCard)`
  border-color: #d7efe8;
  background: linear-gradient(135deg, #f5fffc 0%, #f8faff 100%);

  a {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    height: 28px;
    padding: 0 10px;
    border-radius: 999px;
    background: var(--primary);
    color: #fff;
    font-size: 11px;
    font-weight: 900;
    text-decoration: none;
  }
`;

export const SafetyCard = styled(PrivateCard)`
  background: linear-gradient(135deg, #f8faff 0%, #fff 100%);
`;
