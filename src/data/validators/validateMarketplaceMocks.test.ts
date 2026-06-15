import { describe, expect, it } from 'vitest';
import { marketplaceRepository } from '@/data/repositories/marketplaceRepositoryImpl';
import {
  campaignItems,
  clipItems,
  hostProfiles,
  liveItems,
  modelProfiles,
  newsItems,
} from '@/data/sources';
import { validateMarketplaceMocks } from '@/data/validators/validateMarketplaceMocks';
import { buildHomeData } from '@/domain/usecases/buildHomeData';

describe('marketplace mock data', () => {
  it('keeps ids, dates, amounts and relationships valid', () => {
    expect(
      validateMarketplaceMocks({
        campaigns: campaignItems,
        lives: liveItems,
        hosts: hostProfiles,
        models: modelProfiles,
        clips: clipItems,
        news: newsItems,
      }),
    ).toEqual([]);
  });

  it('builds home data from published campaigns only', () => {
    const home = buildHomeData({
      heroBanner: marketplaceRepository.getHomeData().heroBanner,
      liveItems,
      campaignItems,
      hostProfiles,
      modelProfiles,
      clipItems,
      newsItems,
    });

    expect(home.campaignItems.every((item) => item.status === 'published')).toBe(true);
    expect(home.liveItems.length).toBeLessThanOrEqual(6);
    expect(home.newsItems.length).toBeLessThanOrEqual(2);
  });

  it('resolves campaign links for live cards', () => {
    liveItems.forEach((live) => {
      if (!live.campaignId) return;
      expect(marketplaceRepository.getCampaignById(live.campaignId)).toBeDefined();
    });
  });
});
