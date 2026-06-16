/** 쇼호스트 상세 탭용 추가 mock 필드 타입 */
export type HostDetailMock = {
  registerType: string;
  responseTone: string;
  mainStrength: string;
  portfolioFileName: string;
  recentLiveTitle: string;
  recentLiveUrl: string;
  liveUrlLabel: string;
  joinedAt: string;
  profileStatus: string;
};

/** 모델 상세 탭용 추가 mock 필드 타입 */
export type ModelDetailMock = {
  mood: string;
  mainStrength: string;
  portfolioFileName: string;
  fileSize: string;
  joinedAt: string;
  profileStatus: string;
};

/** hostId별 쇼호스트 상세 mock 맵 */
export const hostDetailMock: Record<string, HostDetailMock> = {
  'host-may': {
    registerType: '개인 쇼호스트',
    responseTone: '밝고 사랑스러운 톤',
    mainStrength: '뷰티 제품의 사용감과 컬러감을 자연스럽게 표현합니다.',
    portfolioFileName: '쇼호스트 메이 포트폴리오.pdf',
    recentLiveTitle: '톤업 선케어 신제품 라이브',
    recentLiveUrl: 'https://shoppinglive.example.com/host-may-toneup-suncare',
    liveUrlLabel: '최근 진행 라이브',
    joinedAt: '2026.06.01',
    profileStatus: '프로필 공개 · 계약 전 정보 비공개',
  },
  'host-jena': {
    registerType: '소속 쇼호스트',
    responseTone: '차분하고 신뢰감 있는 톤',
    mainStrength: '패션 상품의 핏과 소재 포인트를 안정적으로 설명합니다.',
    portfolioFileName: '쇼호스트 제나 포트폴리오.pdf',
    recentLiveTitle: '프리미엄 데일리룩 스타일링',
    recentLiveUrl: 'https://shoppinglive.example.com/host-jena-dailylook',
    liveUrlLabel: '최근 진행 라이브',
    joinedAt: '2026.06.03',
    profileStatus: '프로필 공개 · 계약 전 정보 비공개',
  },
  'host-woni': {
    registerType: '프리랜서',
    responseTone: '친근하고 생동감 있는 톤',
    mainStrength: '식품과 체험형 상품을 쉽고 맛있게 전달합니다.',
    portfolioFileName: '쇼호스트 원이 포트폴리오.pdf',
    recentLiveTitle: '신제품 디저트 런칭 라이브',
    recentLiveUrl: 'https://shoppinglive.example.com/host-woni-dessert-launching',
    liveUrlLabel: '최근 진행 라이브',
    joinedAt: '2026.06.05',
    profileStatus: '프로필 공개 · 계약 전 정보 비공개',
  },
};

/** modelId별 모델 상세 mock 맵 */
export const modelDetailMock: Record<string, ModelDetailMock> = {
  'model-jang': {
    mood: '화사하고 고급스러운 무드',
    mainStrength: '뷰티, 패션, 프리미엄 브랜드 촬영에서 첫인상을 선명하게 전달합니다.',
    portfolioFileName: '모델 장원영 포트폴리오.pdf',
    fileSize: '3.1MB',
    joinedAt: '2026.06.01',
    profileStatus: '프로필 공개 · 계약 전 정보 비공개',
  },
  'model-yujimin': {
    mood: '도회적이고 시크한 무드',
    mainStrength: '패션 화보, 뷰티 캠페인, 감도 높은 제품 촬영에 적합합니다.',
    portfolioFileName: '모델 유지민 포트폴리오.pdf',
    fileSize: '2.8MB',
    joinedAt: '2026.06.03',
    profileStatus: '프로필 공개 · 계약 전 정보 비공개',
  },
  'model-may': {
    mood: '청순하고 맑은 무드',
    mainStrength: '뷰티 제품의 깨끗한 이미지와 데일리 패션의 부드러운 분위기를 표현합니다.',
    portfolioFileName: '모델 메이 포트폴리오.pdf',
    fileSize: '2.5MB',
    joinedAt: '2026.06.05',
    profileStatus: '프로필 공개 · 계약 전 정보 비공개',
  },
};

/** 쇼호스트 상세 fallback mock */
export const defaultHostDetailMock = hostDetailMock['host-may']!;
/** 모델 상세 fallback mock */
export const defaultModelDetailMock = modelDetailMock['model-jang']!;
