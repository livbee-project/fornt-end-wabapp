import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { HostPortfolioFormValues, PublishStatus } from '@/domain/entities';
import { MARKETPLACE_CATEGORIES } from '@/domain/entities';
import { ActivityUploadRow } from '@/presentation/components/common/ActivityUploadRow';
import { BackHeader } from '@/presentation/components/common/BackHeader';
import { ConfirmModal } from '@/presentation/components/common/ConfirmModal';
import { FixedBottomActions } from '@/presentation/components/common/FixedBottomActions';
import { FormSection } from '@/presentation/components/common/FormSection';
import { UploadBox } from '@/presentation/components/common/UploadBox';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';
import {
  CreateField,
  CreateForm,
  CreateFormBody,
  CreateMain,
  CreatePageRoot,
  GalleryLocalPreview,
  GalleryPreviewHeader,
  GalleryPreviewStrip,
  PreviewCard,
  PreviewChipRow,
  PreviewPanelHeader,
  PreviewProfileImage,
  ProfileUploadWrap,
  SubmitStatus,
} from '@/presentation/pages/shared/registrationForm.styles';
import { formatFileSize } from '@/shared/utils/formatters';
import {
  buildHostPortfolioPayload,
  normalizeTags,
  validateImageFiles,
  validateOptionalUrl,
  validatePortfolioFile,
} from '@/shared/utils/registration';

const defaultValues: HostPortfolioFormValues = {
  hostId: '',
  title: '',
  description: '',
  category: '뷰티',
  experienceSummary: '',
  liveUrl: '',
  liveTitle: '',
  tags: '',
  visibility: 'public',
  status: 'published',
};

type GalleryPreview = { url: string; name: string; size: string };

