# deploy (Vercel)

프론트엔드 정적 배포 — 저장소 **루트** 기준.

## 사전 조건

- GitHub `origin`에 `prod` 브랜치 푸시 완료
- 로컬 `npm run build` 성공

## Vercel 프로젝트 연결 (최초 1회)

1. [vercel.com](https://vercel.com) → **Add New… → Project**
2. GitHub 저장소 `livbee-project/fornt-end-wabapp` Import
3. 아래 설정 확인 후 **Deploy**

| 항목 | 값 |
|------|-----|
| Framework Preset | Vite (또는 Other — `vercel.json`이 지정) |
| Root Directory | `.` (루트, 비워 둠) |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

4. **Settings → General → Node.js Version** → **24.x** (`.nvmrc` / `package.json` engines와 맞춤)

## 라우팅

`vercel.json`의 `rewrites`로 SPA fallback 처리 — `/campaigns`, `/hosts/:id` 등 직접 URL 접근 시 `index.html` 제공.

## 환경 변수

현재 코드는 `VITE_*` 변수를 쓰지 않음. API 연동 시:

- Vercel **Settings → Environment Variables**에 `VITE_*` 추가
- Production / Preview 각각 필요 시 설정

로컬과 동일 키는 루트 `.env` 참고 (`docs/env.md`).

## 배포 트리거

- `prod` 브랜치 push → Production 배포 (브랜치를 Production으로 지정한 경우)
- PR → Preview 배포

## CLI (선택)

```bash
npm i -g vercel
vercel login
vercel link
vercel --prod
```

## 문제 해결

| 증상 | 확인 |
|------|------|
| 빌드 실패 `EBADENGINE` | `engines`가 `24.16.0`처럼 패치 고정이면 Vercel Node(예: 24.15.x)와 충돌 — `>=24.0.0 <25` 사용, 로컬은 `.nvmrc` |
| 빌드 실패 `engine` | Vercel Node **24.x** 선택, `.nvmrc` `24.16.0` |
| 404 on refresh | `vercel.json` rewrites 포함 여부 |
| 빈 화면 | Build 로그에서 `tsc` / `vite build` 오류 |
| Root Directory 잘못됨 | `livbee-project/` 등 하위 경로 사용하지 않음 |
