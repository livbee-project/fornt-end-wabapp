import type { TalentProfile } from '@/domain/entities';
import { mockAssets } from '@/shared/constants/mockAssets';

/** 모델 프로필 mock 목록 */
export const modelProfiles: TalentProfile[] = [
  {
    id: 'model-1',
    profileImage: mockAssets.profileJang,
    name: '장원영',
    modelType: '패션',
    height: 173,
    summary: '트렌디한 패션 촬영에 어울리는 밝은 무드의 모델입니다.',
    tags: ['#패션', '#화보'],
  },
  {
    id: 'model-2',
    profileImage: mockAssets.profileYujimin,
    name: '유지민',
    modelType: '뷰티',
    height: 168,
    summary: '깨끗한 이미지와 자연스러운 표정 연출이 강점입니다.',
    tags: ['#뷰티', '#클린'],
  },
];
