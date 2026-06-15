import { RouterProvider } from 'react-router-dom';
import { appRouter } from '@/app/Router';

export function App() {
  return <RouterProvider router={appRouter} />;
}
