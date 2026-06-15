import type { TalentProfile } from '@/domain/entities';
import { Icon } from '@/presentation/components/common/Icon';
import {
  Body,
  CardLink,
  Media,
  MessageIcon,
  MetaChip,
  MetaRow,
  RoleChip,
  Summary,
  TitleRow,
} from './ModelListCard.styles';

type ModelListCardProps = {
  item: TalentProfile;
};

export function ModelListCard({ item }: ModelListCardProps) {
  const firstTag = item.tags?.[0]?.replace('#', '');

  return (
    <CardLink to={`/models/${item.id}`}>
      <Media>
        <img src={item.profileImage} alt={`${item.name} 프로필`} loading="lazy" />
      </Media>
      <Body>
        <TitleRow>
          <strong>{item.name}</strong>
          {item.modelType ? <RoleChip>{item.modelType}</RoleChip> : null}
        </TitleRow>
        <Summary>{item.summary}</Summary>
        <MetaRow>
          {firstTag ? <MetaChip>{firstTag}</MetaChip> : null}
          {item.height ? <MetaChip>키 {item.height}cm</MetaChip> : null}
          {item.location ? <MetaChip>{item.location}</MetaChip> : null}
        </MetaRow>
      </Body>
      <MessageIcon aria-hidden="true">
        <Icon name="message" />
      </MessageIcon>
    </CardLink>
  );
}
