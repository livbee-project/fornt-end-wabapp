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
  extraSlot?: ReactNode;
};

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
  extraSlot,
}: FixedBottomActionsProps) {
  return (
    <ActionBar>
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
