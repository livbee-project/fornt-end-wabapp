import { Link } from 'react-router-dom';
import { BackHeader } from '@/presentation/components/common/BackHeader';
import { PageDescription, PageRoot, PageTitle, StatusCard } from '@/presentation/pages/shared/PageScaffold.styles';
import styled from 'styled-components';
import { listCardSurface } from '@/presentation/styles';

const MenuGrid = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 16px;
`;

const MenuLink = styled(Link)`
  ${listCardSurface}
  display: block;
  padding: 14px 16px;
  color: inherit;
  text-decoration: none;
  font-weight: 800;
`;

/** 마이페이지 허브 — 하위 관리 화면으로 이동한다. */
export function MyPage() {
  return (
    <PageRoot>
      <PageTitle>마이페이지</PageTitle>
      <PageDescription>제안·지원·포트폴리오 관리 메뉴입니다. (데모 스캐폴드)</PageDescription>
      <MenuGrid>
        <MenuLink to="/mypage/applicants">지원자 현황</MenuLink>
        <MenuLink to="/mypage/messages">제안·메시지</MenuLink>
        <MenuLink to="/mypage/edit">내 정보 수정</MenuLink>
        <MenuLink to="/mypage/host-portfolios">쇼호스트 포트폴리오 관리</MenuLink>
        <MenuLink to="/mypage/model-portfolios">모델 포트폴리오 관리</MenuLink>
        <MenuLink to="/hosts/portfolio/create">쇼호스트 포트폴리오 등록</MenuLink>
      </MenuGrid>
      <StatusCard style={{ marginTop: 16 }}>로그인 연동 전 데모 화면입니다.</StatusCard>
    </PageRoot>
  );
}

/** 마이페이지 하위 공통 스캐폴드 레이아웃 */
function MyPageSubPage({ title, description }: { title: string; description: string }) {
  return (
    <PageRoot>
      <BackHeader title={title} backTo="/mypage" backLabel="마이페이지로 돌아가기" />
      <PageDescription>{description}</PageDescription>
      <StatusCard>API 연결 전 스캐폴드 화면입니다.</StatusCard>
    </PageRoot>
  );
}

/** 지원자 현황 스캐폴드 */
export function MyPageApplicants() {
  return <MyPageSubPage title="지원자 현황" description="브랜드 공고 지원자를 확인합니다." />;
}

/** 제안·메시지 목록 스캐폴드 */
export function MyPageMessages() {
  return <MyPageSubPage title="제안·메시지" description="브랜드·인재 간 대화 목록입니다." />;
}

/** 내 정보 수정 스캐폴드 */
export function MyPageEdit() {
  return <MyPageSubPage title="내 정보 수정" description="프로필과 알림 설정을 관리합니다." />;
}

/** 쇼호스트 포트폴리오 관리 스캐폴드 */
export function MyPageHostPortfolios() {
  return <MyPageSubPage title="쇼호스트 포트폴리오 관리" description="등록한 포트폴리오를 관리합니다." />;
}

/** 모델 포트폴리오 관리 스캐폴드 */
export function MyPageModelPortfolios() {
  return <MyPageSubPage title="모델 포트폴리오 관리" description="등록한 포트폴리오를 관리합니다." />;
}
