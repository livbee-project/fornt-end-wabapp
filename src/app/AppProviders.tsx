import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { MarketplaceRepositoryProvider } from '@/app/MarketplaceRepositoryProvider';
import { GlobalStyle, theme } from '@/presentation/styles';

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MarketplaceRepositoryProvider>{children}</MarketplaceRepositoryProvider>
    </ThemeProvider>
  );
}
