import type {
  CampaignCreateFormValues,
  HostPortfolioFormValues,
  HostProfileFormValues,
  ModelProfileFormValues,
  PublishStatus,
} from '@/domain/entities';

/** 이미지 파일 최대 크기 (5MB) */
export const MAX_IMAGE_FILE_SIZE = 5 * 1024 * 1024;
/** 포트폴리오 파일 최대 크기 (10MB) */
export const MAX_PORTFOLIO_FILE_SIZE = 10 * 1024 * 1024;
/** 갤러리 이미지 최대 개수 */
export const MAX_GALLERY_IMAGE_COUNT = 10;

const PORTFOLIO_EXTENSIONS = ['.pdf', '.ppt', '.pptx', '.jpg', '.jpeg', '.png'];

/** FileList 또는 배열에서 첫 번째 파일을 반환한다. */
const firstFile = (files?: FileList | File[]) => {
  if (!files) return undefined;
  if (files instanceof FileList) return files[0];
  return files[0];
};

/** 파일 확장자가 허용 목록에 포함되는지 확인한다. */
const hasAllowedExtension = (file: File, extensions: string[]) =>
  extensions.some((extension) => file.name.toLowerCase().endsWith(extension));

/** 이미지 파일 선택 규칙을 검증한다. */
export const validateImageFiles = (
  files: FileList | File[] | undefined,
  options: { required?: boolean; multiple?: boolean; label?: string } = {},
) => {
  const selectedFiles = files instanceof FileList ? Array.from(files) : Array.from(files ?? []);
  const label = options.label ?? '이미지';

  if (options.required && selectedFiles.length === 0) return `${label}를 선택해주세요.`;
  if (options.multiple && selectedFiles.length > MAX_GALLERY_IMAGE_COUNT) {
    return `${label}는 최대 ${MAX_GALLERY_IMAGE_COUNT}개까지 선택할 수 있습니다.`;
  }
  if (selectedFiles.some((file) => !file.type.startsWith('image/'))) {
    return `${label}는 이미지 파일만 선택할 수 있습니다.`;
  }
  if (selectedFiles.some((file) => file.size > MAX_IMAGE_FILE_SIZE)) {
    return `${label}는 파일당 5MB 이하만 선택할 수 있습니다.`;
  }
  return true;
};

/** 포트폴리오 첨부 파일 규칙을 검증한다. */
export const validatePortfolioFile = (file?: File | null) => {
  if (!file) return true;
  if (!hasAllowedExtension(file, PORTFOLIO_EXTENSIONS)) {
    return '포트폴리오는 PDF, PPT, PPTX, JPG, PNG 파일만 첨부할 수 있습니다.';
  }
  if (file.size > MAX_PORTFOLIO_FILE_SIZE) {
    return '포트폴리오 파일은 10MB 이하만 첨부할 수 있습니다.';
  }
  return true;
};

/** 선택 URL 형식을 검증한다. */
export const validateOptionalUrl = (value: string) => {
  if (!value.trim()) return true;
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) || 'http 또는 https 주소를 입력해주세요.';
  } catch {
    return '올바른 URL을 입력해주세요.';
  }
};

/** 선택 이메일 형식을 검증한다. */
export const validateOptionalEmail = (value: string) =>
  !value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || '올바른 이메일 주소를 입력해주세요.';

/** 계약 후 연락 수단 1개 이상 입력 여부를 검증한다. */
export const requireContractContact = (contact: string, openChatUrl: string) =>
  Boolean(contact.trim() || openChatUrl.trim()) ||
  '계약 확정 후 연락을 위해 연락처 또는 오픈채팅 링크 중 하나를 입력해주세요.';

/** 인재 프로필 연락처·공개 정책 필드를 FormData에 추가한다. */
const appendTalentContact = (
  payload: FormData,
  data: Pick<HostProfileFormValues, 'contact' | 'email' | 'openChatUrl' | 'visibility'>,
) => {
  payload.append('contact', data.contact);
  payload.append('email', data.email);
  payload.append('openChatUrl', data.openChatUrl);
  payload.append('contactRevealPolicy', 'contracted_only');
  payload.append('visibility', data.visibility);
};

