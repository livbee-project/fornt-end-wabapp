# node

## 요구 버전

**24.16.0** — `.nvmrc` (로컬 고정)

`package.json` `engines`는 Vercel 등 호스트가 패치 버전만 다를 수 있어 **`>=24.0.0 <25`** 범위를 사용한다.

## 설치 (nvm-windows)

```bash
nvm install 24.16.0
nvm use 24.16.0
node -v   # v24.16.0
```

## 확인

```bash
nvm use
node -v
npm -v
```

## 주의

- **Cursor 내장 터미널**은 Node 22가 먼저 잡힐 수 있음 → 일반 터미널에서 `nvm use` 후 작업 권장
- `npm install` 전 `node -v`로 24.16.0인지 확인 (`engine-strict` 적용)

## Node 24 vs 26

| 라인 | 상태 | 용도 |
|------|------|------|
| 24.x | Active LTS | **이 프로젝트** (안정·장기 지원) |
| 26.x | Current | 최신 기능, LTS 전 |

프로덕션·팀 개발 기준으로 **24.16.0 유지**를 권장.
