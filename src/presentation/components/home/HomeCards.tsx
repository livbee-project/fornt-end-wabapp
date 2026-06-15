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
  CampaignInfoList,
  CampaignSummary,
  CampaignTitle,
  ClipCardBody,
  ClipCardLink,
  ClipMedia,
  HostAvatar,
  HostCardLink,
  LiveCardBody,
  LiveCardLink,
  LiveMedia,
  LiveProductRow,
  LiveProductThumb,
  ModelCardLink,
  ModelMedia,
  NewsCardBody,
  NewsCardLink,
  NewsThumb,
  PaymentBadge,
  PlayButton,
  ProfileCardBody,
  ProfileMeta,
  ProfileTitleRow,
  RoleChip,
} from '@/presentation/pages/home/HomePage.styles';

type LiveCardProps = { item: LiveItem };

export function LiveCard({ item }: LiveCardProps) {
  const representativeProduct = item.productName ?? item.title;

  return (
    <LiveCardLink to={getLiveCampaignPath(item)}>
      <LiveMedia>
        <img src={item.liveThumbnail} alt={`${item.title} 라이브 썸네일`} />
      </LiveMedia>
      <LiveCardBody>
        <strong>{item.title}</strong>
        <em>{item.brandName}</em>
        <LiveProductRow>
          <LiveProductThumb>
            <img
              src={item.productImage ?? item.liveThumbnail}
              alt={`${representativeProduct} 상품 이미지`}
            />
          </LiveProductThumb>
          <div>
            <span>대표 상품</span>
            <p>{representativeProduct}</p>
          </div>
        </LiveProductRow>
        <small>{formatDate(item.shootingDate)} 방송</small>
      </LiveCardBody>
    </LiveCardLink>
  );
}

type CampaignCardProps = { item: CampaignItem };

export function CampaignCard({ item }: CampaignCardProps) {
  return (
    <BrandCardLink to={`/campaigns/${item.id}`}>
      <BrandMedia>
        <img src={item.coverImage} alt={`${item.title} 공고 대표 이미지`} />
        <PaymentBadge>출연료 {formatWon(item.payment)}</PaymentBadge>
      </BrandMedia>
      <BrandCardBody>
        <strong>{item.brandName}</strong>
        <CampaignTitle>{item.title}</CampaignTitle>
        <CampaignSummary>{item.summary}</CampaignSummary>
        <CampaignInfoList>
          <div>
            <dt>
              <Icon name="calendar" />
              촬영일
            </dt>
            <dd>{formatDate(item.shootingDate)}</dd>
          </div>
        </CampaignInfoList>
      </BrandCardBody>
    </BrandCardLink>
  );
}

type HostCardProps = { item: TalentProfile };

export function HostCard({ item }: HostCardProps) {
  const firstTag = item.tags?.[0]?.replace('#', '');

  return (
    <HostCardLink to={`/hosts/${item.id}`}>
      <HostAvatar>
        <img src={item.profileImage} alt={`${item.name} 프로필`} />
      </HostAvatar>
      <ProfileCardBody>
        <ProfileTitleRow>
          <strong>{item.name}</strong>
          <Icon name="message" />
        </ProfileTitleRow>
        <p>{item.summary}</p>
        <ProfileMeta>
          {item.category ? <span>{item.category}</span> : null}
          {firstTag ? <span>{firstTag}</span> : null}
          <span>경력 {item.experienceYears ?? 1}년</span>
        </ProfileMeta>
      </ProfileCardBody>
    </HostCardLink>
  );
}

type ModelCardProps = { item: TalentProfile };

export function ModelCard({ item }: ModelCardProps) {
  const firstTag = item.tags?.[0]?.replace('#', '');

  return (
    <ModelCardLink to={`/models/${item.id}`}>
      <ModelMedia>
        <img src={item.profileImage} alt={`${item.name} 프로필`} />
      </ModelMedia>
      <ProfileCardBody>
        <ProfileTitleRow>
          <strong>{item.name}</strong>
          {item.modelType ? <RoleChip>{item.modelType}</RoleChip> : null}
          <Icon name="message" />
        </ProfileTitleRow>
        <p>{item.summary}</p>
        <ProfileMeta>
          {firstTag ? <span>{firstTag}</span> : null}
          {item.height ? <span>키 {item.height}cm</span> : <span>프로필 확인</span>}
        </ProfileMeta>
      </ProfileCardBody>
    </ModelCardLink>
  );
}

type ClipCardProps = { item: ClipItem };

export function ClipCard({ item }: ClipCardProps) {
  return (
    <ClipCardLink to={`/clips/${item.id}`}>
      <ClipMedia>
        <img src={item.thumbnail} alt={`${item.title} 숏클립 썸네일`} />
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

export function NewsCard({ item }: NewsCardProps) {
  return (
    <NewsCardLink to={`/news/${item.id}`}>
      <NewsThumb>
        <img src={item.thumbnail} alt={`${item.title} 뉴스 이미지`} />
        <span>{item.category}</span>
      </NewsThumb>
      <NewsCardBody>
        <strong>{item.title}</strong>
        <p>{formatDate(item.createdAt)}</p>
      </NewsCardBody>
    </NewsCardLink>
  );
}
