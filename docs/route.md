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

## 주요 경로 (스캐폴드)

`src/app/Router.tsx`가 단일 원본이다. 홈·공고·쇼호스트·모델·마이페이지·콘텐츠·인증 경로를 포함하며, 대부분은 `PlaceholderPage`로 연결되어 있다.

- 구현 데모: `/`, `/campaigns/new`
- 하단/사이드 내비: `handle.bottomNav` 또는 경로 prefix 자동 매칭
- 등록·폼 화면: `handle.showAppNav: false`로 내비 숨김
