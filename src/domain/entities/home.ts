import type {
  CampaignItem,
  ClipItem,
  LiveItem,
  NewsItem,
  TalentProfile,
} from './marketplace';

export type HeroBanner = {
  image: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
};

export type HomeData = {
  heroBanner: HeroBanner;
  liveItems: LiveItem[];
  campaignItems: CampaignItem[];
  hostProfiles: TalentProfile[];
  modelProfiles: TalentProfile[];
  clipItems: ClipItem[];
  newsItems: NewsItem[];
};

export type HomeDataSource = {
  heroBanner: HeroBanner;
  liveItems: LiveItem[];
  campaignItems: CampaignItem[];
  hostProfiles: TalentProfile[];
  modelProfiles: TalentProfile[];
  clipItems: ClipItem[];
  newsItems: NewsItem[];
};
