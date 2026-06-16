# 공통 컴포넌트

> 기준: [test_codex `design/common-components.md`](https://github.com/livbee-project/test_codex/blob/main/docs/design/common-components.md)  
> 경로: `src/presentation/components/`

## 선택 기준

| 컴포넌트 | 사용 시점 | 주요 규칙 |
| --- | --- | --- |
| `ServiceHeader` | 홈·콘텐츠 상단 탐색 | [home-card-rules.md](../home-card-rules.md) 헤더 규칙 |
| `BottomNavigation` | 모바일 주요 탭 | `active`에 현재 탭 명시 |
| `BackHeader` | 등록·수정·하위 페이지 | `title`, `backTo`, `backLabel` |
| `FormSection` | 등록 폼 단계 그룹 | step·optional·sideLabel 재구현 금지 |
| `UploadBox` | 비율 고정 대표 이미지 | `1:1` · `3:4` · `4:3` |
| `ActivityUploadRow` | 포트폴리오·갤러리 등 행 첨부 | 파일명·메타·previewSlot |
| `FixedBottomActions` | 취소·임시저장·등록 CTA | **`position: fixed`**, 등록 화면 `bottom: 0` |
| `ConfirmModal` | 등록·삭제 확인 | 위험 작업만 `variant="alert"` |
| `Icon` | 내비·버튼 아이콘 | `IconName`만 사용, 크기는 CSS에서 지정 |

## 등록 폼 조합

```tsx
<BackHeader title="포트폴리오 등록" backTo="/hosts" />
<CreatePageRoot>
  <CreateMain>
    <FormSection step="STEP 1" title="대표 프로필 사진">
      <ProfileUploadWrap>
        <UploadBox ratio="3:4" ariaLabel="프로필 사진 선택" />
      </ProfileUploadWrap>
    </FormSection>
    <ActivityUploadRow title="포트폴리오 파일" accept=".pdf,.ppt,.pptx,.jpg,.png" />
    <SubmitStatus role="status">{message}</SubmitStatus>
    <FixedBottomActions primaryLabel="포트폴리오 등록" />
  </CreateMain>
</CreatePageRoot>
<ConfirmModal open={open} onConfirm={submit} />
```

- 섹션 구분: `FormSection` 기본 `border-top` + 인접 `8px` 구분
- 외곽 여백: 페이지 카드가 아닌 `main`·`FormSection` padding
- 미리보기 카드: `PreviewCardShell` 너비 `min(168px)`, `PreviewMessageIcon` 20px

## Icon

- 새 아이콘은 `Icon.tsx`의 `IconName`·path map 함께 추가
- 장식 아이콘: `aria-hidden`, 의미 전달 시 `title` 또는 부모 `aria-label`
- **SVG에 width/height 미지정 금지** (flex 레이아웃 깨짐 방지)

## 파일 첨부 접근성

- `input[type=file]`은 숨기되, 클릭 가능한 `label`·`ariaLabel` 유지
- `UploadBox`·`ActivityUploadRow` 모두 label 기반

## 확장 기준

공통 컴포넌트는 **2페이지 이상 반복**·접근성 공통화·variant로 표현 가능할 때만 추가한다.

## 관련 문서

- [style.md](../style.md)
- [page-spec.md](../page-spec.md)