/** 태그 문자열을 배열로 정규화한다. */
export const normalizeTags = (value: string) =>
  value
    .split(/[#,\.\s]+/)
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 5);

/** 쇼호스트 프로필 등록 FormData를 생성한다. */
export const buildHostProfilePayload = (
  data: HostProfileFormValues & { profileImage?: File[]; portfolioFile?: File | null; galleryImages?: File[] },
  status: PublishStatus,
) => {
  const payload = new FormData();
  payload.append('name', data.name);
  payload.append('registerType', data.registerType);
  payload.append('category', data.category);
  payload.append('experienceYears', String(data.experienceYears));
  payload.append('location', data.location);
  payload.append('oneLineIntro', data.oneLineIntro);
  payload.append('detailIntro', data.detailIntro);
  payload.append('tags', JSON.stringify(normalizeTags(data.tags)));
  payload.append('recentLiveTitle', data.recentLiveTitle);
  payload.append('recentLiveUrl', data.recentLiveUrl);
  payload.append('status', status);
  appendTalentContact(payload, data);
  if (data.profileImage?.[0]) payload.append('profileImage', data.profileImage[0]);
  if (data.portfolioFile) payload.append('portfolioFile', data.portfolioFile);
  data.galleryImages?.forEach((file) => payload.append('galleryImages', file));
  return payload;
};

/** 모델 프로필 등록 FormData를 생성한다. */
export const buildModelProfilePayload = (
  data: ModelProfileFormValues & { profileImage?: File[]; portfolioFile?: File | null; galleryImages?: File[] },
  status: PublishStatus,
) => {
  const payload = new FormData();
  payload.append('name', data.name);
  payload.append('modelType', data.modelType);
  payload.append('height', String(data.height || ''));
  payload.append('location', data.location);
  payload.append('oneLineIntro', data.oneLineIntro);
  payload.append('detailIntro', data.detailIntro);
  payload.append('tags', JSON.stringify(normalizeTags(data.tags)));
  payload.append('status', status);
  appendTalentContact(payload, data);
  if (data.profileImage?.[0]) payload.append('profileImage', data.profileImage[0]);
  if (data.portfolioFile) payload.append('portfolioFile', data.portfolioFile);
  data.galleryImages?.forEach((file) => payload.append('galleryImages', file));
  return payload;
};

/** 공고 등록 FormData를 생성한다. */
export const buildCampaignPayload = (
  data: CampaignCreateFormValues & { coverFile?: File | null },
  status: PublishStatus,
) => {
  const payload = new FormData();
  Object.entries({
    brandName: data.brandName,
    title: data.title,
    summary: data.summary,
    payment: String(data.payment || 0),
    shootingDate: data.shootingDate,
    shootingStartTime: data.shootingStartTime,
    shootingEndTime: data.shootingEndTime,
    scheduleType: data.scheduleType,
    shootingLocation: data.shootingLocation,
    locationDisclosure: data.locationDisclosure,
    shootingMethod: data.shootingMethod,
    applyDeadline: data.applyDeadline,
    category: data.category,
    badge: data.badge,
    productName: data.productName,
    targetRole: data.targetRole,
    recruitCount: String(data.recruitCount || 1),
    preferredCondition: data.preferredCondition,
    requiredItems: data.requiredItems,
    selectionGuide: data.selectionGuide,
    description: data.description,
    status,
  }).forEach(([key, value]) => payload.append(key, value));
  if (data.coverFile) payload.append('coverImage', data.coverFile);
  return payload;
};

/** 쇼호스트 포트폴리오 등록 FormData를 생성한다. */
export const buildHostPortfolioPayload = (
  data: HostPortfolioFormValues & {
    coverImage?: File | null;
    galleryImages?: File[];
    portfolioFile?: File | null;
  },
  status: PublishStatus,
) => {
  const payload = new FormData();
  payload.append('hostId', data.hostId);
  payload.append('title', data.title);
  payload.append('description', data.description);
  payload.append('category', data.category);
  payload.append('experienceSummary', data.experienceSummary);
  payload.append('liveUrl', data.liveUrl);
  payload.append('liveTitle', data.liveTitle);
  payload.append('tags', JSON.stringify(normalizeTags(data.tags)));
  payload.append('visibility', data.visibility);
  payload.append('status', status);
  if (data.coverImage) payload.append('coverImage', data.coverImage);
  if (data.portfolioFile) payload.append('portfolioFile', data.portfolioFile);
  data.galleryImages?.forEach((file) => payload.append('galleryImages', file));
  return payload;
};

/** 단일 파일에서 첫 파일을 반환한다. */
export { firstFile };
