import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/app/App';
import { AppProviders } from '@/app/AppProviders';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

/** 앱 엔트리 — StrictMode와 Provider로 React를 마운트한다. */
createRoot(rootElement).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
