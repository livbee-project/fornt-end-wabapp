# route

> 아직 미설치. **예정 스택.**

## 라이브러리

**react-router-dom 7.x**

## 배치

| 역할 | 경로 |
|------|------|
| 라우터 정의 | `src/app/Router.tsx` |
| 페이지 컴포넌트 | `src/presentation/pages/` |
| 레이아웃 | `src/presentation/layouts/` |

## 원칙

- 라우트 설정·`BrowserRouter` 등 부트스트랩은 **app** 레이어
- 페이지 UI·상태는 **presentation** — domain/data 직접 의존하지 않고 usecase·hook 경유
- 상세 구조는 [arch.md](./arch.md) 참고
