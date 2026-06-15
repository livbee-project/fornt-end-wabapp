import type { BottomNavKey } from './navigation';

export type RouteHandle = {
  title?: string;
  description?: string;
  bottomNav?: BottomNavKey;
  /** false면 하단/사이드 내비 숨김 */
  showAppNav?: boolean;
};

export function getRouteHandle(handle: unknown): RouteHandle {
  if (handle && typeof handle === 'object') {
    return handle as RouteHandle;
  }
  return {};
}
