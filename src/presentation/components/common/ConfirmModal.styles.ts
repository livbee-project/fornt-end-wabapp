import styled from 'styled-components';
import { media } from '@/presentation/styles';

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 220;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgb(25 22 34 / 34%);
  backdrop-filter: blur(6px);
`;

export const Dialog = styled.section<{ $variant: 'default' | 'alert' }>`
  width: min(100%, 340px);
  overflow: hidden;
  border: 1px solid rgb(238 231 255 / 90%);
  border-radius: ${({ theme }) => theme.radius.xl};
  background: #fff;
  box-shadow: 0 22px 60px rgb(36 33 43 / 18%);

  ${media.tabletUp} {
    width: 360px;
  }
`;

export const DialogBody = styled.div`
  display: grid;
  gap: 8px;
  padding: 22px 22px 18px;
  text-align: center;
`;

export const DialogTitle = styled.strong`
  color: var(--text);
  font-size: 17px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  line-height: 1.32;
  letter-spacing: -0.04em;
`;

export const DialogDescription = styled.p`
  margin: 0;
  color: var(--sub-text);
  font-size: var(--font-body);
  font-weight: ${({ theme }) => theme.typography.fontWeight.body};
  line-height: 1.45;
  word-break: keep-all;
`;

export const DialogActions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 0 18px 18px;

  ${media.tabletUp} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ConfirmButton = styled.button<{ $variant: 'default' | 'alert' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 48px;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ $variant, theme }) =>
    $variant === 'alert' ? theme.colors.status.danger : theme.colors.brand.primary};
  color: #fff;
  font-size: var(--font-body);
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  letter-spacing: -0.03em;
  cursor: pointer;
  box-shadow: ${({ $variant }) =>
    $variant === 'alert'
      ? '0 10px 20px rgb(255 90 106 / 18%)'
      : '0 10px 20px rgb(104 124 244 / 20%)'};

  ${media.tabletUp} {
    order: 2;
  }
`;

export const CancelButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 48px;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: #f5f5f7;
  color: var(--text);
  font-size: var(--font-body);
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  letter-spacing: -0.03em;
  cursor: pointer;

  ${media.tabletUp} {
    order: 1;
  }
`;
