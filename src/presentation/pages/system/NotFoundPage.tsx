import { Link } from 'react-router-dom';
import { PageDescription, PageRoot, PageTitle } from '@/presentation/pages/shared/PageScaffold.styles';

export function NotFoundPage() {
  return (
    <PageRoot>
      <PageTitle>페이지를 찾을 수 없습니다</PageTitle>
      <PageDescription>
        요청한 경로가 없습니다. <Link to="/">홈으로 돌아가기</Link>
      </PageDescription>
    </PageRoot>
  );
}
