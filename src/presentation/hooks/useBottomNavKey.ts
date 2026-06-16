import { useLocation } from 'react-router-dom';
import { resolveBottomNavKey, type BottomNavKey } from '@/shared/config/navigation';
import { useRouteHandle } from './useRouteHandle';

/** 현재 라우트의 하단 네비게이션 활성 탭 키를 반환한다. */
export function useBottomNavKey(): BottomNavKey | null {
  const { pathname } = useLocation();
  const { bottomNav, showAppNav } = useRouteHandle();

  if (showAppNav === false) {
    return null;
  }

  if (bottomNav) {
    return bottomNav;
  }

  return resolveBottomNavKey(pathname);
}
