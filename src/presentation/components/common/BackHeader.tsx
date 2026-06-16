import type { ReactNode } from 'react';
import { Icon } from './Icon';
import { BackLink, HeaderBar, HeaderRight, HeaderTitle } from './BackHeader.styles';

type BackHeaderProps = {
  title: string;
  backTo: string;
  backLabel?: string;
  rightSlot?: ReactNode;
  sticky?: boolean;
};

/** 뒤로가기와 제목이 있는 상단 헤더 바 */
export function BackHeader({
  title,
  backTo,
  backLabel = '이전 화면으로 돌아가기',
  rightSlot,
  sticky = true,
}: BackHeaderProps) {
  return (
    <HeaderBar $sticky={sticky}>
      <BackLink to={backTo} aria-label={backLabel}>
        <Icon name="chevronLeft" />
      </BackLink>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderRight>{rightSlot ?? <span aria-hidden="true" />}</HeaderRight>
    </HeaderBar>
  );
}
