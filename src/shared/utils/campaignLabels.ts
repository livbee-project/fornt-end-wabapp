import type {
  CampaignLocationDisclosure,
  CampaignScheduleType,
  CampaignShootingMethod,
} from '@/domain/entities';

const scheduleTypeLabels: Record<CampaignScheduleType, string> = {
  fixed: '일정 확정',
  negotiable: '일정 협의',
};

const locationDisclosureLabels: Record<CampaignLocationDisclosure, string> = {
  public: '장소 공개',
  afterContract: '계약 후 공개',
};

const shootingMethodLabels: Record<CampaignShootingMethod, string> = {
  studio: '스튜디오 촬영',
  live: '라이브 방송',
  shortform: '숏폼 촬영',
  product: '제품 촬영',
  negotiable: '촬영 방식 협의',
};

export const getScheduleTypeLabel = (value?: CampaignScheduleType) =>
  value ? scheduleTypeLabels[value] : '미정';

export const getLocationDisclosureLabel = (value?: CampaignLocationDisclosure) =>
  value ? locationDisclosureLabels[value] : '미정';

export const getShootingMethodLabel = (value?: CampaignShootingMethod) =>
  value ? shootingMethodLabels[value] : '미정';
