# docs

프로젝트 환경·구조·규칙 가이드.

## 운영

| 파일 | 내용 |
|------|------|
| [stack.md](./stack.md) | 스택·버전 |
| [node.md](./node.md) | Node.js |
| [env.md](./env.md) | 환경 변수 |
| [run.md](./run.md) | 명령어 |
| [deploy.md](./deploy.md) | Vercel 배포 |
| [paths.md](./paths.md) | 루트 경로 |

## 아키텍처·데이터

| 파일 | 내용 |
|------|------|
| [arch.md](./arch.md) | 클린 아키텍처 |
| [domain/data-rules.md](./domain/data-rules.md) | 도메인·mock 데이터 규칙 |
| [page-data-mapping.md](./page-data-mapping.md) | 화면 ↔ 데이터 소스 매핑 |

## UI·디자인 (test_codex 기준 이식)

| 파일 | 내용 |
|------|------|
| [style.md](./style.md) | 디자인 토큰·styled-components |
| [design/common-components.md](./design/common-components.md) | 공통 컴포넌트 선택·폼 조합 |
| [home-card-rules.md](./home-card-rules.md) | 홈 카드 비율·표시·금지 사항 |
| [page-spec.md](./page-spec.md) | 페이지 UI·레이아웃 원칙 |
| [route.md](./route.md) | 라우팅·Route handle |

## 빠른 시작

```bash
nvm use
npm install
npm run dev
```

개발 서버: http://localhost:5173

## 작업 순서 (신규 화면)

1. [arch.md](./arch.md) · [domain/data-rules.md](./domain/data-rules.md)
2. [design/common-components.md](./design/common-components.md) · [style.md](./style.md)
3. [page-spec.md](./page-spec.md) · [page-data-mapping.md](./page-data-mapping.md)
4. `npm test` · `npm run build`
