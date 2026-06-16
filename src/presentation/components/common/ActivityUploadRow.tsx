import type { ChangeEventHandler, InputHTMLAttributes, ReactNode, Ref } from 'react';
import {
  Arrow,
  Copy,
  CopyDescription,
  CopyTitle,
  IconBox,
  Row,
  Selected,
  SelectedMeta,
  SelectedName,
  StatusLabel,
} from './ActivityUploadRow.styles';

type ActivityUploadInputProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>;
};

type ActivityUploadRowProps = {
  title: string;
  description?: string;
  accept?: string;
  multiple?: boolean;
  fileName?: string;
  fileMeta?: string;
  statusLabel?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputName?: string;
  inputRef?: Ref<HTMLInputElement>;
  inputProps?: ActivityUploadInputProps;
  previewSlot?: ReactNode;
};

/** 활동·포트폴리오 등 파일 첨부용 행 UI */
export function ActivityUploadRow({
  title,
  description,
  accept,
  multiple = false,
  fileName,
  fileMeta,
  statusLabel = '업로드 완료',
  onChange,
  inputName,
  inputRef,
  inputProps,
  previewSlot,
}: ActivityUploadRowProps) {
  const hasFile = Boolean(fileName || previewSlot);

  return (
    <Row $hasFile={hasFile} aria-label={title}>
      <input
        {...inputProps}
        ref={inputProps?.ref ?? inputRef}
        name={inputProps?.name ?? inputName}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={inputProps?.onChange ?? onChange}
      />
      {previewSlot ? (
        previewSlot
      ) : fileName ? (
        <Selected>
          <StatusLabel>{statusLabel}</StatusLabel>
          <SelectedName>{fileName}</SelectedName>
          {fileMeta ? <SelectedMeta>{fileMeta}</SelectedMeta> : null}
        </Selected>
      ) : (
        <>
          <IconBox aria-hidden="true">＋</IconBox>
          <Copy>
            <CopyTitle>{title}</CopyTitle>
            {description ? <CopyDescription>{description}</CopyDescription> : null}
          </Copy>
          <Arrow aria-hidden="true">›</Arrow>
        </>
      )}
    </Row>
  );
}
