import type { ChangeEventHandler, InputHTMLAttributes, Ref } from 'react';
import { Icon } from './Icon';
import type { UploadRatio } from './UploadBox.styles';
import { ChangeBadge, EmptyIcon, Preview, UploadLabel } from './UploadBox.styles';

export type { UploadRatio } from './UploadBox.styles';

type UploadInputProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>;
};

type UploadBoxProps = {
  ratio: UploadRatio;
  accept?: string;
  multiple?: boolean;
  previewUrl?: string;
  changeLabel?: string;
  ariaLabel: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputName?: string;
  inputRef?: Ref<HTMLInputElement>;
  inputProps?: UploadInputProps;
};

/** 이미지 미리보기와 파일 선택을 지원하는 업로드 박스 */
export function UploadBox({
  ratio,
  accept = 'image/*',
  multiple = false,
  previewUrl,
  changeLabel = '변경',
  ariaLabel,
  onChange,
  inputName,
  inputRef,
  inputProps,
}: UploadBoxProps) {
  return (
    <UploadLabel $ratio={ratio} $hasFile={Boolean(previewUrl)} aria-label={ariaLabel}>
      <input
        {...inputProps}
        ref={inputProps?.ref ?? inputRef}
        name={inputProps?.name ?? inputName}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={inputProps?.onChange ?? onChange}
      />
      {previewUrl ? (
        <Preview>
          <img src={previewUrl} alt="" />
          <ChangeBadge>{changeLabel}</ChangeBadge>
        </Preview>
      ) : (
        <EmptyIcon aria-hidden="true">
          <Icon name="plus" />
        </EmptyIcon>
      )}
    </UploadLabel>
  );
}
