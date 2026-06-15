import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, describe, expect, it } from 'vitest';
import { App } from '@/app/App';
import { AppProviders } from '@/app/AppProviders';

describe('app smoke', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders home page content', async () => {
    document.body.innerHTML = '<div id="root"></div>';
    const rootElement = document.getElementById('root');

    if (!rootElement) {
      throw new Error('Root element not found');
    }

    createRoot(rootElement).render(
      <StrictMode>
        <AppProviders>
          <App />
        </AppProviders>
      </StrictMode>,
    );

    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });

    expect(document.body.textContent).toContain('Livbee');
    expect(document.body.textContent).toContain('지금 뜨는 쇼핑라이브');
  });
});
