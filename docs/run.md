# run

저장소 루트에서 실행.

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 (포트 5173, HMR) |
| `npm run build` | `tsc -b` + 프로덕션 빌드 → `dist/` |
| `npm run preview` | 빌드 결과 로컬 미리보기 (PWA manifest·SW 확인) |
| `npm run test` | Vitest 1회 실행 (`*.test.ts`) |
| `npm run test:watch` | Vitest watch |
| `npm run generate:pwa-icons` | `public/pwa-*.png` 아이콘 재생성 |

## dev 서버

- URL: http://localhost:5173
- 호스트: `localhost` (IPv4)
- 기본 브라우저 자동 오픈: 비활성 — 외부 브라우저 플러그인 사용

## PWA 확인

```bash
npm run build
npm run preview
```

- Chrome DevTools → Application → Manifest에서 `pwa-192.png` / `pwa-512.png` 노출 확인
- 아이콘 변경 시 `npm run generate:pwa-icons` 후 다시 빌드

## 빌드 산출물

`dist/` — gitignore 대상

## 커밋 전

```bash
npm run build
```

빌드 통과 후 커밋 준비·푸시 진행.
