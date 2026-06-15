import type { LiveItem } from '@/domain/entities';

/** 라이브 카드 → 연결 공고 상세 (MD: campaignId 우선) */
export function getLiveCampaignPath(live: LiveItem): string {
  const campaignId = live.campaignId ?? live.id.replace(/^live-/, 'campaign-');
  return `/campaigns/${campaignId}`;
}
