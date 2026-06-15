import { useMemo, useState } from 'react';

const ALL_CATEGORY = '전체';

export function useCategoryFilter<T extends { category?: string; modelType?: string }>(
  items: T[],
  getCategory: (item: T) => string | undefined = (item) => item.category ?? item.modelType,
) {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const categories = useMemo(() => {
    const unique = new Set(items.map((item) => getCategory(item)).filter(Boolean));
    return [ALL_CATEGORY, ...Array.from(unique)] as string[];
  }, [getCategory, items]);

  const filteredItems = useMemo(() => {
    if (activeCategory === ALL_CATEGORY) {
      return items;
    }

    return items.filter((item) => getCategory(item) === activeCategory);
  }, [activeCategory, getCategory, items]);

  return {
    activeCategory,
    setActiveCategory,
    categories,
    filteredItems,
  };
}
