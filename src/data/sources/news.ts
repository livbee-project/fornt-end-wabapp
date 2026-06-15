import type { NewsItem } from '@/domain/entities';
import { mockAssets } from '@/shared/constants/mockAssets';

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    thumbnail: mockAssets.cardFashion,
    category: '트렌드',
    title: '브랜드가 선호하는 라이브 진행자의 공통점',
    createdAt: '2026-06-03',
    viewCount: 18_400,
  },
  {
    id: 'news-2',
    thumbnail: mockAssets.cardBeauty,
    category: '뉴스',
    title: '쇼핑라이브 시장, 숏폼과 함께 성장세',
    createdAt: '2026-06-01',
    viewCount: 12_600,
  },
];
