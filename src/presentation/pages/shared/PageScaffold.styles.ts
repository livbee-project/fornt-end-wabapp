import styled from 'styled-components';
import { listCardSurface } from '@/presentation/styles';

export const PageRoot = styled.div`
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.layout.contentGutterMobile};
`;

export const PageTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const PageDescription = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing[5]};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.bodySmall};
  line-height: ${({ theme }) => theme.typography.lineHeight.body};
`;

export const StatusCard = styled.div`
  ${listCardSurface}
  padding: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.bodySmall};
`;
