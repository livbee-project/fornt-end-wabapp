import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/presentation/layouts/MainLayout';
import { CampaignCreatePage } from '@/presentation/pages/campaigns/CampaignCreatePage';
import { CampaignDetailPage } from '@/presentation/pages/campaigns/CampaignDetailPage';
import { CampaignListPage } from '@/presentation/pages/campaigns/CampaignListPage';
import { HostDetailPage } from '@/presentation/pages/hosts/HostDetailPage';
import { HostListPage } from '@/presentation/pages/hosts/HostListPage';
import { HostProfileCreatePage } from '@/presentation/pages/hosts/HostProfileCreatePage';
import { HostPortfolioCreatePage } from '@/presentation/pages/hosts/HostPortfolioCreatePage';
import { ModelDetailPage } from '@/presentation/pages/models/ModelDetailPage';
import { ModelListPage } from '@/presentation/pages/models/ModelListPage';
import { ModelProfileCreatePage } from '@/presentation/pages/models/ModelProfileCreatePage';
import { HomePage } from '@/presentation/pages/home/HomePage';
import {
  MyPage,
  MyPageApplicants,
  MyPageEdit,
  MyPageHostPortfolios,
  MyPageMessages,
  MyPageModelPortfolios,
} from '@/presentation/pages/mypage/MyPage';
import { LoginPage, SignupPage } from '@/presentation/pages/auth/AuthPages';
import { ContentDetailPage, ContentListPage } from '@/presentation/pages/shared/ContentListPage';
import { PlaceholderPage } from '@/presentation/pages/shared/PlaceholderPage';
import { NotFoundPage } from '@/presentation/pages/system/NotFoundPage';
import type { RouteHandle } from '@/shared/config/routeHandle';

/** 앱 전체 페이지 라우트 트리 */
export const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage />, handle: { bottomNav: 'home' } satisfies RouteHandle },
      { path: 'hosts', element: <HostListPage />, handle: { title: '쇼호스트', bottomNav: 'hosts' } satisfies RouteHandle },
      {
        path: 'hosts/new',
        element: <HostProfileCreatePage />,
        handle: { title: '쇼호스트 프로필 등록', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'hosts/portfolio/create',
        element: <HostPortfolioCreatePage />,
        handle: { title: '쇼호스트 포트폴리오 등록', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'hosts/:hostId/portfolio/create',
        element: <HostPortfolioCreatePage />,
        handle: { title: '쇼호스트 포트폴리오 등록', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'hosts/:hostId',
        element: <HostDetailPage />,
        handle: { title: '쇼호스트 상세', bottomNav: 'hosts' } satisfies RouteHandle,
      },
      { path: 'models', element: <ModelListPage />, handle: { title: '모델', bottomNav: 'models' } satisfies RouteHandle },
      {
        path: 'models/new',
        element: <ModelProfileCreatePage />,
        handle: { title: '모델 프로필 등록', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'models/:modelId',
        element: <ModelDetailPage />,
        handle: { title: '모델 상세', bottomNav: 'models' } satisfies RouteHandle,
      },
      {
        path: 'campaigns',
        element: <CampaignListPage />,
        handle: { title: '공고', bottomNav: 'campaigns' } satisfies RouteHandle,
      },
      {
        path: 'campaigns/new',
        element: <CampaignCreatePage />,
        handle: { title: '공고 등록', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'campaigns/:campaignId',
        element: <CampaignDetailPage />,
        handle: { title: '공고 상세', bottomNav: 'campaigns' } satisfies RouteHandle,
      },
      {
        path: 'mypage',
        element: <MyPage />,
        handle: { title: '마이페이지', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'mypage/applicants',
        element: <MyPageApplicants />,
        handle: { title: '지원자 현황', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'mypage/messages',
        element: <MyPageMessages />,
        handle: { title: '제안·메시지', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'mypage/messages/:threadId',
        element: <PlaceholderPage />,
        handle: { title: '대화방', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'mypage/edit',
        element: <MyPageEdit />,
        handle: { title: '내 정보 수정', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'mypage/host-portfolios',
        element: <MyPageHostPortfolios />,
        handle: { title: '쇼호스트 포트폴리오 관리', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'mypage/model-portfolios',
        element: <MyPageModelPortfolios />,
        handle: { title: '모델 포트폴리오 관리', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'events',
        element: <ContentListPage title="이벤트" description="진행 중인 이벤트 목록입니다." kind="events" />,
        handle: { title: '이벤트', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'events/:contentId',
        element: <ContentDetailPage title="이벤트 상세" />,
        handle: { title: '이벤트 상세', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'news',
        element: (
          <ContentListPage title="뉴스" description="업계 뉴스와 소식입니다." headerTab="news" kind="news" />
        ),
        handle: { title: '뉴스', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'news/:contentId',
        element: <ContentDetailPage title="뉴스 상세" />,
        handle: { title: '뉴스 상세', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'clips',
        element: (
          <ContentListPage title="숏클립" description="HOT CLIP 모음입니다." headerTab="clips" kind="clips" />
        ),
        handle: { title: '숏클립', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'clips/:clipId',
        element: <ContentDetailPage title="숏클립 상세" />,
        handle: { title: '숏클립 상세', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'community',
        element: <ContentListPage title="커뮤니티" description="자유 게시판입니다." kind="community" />,
        handle: { title: '커뮤니티', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'community/new',
        element: <PlaceholderPage />,
        handle: { title: '글쓰기', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'community/:postId',
        element: <ContentDetailPage title="게시글 상세" />,
        handle: { title: '게시글 상세', showAppNav: false } satisfies RouteHandle,
      },
      { path: 'login', element: <LoginPage />, handle: { title: '로그인', showAppNav: false } satisfies RouteHandle },
      { path: 'signup', element: <SignupPage />, handle: { title: '회원가입', showAppNav: false } satisfies RouteHandle },
      {
        path: 'find-password',
        element: <PlaceholderPage />,
        handle: { title: '비밀번호 찾기', showAppNav: false } satisfies RouteHandle,
      },
      { path: 'terms', element: <PlaceholderPage />, handle: { title: '이용약관', showAppNav: false } satisfies RouteHandle },
      {
        path: 'privacy',
        element: <PlaceholderPage />,
        handle: { title: '개인정보처리방침', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'business-info',
        element: <PlaceholderPage />,
        handle: { title: '사업자 정보', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'customer-center',
        element: <PlaceholderPage />,
        handle: { title: '고객센터', showAppNav: false } satisfies RouteHandle,
      },
    ],
  },
  { path: '/policy', element: <Navigate to="/terms" replace /> },
  { path: '*', element: <NotFoundPage /> },
]);
