import styled from 'styled-components';

export const Section = styled.section<{ $optional: boolean }>`
  display: grid;
  gap: 14px;
  width: 100%;
  margin: 0;
  padding: 18px 16px 20px;
  border: 0;
  border-top: 1px solid var(--border);
  background: ${({ theme }) => theme.colors.surface.default};
  box-shadow: none;

  & + & {
    border-top: 8px solid #f2f3f5;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
`;

export const TitleBlock = styled.div`
  min-width: 0;
`;

export const StepBadge = styled.span<{ $optional: boolean }>`
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  margin: 0 0 5px;
  padding: 0 8px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ $optional, theme }) =>
    $optional ? theme.colors.brand.primarySoft : theme.colors.brand.primarySoft};
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  line-height: 1;
  letter-spacing: -0.02em;
`;

export const SectionTitle = styled.h2`
  margin: 5px 0 0;
  color: var(--text);
  font-size: var(--font-card-title);
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  line-height: 1.25;
  letter-spacing: -0.04em;
`;

export const SectionDescription = styled.p`
  margin: 7px 0 0;
  color: var(--sub-text);
  font-size: var(--font-body-small);
  font-weight: ${({ theme }) => theme.typography.fontWeight.body};
  line-height: 1.45;
  word-break: keep-all;
`;

export const SideLabel = styled.span`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: var(--primary-light);
  color: var(--primary);
  font-size: var(--font-chip);
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  line-height: 1;
  white-space: nowrap;
`;

export const SectionBody = styled.div`
  display: grid;
  gap: 14px;
  min-width: 0;
`;
