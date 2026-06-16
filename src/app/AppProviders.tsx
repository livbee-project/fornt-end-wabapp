import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { MarketplaceRepositoryProvider } from '@/app/MarketplaceRepositoryProvider';
import { GlobalStyle, theme } from '@/presentation/styles';

type AppProvidersProps = {
  children: ReactNode;
};

/** Theme·GlobalStyle·Repository Provider를 감싸는 최상위 Provider */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MarketplaceRepositoryProvider>{children}</MarketplaceRepositoryProvider>
    </ThemeProvider>
  );
}
