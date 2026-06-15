# style

## 라이브러리

**styled-components 6.x**

## 전역 디자인 (`src/presentation/styles/`)

| 파일 | 책임 |
|------|------|
| `tokens.ts` | 색·간격·radius·shadow·타이포·레이아웃 — **단일 원본** |
| `cssVariables.ts` | `tokens` → `:root` CSS 변수 매핑 |
| `theme.ts` | styled-components `ThemeProvider`용 theme 객체 |
| `globalStyle.ts` | reset·기본 타이포·CSS 변수 주입 (`createGlobalStyle`) |
| `media.ts` | 반응형 breakpoint helper |
| `mixins.ts` | 카드 표면·FAB 등 재사용 styled mixin |
| `styled.d.ts` | `DefaultTheme` 타입 확장 |

부트스트랩: `src/app/AppProviders.tsx`에서 `ThemeProvider` + `GlobalStyle` 적용.

## 공통 컴포넌트 (`src/presentation/components/`)

| 컴포넌트 | 경로 |
|----------|------|
| `Icon` | `common/Icon.tsx` |
| `BackHeader` | `common/BackHeader.tsx` |
| `FormSection` | `common/FormSection.tsx` |
| `UploadBox` | `common/UploadBox.tsx` |
| `FixedBottomActions` | `common/FixedBottomActions.tsx` |
| `ConfirmModal` | `common/ConfirmModal.tsx` |
| `BottomNavigation` | `layout/BottomNavigation.tsx` |

복잡한 스타일은 같은 폴더의 `*.styles.ts`에 둔다.

## 컴포넌트·페이지 스타일

| 경우 | 위치 |
|------|------|
| 단순 스타일 | 컴포넌트 파일 하단 |
| 복잡·재사용 | `*.styles.ts` (같은 폴더) |

`src/presentation/components/**` — 컴포넌트 단위 스타일  
`src/presentation/pages/**` — 페이지 단위 스타일

## 사용 규칙

- 새 디자인 값은 `tokens.ts`에만 추가한다. `theme`·CSS 변수는 여기서 파생한다.
- styled-components에서는 `theme.colors.*`, `theme.spacing.*`를 우선 사용한다.
- 카드 표면: 홈·콘텐츠 목록 → `listCardSurface`, 공고·쇼호스트·모델 도메인 → `profileCardSurface`
- 페이지 전용 CSS 파일을 `main.tsx`에 추가하지 않는다. 전역은 `GlobalStyle`만.
- 도메인·data·shared 레이어에는 UI 스타일을 두지 않는다.

## 참고

- 기준: test_codex `docs/design/style-system.md`, `tokens.css`, `global.css`
- 상세 워크플로·컴포넌트 선택은 추후 `docs/design/` 문서로 확장 예정
