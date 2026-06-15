import { useState } from 'react';
import styled from 'styled-components';
import { BackHeader } from '@/presentation/components/common/BackHeader';
import { ConfirmModal } from '@/presentation/components/common/ConfirmModal';
import { FixedBottomActions } from '@/presentation/components/common/FixedBottomActions';
import { FormSection } from '@/presentation/components/common/FormSection';
import { UploadBox } from '@/presentation/components/common/UploadBox';

const FormRoot = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.surface.default};
`;

const FormMain = styled.main`
  padding-bottom: 24px;
`;

const Field = styled.label`
  display: grid;
  gap: 8px;
  color: var(--text);
  font-size: var(--font-body);
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};

  input {
    height: ${({ theme }) => theme.layout.form.inputHeight};
    padding: 0 14px;
    border: 1px solid var(--border);
    border-radius: 14px;
    background: #fff;
    color: var(--text);
    outline: 0;

    &:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgb(104 124 244 / 8%);
    }
  }
`;

export function CampaignCreatePage() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [title, setTitle] = useState('');

  return (
    <FormRoot>
      <BackHeader title="공고 등록" backTo="/campaigns" />
      <FormMain>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setConfirmOpen(true);
          }}
        >
          <FormSection step="STEP 1" title="대표 이미지" description="브랜드 PICK 카드에 노출됩니다.">
            <UploadBox ratio="4:3" ariaLabel="대표 이미지 선택" />
          </FormSection>

          <FormSection step="STEP 2" title="목록 노출 정보">
            <Field>
              공고 제목
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="예) 봄 신상 라이브 쇼핑 모집"
              />
            </Field>
          </FormSection>

          <FixedBottomActions
            cancelTo="/campaigns"
            secondaryLabel="임시 저장"
            onSecondary={() => undefined}
            primaryLabel="등록"
            primaryType="submit"
            disabled={!title.trim()}
          />
        </form>
      </FormMain>

      <ConfirmModal
        open={confirmOpen}
        title="공고를 등록할까요?"
        description="현재는 데모 UI이며 실제 저장 API는 연결되지 않았습니다."
        confirmLabel="등록"
        onConfirm={() => setConfirmOpen(false)}
        onCancel={() => setConfirmOpen(false)}
      />
    </FormRoot>
  );
}
