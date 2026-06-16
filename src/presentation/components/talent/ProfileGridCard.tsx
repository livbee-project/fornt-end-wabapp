import type { TalentProfile } from '@/domain/entities';
import {
  ProfileGridBody,
  ProfileGridCardLink,
  ProfileGridImage,
  ProfileGridInlineChip,
  ProfileGridMessageIcon,
  ProfileGridMeta,
  ProfileGridSummary,
  ProfileGridTitleRow,
} from '@/presentation/pages/shared/profileListPage.styles';

type ProfileGridCardProps = {
  item: TalentProfile;
  type: 'host' | 'model';
};

/** 목록 그리드용 쇼호스트·모델 프로필 카드 */
export function ProfileGridCard({ item, type }: ProfileGridCardProps) {
  const href = type === 'host' ? `/hosts/${item.id}` : `/models/${item.id}`;
  const firstTag = item.tags?.[0]?.replace('#', '');

  return (
    <ProfileGridCardLink to={href}>
      <ProfileGridImage>
        <img src={item.profileImage} alt={`${item.name} 프로필`} loading="lazy" />
      </ProfileGridImage>
      <ProfileGridBody>
        <ProfileGridTitleRow>
          <strong>{item.name}</strong>
          {type === 'model' && item.modelType ? (
            <ProfileGridInlineChip>{item.modelType}</ProfileGridInlineChip>
          ) : null}
          <ProfileGridMessageIcon aria-hidden="true">M</ProfileGridMessageIcon>
        </ProfileGridTitleRow>
        <ProfileGridSummary>{item.summary}</ProfileGridSummary>
        <ProfileGridMeta>
          {type === 'host' ? (
            <>
              {item.category ? <span>{item.category}</span> : null}
              <span>경력 {item.experienceYears ?? 1}년</span>
            </>
          ) : (
            <>
              {item.height ? <span>키 {item.height}cm</span> : null}
              {item.location ? <span>{item.location}</span> : null}
              {!item.height && !item.location && firstTag ? <span>{firstTag}</span> : null}
            </>
          )}
        </ProfileGridMeta>
      </ProfileGridBody>
    </ProfileGridCardLink>
  );
}
