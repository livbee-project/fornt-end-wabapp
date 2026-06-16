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

/** 추천 모델 프로필 목록 페이지 */
export function ModelListPage() {
  const repository = useMarketplaceRepository();
  const models = repository.getModelProfiles();

  return (
    <ListPageRoot>
      <ListPageMain>
        <ListSection>
          <SubSectionHeader>
            <div>
              <h2>
                추천 <em>모델</em>
              </h2>
              <p>브랜드 촬영 무드에 맞는 모델을 확인하고 제안할 수 있습니다.</p>
            </div>
            <span>{models.length}명</span>
          </SubSectionHeader>

          <ProfileGrid>
            {models.map((item) => (
              <ProfileGridCard key={item.id} item={item} type="model" />
            ))}
          </ProfileGrid>
        </ListSection>
      </ListPageMain>

      <ListCreateFab to="/models/new" aria-label="모델 포트폴리오 등록">
        <Icon name="plus" />
      </ListCreateFab>
    </ListPageRoot>
  );
}
