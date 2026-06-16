import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { CampaignCreateFormValues, CampaignShootingMethod, PublishStatus } from '@/domain/entities';
import { BackHeader } from '@/presentation/components/common/BackHeader';
import { ConfirmModal } from '@/presentation/components/common/ConfirmModal';
import { FixedBottomActions } from '@/presentation/components/common/FixedBottomActions';
import { FormSection } from '@/presentation/components/common/FormSection';
import { UploadBox } from '@/presentation/components/common/UploadBox';
import {
  CampaignListPreviewCard,
  CampaignPreviewTitleRow,
  CampaignPreviewTop,
  CreateField,
  CreateForm,
  CreateFormBody,
  CreateMain,
  CreatePageRoot,
  FieldGrid,
  FileSummary,
  PreviewCard,
  PreviewPanelHeader,
  SubmitStatus,
} from '@/presentation/pages/shared/registrationForm.styles';
import { formatDate, formatFileSize, formatWon } from '@/shared/utils/formatters';
import { buildCampaignPayload, validateImageFiles } from '@/shared/utils/registration';
const BRAND_PICK_RATIO_LABEL = '4:3';
const categories = ['뷰티', '패션', '푸드', '리빙', '육아', '테크', '라이프', '기타'];
const targetRoles = ['쇼호스트', '모델', '쇼호스트·모델', '협의'];
const shootingMethods: Array<{ value: CampaignShootingMethod; label: string }> = [
  { value: 'studio', label: '스튜디오 촬영' },
  { value: 'live', label: '라이브 방송' },
  { value: 'shortform', label: '숏폼 촬영' },
  { value: 'product', label: '제품 촬영' },
  { value: 'negotiable', label: '협의' },
];
const defaultValues: CampaignCreateFormValues = {
  brandName: '',
  title: '',
  summary: '',
  payment: 0,
  shootingDate: '',
  applyDeadline: '',
  scheduleType: 'fixed',
  shootingMethod: 'live',
  shootingStartTime: '',
  shootingEndTime: '',
  shootingLocation: '',
  locationDisclosure: 'afterContract',
  category: categories[0]!,
  badge: '',
  targetRole: targetRoles[0]!,
  recruitCount: 1,
  preferredCondition: '',
  requiredItems: '',
  description: '',
  selectionGuide: '',
  productName: '',
  portfolioRequired: false,
  applicationMessageRequired: false,
  availableTimeMemoRequired: false,
  status: 'published',
};
/** 브랜드 공고 등록 화면 */
export function CampaignCreatePage() {
  const [submitMode, setSubmitMode] = useState<PublishStatus | null>(null);
  const [submitMessage, setSubmitMessage] = useState(
    '필수 정보를 입력하면 공고를 등록하거나 임시저장할 수 있습니다.',
  );
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreviewUrl, setCoverPreviewUrl] = useState('');
  const {
    register,
    watch,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<CampaignCreateFormValues>({
    defaultValues,
    mode: 'onChange',
  });
  const values = watch();
  const isFixedSchedule = values.scheduleType === 'fixed';
  const displayPayment = useMemo(() => {
    if (!values.payment) return '출연료 미입력';
    return formatWon(values.payment);
  }, [values.payment]);
  const requiredProgress = [
    coverFile,
    values.brandName,
    values.title,
    values.summary,
    values.payment,
    values.shootingDate,
    values.applyDeadline,
    isFixedSchedule ? values.shootingStartTime && values.shootingEndTime : true,
    values.description,
  ].filter(Boolean).length;
  const canSubmit = requiredProgress >= 9;
  useEffect(() => {
    if (!coverFile) {
      setCoverPreviewUrl('');
      return;
    }
    const objectUrl = URL.createObjectURL(coverFile);
    setCoverPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [coverFile]);
  /** 등록·임시저장 확인 모달을 연다. */
  const openSubmitConfirm = (status: PublishStatus) =>
    handleSubmit(() => setSubmitMode(status))();
  /** 확인 후 FormData payload를 생성한다. */
  const confirmSubmit = () => {
    if (!submitMode) return;
    const payload = buildCampaignPayload(
      {
        ...values,
        coverFile,
      },
      submitMode,
    );
    console.log('campaign FormData ready', Object.fromEntries(payload.entries()));
    setSubmitMessage(
      submitMode === 'draft'
        ? '공고가 임시저장되었습니다.'
        : '공고 등록이 완료되었습니다. 목록 노출 전 검수 상태로 전환됩니다.',
    );
    setSubmitMode(null);
  };
  return (
    <CreatePageRoot>
      <BackHeader title="공고 등록" backTo="/campaigns" backLabel="공고 목록으로 돌아가기" />
      <CreateMain>
        <CreateForm onSubmit={(event) => event.preventDefault()}>
          <CreateFormBody>
            <FormSection
              step="STEP 1"
              title="공고 대표 이미지"
              description="브랜드 PICK과 상세 상단에 사용되는 가로형 이미지입니다."
              sideLabel={BRAND_PICK_RATIO_LABEL}
            >
              <UploadBox
                ratio="4:3"
                ariaLabel="공고 대표 이미지 선택"
                previewUrl={coverPreviewUrl}
                changeLabel="이미지 변경"
                onChange={(event) => {
                  const file = event.target.files?.[0] ?? null;
                  const result = validateImageFiles(file ? [file] : undefined, {
                    required: false,
                    label: '공고 대표 이미지',
                  });
                  if (typeof result === 'string') return;
                  setCoverFile(file);
                }}
              />
              {coverFile ? (
                <FileSummary $ok>
                  <strong>{coverFile.name}</strong>
                  <span>{formatFileSize(coverFile.size)} · {BRAND_PICK_RATIO_LABEL} 권장 비율</span>
                </FileSummary>
              ) : null}
            </FormSection>
            <FormSection
              step="STEP 2"
              title="목록 노출 정보"
              description="공고 목록과 상세 상단에 바로 보이는 핵심 정보입니다."
              sideLabel={`필수 ${requiredProgress}/9`}
            >
              <FieldGrid>
                <CreateField>
                  <span>
                    브랜드명 <em>*</em>
                  </span>
                  <input
                    {...register('brandName', { required: true, maxLength: 20 })}
                    placeholder="예: Glow Beauty"
                    maxLength={20}
                  />
                </CreateField>
                <CreateField>
                  <span>
                    출연료 <em>*</em>
                  </span>
                  <input
                    type="number"
                    min={0}
                    step={10000}
                    {...register('payment', { required: true, valueAsNumber: true, min: 0 })}
                    placeholder="예: 500000"
                  />
                  <b>{displayPayment}</b>
                </CreateField>
              </FieldGrid>
              <CreateField>
                <span>
                  공고 제목 <em>*</em>
                </span>
                <input
                  {...register('title', { required: true, maxLength: 40 })}
                  placeholder="예: 데일리 패션 런칭 라이브 진행자 모집"
                  maxLength={40}
                />
                <b>{values.title?.length ?? 0}/40</b>
              </CreateField>
              <CreateField>
                <span>
                  한 줄 소개 <em>*</em>
                </span>
                <input
                  {...register('summary', { required: true, maxLength: 60 })}
                  placeholder="예: 20~30대 여성 타겟 데일리룩 스타일링 방송"
                  maxLength={60}
                />
                <b>{values.summary?.length ?? 0}/60</b>
              </CreateField>
              <FieldGrid>
                <CreateField>
                  <span>
                    촬영일 또는 방송일 <em>*</em>
                  </span>
                  <input type="date" {...register('shootingDate', { required: true })} />
                </CreateField>
                <CreateField>
                  <span>
                    지원 마감일 <em>*</em>
                  </span>
                  <input type="date" {...register('applyDeadline', { required: true })} />
                </CreateField>
              </FieldGrid>
            </FormSection>
            <FormSection
              step="STEP 3"
              title="촬영 일정"
              description="지원자가 지원 팝업에서 다시 확인하는 일정 정보입니다."
              sideLabel={isFixedSchedule ? '일정 확정' : '일정 협의'}
            >
              <FieldGrid>
                <CreateField>
                  <span>
                    촬영 일정 유형 <em>*</em>
                  </span>
                  <select {...register('scheduleType', { required: true })}>
                    <option value="fixed">일정 확정</option>
                    <option value="negotiable">일정 협의</option>
                  </select>
                </CreateField>
                <CreateField>
                  <span>촬영 방식</span>
                  <select {...register('shootingMethod')}>
                    {shootingMethods.map((method) => (
                      <option key={method.value} value={method.value}>
                        {method.label}
                      </option>
                    ))}
                  </select>
                </CreateField>
              </FieldGrid>
              <FieldGrid>
                <CreateField>
                  <span>촬영 시작 시간{isFixedSchedule ? ' *' : ''}</span>
                  <input
                    type="time"
                    {...register('shootingStartTime', {
                      validate: (value) =>
                        getValues('scheduleType') !== 'fixed' ||
                        Boolean(value) ||
                        '촬영 시작 시간을 입력해주세요.',
                    })}
                  />
                  {errors.shootingStartTime ? (
                    <small>{String(errors.shootingStartTime.message)}</small>
                  ) : null}
                </CreateField>
                <CreateField>
                  <span>촬영 종료 시간{isFixedSchedule ? ' *' : ''}</span>
                  <input
                    type="time"
                    {...register('shootingEndTime', {
                      validate: (value) =>
                        getValues('scheduleType') !== 'fixed' ||
                        Boolean(value) ||
                        '촬영 종료 시간을 입력해주세요.',
                    })}
                  />
                  {errors.shootingEndTime ? (
                    <small>{String(errors.shootingEndTime.message)}</small>
                  ) : null}
                </CreateField>
              </FieldGrid>
              <FieldGrid>
                <CreateField>
                  <span>촬영 장소</span>
                  <input
                    {...register('shootingLocation', { maxLength: 60 })}
                    placeholder="예: 서울 성수동 스튜디오 / 수도권 협의"
                    maxLength={60}
                  />
                </CreateField>
                <CreateField>
                  <span>장소 공개 방식</span>
                  <select {...register('locationDisclosure')}>
                    <option value="afterContract">계약 확정 후 공개</option>
                    <option value="public">상세 화면에 공개</option>
                  </select>
                </CreateField>
              </FieldGrid>
            </FormSection>
            <FormSection step="STEP 4" title="모집 조건" description="지원자가 지원 가능 여부를 판단하는 조건입니다.">
              <FieldGrid>
                <CreateField>
                  <span>카테고리</span>
                  <select {...register('category')}>
                    {categories.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </CreateField>
                <CreateField>
                  <span>모집 대상</span>
                  <select {...register('targetRole')}>
                    {targetRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </CreateField>
              </FieldGrid>
              <CreateField>
                <span>모집 인원</span>
                <input
                  type="number"
                  min={1}
                  max={20}
                  {...register('recruitCount', { valueAsNumber: true, min: 1, max: 20 })}
                />
              </CreateField>
              <CreateField>
                <span>우대 조건</span>
                <textarea
                  {...register('preferredCondition', { maxLength: 300 })}
                  placeholder="예: 관련 카테고리 경험, 촬영 톤앤매너, 선호 경력 등을 작성해 주세요."
                  maxLength={300}
                />
                <b>{values.preferredCondition?.length ?? 0}/300</b>
              </CreateField>
              <CreateField>
                <span>필수 준비물</span>
                <textarea
                  {...register('requiredItems', { maxLength: 300 })}
                  placeholder="예: 개인 의상, 기본 메이크업, 촬영 소품 등"
                  maxLength={300}
                />
                <b>{values.requiredItems?.length ?? 0}/300</b>
              </CreateField>
            </FormSection>
            <FormSection
              step="STEP 5"
              title="상세 안내"
              description="상세 페이지와 지원 전 확인사항에 노출되는 설명입니다."
            >
              <CreateField>
                <span>
                  상세 안내 <em>*</em>
                </span>
                <textarea
                  {...register('description', { required: true, maxLength: 1000 })}
                  placeholder="촬영 방식, 진행 내용, 우대 조건, 준비물, 선정 후 연락 방식 등을 구체적으로 작성해 주세요."
                  maxLength={1000}
                />
                <b>{values.description?.length ?? 0}/1000</b>
              </CreateField>
              <CreateField>
                <span>선정 후 안내</span>
                <textarea
                  {...register('selectionGuide', { maxLength: 300 })}
                  placeholder="예: 선정 후 제품 샘플, 촬영 콘셉트, 세부 장소를 제안·메시지로 안내합니다."
                  maxLength={300}
                />
                <b>{values.selectionGuide?.length ?? 0}/300</b>
              </CreateField>
            </FormSection>
            <FormSection
              optional
              step="선택"
              title="대표 상품"
              description="라이브 카드 하단에 작은 썸네일과 상품명으로 노출됩니다."
            >
              <CreateField>
                <span>대표 상품명</span>
                <input
                  {...register('productName', { maxLength: 40 })}
                  placeholder="예: 맛있는 도시락"
                  maxLength={40}
                />
                <b>{values.productName?.length ?? 0}/40</b>
              </CreateField>
            </FormSection>
          </CreateFormBody>
          <PreviewCard>
            <PreviewPanelHeader>
              <span>실시간 미리보기</span>
              <small>공고 목록 카드</small>
            </PreviewPanelHeader>
            <CampaignListPreviewCard>
              <CampaignPreviewTop>
                <small>{values.brandName || '브랜드명'}</small>
                <em>{values.targetRole || '모집 대상'}</em>
              </CampaignPreviewTop>
              <CampaignPreviewTitleRow>
                <strong>{values.title || '공고 제목'}</strong>
                <b>{displayPayment}</b>
              </CampaignPreviewTitleRow>
              <p style={{ margin: 0, color: 'var(--sub-text)', fontSize: 12 }}>
                {values.summary || '한 줄 소개가 여기에 표시됩니다.'}
              </p>
              <p style={{ margin: '6px 0 0', color: 'var(--sub-text)', fontSize: 11 }}>
                촬영일 {values.shootingDate ? formatDate(values.shootingDate) : '미입력'} · 마감{' '}
                {values.applyDeadline ? formatDate(values.applyDeadline) : '미입력'}
              </p>
            </CampaignListPreviewCard>
          </PreviewCard>
          <SubmitStatus role="status">{submitMessage}</SubmitStatus>
          <FixedBottomActions
            cancelTo="/campaigns"
            secondaryLabel="임시저장"
            primaryLabel="공고 등록"
            onSecondary={() => openSubmitConfirm('draft')}
            onPrimary={() => openSubmitConfirm('published')}
            disabled={!canSubmit}
          />
        </CreateForm>
      </CreateMain>
      <ConfirmModal
        open={Boolean(submitMode)}
        title={submitMode === 'draft' ? '공고를 임시저장하시겠습니까?' : '공고를 등록하시겠습니까?'}
        description={
          submitMode === 'draft'
            ? '현재 입력한 내용을 저장할 준비를 합니다.'
            : '입력 정보를 최종 확인한 뒤 등록 payload를 생성합니다.'
        }
        confirmLabel={submitMode === 'draft' ? '임시저장' : '공고 등록'}
        onConfirm={confirmSubmit}
        onCancel={() => setSubmitMode(null)}
      />
    </CreatePageRoot>
  );
}
