import type { TalentProfile } from '@/domain/entities';
import { mockAssets } from '@/shared/constants/mockAssets';

export const hostProfiles: TalentProfile[] = [
  {
    id: 'host-1',
    profileImage: mockAssets.profileMay,
    name: '메이',
    category: '뷰티',
    summary: '밝고 자연스러운 진행으로 제품 장점을 쉽게 전달합니다.',
    tags: ['#뷰티', '#친근함'],
    experienceYears: 3,
  },
  {
    id: 'host-2',
    profileImage: mockAssets.profileJena,
    name: '제나',
    category: '패션',
    summary: '20대 여성 타겟 패션 라이브에 강한 쇼호스트입니다.',
    tags: ['#패션', '#스타일링'],
    experienceYears: 4,
  },
  {
    id: 'host-3',
    profileImage: mockAssets.profileWoni,
    name: '원이',
    category: '푸드',
    summary: '맛 표현과 제품 사용 장면을 생생하게 전달합니다.',
    tags: ['#푸드', '#맛표현'],
    experienceYears: 2,
  },
];
