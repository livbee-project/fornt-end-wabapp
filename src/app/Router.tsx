import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/presentation/layouts/MainLayout';
import { CampaignCreatePage } from '@/presentation/pages/campaigns/CampaignCreatePage';
import { CampaignDetailPage } from '@/presentation/pages/campaigns/CampaignDetailPage';
import { CampaignListPage } from '@/presentation/pages/campaigns/CampaignListPage';
import { HostDetailPage } from '@/presentation/pages/hosts/HostDetailPage';
import { HostListPage } from '@/presentation/pages/hosts/HostListPage';
import { ModelDetailPage } from '@/presentation/pages/models/ModelDetailPage';
import { ModelListPage } from '@/presentation/pages/models/ModelListPage';
import { HomePage } from '@/presentation/pages/home/HomePage';
import { PlaceholderPage } from '@/presentation/pages/shared/PlaceholderPage';
import { NotFoundPage } from '@/presentation/pages/system/NotFoundPage';
import type { RouteHandle } from '@/shared/config/routeHandle';

export const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage />, handle: { bottomNav: 'home' } satisfies RouteHandle },
      { path: 'hosts', element: <HostListPage />, handle: { title: '쇼호스트', bottomNav: 'hosts' } satisfies RouteHandle },
      {
        path: 'hosts/new',
        element: <PlaceholderPage />,
        handle: { title: '쇼호스트 프로필 등록', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'hosts/:hostId',
        element: <HostDetailPage />,
        handle: { title: '쇼호스트 상세', bottomNav: 'hosts' } satisfies RouteHandle,
      },
      {
        path: 'hosts/portfolio/create',
        element: <PlaceholderPage />,
        handle: { title: '쇼호스트 포트폴리오 등록', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'hosts/:hostId/portfolio/create',
        element: <PlaceholderPage />,
        handle: { title: '쇼호스트 포트폴리오 등록', showAppNav: false } satisfies RouteHandle,
      },
      { path: 'models', element: <ModelListPage />, handle: { title: '모델', bottomNav: 'models' } satisfies RouteHandle },
      {
        path: 'models/new',
        element: <PlaceholderPage />,
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
        element: <PlaceholderPage />,
        handle: { title: '마이페이지', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'mypage/applicants',
        element: <PlaceholderPage />,
        handle: { title: '지원자 현황', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'mypage/messages',
        element: <PlaceholderPage />,
        handle: { title: '제안·메시지', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'mypage/messages/:threadId',
        element: <PlaceholderPage />,
        handle: { title: '대화방', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'mypage/edit',
        element: <PlaceholderPage />,
        handle: { title: '내 정보 수정', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'mypage/host-portfolios',
        element: <PlaceholderPage />,
        handle: { title: '쇼호스트 포트폴리오 관리', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      {
        path: 'mypage/model-portfolios',
        element: <PlaceholderPage />,
        handle: { title: '모델 포트폴리오 관리', bottomNav: 'mypage' } satisfies RouteHandle,
      },
      { path: 'events', element: <PlaceholderPage />, handle: { title: '이벤트', showAppNav: false } satisfies RouteHandle },
      {
        path: 'events/:contentId',
        element: <PlaceholderPage />,
        handle: { title: '이벤트 상세', showAppNav: false } satisfies RouteHandle,
      },
      { path: 'news', element: <PlaceholderPage />, handle: { title: '뉴스', showAppNav: false } satisfies RouteHandle },
      {
        path: 'news/:contentId',
        element: <PlaceholderPage />,
        handle: { title: '뉴스 상세', showAppNav: false } satisfies RouteHandle,
      },
      { path: 'clips', element: <PlaceholderPage />, handle: { title: '숏클립', showAppNav: false } satisfies RouteHandle },
      {
        path: 'clips/:clipId',
        element: <PlaceholderPage />,
        handle: { title: '숏클립 상세', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'community',
        element: <PlaceholderPage />,
        handle: { title: '커뮤니티', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'community/new',
        element: <PlaceholderPage />,
        handle: { title: '글쓰기', showAppNav: false } satisfies RouteHandle,
      },
      {
        path: 'community/:postId',
        element: <PlaceholderPage />,
        handle: { title: '게시글 상세', showAppNav: false } satisfies RouteHandle,
      },
      { path: 'login', element: <PlaceholderPage />, handle: { title: '로그인', showAppNav: false } satisfies RouteHandle },
      { path: 'signup', element: <PlaceholderPage />, handle: { title: '회원가입', showAppNav: false } satisfies RouteHandle },
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
