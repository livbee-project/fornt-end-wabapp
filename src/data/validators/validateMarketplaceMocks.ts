import type { CampaignItem, ClipItem, LiveItem, NewsItem, TalentProfile } from '@/domain/entities';

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const DISPLAY_DATE = /^\d{4}\.\d{2}\.\d{2}$/;

const uniqueIds = (items: Array<{ id: string }>) =>
  new Set(items.map(({ id }) => id)).size === items.length;

export const validateMarketplaceMocks = ({
  campaigns,
  lives,
  hosts,
  models,
  clips,
  news,
}: {
  campaigns: CampaignItem[];
  lives: LiveItem[];
  hosts: TalentProfile[];
  models: TalentProfile[];
  clips: ClipItem[];
  news: NewsItem[];
}) => {
  const errors: string[] = [];

  const groups = { campaigns, lives, hosts, models, clips, news };
  Object.entries(groups).forEach(([name, items]) => {
    if (!uniqueIds(items)) {
      errors.push(`${name}: duplicate id`);
    }
  });

  const campaignIds = new Set(campaigns.map(({ id }) => id));
  lives.forEach((item) => {
    if (item.campaignId && !campaignIds.has(item.campaignId)) {
      errors.push(`lives: missing campaign ${item.campaignId}`);
    }
  });

  campaigns.forEach((item) => {
    if (item.payment < 0) {
      errors.push(`campaigns: negative payment ${item.id}`);
    }
    if (!ISO_DATE.test(item.applyDeadline)) {
      errors.push(`campaigns: invalid deadline ${item.id}`);
    }
    if (!DISPLAY_DATE.test(item.shootingDate) && !ISO_DATE.test(item.shootingDate)) {
      errors.push(`campaigns: invalid shooting date ${item.id}`);
    }
  });

  clips.forEach((item) => {
    if (item.relatedCampaignId && !campaignIds.has(item.relatedCampaignId)) {
      errors.push(`clips: missing campaign ${item.relatedCampaignId}`);
    }
    if (item.creatorId) {
      const hostIds = new Set(hosts.map(({ id }) => id));
      const modelIds = new Set(models.map(({ id }) => id));
      const creatorExists =
        (item.creatorRole === 'host' && hostIds.has(item.creatorId)) ||
        (item.creatorRole === 'model' && modelIds.has(item.creatorId));
      if (!creatorExists) {
        errors.push(`clips: missing creator ${item.creatorId}`);
      }
    }
  });

  news.forEach((item) => {
    if (item.viewCount < 0) {
      errors.push(`news: negative views ${item.id}`);
    }
    if (!ISO_DATE.test(item.createdAt)) {
      errors.push(`news: invalid createdAt ${item.id}`);
    }
  });

  return errors;
};
