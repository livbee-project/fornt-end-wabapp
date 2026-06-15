import { useMatches } from 'react-router-dom';
import { getRouteHandle, type RouteHandle } from '@/shared/config/routeHandle';

export function useRouteHandle(): RouteHandle {
  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];
  return getRouteHandle(lastMatch?.handle);
}
