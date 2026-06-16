import type {
  CampaignItem,
  ClipItem,
  LiveItem,
  NewsItem,
  TalentProfile,
} from './marketplace';

/** 홈 히어로 배너 도메인 타입 */
export type HeroBanner = {
  image: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
};

/** 홈 화면에 노출할 집계 데이터 */
export type HomeData = {
  heroBanner: HeroBanner;
  liveItems: LiveItem[];
  campaignItems: CampaignItem[];
  hostProfiles: TalentProfile[];
  modelProfiles: TalentProfile[];
  clipItems: ClipItem[];
  newsItems: NewsItem[];
};

/** buildHomeData 유스케이스 입력 소스 */
export type HomeDataSource = {
  heroBanner: HeroBanner;
  liveItems: LiveItem[];
  campaignItems: CampaignItem[];
  hostProfiles: TalentProfile[];
  modelProfiles: TalentProfile[];
  clipItems: ClipItem[];
  newsItems: NewsItem[];
};
