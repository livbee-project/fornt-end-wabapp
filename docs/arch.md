# arch

> 아직 미구현. 아래는 **목표 구조**이다.

## src 트리

```
src/
├── app/
├── presentation/
│   ├── pages/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   └── styles/
├── domain/
│   ├── entities/
│   └── usecases/
├── data/
│   ├── sources/
│   ├── mappers/
│   └── repositories/
└── shared/
    ├── config/
    ├── utils/
    └── constants/
```

## 레이어

| 레이어 | 책임 | 예시 경로 |
|--------|------|-----------|
| app | 부트스트랩·라우팅 | `src/app/Router.tsx` |
| presentation | UI·페이지·훅·스타일 | `pages/`, `components/`, `hooks/` |
| domain | 엔티티·유스케이스 | `entities/`, `usecases/` |
| data | API·매퍼·리포지토리 | `sources/`, `mappers/`, `repositories/` |
| shared | 공통 유틸·설정 | `config/env.ts`, `utils/apiClient` |

## 의존 방향

```
presentation → domain → data → shared
```

- 역방향 import 금지
- 레이어 우회 금지 (예: presentation에서 sources 직접 호출 X)

## 명명

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase.tsx | `UserCard.tsx` |
| 훅 | useCamelCase.ts | `useAuth.ts` |
| 유틸·상수 | camelCase.ts | `formatDate.ts` |
| 스타일 | styled-components | 단순 → 컴포넌트 하단, 복잡 → `*.styles.ts` |

## alias

`@/` → `src/` (Vite + `tsconfig.app.json` paths)

```ts
import { UserCard } from '@/presentation/components/UserCard';
```
