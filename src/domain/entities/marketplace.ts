/** 공고 일정 유형 허용 값 목록 */
export const CAMPAIGN_SCHEDULE_TYPES = ['fixed', 'negotiable'] as const;
/** 공고 장소 공개 정책 허용 값 목록 */
export const CAMPAIGN_LOCATION_DISCLOSURES = ['public', 'afterContract'] as const;
/** 공고 촬영 방식 허용 값 목록 */
export const CAMPAIGN_SHOOTING_METHODS = ['studio', 'live', 'shortform', 'product', 'negotiable'] as const;
/** 게시·임시저장 상태 허용 값 목록 */
export const PUBLISH_STATUSES = ['draft', 'published'] as const;
/** 공고 상태(마감 포함) 허용 값 목록 */
export const CAMPAIGN_STATUSES = [...PUBLISH_STATUSES, 'closed'] as const;
/** 프로필 공개 범위 허용 값 목록 */
export const PROFILE_VISIBILITIES = ['public', 'private'] as const;
/** 사용자 역할 허용 값 목록 */
export const USER_ROLES = ['brand', 'host', 'model'] as const;
export type CampaignScheduleType = (typeof CAMPAIGN_SCHEDULE_TYPES)[number];
export type CampaignLocationDisclosure = (typeof CAMPAIGN_LOCATION_DISCLOSURES)[number];
export type CampaignShootingMethod = (typeof CAMPAIGN_SHOOTING_METHODS)[number];
export type PublishStatus = (typeof PUBLISH_STATUSES)[number];
export type CampaignStatus = (typeof CAMPAIGN_STATUSES)[number];
export type ProfileVisibility = (typeof PROFILE_VISIBILITIES)[number];
export type UserRole = (typeof USER_ROLES)[number];

/** 쇼핑라이브 카드 도메인 엔티티 */
export type LiveItem = {
  id: string;
  campaignId?: string;
  liveThumbnail: string;
  productImage?: string;
  productName?: string;
  brandName: string;
  title: string;
  summary: string;
  shootingDate: string;
};

/** 브랜드 공고 도메인 엔티티 */
export type CampaignItem = {
  id: string;
  coverImage: string;
  brandName: string;
  title: string;
  summary: string;
  payment: number;
  applyDeadline: string;
  shootingDate: string;
  productName?: string;
  shootingStartTime?: string;
  shootingEndTime?: string;
  scheduleType?: CampaignScheduleType;
  shootingLocation?: string;
  locationDisclosure?: CampaignLocationDisclosure;
  shootingMethod?: CampaignShootingMethod;
  recruitCount?: number;
  preferredCondition?: string;
  requiredItems?: string;
  selectionGuide?: string;
  portfolioRequired?: boolean;
  applicationMessageRequired?: boolean;
  availableTimeMemoRequired?: boolean;
  category?: string;
  badge?: string;
  targetRole?: string;
  description?: string;
  status?: CampaignStatus;
};

/** 쇼호스트·모델 공통 프로필 엔티티 */
export type TalentProfile = {
  id: string;
  profileImage: string;
  name: string;
  summary?: string;
  description?: string;
  category?: string;
  modelType?: string;
  experienceYears?: number;
  height?: number;
  location?: string;
  tags?: string[];
};

type RequiredTalentFields<K extends keyof TalentProfile> = Required<Pick<TalentProfile, K>>;

/** 쇼호스트 프로필 등록 폼 값 타입 */
export type HostProfileFormValues = RequiredTalentFields<'name' | 'category' | 'experienceYears' | 'location'> & {
  profileImage?: FileList;
  registerType: string;
  oneLineIntro: string;
  detailIntro: string;
  tags: string;
  recentLiveTitle: string;
  recentLiveUrl: string;
  portfolioFile?: FileList;
  galleryImages?: FileList;
  contact: string;
  email: string;
  openChatUrl: string;
  visibility: ProfileVisibility;
  status: PublishStatus;
};

/** 모델 프로필 등록 폼 값 타입 */
export type ModelProfileFormValues = RequiredTalentFields<'name' | 'modelType' | 'height' | 'location'> & {
  profileImage?: FileList;
  oneLineIntro: string;
  detailIntro: string;
  tags: string;
  portfolioFile?: FileList;
  galleryImages?: FileList;
  contact: string;
  email: string;
  openChatUrl: string;
  visibility: ProfileVisibility;
  status: PublishStatus;
};

/** 공고 등록 폼 값 타입 */
export type CampaignCreateFormValues = Omit<CampaignItem, 'id' | 'coverImage' | 'status'> & {
  coverImage?: FileList;
  liveThumbnail?: FileList;
  productImage?: FileList;
  productName: string;
  category: string;
  badge: string;
  targetRole: string;
  payment: number;
  shootingStartTime: string;
  shootingEndTime: string;
  scheduleType: CampaignScheduleType;
  shootingLocation: string;
  locationDisclosure: CampaignLocationDisclosure;
  shootingMethod: CampaignShootingMethod;
  recruitCount: number;
  preferredCondition: string;
  requiredItems: string;
  selectionGuide: string;
  portfolioRequired: boolean;
  applicationMessageRequired: boolean;
  availableTimeMemoRequired: boolean;
  description: string;
  status: PublishStatus;
};

/** 쇼호스트 포트폴리오 등록 폼 값 타입 */
export type HostPortfolioFormValues = {
  hostId: string;
  title: string;
  description: string;
  category: string;
  experienceSummary: string;
  liveUrl: string;
  liveTitle: string;
  tags: string;
  visibility: ProfileVisibility;
  status: PublishStatus;
};

/** 숏클립 크리에이터 역할 */
export type ClipCreatorRole = 'host' | 'model';

/** 숏클립 카드 도메인 엔티티 */
export type ClipItem = {
  id: string;
  thumbnail: string;
  title: string;
  summary: string;
  viewCount?: number;
  duration?: string;
  category?: string;
  creatorId?: string;
  creatorName?: string;
  creatorRole?: ClipCreatorRole;
  brandName?: string;
  relatedCampaignId?: string;
  tags?: string[];
  createdAt?: string;
};

/** 뉴스 카드 도메인 엔티티 */
export type NewsItem = {
  id: string;
  thumbnail: string;
  category: string;
  title: string;
  createdAt: string;
  viewCount: number;
};
