import type { CampaignItem } from '@/domain/entities';
import { formatDate, formatWon } from '@/shared/utils/formatters';
import {
  CampaignPostingBody,
  CampaignPostingCardLink,
  CampaignPostingMeta,
  CampaignPostingSummary,
  CampaignPostingTopline,
  CampaignTitlePayRow,
} from '@/presentation/pages/shared/campaignPostingList.styles';

type CampaignPostingCardProps = {
  item: CampaignItem;
};

/** 공고 포스팅 목록용 텍스트 중심 카드 */
export function CampaignPostingCard({ item }: CampaignPostingCardProps) {
  return (
    <CampaignPostingCardLink to={`/campaigns/${item.id}`}>
      <CampaignPostingBody>
        <CampaignPostingTopline>
          <small>{item.brandName}</small>
          <em>{item.targetRole ?? '협의'}</em>
        </CampaignPostingTopline>
        <CampaignTitlePayRow>
          <strong>{item.title}</strong>
          <span>출연료 {formatWon(item.payment)}</span>
        </CampaignTitlePayRow>
        <CampaignPostingSummary>{item.summary}</CampaignPostingSummary>
        <CampaignPostingMeta>
          <div>
            <dt>촬영일</dt>
            <dd>{formatDate(item.shootingDate)}</dd>
          </div>
          <div>
            <dt>마감일</dt>
            <dd>{formatDate(item.applyDeadline)}</dd>
          </div>
        </CampaignPostingMeta>
      </CampaignPostingBody>
    </CampaignPostingCardLink>
  );
}
