import styled from 'styled-components';

export const Row = styled.label<{ $hasFile?: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ $hasFile }) => ($hasFile ? '1fr' : '44px minmax(0, 1fr) 18px')};
  align-items: center;
  gap: ${({ $hasFile }) => ($hasFile ? '0' : '12px')};
  min-height: ${({ $hasFile }) => ($hasFile ? 'auto' : '78px')};
  padding: 14px;
  border: 1px solid #eee7ff;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 8px 22px rgb(36 33 43 / 4.5%);
  cursor: pointer;

  input[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
`;

export const IconBox = styled.span`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 15px;
  background: #f8f5ff;
  color: var(--primary);
  font-size: 22px;
  font-weight: 900;
  line-height: 1;
`;

export const Copy = styled.span`
  display: grid;
  gap: 5px;
  min-width: 0;
`;

export const CopyTitle = styled.strong`
  overflow: hidden;
  color: var(--text);
  font-size: var(--font-body);
  font-weight: 900;
  line-height: 1.2;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CopyDescription = styled.p`
  overflow: hidden;
  margin: 0;
  color: var(--sub-text);
  font-size: var(--font-body-small);
  font-weight: 700;
  line-height: 1.35;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Arrow = styled.span`
  color: var(--muted-text);
  font-size: 22px;
  font-weight: 800;
  line-height: 1;
`;

export const Selected = styled.span`
  display: grid;
  gap: 4px;
  min-width: 0;
`;

export const StatusLabel = styled.span`
  justify-self: start;
  display: inline-flex;
  align-items: center;
  height: 23px;
  padding: 0 8px;
  border-radius: 999px;
  background: var(--primary-light);
  color: var(--primary);
  font-size: var(--font-chip);
  font-weight: 900;
`;

export const SelectedName = styled.strong`
  overflow: hidden;
  color: var(--text);
  font-size: var(--font-body);
  font-weight: 900;
  line-height: 1.2;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SelectedMeta = styled.p`
  margin: 0;
  color: var(--sub-text);
  font-size: var(--font-body-small);
  font-weight: 700;
  line-height: 1.35;
`;