/** 쇼호스트 상세 전용 포트폴리오 등록 화면 */
export function HostPortfolioCreatePage() {
  const repository = useMarketplaceRepository();
  const hosts = repository.getHostProfiles();
  const [submitMode, setSubmitMode] = useState<PublishStatus | null>(null);
  const [submitMessage, setSubmitMessage] = useState(
    '필수 정보를 입력하면 포트폴리오를 등록하거나 임시저장할 수 있습니다.',
  );
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreviewUrl, setCoverPreviewUrl] = useState('');
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [galleryPreviews, setGalleryPreviews] = useState<GalleryPreview[]>([]);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<HostPortfolioFormValues>({
    defaultValues: { ...defaultValues, hostId: hosts[0]?.id ?? '' },
    mode: 'onChange',
  });

  const values = watch();
  const previewTags = useMemo(() => normalizeTags(values.tags ?? ''), [values.tags]);
  const canSubmit = Boolean(values.hostId && values.title.trim() && coverFile);

  useEffect(() => {
    if (!coverFile) {
      setCoverPreviewUrl('');
      return;
    }
    const objectUrl = URL.createObjectURL(coverFile);
    setCoverPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [coverFile]);

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
    const payload = buildHostPortfolioPayload(
      {
        ...values,
        coverImage: coverFile,
        portfolioFile,
        galleryImages: galleryFiles,
      },
      submitMode,
    );
    console.log('host portfolio FormData ready', Object.fromEntries(payload.entries()));
    setSubmitMessage(
      submitMode === 'draft'
        ? '포트폴리오가 임시저장되었습니다.'
        : '포트폴리오 등록 준비가 완료되었습니다. API 연결 시 payload가 전송됩니다.',
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
              title="기본 정보"
              description="상세페이지 포트폴리오 영역에 노출되는 핵심 정보입니다."
            >
              <CreateField>
                <span>
                  연결 쇼호스트 <em>*</em>
                </span>
                <select {...register('hostId', { required: true })}>
                  {hosts.map((host) => (
                    <option key={host.id} value={host.id}>
                      {host.name} / {host.category}
                    </option>
                  ))}
                </select>
              </CreateField>
              <CreateField>
                <span>
                  전문 카테고리 <em>*</em>
                </span>
                <select {...register('category', { required: true })}>
                  {MARKETPLACE_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </CreateField>
              <CreateField>
                <span>
                  포트폴리오 제목 <em>*</em>
                </span>
                <input
                  {...register('title', { required: true, maxLength: 50 })}
                  placeholder="예: 2025 뷰티 라이브 진행 포트폴리오"
                  maxLength={50}
                />
                <b>{values.title?.length ?? 0}/50</b>
                {errors.title ? <small>제목을 입력해주세요.</small> : null}
              </CreateField>
              <CreateField>
                <span>진행 경력 요약</span>
                <input
                  {...register('experienceSummary', { maxLength: 100 })}
                  placeholder="예: 뷰티 라이브 80회 진행"
                  maxLength={100}
                />
                <b>{values.experienceSummary?.length ?? 0}/100</b>
              </CreateField>
              <CreateField>
                <span>포트폴리오 설명</span>
                <textarea
                  {...register('description', { maxLength: 500 })}
                  placeholder="진행 톤, 강점, 대표 라이브 경험을 구체적으로 작성해주세요."
                  maxLength={500}
                />
                <b>{values.description?.length ?? 0}/500</b>
              </CreateField>
            </FormSection>

            <FormSection
              step="STEP 2"
              title="대표 이미지"
              description="방송 분위기가 드러나는 세로형 이미지를 권장합니다."
              sideLabel="3:4"
            >
              <ProfileUploadWrap>
                <UploadBox
                  ratio="3:4"
                  ariaLabel="포트폴리오 대표 이미지 선택"
                  previewUrl={coverPreviewUrl}
                  changeLabel="이미지 변경"
                  onChange={(event) => {
                    const file = event.target.files?.[0] ?? null;
                    const result = validateImageFiles(file ? [file] : undefined, {
                      required: false,
                      label: '대표 이미지',
                    });
                    if (typeof result === 'string') return;
                    setCoverFile(file);
                  }}
                />
              </ProfileUploadWrap>
            </FormSection>

            <FormSection optional step="선택" title="이미지·라이브·첨부" description="상세페이지 갤러리와 보조 자료입니다.">
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
              <CreateField>
                <span>최근 라이브 제목</span>
                <input {...register('liveTitle', { maxLength: 60 })} placeholder="예: 톤업 선케어 신제품 라이브" />
              </CreateField>
              <CreateField>
                <span>최근 라이브 링크</span>
                <input
                  {...register('liveUrl', { validate: validateOptionalUrl })}
                  placeholder="https://"
                  type="url"
                />
                {errors.liveUrl ? <small>{String(errors.liveUrl.message)}</small> : null}
              </CreateField>
              <ActivityUploadRow
                title="첨부파일"
                description="PDF, PPT, 이미지 (최대 5개 권장)"
                accept=".pdf,.ppt,.pptx,.jpg,.png"
                fileName={portfolioFile?.name}
                fileMeta={portfolioFile ? formatFileSize(portfolioFile.size) : undefined}
                onChange={(event) => {
                  const file = event.target.files?.[0] ?? null;
                  const result = validatePortfolioFile(file);
                  if (typeof result === 'string') return;
                  setPortfolioFile(file);
                }}
              />
              <CreateField>
                <span>검색 태그</span>
                <input {...register('tags')} placeholder="#뷰티 #라이브커머스" />
                <b>최대 5개</b>
              </CreateField>
              <CreateField>
                <span>
                  공개 여부 <em>*</em>
                </span>
                <select {...register('visibility')}>
                  <option value="public">공개 - 쇼호스트 상세 포트폴리오 탭에 노출</option>
                  <option value="private">비공개 - 관리자 검토용으로만 저장</option>
                </select>
              </CreateField>
            </FormSection>
          </CreateFormBody>

          <PreviewCard>
            <PreviewPanelHeader>
              <span>상세 미리보기</span>
              <small>포트폴리오 탭</small>
            </PreviewPanelHeader>
            <PreviewProfileImage>
              {coverPreviewUrl ? <img src={coverPreviewUrl} alt="" /> : <span>3:4</span>}
            </PreviewProfileImage>
            <div style={{ padding: '12px' }}>
              <strong style={{ fontSize: 15, fontWeight: 900 }}>
                {values.title || '포트폴리오 제목'}
              </strong>
              <p style={{ margin: '8px 0 0', color: 'var(--sub-text)', fontSize: 12 }}>
                {values.description || '포트폴리오 설명이 표시됩니다.'}
              </p>
              <PreviewChipRow>
                <em>{values.category || '카테고리'}</em>
                {galleryFiles.length > 0 ? <em>이미지 {galleryFiles.length}장</em> : null}
                {portfolioFile ? <em>첨부 1개</em> : null}
                {values.liveUrl ? <em>라이브 링크</em> : null}
              </PreviewChipRow>
              {previewTags.length > 0 ? (
                <PreviewChipRow style={{ marginTop: 8 }}>
                  {previewTags.map((tag) => (
                    <em key={tag}>#{tag}</em>
                  ))}
                </PreviewChipRow>
              ) : null}
            </div>
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
        title={submitMode === 'draft' ? '포트폴리오를 임시저장하시겠습니까?' : '포트폴리오를 등록하시겠습니까?'}
        description="입력 정보와 첨부 파일을 최종 확인한 뒤 등록 payload를 생성합니다."
        confirmLabel={submitMode === 'draft' ? '임시저장' : '포트폴리오 등록'}
        onConfirm={confirmSubmit}
        onCancel={() => setSubmitMode(null)}
      />
    </CreatePageRoot>
  );
}
