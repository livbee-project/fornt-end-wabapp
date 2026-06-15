export const CAMPAIGN_SCHEDULE_TYPES = ['fixed', 'negotiable'] as const;
export const CAMPAIGN_LOCATION_DISCLOSURES = ['public', 'afterContract'] as const;
export const CAMPAIGN_SHOOTING_METHODS = ['studio', 'live', 'shortform', 'product', 'negotiable'] as const;
export const PUBLISH_STATUSES = ['draft', 'published'] as const;
export const CAMPAIGN_STATUSES = [...PUBLISH_STATUSES, 'closed'] as const;
export const PROFILE_VISIBILITIES = ['public', 'private'] as const;
export const USER_ROLES = ['brand', 'host', 'model'] as const;

export type CampaignScheduleType = (typeof CAMPAIGN_SCHEDULE_TYPES)[number];
export type CampaignLocationDisclosure = (typeof CAMPAIGN_LOCATION_DISCLOSURES)[number];
export type CampaignShootingMethod = (typeof CAMPAIGN_SHOOTING_METHODS)[number];
export type PublishStatus = (typeof PUBLISH_STATUSES)[number];
export type CampaignStatus = (typeof CAMPAIGN_STATUSES)[number];
export type ProfileVisibility = (typeof PROFILE_VISIBILITIES)[number];
export type UserRole = (typeof USER_ROLES)[number];

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

export type ClipCreatorRole = 'host' | 'model';

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

export type NewsItem = {
  id: string;
  thumbnail: string;
  category: string;
  title: string;
  createdAt: string;
  viewCount: number;
};
