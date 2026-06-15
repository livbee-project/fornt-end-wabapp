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

## 예정 (미설치)

| 항목 | 버전 | 문서 |
|------|------|------|
| styled-components | 6.x | [style.md](./style.md) |
| react-router-dom | 7.x | [route.md](./route.md) |

## 도구

| 항목 | 설정 파일 |
|------|-----------|
| Prettier | `.prettierrc`, `.prettierignore` |
| Cursor 규칙 | `.cursor/rules/` (저장소 포함) |

## TypeScript

- `tsconfig.json` — project references 루트
- `tsconfig.app.json` — `src/` (앱 코드)
- `tsconfig.node.json` — Vite·Vitest 설정 파일

`@/*` → `./src/*` (Vite alias + TS paths 공통)
