import { useMemo, useState } from 'react';
import { CampaignListCard } from '@/presentation/components/campaigns/CampaignListCard';
import { Icon } from '@/presentation/components/common/Icon';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';
import {
  CampaignList,
  CreateFab,
  EmptyState,
  FilterChip,
  FilterRow,
  PageDescription,
  PageHeading,
  PageMain,
  PageRoot,
  ResultMeta,
} from './CampaignListPage.styles';

const ALL_CATEGORY = '전체';

export function CampaignListPage() {
  const repository = useMarketplaceRepository();
  const campaigns = repository.getCampaigns();
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const categories = useMemo(() => {
    const unique = new Set(campaigns.map((item) => item.category).filter(Boolean));
    return [ALL_CATEGORY, ...Array.from(unique)] as string[];
  }, [campaigns]);

  const filteredCampaigns = useMemo(() => {
    if (activeCategory === ALL_CATEGORY) {
      return campaigns;
    }

    return campaigns.filter((item) => item.category === activeCategory);
  }, [activeCategory, campaigns]);

  return (
    <PageRoot>
      <PageMain>
        <PageHeading>공고</PageHeading>
        <PageDescription>출연료와 촬영일을 한눈에 확인하고 지원해 보세요.</PageDescription>

        <FilterRow aria-label="카테고리 필터">
          {categories.map((category) => (
            <FilterChip
              key={category}
              type="button"
              $active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterChip>
          ))}
        </FilterRow>

        <ResultMeta>{filteredCampaigns.length}건의 공고</ResultMeta>

        {filteredCampaigns.length > 0 ? (
          <CampaignList>
            {filteredCampaigns.map((item) => (
              <CampaignListCard key={item.id} item={item} />
            ))}
          </CampaignList>
        ) : (
          <EmptyState>선택한 카테고리에 해당하는 공고가 없습니다.</EmptyState>
        )}
      </PageMain>

      <CreateFab to="/campaigns/new" aria-label="공고 등록">
        <Icon name="plus" />
      </CreateFab>
    </PageRoot>
  );
}
