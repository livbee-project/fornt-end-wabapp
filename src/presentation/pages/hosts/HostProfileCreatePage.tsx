import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { HostProfileFormValues, PublishStatus } from '@/domain/entities';
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
  GalleryLocalPreview,
  GalleryPreviewHeader,
  GalleryPreviewStrip,
  PreviewCard,
  PreviewCardBody,
  PreviewCardShell,
  PreviewChipRow,
  PreviewMessageIcon,
  PreviewPanelHeader,
  PreviewProfileImage,
  PreviewTagRow,
  PreviewTitleRow,
  ProfileUploadWrap,
  SubmitStatus,
} from '@/presentation/pages/shared/registrationForm.styles';
import { formatFileSize } from '@/shared/utils/formatters';
import {
  buildHostProfilePayload,
  normalizeTags,
  requireContractContact,
  validateImageFiles,
  validateOptionalEmail,
  validateOptionalUrl,
  validatePortfolioFile,
} from '@/shared/utils/registration';
const HOST_PROFILE_CARD_RATIO_LABEL = '3:4';
const categories = ['뷰티', '패션', '푸드', '리빙', '육아', '테크', '라이프', '기타'];
const registerTypes = ['개인 쇼호스트', '소속 쇼호스트', '프리랜서', '에이전시 소속'];
const defaultValues: HostProfileFormValues = {
  name: '',
  registerType: registerTypes[0]!,
  category: categories[0]!,
  experienceYears: 1,
  location: '',
  oneLineIntro: '',
  detailIntro: '',
  tags: '',
  recentLiveTitle: '',
  recentLiveUrl: '',
  contact: '',
  openChatUrl: '',
  email: '',
  visibility: 'public',
  status: 'published',
};
type GalleryPreview = {
  url: string;
  name: string;
  size: string;
};
/** 쇼호스트 프로필(포트폴리오) 등록 화면 */
export function HostProfileCreatePage() {
  const [submitMode, setSubmitMode] = useState<PublishStatus | null>(null);
  const [submitMessage, setSubmitMessage] = useState(
    '필수 정보를 입력하면 포트폴리오를 등록하거나 임시저장할 수 있습니다.',
  );
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [profilePreviewUrl, setProfilePreviewUrl] = useState('');
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [galleryPreviews, setGalleryPreviews] = useState<GalleryPreview[]>([]);
  const {
    register,
    watch,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<HostProfileFormValues>({
    defaultValues,
    mode: 'onChange',
  });
  const values = watch();
  const previewTags = useMemo(() => normalizeTags(values.tags ?? ''), [values.tags]);
  const hasContractContact = Boolean(values.contact?.trim() || values.openChatUrl?.trim());
  const requiredProgress = [
    profileFile,
    values.name,
    values.category,
    values.experienceYears,
    values.oneLineIntro,
    hasContractContact,
  ].filter(Boolean).length;
  const canSubmit = requiredProgress >= 6;
  useEffect(() => {
    if (!profileFile) {
      setProfilePreviewUrl('');
      return;
    }
    const objectUrl = URL.createObjectURL(profileFile);
    setProfilePreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [profileFile]);
  useEffect(() => {
    if (galleryFiles.length === 0) {
      setGalleryPreviews([]);
      return;
    }
    const previews = galleryFiles.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      size: formatFileSize(file.size),
    }));
    setGalleryPreviews(previews);
    return () => previews.forEach((preview) => URL.revokeObjectURL(preview.url));
  }, [galleryFiles]);
  /** 등록·임시저장 확인 모달을 연다. */
  const openSubmitConfirm = (status: PublishStatus) =>
    handleSubmit(() => setSubmitMode(status))();
  /** 확인 후 FormData payload를 생성한다. */
  const confirmSubmit = () => {
    if (!submitMode) return;
    const { profileImage: _profileImage, portfolioFile: _pf, galleryImages: _gi, ...formValues } = values;
    const payload = buildHostProfilePayload(
      {
        ...formValues,
        profileImage: profileFile ? [profileFile] : undefined,
        portfolioFile,
        galleryImages: galleryFiles,
      } as Parameters<typeof buildHostProfilePayload>[0],
      submitMode,
    );
    console.log('host profile FormData ready', Object.fromEntries(payload.entries()));
    setSubmitMessage(
      submitMode === 'draft'
        ? '쇼호스트 포트폴리오가 임시저장되었습니다.'
        : '쇼호스트 포트폴리오 등록 준비가 완료되었습니다. API 연결 시 payload가 전송됩니다.',
    );
    setSubmitMode(null);
  };
  return (
    <CreatePageRoot>
      <BackHeader title="포트폴리오 등록" backTo="/hosts" backLabel="쇼호스트 목록으로 돌아가기" />
      <CreateMain>
        <CreateForm onSubmit={(event) => event.preventDefault()}>
          <CreateFormBody>
            <FormSection
              step="STEP 1"
              title="대표 프로필 사진"
              description="쇼호스트 목록과 상세페이지에 가장 먼저 보이는 이미지입니다."
              sideLabel={HOST_PROFILE_CARD_RATIO_LABEL}
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
                  <span>{formatFileSize(profileFile.size)} · {HOST_PROFILE_CARD_RATIO_LABEL} 카드 비율</span>
                </FileSummary>
              ) : null}
            </FormSection>
            <FormSection
              step="STEP 2"
              title="기본 정보"
              description="브랜드가 검색하고 비교할 때 사용하는 핵심 정보입니다."
              sideLabel={`필수 ${requiredProgress}/6`}
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
                  <span>활동 형태</span>
                  <select {...register('registerType')}>
                    {registerTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </CreateField>
                <CreateField>
                  <span>
                    전문 카테고리 <em>*</em>
                  </span>
                  <select {...register('category', { required: true })}>
                    {categories.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </CreateField>
                <CreateField>
                  <span>
                    라이브 경력 <em>*</em>
                  </span>
                  <input
                    type="number"
                    min={0}
                    max={30}
                    {...register('experienceYears', { required: true, valueAsNumber: true, min: 0, max: 30 })}
                  />
                </CreateField>
              </FieldGrid>
              <CreateField>
                <span>활동 가능 지역</span>
                <input
                  {...register('location', { maxLength: 30 })}
                  placeholder="예: 서울 / 수도권 / 전국 가능"
                  maxLength={30}
                />
              </CreateField>
            </FormSection>
            <FormSection
              step="STEP 3"
              title="포트폴리오 소개"
              description="진행 톤과 강점이 잘 드러날수록 제안 가능성이 높아집니다."
            >
              <CreateField>
                <span>
                  한 줄 소개 <em>*</em>
                </span>
                <input
                  {...register('oneLineIntro', { required: true, maxLength: 80 })}
                  placeholder="예: 밝고 자연스러운 진행으로 제품의 매력을 쉽게 전달합니다."
                  maxLength={80}
                />
                <b>{values.oneLineIntro?.length ?? 0}/80</b>
              </CreateField>
              <CreateField>
                <span>상세 소개</span>
                <textarea
                  {...register('detailIntro', { maxLength: 500 })}
                  placeholder="주요 진행 카테고리, 말투와 진행 스타일, 강점, 라이브 경험을 구체적으로 작성해주세요."
                  maxLength={500}
                />
                <b>{values.detailIntro?.length ?? 0}/500</b>
              </CreateField>
              <CreateField>
                <span>검색 태그</span>
                <input
                  {...register('tags')}
                  placeholder="#뷰티 #라이브커머스 #차분한진행 #식품전문"
                />
                <b>최대 5개</b>
              </CreateField>
            </FormSection>
            <FormSection
              optional
              step="선택"
              title="활동 자료"
              description="최근 라이브와 포트폴리오를 등록하면 브랜드가 역량을 더 빠르게 확인할 수 있습니다."
            >
              <CreateField>
                <span>최근 진행 라이브 제목</span>
                <input
                  {...register('recentLiveTitle', { maxLength: 60 })}
                  placeholder="예: 톤업 선케어 신제품 라이브"
                  maxLength={60}
                />
                <b>{values.recentLiveTitle?.length ?? 0}/60</b>
              </CreateField>
              <CreateField>
                <span>최근 진행 라이브 링크</span>
                <input
                  type="url"
                  {...register('recentLiveUrl', { validate: validateOptionalUrl })}
                  placeholder="라이브 다시보기 또는 포트폴리오 링크를 입력해주세요."
                />
                {errors.recentLiveUrl ? <small>{String(errors.recentLiveUrl.message)}</small> : null}
              </CreateField>
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
              <ActivityUploadRow
                title="갤러리 이미지"
                description="상세페이지 갤러리에 노출됩니다."
                accept="image/*"
                multiple
                previewSlot={
                  galleryPreviews.length > 0 ? (
                    <GalleryLocalPreview>
                      <GalleryPreviewHeader>
                        <strong>갤러리 이미지 {galleryPreviews.length}개 선택</strong>
                        <p>상세페이지 갤러리에서 이미지가 노출됩니다.</p>
                      </GalleryPreviewHeader>
                      <GalleryPreviewStrip>
                        {galleryPreviews.map((preview) => (
                          <figure key={preview.url}>
                            <img src={preview.url} alt="" />
                            <figcaption>{preview.size}</figcaption>
                          </figure>
                        ))}
                      </GalleryPreviewStrip>
                    </GalleryLocalPreview>
                  ) : undefined
                }
                onChange={(event) => {
                  const files = Array.from(event.target.files ?? []);
                  const result = validateImageFiles(files, { multiple: true, label: '갤러리 이미지' });
                  if (typeof result === 'string') return;
                  setGalleryFiles(files);
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
              {!hasContractContact ? (
                <small>계약 후 연락을 위해 연락처 또는 오픈채팅 링크 중 하나를 입력해주세요.</small>
              ) : null}
              {errors.contact ? <small>{String(errors.contact.message)}</small> : null}
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
              <small>홈/목록 {HOST_PROFILE_CARD_RATIO_LABEL}</small>
            </PreviewPanelHeader>
            <PreviewCardShell>
              <PreviewProfileImage>
                {profilePreviewUrl ? (
                  <img src={profilePreviewUrl} alt="대표 프로필 카드 미리보기" />
                ) : (
                  <span>{HOST_PROFILE_CARD_RATIO_LABEL}</span>
                )}
              </PreviewProfileImage>
              <PreviewCardBody>
                <PreviewTitleRow>
                  <strong>{values.name || '활동명'}</strong>
                  <PreviewMessageIcon>
                    <Icon name="message" />
                  </PreviewMessageIcon>
                </PreviewTitleRow>
                <p>{values.oneLineIntro || '브랜드에게 보여질 한 줄 소개가 표시됩니다.'}</p>
                <PreviewChipRow>
                  <em>{values.category || '카테고리'}</em>
                  <em>경력 {values.experienceYears || 0}년</em>
                  {values.location ? <em>{values.location}</em> : null}
                </PreviewChipRow>
                {previewTags.length > 0 ? (
                  <PreviewTagRow>
                    {previewTags.map((tag) => (
                      <i key={tag}>#{tag}</i>
                    ))}
                  </PreviewTagRow>
                ) : null}
              </PreviewCardBody>
            </PreviewCardShell>
          </PreviewCard>
          <SubmitStatus role="status">{submitMessage}</SubmitStatus>
          <FixedBottomActions
            cancelTo="/hosts"
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
        title={submitMode === 'draft' ? '포트폴리오를 임시저장하시겠습니까?' : '쇼호스트 포트폴리오를 등록하시겠습니까?'}
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

