import { ProfileGridCard } from '@/presentation/components/talent/ProfileGridCard';
import { Icon } from '@/presentation/components/common/Icon';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';
import {
  ListCreateFab,
  ListPageMain,
  ListPageRoot,
  ListSection,
  ProfileGrid,
  SubSectionHeader,
} from '@/presentation/pages/shared/profileListPage.styles';

/** 추천 쇼호스트 프로필 목록 페이지 */
export function HostListPage() {
  const repository = useMarketplaceRepository();
  const hosts = repository.getHostProfiles();

  return (
    <ListPageRoot>
      <ListPageMain>
        <ListSection>
          <SubSectionHeader>
            <div>
              <h2>
                추천 <em>쇼호스트</em>
              </h2>
              <p>홈 카드와 동일한 정보 기준으로 노출됩니다.</p>
            </div>
            <span>{hosts.length}명</span>
          </SubSectionHeader>

          <ProfileGrid>
            {hosts.map((item) => (
              <ProfileGridCard key={item.id} item={item} type="host" />
            ))}
          </ProfileGrid>
        </ListSection>
      </ListPageMain>

      <ListCreateFab to="/hosts/new" aria-label="쇼호스트 포트폴리오 등록">
        <Icon name="plus" />
      </ListCreateFab>
    </ListPageRoot>
  );
}
