import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  ListCreateFab,
  ListPageMain,
  ListPageRoot,
  ListSection,
  SubSectionHeader,
} from './profileListPage.styles';

export {
  ListCreateFab,
  ListPageMain,
  ListPageRoot,
  ListSection,
  SubSectionHeader,
};

export const CampaignPostingList = styled.div`
  display: grid;
  gap: 12px;
`;

export const CampaignPostingCardLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
  color: inherit;
  text-decoration: none;
  transition:
    border-color var(--duration-fast) var(--ease-standard),
    transform var(--duration-fast) var(--ease-standard);

  &:hover {
    border-color: var(--color-brand-primary);
    transform: translateY(-1px);
  }
`;

export const CampaignPostingBody = styled.section`
  display: grid;
  gap: 9px;
  min-width: 0;
`;

export const CampaignPostingTopline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-width: 0;

  small {
    min-width: 0;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: var(--font-meta);
    line-height: 1.1;
    font-weight: var(--weight-title);
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  em {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border-radius: var(--radius-round);
    background: ${({ theme }) => theme.colors.brand.primarySoft};
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: var(--font-chip);
    line-height: 1.1;
    font-style: normal;
    font-weight: var(--weight-title);
    white-space: nowrap;
  }
`;

export const CampaignTitlePayRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  min-width: 0;

  strong {
    display: block;
    min-width: 0;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: var(--font-card-title);
    line-height: 1.25;
    letter-spacing: -0.04em;
    font-weight: var(--weight-title);
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  span {
    max-width: 124px;
    min-height: 28px;
    padding: 0 11px;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-round);
    background: ${({ theme }) => theme.colors.brand.primarySoft};
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: var(--font-meta);
    line-height: 1.2;
    font-weight: var(--weight-title);
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const CampaignPostingSummary = styled.p`
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: var(--font-body);
  line-height: var(--line-body);
  font-weight: var(--weight-body);
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CampaignPostingMeta = styled.dl`
  display: grid;
  gap: 6px;
  margin: 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  dt {
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 12px;
    font-weight: var(--weight-body);
  }

  dd {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 12px;
    font-weight: var(--weight-title);
    text-align: right;
  }
`;
