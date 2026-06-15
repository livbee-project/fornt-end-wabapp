export const MARKETPLACE_CATEGORIES = [
  '뷰티',
  '패션',
  '푸드',
  '리빙',
  '육아',
  '테크',
  '라이프',
  '기타',
] as const;

export const CAMPAIGN_TARGET_ROLES = ['쇼호스트', '모델', '쇼호스트·모델', '협의'] as const;
export const HOST_REGISTER_TYPES = ['개인 쇼호스트', '소속 쇼호스트', '프리랜서', '에이전시 소속'] as const;
export const MODEL_TYPES = [
  '패션모델',
  '뷰티모델',
  '피팅모델',
  '라이프모델',
  '키즈모델',
  '제품모델',
  '기타',
] as const;

export const IMAGE_RATIOS = {
  campaignCover: { label: '4:3', value: 4 / 3 },
  liveThumbnail: { label: '1:1', value: 1 },
  product: { label: '1:1', value: 1 },
  profile: { label: '3:4', value: 3 / 4 },
  clip: { label: '2:3', value: 2 / 3 },
} as const;
