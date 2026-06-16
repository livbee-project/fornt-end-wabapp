import type { CampaignItem } from '@/domain/entities';
import { formatDate } from '@/shared/utils/formatters';

/** 공고 촬영 일정(날짜·시간)을 화면용 문자열로 포맷한다. */
export const formatShootingSchedule = (campaign: CampaignItem) => {
  const date = formatDate(campaign.shootingDate);

  if (campaign.shootingStartTime && campaign.shootingEndTime) {
    return `${date} ${campaign.shootingStartTime}~${campaign.shootingEndTime}`;
  }

  return date;
};

/** 공고 촬영 장소와 공개 정책을 반영해 표시 문자열을 만든다. */
export const formatShootingLocation = (campaign: CampaignItem) => {
  if (!campaign.shootingLocation) {
    return '미정';
  }

  if (campaign.locationDisclosure === 'afterContract') {
    return `${campaign.shootingLocation} (계약 후 상세 안내)`;
  }

  return campaign.shootingLocation;
};
