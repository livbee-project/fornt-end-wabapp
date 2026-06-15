import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '@/presentation/styles';

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: ${({ theme }) => theme.layout.bottomNavHeight};
  padding-bottom: env(safe-area-inset-bottom);
  border-top: 1px solid var(--border);
  background: rgb(255 255 255 / 98%);
  backdrop-filter: blur(16px);
  box-shadow: 0 -8px 22px rgb(36 33 43 / 4%);

  ${media.desktop} {
    top: 0;
    right: auto;
    bottom: 0;
    width: 96px;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 82px);
    align-content: center;
    gap: 6px;
    padding: 22px 10px;
    border-top: 0;
    border-right: 1px solid var(--border);
    border-radius: 0 28px 28px 0;
    box-shadow: 12px 0 28px rgb(36 33 43 / 4.5%);

    &::before {
      content: 'livbee';
      position: absolute;
      top: 24px;
      left: 50%;
      transform: translateX(-50%);
      color: var(--primary);
      font-size: 14px;
      font-weight: 950;
      letter-spacing: -0.04em;
    }
  }
`;

export const NavLink = styled(Link)<{ $active: boolean }>`
  display: grid;
  place-items: center;
  align-content: center;
  gap: 4px;
  min-width: 0;
  color: ${({ $active }) => ($active ? 'var(--icon-point)' : '#4b4654')};
  font-size: 10.5px;
  font-weight: 850;
  line-height: 1;
  letter-spacing: -0.2px;
  text-decoration: none;

  ${media.desktop} {
    gap: 7px;
    min-height: 72px;
    border-radius: 20px;
    color: ${({ $active }) => ($active ? 'var(--icon-point)' : 'var(--sub-text)')};
    font-size: 11px;
    font-weight: 900;
    transition:
      background 0.18s ease,
      color 0.18s ease,
      transform 0.18s ease;

    &:hover {
      background: #faf8ff;
      color: var(--primary);
      transform: translateY(-1px);
    }

    ${({ $active }) =>
      $active
        ? `
      background: var(--icon-point-soft);
    `
        : ''}
  }
`;

export const NavIcon = styled.span<{ $active: boolean }>`
  position: relative;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 10px;
  color: currentColor;
  background: ${({ $active }) => ($active ? 'var(--icon-point-soft)' : 'transparent')};

  svg {
    width: 23px;
    height: 23px;
  }

  ${media.desktop} {
    width: 36px;
    height: 36px;
    border-radius: 14px;
    background: ${({ $active }) => ($active ? '#fff' : 'transparent')};
    box-shadow: ${({ $active }) => ($active ? '0 8px 18px rgb(79 124 255 / 12%)' : 'none')};

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const NavLabel = styled.span`
  display: block;
  white-space: nowrap;
`;
