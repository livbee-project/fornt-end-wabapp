import { useLocation } from 'react-router-dom';
import { PageDescription, PageRoot, PageTitle, StatusCard } from './PageScaffold.styles';
import { useRouteHandle } from '@/presentation/hooks/useRouteHandle';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';

/** 현재 경로에 맞는 mock 목록 건수를 반환한다. */
function useListCount(): number | null {
  const { pathname } = useLocation();
  const repository = useMarketplaceRepository();

  if (pathname === '/campaigns') return repository.getCampaigns().length;
  if (pathname === '/hosts') return repository.getHostProfiles().length;
  if (pathname === '/models') return repository.getModelProfiles().length;
  if (pathname === '/clips') return repository.getClipItems().length;
  if (pathname === '/news') return repository.getNewsItems().length;
  return null;
}

/** 라우트 handle 기반 임시 스캐폴드 페이지 */
export function PlaceholderPage() {
  const { title = '페이지', description } = useRouteHandle();
  const listCount = useListCount();

  return (
    <PageRoot>
      <PageTitle>{title}</PageTitle>
      {description ? <PageDescription>{description}</PageDescription> : null}
      <StatusCard>
        이 화면은 라우트 스캐폴드입니다. 이후 UI를 연결합니다.
        {listCount !== null ? ` (mock ${listCount}건)` : null}
      </StatusCard>
    </PageRoot>
  );
}
