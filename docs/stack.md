# stack

## 런타임

| 항목 | 버전 | 비고 |
|------|------|------|
| Node.js | 24.16.0 | Active LTS (Krypton) |
| npm | 11.x | Node 번들 |

`package.json` → `engines.node`와 `.nvmrc`가 **24.16.0**으로 고정됨.  
`.npmrc` → `engine-strict=true` (버전 불일치 시 install 실패).

## 프론트엔드

| 항목 | 버전 |
|------|------|
| React | 19.2.7 |
| Vite | 8.0.16 |
| TypeScript | 6.0.3 |
| Vitest | 4.1.9 |
| styled-components | 6.4.x |
| react-router-dom | 7.17.x |
| react-hook-form | 7.79.x |
| vite-plugin-pwa | 1.3.x |

## PWA

- `vite.config.ts` — `VitePWA` manifest·workbox 설정
- 아이콘: `public/pwa-192.png`, `public/pwa-512.png` (`npm run generate:pwa-icons`)
- 개발 모드에서도 SW 등록 (`devOptions.enabled`)

## 도구

| 항목 | 설정 파일 |
|------|-----------|
| Prettier | `.prettierrc`, `.prettierignore` |
| Cursor 규칙 | `.cursor/rules/` (저장소 포함) |
| PWA 아이콘 생성 | `scripts/generate-pwa-icons.mjs` (sharp) |

## TypeScript

- `tsconfig.json` — project references 루트
- `tsconfig.app.json` — `src/` (앱 코드)
- `tsconfig.node.json` — Vite·Vitest 설정 파일

`@/*` → `./src/*` (Vite alias + TS paths 공통)

## 관련 문서

- [style.md](./style.md) — styled-components·토큰
- [route.md](./route.md) — 라우트·네비
- [page-spec.md](./page-spec.md) — 화면별 CTA·레이아웃 규칙
