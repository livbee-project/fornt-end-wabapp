import { RouterProvider } from 'react-router-dom';
import { appRouter } from '@/app/Router';

/** React Router를 마운트하는 앱 루트 컴포넌트 */
export function App() {
  return <RouterProvider router={appRouter} />;
}
