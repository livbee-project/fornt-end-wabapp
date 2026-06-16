# 페이지 데이터 매핑

> 기준: [test_codex `01_PAGE_DATA_MAPPING.md`](https://github.com/livbee-project/test_codex/blob/main/docs/01_PAGE_DATA_MAPPING.md)  
> 도메인 규칙: [domain/data-rules.md](./domain/data-rules.md)

webapp은 mock 원본을 `data/sources/`에 두고 `domain/repositories` 포트로 노출한다. 화면은 **repository를 통해서만** 데이터를 읽는다.

## 공고

| 화면 | URL | 데이터 |
|---|---|---|
| 목록 | `/campaigns` | `getCampaigns()` |
| 등록 | `/campaigns/new` | 폼 로컬 상태 → 향후 `CampaignCreateFormValues` |
| 상세 | `/campaigns/:campaignId` | `getCampaignById(id)` |

홈 라이브·브랜드 PICK은 같은 공고 원본을 `getHomeData()` selector가 선택한다.

**등록 화면**: 별도 `지원 설정` 섹션 없음. 대표 이미지 → 목록 정보 → 일정 → 모집 → 상세 → 선택 이미지/상품 순.

**상세 화면**

- 상단 요약에 **대표 이미지 미노출**
- 제목 **최대 2줄** 말줄임
- 기본 정보에 `productName` (없으면 `계약 확정 후 공개`)

## 쇼호스트 · 모델

| 화면 | URL | 데이터 |
|---|---|---|
| 목록 | `/hosts`, `/models` | `getHostProfiles()`, `getModelProfiles()` |
| 등록 | `/hosts/new`, `/models/new` | 폼 로컬 상태 |
| 상세 | `/hosts/:id`, `/models/:id` | `getHostById`, `getModelById` |

## 콘텐츠

| 데이터 | 원본 | 화면 |
|---|---|---|
| 숏클립 | `sources/clips.ts` | 홈, `/clips` |
| 뉴스 | `sources/news.ts` | 홈, `/news` |
| 라이브 카드 | `sources/campaigns.ts` + home selector | 홈 |

## 이미지 비율

| 용도 | 비율 |
|---|---|
| 공고 대표 (목록·홈) | `4:3` (상세 상단 미노출) |
| 라이브 카드 | `4:5` |
| 쇼호스트 프로필 (목록 카드) | `3:4` (등록 미리보기), 홈 추천은 `1:1` 원형 |
| 모델 프로필 | `3:4` (등록), 홈 추천 `4:5` |
| 숏클립 | `9:16` |
| 뉴스 | `16:9` |

## 검수 체크리스트

- 등록·목록·상세·홈이 같은 필드명을 쓰는가?
- 홈 전용 복제 mock이 없는가?
- 날짜 `YYYY-MM-DD`, 금액 원 단위 숫자인가?
- `campaignId` 등 참조 ID가 원본에 존재하는가?
- `npm test` mock 검증 통과하는가?
