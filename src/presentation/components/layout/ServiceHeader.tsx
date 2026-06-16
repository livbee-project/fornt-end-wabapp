import { Icon } from '@/presentation/components/common/Icon';
import {
  AccountLink,
  HeaderActions,
  HeaderRoot,
  HeaderTop,
  IconButton,
  LogoLink,
  MobileMenuButton,
  SearchLabel,
  TopNav,
  TopNavLink,
} from './ServiceHeader.styles';

export type ServiceHeaderTab = 'home' | 'events' | 'news' | 'clips' | 'community';

type ServiceHeaderProps = {
  active?: ServiceHeaderTab;
};

const navItems: ReadonlyArray<{ key: ServiceHeaderTab; label: string; href: string }> = [
  { key: 'home', label: '홈', href: '/' },
  { key: 'events', label: '이벤트', href: '/events' },
  { key: 'news', label: '뉴스', href: '/news' },
  { key: 'clips', label: '숏클립', href: '/clips' },
  { key: 'community', label: '커뮤니티', href: '/community' },
];

/** 로고·상단 탭·검색·계정 링크가 있는 서비스 헤더 */
export function ServiceHeader({ active = 'home' }: ServiceHeaderProps) {
  const isLoggedIn = false;

  return (
    <HeaderRoot>
      <HeaderTop>
        <LogoLink to="/" aria-label="Livbee 홈으로 이동">
          Livbee
        </LogoLink>

        <TopNav aria-label="상단 탭 메뉴">
          {navItems.map((item) => (
            <TopNavLink key={item.key} to={item.href} $active={active === item.key}>
              {item.label}
            </TopNavLink>
          ))}
        </TopNav>

        <HeaderActions>
          <SearchLabel aria-label="검색">
            <Icon name="search" />
            <input placeholder="검색어를 입력하세요" />
          </SearchLabel>
          <IconButton type="button" aria-label="알림">
            <Icon name="notification" />
          </IconButton>
          <AccountLink to={isLoggedIn ? '/mypage' : '/login'}>
            {isLoggedIn ? 'MY' : '로그인'}
          </AccountLink>
          <MobileMenuButton type="button" aria-label="메뉴">
            <Icon name="bars" />
          </MobileMenuButton>
        </HeaderActions>
      </HeaderTop>
    </HeaderRoot>
  );
}
