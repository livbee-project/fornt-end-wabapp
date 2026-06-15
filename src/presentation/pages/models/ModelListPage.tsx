import { ModelListCard } from '@/presentation/components/talent/ModelListCard';
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

export function ModelListPage() {
  const repository = useMarketplaceRepository();
  const models = repository.getModelProfiles();
  const { activeCategory, setActiveCategory, categories, filteredItems } = useCategoryFilter(
    models,
    (item) => item.modelType,
  );

  return (
    <PageRoot>
      <PageMain>
        <PageHeading>모델</PageHeading>
        <PageDescription>{homeContent.sectionSubtitles.models}</PageDescription>

        <FilterRow aria-label="모델 유형 필터">
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

        <ResultMeta>{filteredItems.length}명의 모델</ResultMeta>

        {filteredItems.length > 0 ? (
          <ItemList>
            {filteredItems.map((item) => (
              <ModelListCard key={item.id} item={item} />
            ))}
          </ItemList>
        ) : (
          <EmptyState>선택한 유형에 해당하는 모델이 없습니다.</EmptyState>
        )}
      </PageMain>

      <CreateFab to="/models/new" aria-label="모델 프로필 등록">
        <Icon name="plus" />
      </CreateFab>
    </PageRoot>
  );
}
