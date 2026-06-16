import { CampaignPostingCard } from '@/presentation/components/campaigns/CampaignPostingCard';
import { Icon } from '@/presentation/components/common/Icon';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';
import {
  CampaignPostingList,
  ListCreateFab,
  ListPageMain,
  ListPageRoot,
  ListSection,
  SubSectionHeader,
} from '@/presentation/pages/shared/campaignPostingList.styles';

/** 쇼핑라이브 공고 목록 페이지 */
export function CampaignListPage() {
  const repository = useMarketplaceRepository();
  const campaigns = repository.getCampaigns();

  return (
    <ListPageRoot>
      <ListPageMain>
        <ListSection>
          <SubSectionHeader>
            <div>
              <h2>
                쇼핑라이브 <em>공고</em>
              </h2>
              <p>브랜드명, 모집 분야, 제목, 출연료, 촬영일과 마감일을 한눈에 확인해보세요.</p>
            </div>
            <span>{campaigns.length}건</span>
          </SubSectionHeader>

          <CampaignPostingList>
            {campaigns.map((item) => (
              <CampaignPostingCard key={item.id} item={item} />
            ))}
          </CampaignPostingList>
        </ListSection>
      </ListPageMain>

      <ListCreateFab to="/campaigns/new" aria-label="공고 등록">
        <Icon name="plus" />
      </ListCreateFab>
    </ListPageRoot>
  );
}
