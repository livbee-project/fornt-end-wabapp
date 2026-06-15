import type {
  CampaignItem,
  ClipItem,
  HomeData,
  LiveItem,
  NewsItem,
  TalentProfile,
} from '@/domain/entities';

export type MarketplaceRepository = {
  getHomeData(): HomeData;
  getCampaigns(): CampaignItem[];
  getCampaignById(campaignId: string): CampaignItem | undefined;
  getLiveItems(): LiveItem[];
  getHostProfiles(): TalentProfile[];
  getHostProfileById(hostId: string): TalentProfile | undefined;
  getModelProfiles(): TalentProfile[];
  getModelProfileById(modelId: string): TalentProfile | undefined;
  getClipItems(): ClipItem[];
  getClipById(clipId: string): ClipItem | undefined;
  getNewsItems(): NewsItem[];
  getNewsById(newsId: string): NewsItem | undefined;
};
