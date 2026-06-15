# style

> 아직 미설치. **예정 스택.**

## 라이브러리

**styled-components 6.x**

## 규칙

| 경우 | 위치 |
|------|------|
| 단순 스타일 | 컴포넌트 파일 하단 |
| 복잡·재사용 | `*.styles.ts` (같은 폴더) |

## 배치

`src/presentation/styles/` — 전역·테마·공통 스타일  
`src/presentation/components/**` — 컴포넌트 단위 스타일

## 참고

- 도메인·data·shared 레이어에는 UI 스타일을 두지 않음
- 스타일이 필요한 UI는 presentation 계층에만 위치
