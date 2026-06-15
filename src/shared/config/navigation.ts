import type { IconName } from '@/presentation/components/common/Icon';

export type BottomNavKey = 'home' | 'hosts' | 'models' | 'campaigns' | 'mypage';

export const bottomNavTabs: ReadonlyArray<{
  key: BottomNavKey;
  label: string;
  href: string;
  icon: IconName;
}> = [
  { key: 'home', label: '홈', href: '/', icon: 'home' },
  { key: 'hosts', label: '쇼호스트', href: '/hosts', icon: 'microphone' },
  { key: 'models', label: '모델', href: '/models', icon: 'person' },
  { key: 'campaigns', label: '공고', href: '/campaigns', icon: 'campaign' },
  { key: 'mypage', label: '마이페이지', href: '/mypage', icon: 'profile' },
] as const;

export function resolveBottomNavKey(pathname: string): BottomNavKey | null {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/hosts')) return 'hosts';
  if (pathname.startsWith('/models')) return 'models';
  if (pathname.startsWith('/campaigns')) return 'campaigns';
  if (pathname.startsWith('/mypage')) return 'mypage';
  return null;
}
