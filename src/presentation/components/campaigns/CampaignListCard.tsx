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
  PaymentBadge,
  Summary,
  Title,
} from './CampaignListCard.styles';

type CampaignListCardProps = {
  item: CampaignItem;
  variant?: 'default' | 'compact';
};

export function CampaignListCard({ item, variant = 'default' }: CampaignListCardProps) {
  const LinkComponent = variant === 'compact' ? ListCardCompactLink : CardLink;

  return (
    <LinkComponent to={`/campaigns/${item.id}`}>
      <Media>
        <img src={item.coverImage} alt={`${item.title} 공고 대표 이미지`} loading="lazy" />
        <PaymentBadge>출연료 {formatWon(item.payment)}</PaymentBadge>
      </Media>
      <Body>
        <MetaRow>
          {item.category ? <MetaChip>{item.category}</MetaChip> : null}
          {item.badge ? <MetaChip>{item.badge}</MetaChip> : null}
          {item.targetRole ? <MetaChip>{item.targetRole}</MetaChip> : null}
        </MetaRow>
        <BrandName>{item.brandName}</BrandName>
        <Title>{item.title}</Title>
        <Summary>{item.summary}</Summary>
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
