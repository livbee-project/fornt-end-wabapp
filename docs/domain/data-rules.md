# 데이터 관리 규칙

> 기준: test_codex `docs/domain/data-rules.md`, `docs/01_PAGE_DATA_MAPPING.md`  
> 우리 프로젝트는 **클린 아키텍처 레이어**에 맞게 경로만 분리한다.

## 단일 원본

`CampaignItem`, `TalentProfile`, `ClipItem`, `NewsItem`, `LiveItem`은 **`src/domain/entities/marketplace.ts`** 를 기준으로 관리한다.  
화면 타입은 `Pick`, `Omit`, 교차 타입으로 파생한다.

## 파일 구조

```text
src/domain/
  entities/          도메인 타입·상수
  usecases/          홈 selector 등 순수 비즈니스 규칙
  repositories/      repository 인터페이스(포트)
src/data/
  sources/           mock 원본 배열
  repositories/      repository 구현
  validators/        mock 무결성 검증
src/presentation/
  contexts/          repository Context·hook (구현체 없음)
  hooks/             UI 전용 훅
src/app/
  AppProviders.tsx   repository·theme·router 부트스트랩
```

## 의존 방향

```text
presentation → domain ← data → shared
app 레이어에서 data 구현체를 Provider로 주입
```

- `presentation`은 **`data/sources`를 직접 import하지 않는다.**
- `domain`은 React·mock 소스에 의존하지 않는다.
- `data/sources`는 `domain/entities` 타입만 참조한다.

## Mock 데이터

- 홈, 목록, 상세는 **같은 `data/sources` 배열**을 repository가 반환한다.
- 원본 기준: test_codex `frontend/src/data/*.ts` (필드·ID·문구 동일)
- 프로필·히어로 이미지: test_codex `frontend/src/assets` → `public/mock/` 정적 복제 (`mockAssets.ts` 경로 매핑)
- 홈 노출 순서·개수는 **`domain/usecases/buildHomeData.ts`** 에서 처리한다.
- ID는 도메인 배열 안에서 유일해야 한다.
- `campaignId`, `relatedCampaignId`, `creatorId`는 실제 원본 ID를 가리켜야 한다.

## 저장 형식

- 금액: 원 단위 `number`
- 날짜: `YYYY-MM-DD` (지원 마감·뉴스 작성일 등)
- 촬영일: mock은 `YYYY.MM.DD` 표시 형식 허용 (검증기 참고)
- 시간: `HH:mm`
- 영상 길이: `MM:SS`
- 태그: `string[]`, 최대 5개

화면 표시 포맷(만원, 점 날짜 등)은 `shared/utils` formatter에서 변환한다. 데이터에 중복 저장하지 않는다.

## 공고 연결

- 라이브 카드는 `campaignId`로 공고 상세(`/campaigns/:campaignId`)에 연결한다.
- `campaignId`가 없을 때만 fallback으로 live `id`를 사용하지 않는다 — **반드시 `campaignId`를 채운다.**

## 검증

```bash
npm test
```

`data/validators/validateMarketplaceMocks.ts`가 중복 ID, 참조 무결성, 날짜·금액을 검사한다.

## 페이지 ↔ 데이터 매핑

| 화면 | repository 메서드 |
|------|-------------------|
| 홈 `/` | `getHomeData()` |
| 공고 목록 | `getCampaigns()` |
| 공고 상세 | `getCampaignById(id)` |
| 쇼호스트 목록 | `getHostProfiles()` |
| 모델 목록 | `getModelProfiles()` |
| 숏클립 | `getClipItems()` / `getClipById(id)` |
| 뉴스 | `getNewsItems()` / `getNewsById(id)` |
