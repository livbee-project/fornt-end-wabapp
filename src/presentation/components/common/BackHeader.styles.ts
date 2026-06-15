import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBar = styled.header<{ $sticky: boolean }>`
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) 48px;
  align-items: center;
  width: 100%;
  height: 56px;
  margin: 0;
  padding: 0 12px;
  border-bottom: 1px solid var(--color-border-subtle);
  background: rgb(255 255 255 / 96%);
  color: var(--text);
  backdrop-filter: blur(10px);

  ${({ $sticky }) =>
    $sticky
      ? `
    position: sticky;
    top: 0;
    z-index: 40;
  `
      : ''}
`;

export const BackLink = styled(Link)`
  grid-column: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.radius.round};
  color: var(--text);
  text-decoration: none;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const HeaderTitle = styled.strong`
  grid-column: 2;
  justify-self: center;
  overflow: hidden;
  max-width: 100%;
  color: var(--text);
  font-size: var(--font-back-header);
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
  line-height: 1.2;
  letter-spacing: -0.04em;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const HeaderRight = styled.div`
  grid-column: 3;
  justify-self: end;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  min-height: 42px;
`;
