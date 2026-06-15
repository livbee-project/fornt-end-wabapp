import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '@/presentation/styles';

export const HeaderRoot = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  height: 108px;
  padding: 0 ${({ theme }) => theme.layout.contentGutterMobile};
  border-bottom: 1px solid var(--color-border-subtle);
  background: rgb(255 255 255 / 98%);
  backdrop-filter: blur(18px);

  ${media.tabletUp} {
    height: 68px;
    padding: 0 ${({ theme }) => theme.layout.contentGutterDesktop};
  }
`;

export const HeaderTop = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  height: 64px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};

  ${media.tabletUp} {
    display: grid;
    height: 68px;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: ${({ theme }) => theme.layout.contentGutterDesktop};
  }
`;

export const LogoLink = styled(Link)`
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 23px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
  line-height: 1;
  letter-spacing: -0.6px;
  text-decoration: none;
`;

export const TopNav = styled.nav`
  position: absolute;
  top: 64px;
  right: calc(${({ theme }) => theme.layout.contentGutterMobile} * -1);
  left: calc(${({ theme }) => theme.layout.contentGutterMobile} * -1);
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  overflow-x: auto;
  padding: 0 ${({ theme }) => theme.layout.contentGutterMobile};
  border-top: 1px solid var(--color-border-subtle);
  background: rgb(255 255 255 / 98%);
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: var(--font-body);
  font-weight: ${({ theme }) => theme.typography.fontWeight.body};
  letter-spacing: -0.03em;
  white-space: nowrap;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.tabletUp} {
    position: static;
    height: 68px;
    overflow: visible;
    padding: 0;
    border-top: 0;
    background: transparent;
  }
`;

export const TopNavLink = styled(Link)<{ $active: boolean }>`
  position: relative;
  display: inline-flex;
  height: 44px;
  align-items: center;
  justify-content: center;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.brand.primary : theme.colors.text.secondary};
  font-weight: ${({ $active, theme }) =>
    $active ? theme.typography.fontWeight.meta : theme.typography.fontWeight.body};
  text-decoration: none;

  ${({ $active, theme }) =>
    $active
      ? `
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 50%;
      width: 20px;
      height: 3px;
      transform: translateX(-50%);
      border-radius: ${theme.radius.round};
      background: ${theme.colors.brand.primary};
    }
  `
      : ''}
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const SearchLabel = styled.label`
  display: none;
  align-items: center;
  gap: 8px;
  min-width: 220px;
  height: 38px;
  padding: 0 14px;
  border: 1px solid var(--color-border);
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.surface.subtle};
  color: ${({ theme }) => theme.colors.text.muted};

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  input {
    width: 100%;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    outline: 0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.muted};
    }
  }

  ${media.tabletUp} {
    display: flex;
  }
`;

export const IconButton = styled.button`
  position: relative;
  display: inline-grid;
  width: 30px;
  height: 30px;
  place-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    right: 5px;
    width: 6px;
    height: 6px;
    border: 1px solid var(--color-surface);
    border-radius: ${({ theme }) => theme.radius.round};
    background: ${({ theme }) => theme.colors.brand.primary};
  }
`;

export const AccountLink = styled(Link)`
  display: none;
  align-items: center;
  min-height: 30px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: var(--font-body-small);
  font-weight: ${({ theme }) => theme.typography.fontWeight.meta};
  text-decoration: none;

  ${media.tabletUp} {
    display: inline-flex;
  }
`;

export const MobileMenuButton = styled.button`
  display: inline-grid;
  width: 30px;
  height: 30px;
  place-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  ${media.tabletUp} {
    display: none;
  }
`;
