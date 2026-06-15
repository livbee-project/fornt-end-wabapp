import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { media } from '@/presentation/styles';
import { BottomNavigation } from '@/presentation/components/layout/BottomNavigation';
import { useBottomNavKey } from '@/presentation/hooks/useBottomNavKey';

const Shell = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.surface.default};
`;

const Content = styled.main<{ $withNav: boolean }>`
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin: 0 auto;
  padding-bottom: ${({ $withNav, theme }) => ($withNav ? `calc(${theme.layout.bottomNavHeight} + 12px)` : '0')};

  ${media.desktop} {
    margin-left: ${({ $withNav }) => ($withNav ? '96px' : '0')};
    padding-bottom: ${({ $withNav }) => ($withNav ? '24px' : '0')};
  }
`;

export function MainLayout() {
  const bottomNavKey = useBottomNavKey();

  return (
    <Shell>
      <Content $withNav={bottomNavKey !== null}>
        <Outlet />
      </Content>
      {bottomNavKey ? <BottomNavigation active={bottomNavKey} /> : null}
    </Shell>
  );
}
