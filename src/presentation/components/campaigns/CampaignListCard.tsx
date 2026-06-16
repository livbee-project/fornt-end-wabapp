import type { CampaignItem } from '@/domain/entities';
import { Icon } from '@/presentation/components/common/Icon';
import { formatShootingSchedule } from '@/shared/utils/campaignDisplay';
import { formatDate, formatWon } from '@/shared/utils/formatters';
import {
  Body,
  BrandName,
  CardLink,
  InfoList,
  ListCardCompactLink,
  Media,
  MetaChip,
  MetaRow,
  PaymentLine,
  Summary,
  Title,
} from './CampaignListCard.styles';

type CampaignListCardProps = {
  item: CampaignItem;
  variant?: 'default' | 'compact';
};

/** 공고 목록 카드 — default·compact 변형 지원 */
export function CampaignListCard({ item, variant = 'default' }: CampaignListCardProps) {
  const LinkComponent = variant === 'compact' ? ListCardCompactLink : CardLink;

  return (
    <LinkComponent to={`/campaigns/${item.id}`}>
      <Media>
        <img src={item.coverImage} alt="" loading="lazy" />
      </Media>
      <Body>
        <MetaRow>
          {item.category ? <MetaChip>{item.category}</MetaChip> : null}
          {item.badge ? <MetaChip>{item.badge}</MetaChip> : null}
          {item.targetRole ? <MetaChip>{item.targetRole}</MetaChip> : null}
        </MetaRow>
        <Title>{item.title}</Title>
        <Summary>{item.summary}</Summary>
        <PaymentLine>출연료 {formatWon(item.payment)}</PaymentLine>
        <BrandName>{item.brandName}</BrandName>
        <InfoList>
          <div>
            <dt>
              <Icon name="calendar" /> 촬영일
            </dt>
            <dd>{formatShootingSchedule(item)}</dd>
          </div>
          <div>
            <dt>모집 마감</dt>
            <dd>{formatDate(item.applyDeadline)}</dd>
          </div>
        </InfoList>
      </Body>
    </LinkComponent>
  );
}
