# env

## 위치

저장소 **루트** — `project-livbee-webapp/.env`

하위 폴더(`livbee-project/.env` 등) 사용하지 않음.

## 규칙

- Vite 클라이언트 노출 변수는 `VITE_` 접두사 필수
- `.env`는 git에 **올리지 않음** (`.gitignore`)
- `.env.example`은 **사용하지 않음** — 팀 공유는 별도 채널

## 로컬 오버라이드 (gitignore)

```
.env.local
.env.development.local
.env.test.local
.env.production.local
```

## 예시

```env
VITE_API_BASE_URL=https://api.example.com
```

코드에서:

```ts
const baseUrl = import.meta.env.VITE_API_BASE_URL;
```

## 추가 시

기존 `.env` 내용을 유지한 채 필요한 키만 추가·갱신.
