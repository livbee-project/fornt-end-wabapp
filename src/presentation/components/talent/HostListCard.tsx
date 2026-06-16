import type { TalentProfile } from '@/domain/entities';
import { Icon } from '@/presentation/components/common/Icon';
import {
  Avatar,
  Body,
  CardLink,
  CategoryChip,
  MessageIcon,
  MetaChip,
  MetaRow,
  Summary,
  TitleRow,
} from './HostListCard.styles';

type HostListCardProps = {
  item: TalentProfile;
};

/** 쇼호스트 목록용 가로형 카드 */
export function HostListCard({ item }: HostListCardProps) {
  const firstTag = item.tags?.[0]?.replace('#', '');

  return (
    <CardLink to={`/hosts/${item.id}`}>
      <Avatar>
        <img src={item.profileImage} alt={`${item.name} 프로필`} loading="lazy" />
      </Avatar>
      <Body>
        <TitleRow>
          <strong>{item.name}</strong>
          {item.category ? <CategoryChip>{item.category}</CategoryChip> : null}
        </TitleRow>
        <Summary>{item.summary}</Summary>
        <MetaRow>
          {firstTag ? <MetaChip>{firstTag}</MetaChip> : null}
          <MetaChip>경력 {item.experienceYears ?? 1}년</MetaChip>
          {item.location ? <MetaChip>{item.location}</MetaChip> : null}
        </MetaRow>
      </Body>
      <MessageIcon aria-hidden="true">
        <Icon name="message" />
      </MessageIcon>
    </CardLink>
  );
}
