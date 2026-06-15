import { css } from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ActionBar = styled.div`
  position: sticky;
  bottom: ${({ theme }) => theme.layout.bottomNavHeight};
  z-index: 30;
  display: grid;
  grid-template-columns: 0.8fr 1fr 1.2fr;
  gap: 8px;
  margin: 0;
  padding: 12px 16px calc(16px + env(safe-area-inset-bottom));
  border-top: 1px solid var(--color-border-subtle);
  background: rgb(255 255 255 / 96%);
  backdrop-filter: blur(12px);
`;

const actionButtonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: ${({ theme }) => theme.layout.form.inputHeight};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: var(--font-button);
  font-weight: 900;
  line-height: 1.15;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  ${actionButtonBase}
  background: #f5f5f7;
  color: var(--text);
`;

export const CancelLink = styled(Link)`
  ${actionButtonBase}
  background: #f5f5f7;
  color: var(--text);
`;

export const SecondaryButton = styled.button`
  ${actionButtonBase}
  background: ${({ theme }) => theme.colors.brand.primarySoft};
  color: var(--primary);
`;

export const PrimaryButton = styled.button`
  ${actionButtonBase}
  background: var(--primary);
  color: #fff;
  box-shadow: 0 10px 20px rgb(104 124 244 / 18%);
`;
