import { useId, type ReactNode } from 'react';
import {
  Backdrop,
  CancelButton,
  ConfirmButton,
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from './ConfirmModal.styles';

type ConfirmModalProps = {
  open: boolean;
  title: string;
  description?: ReactNode;
  confirmLabel: string;
  cancelLabel?: string;
  variant?: 'default' | 'alert';
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmModal({
  open,
  title,
  description,
  confirmLabel,
  cancelLabel = '취소',
  variant = 'default',
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const titleId = useId();
  const descriptionId = useId();

  if (!open) {
    return null;
  }

  return (
    <Backdrop role="presentation" onClick={onCancel}>
      <Dialog
        $variant={variant}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        onClick={(event) => event.stopPropagation()}
      >
        <DialogBody>
          <DialogTitle id={titleId}>{title}</DialogTitle>
          {description ? <DialogDescription id={descriptionId}>{description}</DialogDescription> : null}
        </DialogBody>

        <DialogActions>
          <ConfirmButton $variant={variant} type="button" onClick={onConfirm}>
            {confirmLabel}
          </ConfirmButton>
          <CancelButton type="button" onClick={onCancel}>
            {cancelLabel}
          </CancelButton>
        </DialogActions>
      </Dialog>
    </Backdrop>
  );
}
