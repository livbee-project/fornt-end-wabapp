import type { CampaignItem } from '@/domain/entities';
import { formatDate } from '@/shared/utils/formatters';

export const formatShootingSchedule = (campaign: CampaignItem) => {
  const date = formatDate(campaign.shootingDate);

  if (campaign.shootingStartTime && campaign.shootingEndTime) {
    return `${date} ${campaign.shootingStartTime}~${campaign.shootingEndTime}`;
  }

  return date;
};

export const formatShootingLocation = (campaign: CampaignItem) => {
  if (!campaign.shootingLocation) {
    return '미정';
  }

  if (campaign.locationDisclosure === 'afterContract') {
    return `${campaign.shootingLocation} (계약 후 상세 안내)`;
  }

  return campaign.shootingLocation;
};
