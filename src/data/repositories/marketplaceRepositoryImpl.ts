import type { MarketplaceRepository } from '@/domain/repositories/marketplaceRepository';
import { buildHomeData } from '@/domain/usecases/buildHomeData';
import {
  campaignItems,
  clipItems,
  heroBanner,
  hostProfiles,
  liveItems,
  modelProfiles,
  newsItems,
} from '@/data/sources';

/** id로 목록에서 단일 항목을 찾는다. */
const findById = <T extends { id: string }>(items: T[], id: string) =>
  items.find((item) => item.id === id);

export const marketplaceRepository: MarketplaceRepository = {
  getHomeData: () =>
    buildHomeData({
      heroBanner,
      liveItems,
      campaignItems,
      hostProfiles,
      modelProfiles,
      clipItems,
      newsItems,
    }),

  getCampaigns: () => campaignItems,
  getCampaignById: (campaignId) => findById(campaignItems, campaignId),
  getLiveItems: () => liveItems,
  getHostProfiles: () => hostProfiles,
  getHostProfileById: (hostId) => findById(hostProfiles, hostId),
  getModelProfiles: () => modelProfiles,
  getModelProfileById: (modelId) => findById(modelProfiles, modelId),
  getClipItems: () => clipItems,
  getClipById: (clipId) => findById(clipItems, clipId),
  getNewsItems: () => newsItems,
  getNewsById: (newsId) => findById(newsItems, newsId),
};
