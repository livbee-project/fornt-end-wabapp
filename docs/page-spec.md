# 페이지 UI 기준

> 기준: [test_codex `pages/page-spec.md`](https://github.com/livbee-project/test_codex/blob/main/docs/pages/page-spec.md)  
> 라우트 원본: `src/app/Router.tsx` (이 문서는 **UI/UX·레이아웃**만 다룸)

## 공통 원칙

- 모바일 우선
- 상세 CTA는 본문 맨 아래 **in-flow** (`DetailBottomCta`) — viewport `fixed` 아님
- 등록 폼 CTA만 `FixedBottomActions`로 viewport 하단 고정
- 계약 전 연락처·상세 장소 직접 노출 금지
- 하단 탭: `홈 / 쇼호스트 / 모델 / 공고 / 마이페이지` (커뮤니티는 상단 메뉴)

## 홈 섹션 순서

`getHomeData()` 기준:

1. 히어로  
2. 지금 뜨는 라이브  
3. 브랜드 PICK  
4. 추천 쇼호스트  
5. 추천 모델  
6. HOT CLIP  
7. 라이비 뉴스  

카드 규칙: [home-card-rules.md](./home-card-rules.md)

## 상세 화면

**공고**: 요약(이미지 없음) → 안내 → 보호 정보 → 기본 정보 → 일정 → 모집 → 지원 전 확인 → 하단 CTA (`DetailBottomCta`, 스크롤 끝)  
**쇼호스트·모델**: 프로필 요약 → 소개 → 보호 정보 → 탭 → 제안 CTA (`DetailBottomCta`, 스크롤 끝)

## 등록 폼

- 모바일 1열, 태블릿+ 일부 2열 (`FieldGrid`)
- `BackHeader` + `FormSection` + `FixedBottomActions`(fixed) + `ConfirmModal`
- 공고: 대표 이미지 `4:3`, 프로필: `3:4` + `ProfileUploadWrap`
- 포트폴리오·갤러리: `ActivityUploadRow`
- 하단 안내 문구(`SubmitStatus`)는 스크롤 영역, 버튼은 뷰포트 하단 고정

## 목록 페이지

- 공고·쇼호스트·모델 목록 상단 별도 흰 헤더/구분선 없음
- FAB: `62×62px`, 우 `22px`, 하 `84px`, `Icon` plus `26px`

## 관련 문서

- [page-data-mapping.md](./page-data-mapping.md)
- [design/common-components.md](./design/common-components.md)
- [route.md](./route.md)
