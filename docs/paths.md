# paths

## 루트

```
project-livbee-webapp/
├── .cursor/rules/     # 에이전트 규칙 (git 포함)
├── docs/
├── src/
├── index.html
├── vite.config.ts
├── vitest.config.ts
├── tsconfig*.json
├── package.json
├── .nvmrc
├── .npmrc
├── .env               # 로컬 전용 (git 제외)
└── ...
```

## src

현재: `src/main.tsx`, `src/App.tsx` (임시 부트스트랩)

목표 구조: [arch.md](./arch.md)

## alias

`@/` → `src/` (`vite.config.ts` + `tsconfig.app.json`)

## 설정 파일

| 파일 | 대상 |
|------|------|
| `vite.config.ts` | 빌드·dev 서버·청크 분리 |
| `vitest.config.ts` | 유닛 테스트 (`happy-dom`) |
| `tsconfig.app.json` | `src/**` |
| `tsconfig.node.json` | Vite·Vitest 설정 TS |
