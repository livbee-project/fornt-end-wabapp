import styled, { css } from 'styled-components';

export type UploadRatio = '1:1' | '3:4' | '4:3';

const ratioStyles: Record<UploadRatio, ReturnType<typeof css>> = {
  '1:1': css`
    aspect-ratio: 1 / 1;
  `,
  '3:4': css`
    aspect-ratio: 3 / 4;
  `,
  '4:3': css`
    aspect-ratio: 4 / 3;
  `,
};

export const UploadLabel = styled.label<{ $ratio: UploadRatio; $hasFile: boolean }>`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  min-height: auto;
  padding: ${({ $hasFile }) => ($hasFile ? '0' : '22px')};
  overflow: hidden;
  border: 1px ${({ $hasFile }) => ($hasFile ? 'solid' : 'dashed')} #d9cff0;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ $hasFile, theme }) =>
    $hasFile ? '#f8f8fb' : `linear-gradient(135deg, #fcfaff 0%, ${theme.colors.brand.primarySoft} 100%)`};
  color: var(--sub-text);
  text-align: center;
  cursor: pointer;

  ${({ $ratio }) => ratioStyles[$ratio]}

  input[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
`;

export const EmptyIcon = styled.div`
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border: 1px solid rgb(104 124 244 / 8%);
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgb(255 255 255 / 90%);
  color: var(--primary);
  box-shadow: 0 10px 24px rgb(104 124 244 / 8%);

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const Preview = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background: #f8f8fb;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center top;
  }
`;

export const ChangeBadge = styled.span`
  position: absolute;
  left: 50%;
  bottom: 14px;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 12px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: rgb(36 33 43 / 72%);
  color: #fff;
  font-size: var(--font-chip);
  font-weight: ${({ theme }) => theme.typography.fontWeight.title};
`;
