import { useMatches } from 'react-router-dom';
import { getRouteHandle, type RouteHandle } from '@/shared/config/routeHandle';

/** 현재 매칭된 라우트의 handle 메타데이터를 읽는다. */
export function useRouteHandle(): RouteHandle {
  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];
  return getRouteHandle(lastMatch?.handle);
}
