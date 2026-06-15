import { useLocation } from 'react-router-dom';
import { resolveBottomNavKey, type BottomNavKey } from '@/shared/config/navigation';
import { useRouteHandle } from './useRouteHandle';

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
