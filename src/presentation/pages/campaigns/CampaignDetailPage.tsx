import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackHeader } from '@/presentation/components/common/BackHeader';
import { ConfirmModal } from '@/presentation/components/common/ConfirmModal';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';
import {
  formatShootingLocation,
  formatShootingSchedule,
} from '@/shared/utils/campaignDisplay';
import {
  getLocationDisclosureLabel,
  getScheduleTypeLabel,
  getShootingMethodLabel,
} from '@/shared/utils/campaignLabels';
import { formatDate, formatWon } from '@/shared/utils/formatters';
import {
  ApplyBar,
  ApplyBarInner,
  ApplyButton,
  BrandName,
  Content,
  Cover,
  Description,
  InfoCard,
  MetaChip,
  MetaRow,
  NotFoundCard,
  PageRoot,
  PaymentCard,
  PaymentLabel,
  PaymentValue,
  RequirementItem,
  RequirementList,
  Section,
  SectionTitle,
  Summary,
  Title,
} from './CampaignDetailPage.styles';

export function CampaignDetailPage() {
  const { campaignId } = useParams<{ campaignId: string }>();
  const repository = useMarketplaceRepository();
  const campaign = campaignId ? repository.getCampaignById(campaignId) : undefined;
  const [applyOpen, setApplyOpen] = useState(false);

  if (!campaign) {
    return (
      <PageRoot>
        <BackHeader title="공고 상세" backTo="/campaigns" />
        <Content>
          <NotFoundCard>요청하신 공고를 찾을 수 없습니다. 목록에서 다시 확인해 주세요.</NotFoundCard>
        </Content>
      </PageRoot>
    );
  }

  const requirements = [
    campaign.portfolioRequired ? '포트폴리오 필수' : '포트폴리오 선택',
    campaign.applicationMessageRequired ? '지원 메시지 필수' : '지원 메시지 선택',
    campaign.availableTimeMemoRequired ? '가능 시간 메모 필수' : '가능 시간 메모 선택',
  ];

  const isClosed = campaign.status === 'closed';

  return (
    <PageRoot>
      <BackHeader title="공고 상세" backTo="/campaigns" />
      <Cover>
        <img src={campaign.coverImage} alt={`${campaign.title} 공고 대표 이미지`} />
      </Cover>

      <Content>
        <MetaRow>
          {campaign.category ? <MetaChip>{campaign.category}</MetaChip> : null}
          {campaign.badge ? <MetaChip>{campaign.badge}</MetaChip> : null}
          {campaign.targetRole ? <MetaChip>{campaign.targetRole}</MetaChip> : null}
        </MetaRow>

        <BrandName>{campaign.brandName}</BrandName>
        <Title>{campaign.title}</Title>
        <Summary>{campaign.summary}</Summary>

        <PaymentCard>
          <PaymentLabel>출연료</PaymentLabel>
          <PaymentValue>{formatWon(campaign.payment)}</PaymentValue>
        </PaymentCard>

        <Section aria-labelledby="campaign-info-title">
          <SectionTitle id="campaign-info-title">촬영 정보</SectionTitle>
          <InfoCard>
            {campaign.productName ? (
              <div>
                <dt>대표 상품</dt>
                <dd>{campaign.productName}</dd>
              </div>
            ) : null}
            <div>
              <dt>촬영 일정</dt>
              <dd>{formatShootingSchedule(campaign)}</dd>
            </div>
            <div>
              <dt>일정 유형</dt>
              <dd>{getScheduleTypeLabel(campaign.scheduleType)}</dd>
            </div>
            <div>
              <dt>촬영 방식</dt>
              <dd>{getShootingMethodLabel(campaign.shootingMethod)}</dd>
            </div>
            <div>
              <dt>촬영 장소</dt>
              <dd>{formatShootingLocation(campaign)}</dd>
            </div>
            <div>
              <dt>장소 공개</dt>
              <dd>{getLocationDisclosureLabel(campaign.locationDisclosure)}</dd>
            </div>
            <div>
              <dt>모집 마감</dt>
              <dd>{formatDate(campaign.applyDeadline)}</dd>
            </div>
            <div>
              <dt>모집 인원</dt>
              <dd>{campaign.recruitCount ?? 1}명</dd>
            </div>
          </InfoCard>
        </Section>

        {campaign.description ? (
          <Section aria-labelledby="campaign-description-title">
            <SectionTitle id="campaign-description-title">공고 상세</SectionTitle>
            <Description>{campaign.description}</Description>
          </Section>
        ) : null}

        <Section aria-labelledby="campaign-condition-title">
          <SectionTitle id="campaign-condition-title">모집 조건</SectionTitle>
          <InfoCard>
            <div>
              <dt>선호 조건</dt>
              <dd>{campaign.preferredCondition ?? '브랜드 기준으로 검토합니다.'}</dd>
            </div>
            <div>
              <dt>준비물</dt>
              <dd>{campaign.requiredItems ?? '별도 안내 예정'}</dd>
            </div>
            <div>
              <dt>선정 안내</dt>
              <dd>{campaign.selectionGuide ?? '지원 후 메시지로 결과를 안내합니다.'}</dd>
            </div>
          </InfoCard>
        </Section>

        <Section aria-labelledby="campaign-requirement-title">
          <SectionTitle id="campaign-requirement-title">지원 안내</SectionTitle>
          <RequirementList>
            {requirements.map((item) => (
              <RequirementItem key={item}>{item}</RequirementItem>
            ))}
          </RequirementList>
        </Section>
      </Content>

      <ApplyBar>
        <ApplyBarInner>
          <ApplyButton type="button" disabled={isClosed} onClick={() => setApplyOpen(true)}>
            {isClosed ? '모집 마감' : '지원하기'}
          </ApplyButton>
        </ApplyBarInner>
      </ApplyBar>

      <ConfirmModal
        open={applyOpen}
        title="이 공고에 지원할까요?"
        description="현재는 데모 UI이며 실제 지원 API는 연결되지 않았습니다."
        confirmLabel="지원"
        onConfirm={() => setApplyOpen(false)}
        onCancel={() => setApplyOpen(false)}
      />
    </PageRoot>
  );
}
