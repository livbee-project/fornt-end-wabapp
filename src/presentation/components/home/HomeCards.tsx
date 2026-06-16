import type {
  CampaignItem,
  ClipItem,
  LiveItem,
  NewsItem,
  TalentProfile,
} from '@/domain/entities';
import { Icon } from '@/presentation/components/common/Icon';
import { getLiveCampaignPath } from '@/shared/utils/campaignPaths';
import { formatDate, formatWon } from '@/shared/utils/formatters';
import {
  BrandCardBody,
  BrandCardLink,
  BrandMedia,
  CampaignBrandName,
  CampaignPayment,
  CampaignShootingDate,
  CampaignSummary,
  CampaignTitle,
  ClipCardBody,
  ClipCardLink,
  ClipMedia,
  LiveCardBody,
  LiveCardLink,
  LiveMedia,
  NewsCardBody,
  NewsCardLink,
  NewsCategory,
  NewsThumb,
  PlayButton,
  ProfileCardArticle,
  ProfileCardBodyHost,
  ProfileCardBodyModel,
  ProfileCardMainLink,
  ProfileCtaRow,
  ProfileMeta,
  ProfilePhoto,
  ProfilePrimaryCta,
  ProfileSecondaryCta,
  ProfileTitleRow,
  RoleChip,
} from '@/presentation/pages/home/HomePage.styles';

type LiveCardProps = { item: LiveItem };

/** 홈 쇼핑라이브 카드 — 연결된 공고 상세로 이동 */
export function LiveCard({ item }: LiveCardProps) {
  return (
    <LiveCardLink to={getLiveCampaignPath(item)}>
      <LiveMedia>
        <img src={item.liveThumbnail} alt="" />
      </LiveMedia>
      <LiveCardBody>
        <strong>{item.title}</strong>
        <p>{item.summary}</p>
        <small>{formatDate(item.shootingDate)} 방송</small>
      </LiveCardBody>
    </LiveCardLink>
  );
}

type CampaignCardProps = { item: CampaignItem };

/** 홈 브랜드 PICK 공고 카드 */
export function CampaignCard({ item }: CampaignCardProps) {
  return (
    <BrandCardLink to={`/campaigns/${item.id}`}>
      <BrandMedia>
        <img src={item.coverImage} alt="" />
      </BrandMedia>
      <BrandCardBody>
        <CampaignTitle>{item.title}</CampaignTitle>
        <CampaignSummary>{item.summary}</CampaignSummary>
        <CampaignPayment>출연료 {formatWon(item.payment)}</CampaignPayment>
        <CampaignBrandName>{item.brandName}</CampaignBrandName>
        <CampaignShootingDate>촬영일 {formatDate(item.shootingDate)}</CampaignShootingDate>
      </BrandCardBody>
    </BrandCardLink>
  );
}

type ProfileCardProps = { item: TalentProfile; type: 'host' | 'model' };

/** 태그 문자열에 # 접두사를 보장한다. */
const formatTag = (tag: string) => (tag.startsWith('#') ? tag : `#${tag}`);

/** 홈 추천 쇼호스트·모델 프로필 카드 */
export function ProfileCard({ item, type }: ProfileCardProps) {
  const href = type === 'host' ? `/hosts/${item.id}` : `/models/${item.id}`;
  const primary = type === 'host' ? item.category : item.modelType;
  const tags = (item.tags ?? []).slice(0, 5);
  const meta =
    type === 'host'
      ? `경력 ${item.experienceYears ?? 1}년`
      : item.height
        ? `키 ${item.height}cm`
        : null;
  const Body = type === 'host' ? ProfileCardBodyHost : ProfileCardBodyModel;

  return (
    <ProfileCardArticle>
      <ProfileCardMainLink to={href}>
        <ProfilePhoto $variant={type}>
          <img src={item.profileImage} alt="" />
        </ProfilePhoto>
        <Body>
          <ProfileTitleRow>
            <strong>{item.name}</strong>
            {type === 'model' && primary ? <RoleChip>{primary}</RoleChip> : null}
            <Icon name="message" />
          </ProfileTitleRow>
          <p>{item.summary ?? primary}</p>
          <ProfileMeta>
            {type === 'host' && primary ? <span>{primary}</span> : null}
            {tags.map((tag) => (
              <span key={tag}>{formatTag(tag)}</span>
            ))}
            {meta ? <span>{meta}</span> : null}
          </ProfileMeta>
        </Body>
      </ProfileCardMainLink>
      <ProfileCtaRow>
        <ProfilePrimaryCta to={href}>제안하기</ProfilePrimaryCta>
        <ProfileSecondaryCta to="/mypage/messages">메시지</ProfileSecondaryCta>
      </ProfileCtaRow>
    </ProfileCardArticle>
  );
}

type ClipCardProps = { item: ClipItem };

/** 홈 HOT CLIP 숏클립 카드 */
export function ClipCard({ item }: ClipCardProps) {
  return (
    <ClipCardLink to={`/clips/${item.id}`}>
      <ClipMedia>
        <img src={item.thumbnail} alt="" />
        <PlayButton aria-hidden="true">
          <Icon name="play" />
        </PlayButton>
      </ClipMedia>
      <ClipCardBody>
        <strong>{item.title}</strong>
        <p>{item.summary}</p>
      </ClipCardBody>
    </ClipCardLink>
  );
}

type NewsCardProps = { item: NewsItem };

/** 홈 뉴스 카드 */
export function NewsCard({ item }: NewsCardProps) {
  return (
    <NewsCardLink to={`/news/${item.id}`}>
      <NewsThumb>
        <img src={item.thumbnail} alt="" />
      </NewsThumb>
      <NewsCardBody>
        <NewsCategory>{item.category}</NewsCategory>
        <strong>{item.title}</strong>
        <p>{formatDate(item.createdAt)}</p>
      </NewsCardBody>
    </NewsCardLink>
  );
}
