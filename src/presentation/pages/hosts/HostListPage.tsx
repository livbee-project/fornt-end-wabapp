import { HostListCard } from '@/presentation/components/talent/HostListCard';
import { Icon } from '@/presentation/components/common/Icon';
import { useCategoryFilter } from '@/presentation/hooks/useCategoryFilter';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';
import { homeContent } from '@/shared/constants/homeContent';
import {
  CreateFab,
  EmptyState,
  FilterChip,
  FilterRow,
  ItemList,
  PageDescription,
  PageHeading,
  PageMain,
  PageRoot,
  ResultMeta,
} from '@/presentation/pages/shared/ListPageLayout.styles';

export function HostListPage() {
  const repository = useMarketplaceRepository();
  const hosts = repository.getHostProfiles();
  const { activeCategory, setActiveCategory, categories, filteredItems } = useCategoryFilter(hosts);

  return (
    <PageRoot>
      <PageMain>
        <PageHeading>쇼호스트</PageHeading>
        <PageDescription>{homeContent.sectionSubtitles.hosts}</PageDescription>

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

        <ResultMeta>{filteredItems.length}명의 쇼호스트</ResultMeta>

        {filteredItems.length > 0 ? (
          <ItemList>
            {filteredItems.map((item) => (
              <HostListCard key={item.id} item={item} />
            ))}
          </ItemList>
        ) : (
          <EmptyState>선택한 카테고리에 해당하는 쇼호스트가 없습니다.</EmptyState>
        )}
      </PageMain>

      <CreateFab to="/hosts/new" aria-label="쇼호스트 프로필 등록">
        <Icon name="plus" />
      </CreateFab>
    </PageRoot>
  );
}
