import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ModelProfileFormValues, PublishStatus } from '@/domain/entities';
import { ActivityUploadRow } from '@/presentation/components/common/ActivityUploadRow';
import { BackHeader } from '@/presentation/components/common/BackHeader';
import { ConfirmModal } from '@/presentation/components/common/ConfirmModal';
import { FixedBottomActions } from '@/presentation/components/common/FixedBottomActions';
import { FormSection } from '@/presentation/components/common/FormSection';
import { Icon } from '@/presentation/components/common/Icon';
import { UploadBox } from '@/presentation/components/common/UploadBox';
import {
  ContactPolicyBox,
  CreateField,
  CreateForm,
  CreateFormBody,
  CreateMain,
  CreatePageRoot,
  FieldGrid,
  FileSummary,
  PreviewCard,
  PreviewCardBody,
  PreviewCardShell,
  PreviewChipRow,
  PreviewMessageIcon,
  PreviewPanelHeader,
  PreviewProfileImage,
  PreviewTitleRow,
  PreviewTypeBadge,
  ProfileUploadWrap,
  SubmitStatus,
} from '@/presentation/pages/shared/registrationForm.styles';
import { formatFileSize } from '@/shared/utils/formatters';
import {
  buildModelProfilePayload,
  requireContractContact,
  validateImageFiles,
  validateOptionalEmail,
  validatePortfolioFile,
} from '@/shared/utils/registration';
const MODEL_PROFILE_CARD_RATIO_LABEL = '3:4';
const modelTypes = ['패션모델', '뷰티모델', '피팅모델', '라이프모델', '키즈모델', '제품모델', '기타'];
const defaultValues: ModelProfileFormValues = {
  name: '',
  modelType: modelTypes[0]!,
  height: 170,
  location: '',
  oneLineIntro: '',
  detailIntro: '',
  tags: '',
  contact: '',
  openChatUrl: '',
  email: '',
  visibility: 'public',
  status: 'published',
};
/** 모델 프로필(포트폴리오) 등록 화면 */
export function ModelProfileCreatePage() {
  const [submitMode, setSubmitMode] = useState<PublishStatus | null>(null);
  const [submitMessage, setSubmitMessage] = useState(
    '필수 정보를 입력하면 포트폴리오를 등록하거나 임시저장할 수 있습니다.',
  );
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [profilePreviewUrl, setProfilePreviewUrl] = useState('');
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const {
    register,
    watch,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ModelProfileFormValues>({
    defaultValues,
    mode: 'onChange',
  });
  const values = watch();
  const hasContractContact = Boolean(values.contact?.trim() || values.openChatUrl?.trim());
  const requiredProgress = [profileFile, values.name, values.modelType, values.oneLineIntro, hasContractContact].filter(
    Boolean,
  ).length;
  const canSubmit = requiredProgress >= 5;
  useEffect(() => {
    if (!profileFile) {
      setProfilePreviewUrl('');
      return;
    }
    const objectUrl = URL.createObjectURL(profileFile);
    setProfilePreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [profileFile]);
  /** 등록·임시저장 확인 모달을 연다. */
  const openSubmitConfirm = (status: PublishStatus) =>
    handleSubmit(() => setSubmitMode(status))();
  /** 확인 후 FormData payload를 생성한다. */
  const confirmSubmit = () => {
    if (!submitMode) return;
    const { profileImage: _profileImage, portfolioFile: _pf, galleryImages: _gi, ...formValues } = values;
    const payload = buildModelProfilePayload(
      {
        ...formValues,
        profileImage: profileFile ? [profileFile] : undefined,
        portfolioFile,
      } as Parameters<typeof buildModelProfilePayload>[0],
      submitMode,
    );
    console.log('model profile FormData ready', Object.fromEntries(payload.entries()));
    setSubmitMessage(
      submitMode === 'draft'
        ? '모델 포트폴리오가 임시저장되었습니다.'
        : '모델 포트폴리오 등록 준비가 완료되었습니다. API 연결 시 payload가 전송됩니다.',
    );
    setSubmitMode(null);
  };
  return (
    <CreatePageRoot>
      <BackHeader title="포트폴리오 등록" backTo="/models" backLabel="모델 목록으로 돌아가기" />
      <CreateMain>
        <CreateForm onSubmit={(event) => event.preventDefault()}>
          <CreateFormBody>
            <FormSection
              step="STEP 1"
              title="대표 프로필 사진"
              description="모델 목록과 상세페이지에 가장 먼저 보이는 이미지입니다."
              sideLabel={MODEL_PROFILE_CARD_RATIO_LABEL}
            >
              <ProfileUploadWrap>
                <UploadBox
                  ratio="3:4"
                  ariaLabel="프로필 사진 선택"
                  previewUrl={profilePreviewUrl}
                  changeLabel="사진 변경"
                  onChange={(event) => {
                    const file = event.target.files?.[0] ?? null;
                    const result = validateImageFiles(file ? [file] : undefined, {
                      required: false,
                      label: '프로필 사진',
                    });
                    if (typeof result === 'string') return;
                    setProfileFile(file);
                  }}
                />
              </ProfileUploadWrap>
              {profileFile ? (
                <FileSummary $ok>
                  <strong>{profileFile.name}</strong>
                  <span>{formatFileSize(profileFile.size)} · {MODEL_PROFILE_CARD_RATIO_LABEL} 카드 비율</span>
                </FileSummary>
              ) : null}
            </FormSection>
            <FormSection
              step="STEP 2"
              title="기본 정보"
              description="브랜드가 촬영 무드와 스펙을 비교할 때 사용하는 핵심 정보입니다."
              sideLabel={`필수 ${requiredProgress}/5`}
            >
              <FieldGrid>
                <CreateField>
                  <span>
                    활동명 <em>*</em>
                  </span>
                  <input
                    {...register('name', { required: true, maxLength: 20 })}
                    placeholder="예: 메이"
                    maxLength={20}
                  />
                </CreateField>
                <CreateField>
                  <span>
                    모델 유형 <em>*</em>
                  </span>
                  <select {...register('modelType', { required: true })}>
                    {modelTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </CreateField>
                <CreateField>
                  <span>키 (cm)</span>
                  <input
                    type="number"
                    min={140}
                    max={200}
                    {...register('height', { valueAsNumber: true, min: 140, max: 200 })}
                  />
                </CreateField>
                <CreateField>
                  <span>활동 가능 지역</span>
                  <input
                    {...register('location', { maxLength: 30 })}
                    placeholder="예: 서울 / 수도권 / 전국 가능"
                    maxLength={30}
                  />
                </CreateField>
              </FieldGrid>
            </FormSection>
            <FormSection
              step="STEP 3"
              title="포트폴리오 소개"
              description="촬영 무드와 강점이 잘 드러날수록 제안 가능성이 높아집니다."
            >
              <CreateField>
                <span>
                  한 줄 소개 <em>*</em>
                </span>
                <input
                  {...register('oneLineIntro', { required: true, maxLength: 80 })}
                  placeholder="예: 청순하고 맑은 무드로 뷰티·패션 촬영에 적합합니다."
                  maxLength={80}
                />
                <b>{values.oneLineIntro?.length ?? 0}/80</b>
              </CreateField>
              <CreateField>
                <span>상세 소개</span>
                <textarea
                  {...register('detailIntro', { maxLength: 500 })}
                  placeholder="촬영 경험, 선호 무드, 강점, 협업 가능 범위를 구체적으로 작성해주세요."
                  maxLength={500}
                />
                <b>{values.detailIntro?.length ?? 0}/500</b>
              </CreateField>
              <CreateField>
                <span>검색 태그</span>
                <input
                  {...register('tags')}
                  placeholder="#패션 #뷰티 #화보 #데일리룩"
                />
                <b>최대 5개</b>
              </CreateField>
            </FormSection>
            <FormSection
              optional
              step="선택"
              title="포트폴리오 파일"
              description="PDF, PPT, 이미지 파일을 첨부하면 브랜드가 역량을 더 빠르게 확인할 수 있습니다."
            >
              <ActivityUploadRow
                title="포트폴리오 파일"
                description="PDF, PPT, 이미지를 첨부할 수 있습니다."
                accept=".pdf,.ppt,.pptx,.jpg,.png"
                fileName={portfolioFile?.name}
                fileMeta={
                  portfolioFile
                    ? `${formatFileSize(portfolioFile.size)} · 브랜드가 포트폴리오 탭에서 확인합니다.`
                    : undefined
                }
                onChange={(event) => {
                  const file = event.target.files?.[0] ?? null;
                  const result = validatePortfolioFile(file);
                  if (typeof result === 'string') return;
                  setPortfolioFile(file);
                }}
              />
            </FormSection>
            <FormSection
              step="STEP 4"
              title="계약 후 연락 정보"
              description="계약이 확정된 브랜드에게만 공개되는 안전 연락 정보입니다."
              sideLabel="계약 전 비공개"
            >
              <ContactPolicyBox>
                <strong>연락처 또는 오픈채팅 링크 중 1개 이상 입력</strong>
                <p>개인 간 무단 연락을 막기 위해 계약 확정 전에는 어떤 연락처도 공개하지 않습니다.</p>
              </ContactPolicyBox>
              <FieldGrid>
                <CreateField>
                  <span>
                    연락처 <em>*</em>
                  </span>
                  <input
                    {...register('contact', {
                      validate: (value) => requireContractContact(value, getValues('openChatUrl')),
                    })}
                    placeholder="010-0000-0000"
                  />
                </CreateField>
                <CreateField>
                  <span>
                    오픈채팅 링크 <em>*</em>
                  </span>
                  <input
                    {...register('openChatUrl', {
                      validate: (value) => requireContractContact(getValues('contact'), value),
                    })}
                    placeholder="카카오 오픈채팅 링크를 입력해주세요."
                  />
                </CreateField>
              </FieldGrid>
              <CreateField>
                <span>이메일</span>
                <input
                  type="email"
                  {...register('email', { validate: validateOptionalEmail })}
                  placeholder="브랜드 제안 알림을 받을 이메일"
                />
                {errors.email ? <small>{String(errors.email.message)}</small> : null}
              </CreateField>
              <CreateField>
                <span>
                  포트폴리오 공개 설정 <em>*</em>
                </span>
                <select {...register('visibility')}>
                  <option value="public">공개 - 목록과 검색에 노출, 연락처는 계약 전 비공개</option>
                  <option value="private">비공개 - 관리자 검토용으로만 저장</option>
                </select>
              </CreateField>
            </FormSection>
          </CreateFormBody>
          <PreviewCard>
            <PreviewPanelHeader>
              <span>목록 카드 미리보기</span>
              <small>홈/목록 {MODEL_PROFILE_CARD_RATIO_LABEL}</small>
            </PreviewPanelHeader>
            <PreviewCardShell>
              <PreviewProfileImage>
                {profilePreviewUrl ? (
                  <img src={profilePreviewUrl} alt="대표 프로필 카드 미리보기" />
                ) : (
                  <span>{MODEL_PROFILE_CARD_RATIO_LABEL}</span>
                )}
              </PreviewProfileImage>
              <PreviewCardBody>
                <PreviewTitleRow>
                  <strong>{values.name || '활동명'}</strong>
                  <PreviewTypeBadge>{values.modelType}</PreviewTypeBadge>
                  <PreviewMessageIcon>
                    <Icon name="message" />
                  </PreviewMessageIcon>
                </PreviewTitleRow>
                <p>{values.oneLineIntro || '브랜드에게 보여질 한 줄 소개가 표시됩니다.'}</p>
                <PreviewChipRow>
                  {values.height ? <em>키 {values.height}cm</em> : null}
                  {values.location ? <em>{values.location}</em> : null}
                </PreviewChipRow>
              </PreviewCardBody>
            </PreviewCardShell>
          </PreviewCard>
          <SubmitStatus role="status">{submitMessage}</SubmitStatus>
          <FixedBottomActions
            cancelTo="/models"
            secondaryLabel="임시저장"
            primaryLabel="포트폴리오 등록"
            onSecondary={() => openSubmitConfirm('draft')}
            onPrimary={() => openSubmitConfirm('published')}
            disabled={!canSubmit}
          />
        </CreateForm>
      </CreateMain>
      <ConfirmModal
        open={Boolean(submitMode)}
        title={submitMode === 'draft' ? '포트폴리오를 임시저장하시겠습니까?' : '모델 포트폴리오를 등록하시겠습니까?'}
        description={
          submitMode === 'draft'
            ? '현재 입력한 내용과 첨부 파일을 저장할 준비를 합니다.'
            : '입력 정보와 첨부 파일을 최종 확인한 뒤 등록 payload를 생성합니다.'
        }
        confirmLabel={submitMode === 'draft' ? '임시저장' : '포트폴리오 등록'}
        onConfirm={confirmSubmit}
        onCancel={() => setSubmitMode(null)}
      />
    </CreatePageRoot>
  );
}

