import styled from 'styled-components';
import { ACTION_BAR_HEIGHT } from '@/presentation/components/common/FixedBottomActions.styles';
import { media } from '@/presentation/styles';

export const CreatePageRoot = styled.div`
  min-height: 100vh;
  padding-bottom: calc(${ACTION_BAR_HEIGHT} + 48px + env(safe-area-inset-bottom, 0px));
  background: ${({ theme }) => theme.colors.surface.default};
  color: var(--text);
`;

export const CreateMain = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0;
  overflow: visible;
`;

export const ProfileUploadWrap = styled.div`
  width: min(168px, 100%);
  margin: 0 auto;

  @media (max-width: 767px) {
    width: min(148px, 100%);
  }
`;

export const CreateForm = styled.form`
  display: grid;
  gap: 0;
  margin: 0;
`;

export const CreateFormBody = styled.div`
  display: grid;
  gap: 0;
  margin: 0;
  overflow: visible;
`;

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  ${media.tabletUp} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const CreateField = styled.label`
  display: grid;
  gap: 8px;
  min-width: 0;
  margin: 12px 0 0;
  color: var(--text);
  font-size: var(--font-body);
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: -0.03em;

  em {
    color: var(--accent-pink);
    font-style: normal;
  }

  input,
  select,
  textarea {
    display: block;
    width: 100%;
    min-width: 0;
    border: 1px solid #eee7ff;
    border-radius: 14px;
    background: #fff;
    color: var(--text);
    font-family: var(--font-family-base);
    font-size: 14px;
    font-weight: 650;
    outline: 0;

    &:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgb(104 124 244 / 8%);
    }
  }

  input,
  select {
    height: 46px;
    padding: 0 14px;
  }

  textarea {
    min-height: 120px;
    padding: 14px;
    line-height: 1.5;
    resize: vertical;
  }

  small {
    color: var(--accent-pink);
    font-size: 12px;
    font-weight: 650;
  }

  b {
    color: var(--sub-text);
    font-size: 11px;
    font-weight: 700;
  }
`;

export const FileSummary = styled.div<{ $ok?: boolean }>`
  display: grid;
  gap: 4px;
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 14px;
  background: ${({ $ok }) => ($ok ? '#f5fffc' : '#fff9f5')};
  border: 1px solid ${({ $ok }) => ($ok ? '#d7efe8' : '#ffe8d8')};

  strong {
    color: var(--text);
    font-size: 13px;
    font-weight: 900;
  }

  span {
    color: var(--sub-text);
    font-size: 12px;
    font-weight: 650;
    line-height: 1.4;
  }
`;

export const ContactPolicyBox = styled.div`
  display: grid;
  gap: 6px;
  margin-top: 4px;
  padding: 14px;
  border: 1px solid #eadff8;
  border-radius: 16px;
  background: linear-gradient(135deg, #fff9fd 0%, #faf8ff 100%);

  strong {
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
`;

export const PreviewCard = styled.aside`
  margin: 0 16px 16px;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 18px;
  background: #fff;
  box-shadow: var(--shadow-list-card);

  ${media.tabletUp} {
    margin: 16px 24px;
  }
`;

export const PreviewPanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;

  span {
    color: var(--text);
    font-size: 13px;
    font-weight: 900;
  }

  small {
    color: var(--sub-text);
    font-size: 11px;
    font-weight: 750;
  }
`;

export const PreviewCardShell = styled.div`
  width: min(168px, 100%);
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 10px 24px rgb(36 33 43 / 8%);

  @media (max-width: 767px) {
    width: min(148px, 100%);
  }
`;

export const PreviewProfileImage = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 36%, rgb(104 124 244 / 22%), transparent 34%),
    linear-gradient(135deg, #f7f2ff 0%, #fff0f6 100%);
  color: var(--primary);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    display: inline-grid;
    place-items: center;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: rgb(255 255 255 / 72%);
    box-shadow: 0 6px 16px rgb(104 124 244 / 12%);
    color: var(--primary);
    font-size: 12px;
    font-weight: 900;
  }
`;

export const PreviewCardBody = styled.div`
  padding: 12px;

  > p {
    min-height: 3.84em;
    margin: 8px 0 0;
    overflow: hidden;
    color: var(--sub-text);
    font-size: 12px;
    line-height: 1.28;
    font-weight: 650;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const PreviewTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;

  strong {
    min-width: 0;
    overflow: hidden;
    color: var(--text);
    font-size: 15px;
    line-height: 1.25;
    font-weight: 900;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const PreviewTypeBadge = styled.em`
  flex-shrink: 0;
  font-size: 10px;
  font-style: normal;
  font-weight: 900;
  color: var(--primary);
`;

export const PreviewMessageIcon = styled.span`
  flex: 0 0 auto;
  display: inline-grid;
  place-items: center;
  width: 20px;
  height: 20px;
  margin-left: auto;
  color: var(--color-brand-primary);

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const PreviewChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 11px;

  em {
    display: inline-flex;
    align-items: center;
    min-height: 23px;
    padding: 0 8px;
    border-radius: 999px;
    background: var(--primary-light);
    color: var(--primary);
    font-size: 10.5px;
    font-style: normal;
    font-weight: 900;
  }

  em:nth-child(n + 2) {
    background: #faf8ff;
    color: var(--sub-text);
  }
`;

export const PreviewTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;

  i {
    display: inline-flex;
    align-items: center;
    min-height: 23px;
    padding: 0 8px;
    border-radius: 999px;
    background: #fff0f6;
    color: var(--accent-pink);
    font-size: 10.5px;
    font-style: normal;
    font-weight: 900;
  }
`;

export const GalleryLocalPreview = styled.div`
  display: grid;
  gap: 12px;
  width: 100%;
`;

export const GalleryPreviewHeader = styled.div`
  display: grid;
  gap: 4px;

  strong {
    color: var(--primary);
    font-size: 13px;
    font-weight: 900;
  }

  p {
    margin: 0;
    color: var(--sub-text);
    font-size: 11.5px;
    font-weight: 650;
    line-height: 1.35;
  }
`;

export const GalleryPreviewStrip = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 2px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  figure {
    flex: 0 0 68px;
    margin: 0;
  }

  img {
    display: block;
    width: 68px;
    height: 68px;
    border: 1px solid var(--color-border);
    border-radius: 12px;
    object-fit: cover;
    background: #f7f5fb;
  }

  figcaption {
    margin-top: 4px;
    color: var(--muted-text);
    font-size: 10px;
    font-weight: 750;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const SubmitStatus = styled.p`
  margin: 0;
  padding: 0 16px 16px;
  color: var(--sub-text);
  font-size: 12.5px;
  font-weight: 650;
  line-height: 1.45;
`;

export const CampaignListPreviewCard = styled.div`
  display: grid;
  gap: 9px;
  padding: 14px;
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
`;

export const CampaignPreviewTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  small {
    color: var(--primary);
    font-size: 11px;
    font-weight: 900;
  }

  em {
    padding: 5px 10px;
    border-radius: 999px;
    background: var(--primary-light);
    color: var(--primary);
    font-size: 10px;
    font-style: normal;
    font-weight: 900;
  }
`;

export const CampaignPreviewTitleRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;

  strong {
    color: var(--text);
    font-size: 14px;
    font-weight: 900;
  }

  b {
    color: var(--primary);
    font-size: 11px;
    font-weight: 900;
    white-space: nowrap;
  }
`;
