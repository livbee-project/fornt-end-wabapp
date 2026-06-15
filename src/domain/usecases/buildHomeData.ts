import type { HomeData, HomeDataSource } from '@/domain/entities/home';

const HOME_SECTION_LIMIT = 6;
const HOME_NEWS_LIMIT = 2;

/** 홈 노출 대상·개수 선택 — MD `homeSelectors` / `page-spec` 기준 */
export function buildHomeData(source: HomeDataSource): HomeData {
  return {
    heroBanner: source.heroBanner,
    liveItems: source.liveItems.slice(0, HOME_SECTION_LIMIT),
    campaignItems: source.campaignItems
      .filter(({ status }) => status === 'published')
      .slice(0, HOME_SECTION_LIMIT),
    hostProfiles: source.hostProfiles.slice(0, HOME_SECTION_LIMIT),
    modelProfiles: source.modelProfiles.slice(0, HOME_SECTION_LIMIT),
    clipItems: source.clipItems.slice(0, HOME_SECTION_LIMIT),
    newsItems: source.newsItems.slice(0, HOME_NEWS_LIMIT),
  };
}
