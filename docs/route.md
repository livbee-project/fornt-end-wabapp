# route

## 라이브러리

**react-router-dom 7.x**

## 배치

| 역할 | 경로 |
|------|------|
| 라우터 정의 | `src/app/Router.tsx` (`createBrowserRouter`) |
| 라우터 제공 | `RouterProvider` in `src/app/App.tsx` |
| 페이지 컴포넌트 | `src/presentation/pages/` |
| 레이아웃 | `src/presentation/layouts/` |
| 라우트 메타 | `src/shared/config/routeHandle.ts` |

## 원칙

- 라우트 설정·`BrowserRouter` 등 부트스트랩은 **app** 레이어
- 페이지 UI·상태는 **presentation** — domain/data 직접 의존하지 않고 usecase·hook 경유
- 라우트별 제목·내비 노출은 `Route`의 `handle`로 선언하고 `useRouteHandle`로 읽는다
- 상세 구조는 [arch.md](./arch.md) 참고

## 주요 경로

`src/app/Router.tsx`가 단일 원본이다.

| 영역 | 목록 | 등록 | 상세 |
|------|------|------|------|
| 공고 | `/campaigns` | `/campaigns/new` | `/campaigns/:campaignId` |
| 쇼호스트 | `/hosts` | `/hosts/new` | `/hosts/:hostId` |
| 모델 | `/models` | `/models/new` | `/models/:modelId` |

- 구현 완료: 홈, 공고·쇼호스트·모델 목록/상세/등록
- 등록·폼: `handle.showAppNav: false`로 하단/사이드 내비 숨김
- UI 레이아웃: [page-spec.md](./page-spec.md)
