# arch

## src 트리

```
src/
├── app/                    부트스트랩·라우팅·Provider
├── presentation/           UI·페이지·훅·스타일
│   ├── pages/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   └── styles/
├── domain/                 엔티티·유스케이스·repository 포트
│   ├── entities/
│   ├── usecases/
│   └── repositories/
├── data/                   mock/API·매퍼·repository 구현
│   ├── sources/
│   ├── mappers/
│   ├── repositories/
│   └── validators/
└── shared/                 공통 유틸·설정·상수
    ├── config/
    ├── utils/
    └── constants/
```

## 레이어

| 레이어 | 책임 | 예시 경로 |
|--------|------|-----------|
| app | 부트스트랩·라우팅·DI | `src/app/Router.tsx`, `AppProviders.tsx` |
| presentation | UI·페이지·훅·스타일 | `pages/`, `components/`, `hooks/` |
| domain | 엔티티·유스케이스·포트 | `entities/`, `usecases/`, `repositories/` |
| data | mock/API·repository 구현 | `sources/`, `repositories/` |
| shared | 공통 유틸·설정 | `constants/mockAssets.ts` |

## 의존 방향

```text
presentation → domain ← data → shared
```

- `presentation`은 `data/sources`·`data/repositories` 구현을 **직접 import하지 않는다.**
- `domain`은 React·CSS·mock에 의존하지 않는다.
- `data`는 `domain` 타입·유스케이스·포트를 사용한다.
- `app`이 repository 구현체를 `presentation` Provider에 주입한다.

## 명명

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase.tsx | `UserCard.tsx` |
| 훅 | useCamelCase.ts | `useMarketplaceRepository.ts` |
| 유틸·상수 | camelCase.ts | `mockAssets.ts` |
| 스타일 | styled-components | 단순 → 컴포넌트 하단, 복잡 → `*.styles.ts` |

## alias

`@/` → `src/` (Vite + `tsconfig.app.json` paths)

```ts
import { CampaignItem } from '@/domain/entities';
import { useMarketplaceRepository } from '@/presentation/hooks/useMarketplaceRepository';
```

## 관련 문서

- [domain/data-rules.md](./domain/data-rules.md) — mock·타입 규칙
- [style.md](./style.md) — 디자인 토큰
- [route.md](./route.md) — 라우팅
