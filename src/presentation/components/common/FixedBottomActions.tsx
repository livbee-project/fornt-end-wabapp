import type { ReactNode } from 'react';
import {
  ActionBar,
  CancelButton,
  CancelLink,
  PrimaryButton,
  SecondaryButton,
} from './FixedBottomActions.styles';

type FixedBottomActionsProps = {
  cancelLabel?: string;
  cancelTo?: string;
  onCancel?: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
  primaryLabel: string;
  onPrimary?: () => void;
  primaryType?: 'button' | 'submit';
  secondaryType?: 'button' | 'submit';
  disabled?: boolean;
  /** 하단 탭 네비가 보이는 페이지에서 true */
  withBottomNav?: boolean;
  extraSlot?: ReactNode;
};

/** 화면 하단에 고정되는 취소·주요 액션 버튼 바 */
export function FixedBottomActions({
  cancelLabel = '취소',
  cancelTo,
  onCancel,
  secondaryLabel,
  onSecondary,
  primaryLabel,
  onPrimary,
  primaryType = 'button',
  secondaryType = 'button',
  disabled = false,
  withBottomNav = false,
  extraSlot,
}: FixedBottomActionsProps) {
  return (
    <ActionBar $withBottomNav={withBottomNav}>
      {cancelTo ? (
        <CancelLink to={cancelTo}>{cancelLabel}</CancelLink>
      ) : (
        <CancelButton type="button" onClick={onCancel}>
          {cancelLabel}
        </CancelButton>
      )}

      {secondaryLabel ? (
        <SecondaryButton type={secondaryType} onClick={onSecondary}>
          {secondaryLabel}
        </SecondaryButton>
      ) : (
        extraSlot
      )}

      <PrimaryButton type={primaryType} onClick={onPrimary} disabled={disabled}>
        {primaryLabel}
      </PrimaryButton>
    </ActionBar>
  );
}
