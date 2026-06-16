import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ConfirmModal } from '@/presentation/components/common/ConfirmModal';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';
import {
  getLocationDisclosureLabel,
  getScheduleTypeLabel,
  getShootingMethodLabel,
} from '@/shared/utils/campaignLabels';
import { formatDate, formatWon } from '@/shared/utils/formatters';
import {
  DetailBottomCta,
  BioSection,
  DetailMain,
  DetailPageRoot,
  DetailTopbar,
  InfoList,
  JobBrandRow,
  JobChipRow,
  JobCompleteCard,
  JobNoticeList,
  JobProfileCard,
  JobSection,
  JobSummary,
  NotFoundWrap,
  SafetyCard,
  TagRow,
} from '@/presentation/pages/shared/talentDetailCodex.styles';

/** 촬영 시작·종료 시각을 표시용 문자열로 조합한다. */
const formatScheduleTime = (start?: string, end?: string) =>
  start && end ? `${start} ~ ${end}` : '협의';

/** 공고 상세 — 지원·모집 정보·안내를 표시 */
export function CampaignDetailPage() {
  const { campaignId } = useParams<{ campaignId: string }>();
  const repository = useMarketplaceRepository();
  const campaign = campaignId ? repository.getCampaignById(campaignId) : undefined;
  const [applyOpen, setApplyOpen] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  if (!campaign) {
    return (
      <DetailPageRoot>
        <DetailMain>
          <DetailTopbar>
            <Link to="/campaigns" aria-label="공고 목록으로 돌아가기">
              ‹
            </Link>
            <strong>공고 상세</strong>
            <button type="button" aria-label="공유하기">
              ↗
            </button>
          </DetailTopbar>
          <NotFoundWrap>요청하신 공고를 찾을 수 없습니다. 목록에서 다시 확인해 주세요.</NotFoundWrap>
        </DetailMain>
      </DetailPageRoot>
    );
  }

  const isClosed = campaign.status === 'closed';
  const scheduleTypeLabel = getScheduleTypeLabel(campaign.scheduleType);
  const shootingTime = formatScheduleTime(campaign.shootingStartTime, campaign.shootingEndTime);
  const locationLabel =
    campaign.locationDisclosure === 'public'
      ? (campaign.shootingLocation ?? '미정')
      : getLocationDisclosureLabel(campaign.locationDisclosure);
  const methodLabel = getShootingMethodLabel(campaign.shootingMethod);

  return (
    <DetailPageRoot>
      <DetailMain>
        <DetailTopbar>
          <Link to="/campaigns" aria-label="공고 목록으로 돌아가기">
            ‹
          </Link>
          <strong>공고 상세</strong>
          <button type="button" aria-label="공유하기">
            ↗
          </button>
        </DetailTopbar>

        <JobProfileCard>
          <JobSummary>
            <JobBrandRow>
              <span>{campaign.brandName}</span>
              <em>{campaign.category ?? '카테고리'}</em>
            </JobBrandRow>
            <h1>{campaign.title}</h1>
            <p>{campaign.summary}</p>
            <JobChipRow>
              <span>{campaign.targetRole ?? '모집 대상 협의'}</span>
              <span>{scheduleTypeLabel}</span>
              <span>마감 {formatDate(campaign.applyDeadline)}</span>
            </JobChipRow>
          </JobSummary>
        </JobProfileCard>

        <BioSection>
          <strong>{campaign.description ?? campaign.summary}</strong>
          <p>
            {campaign.selectionGuide ??
              '브랜드가 등록한 공고 정보를 기준으로 쇼호스트와 모델이 지원할 수 있습니다. 세부 진행 방식과 준비물은 매칭 확정 후 브랜드와 협의합니다.'}
          </p>
          <TagRow>
            <span>{campaign.category ?? '카테고리 협의'}</span>
            <span>{methodLabel}</span>
            <span>{locationLabel}</span>
          </TagRow>
        </BioSection>

        <SafetyCard>
          <div>
            <strong>계약 전 정보 보호</strong>
            <p>지원 시 포트폴리오만 전달되며 연락처는 계약 확정 전까지 공개되지 않습니다.</p>
          </div>
          <span>안전</span>
        </SafetyCard>

        <JobSection>
          <h2>공고 기본 정보</h2>
          <InfoList>
            <div>
              <dt>브랜드명</dt>
              <dd>{campaign.brandName}</dd>
            </div>
            <div>
              <dt>상품명</dt>
              <dd>{campaign.productName ?? '계약 확정 후 공개'}</dd>
            </div>
            <div>
              <dt>공고 제목</dt>
              <dd>{campaign.title}</dd>
            </div>
            <div>
              <dt>한 줄 소개</dt>
              <dd>{campaign.summary}</dd>
            </div>
            <div>
              <dt>출연료</dt>
              <dd>{formatWon(campaign.payment)}</dd>
            </div>
            <div>
              <dt>지원 마감</dt>
              <dd>{formatDate(campaign.applyDeadline)}</dd>
            </div>
            <div>
              <dt>모집 대상</dt>
              <dd>{campaign.targetRole ?? '협의'}</dd>
            </div>
          </InfoList>
        </JobSection>

        <JobSection>
          <h2>촬영 일정</h2>
          <InfoList>
            <div>
              <dt>일정 유형</dt>
              <dd>{scheduleTypeLabel}</dd>
            </div>
            <div>
              <dt>촬영일</dt>
              <dd>{formatDate(campaign.shootingDate)}</dd>
            </div>
            <div>
              <dt>촬영 시간</dt>
              <dd>{shootingTime}</dd>
            </div>
            <div>
              <dt>촬영 장소</dt>
              <dd>{locationLabel}</dd>
            </div>
            <div>
              <dt>촬영 방식</dt>
              <dd>{methodLabel}</dd>
            </div>
          </InfoList>
        </JobSection>

        <JobSection>
          <h2>모집 조건</h2>
          <InfoList>
            <div>
              <dt>모집 대상</dt>
              <dd>{campaign.targetRole ?? '협의'}</dd>
            </div>
            <div>
              <dt>모집 인원</dt>
              <dd>{campaign.recruitCount ? `${campaign.recruitCount}명` : '협의'}</dd>
            </div>
            <div>
              <dt>우대 조건</dt>
              <dd>{campaign.preferredCondition ?? '별도 우대 조건 없음'}</dd>
            </div>
            <div>
              <dt>준비물</dt>
              <dd>{campaign.requiredItems ?? '선정 후 안내'}</dd>
            </div>
          </InfoList>
        </JobSection>

        <JobSection>
          <h2>지원 전 확인사항</h2>
          <JobNoticeList>
            <li>지원 시 선택한 포트폴리오가 브랜드에 전달됩니다.</li>
            <li>계약 확정 전까지 연락처는 공개되지 않습니다.</li>
            <li>브랜드 검토 결과는 제안·메시지에서 확인할 수 있습니다.</li>
            <li>
              {campaign.scheduleType === 'negotiable'
                ? '촬영 가능 시간 메모를 바탕으로 브랜드와 일정을 조율합니다.'
                : '촬영 예정일과 시간을 확인한 후 지원해 주세요.'}
            </li>
          </JobNoticeList>
        </JobSection>

        {hasApplied ? (
          <JobCompleteCard>
            <div>
              <strong>지원 완료</strong>
              <p>브랜드가 지원자를 검토하면 제안·메시지에서 상태를 확인할 수 있습니다.</p>
            </div>
            <Link to="/mypage/messages">메시지</Link>
          </JobCompleteCard>
        ) : null}

        <DetailBottomCta>
          <button
            type="button"
            disabled={isClosed || hasApplied}
            onClick={() => setApplyOpen(true)}
          >
            {isClosed ? '마감' : hasApplied ? '지원 완료' : '지원하기'}
          </button>
        </DetailBottomCta>
      </DetailMain>

      <ConfirmModal
        open={applyOpen}
        title={`${campaign.title}에 지원할까요?`}
        description="현재는 데모 UI이며 실제 지원 API는 연결되지 않았습니다."
        confirmLabel="지원"
        onConfirm={() => {
          setHasApplied(true);
          setApplyOpen(false);
        }}
        onCancel={() => setApplyOpen(false)}
      />
    </DetailPageRoot>
  );
}
