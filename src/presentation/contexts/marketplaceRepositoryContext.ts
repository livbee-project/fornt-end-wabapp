import { createContext, useContext } from 'react';
import type { MarketplaceRepository } from '@/domain/repositories/marketplaceRepository';

export const MarketplaceRepositoryContext = createContext<MarketplaceRepository | null>(null);

export function useMarketplaceRepository(): MarketplaceRepository {
  const context = useContext(MarketplaceRepositoryContext);

  if (!context) {
    throw new Error('useMarketplaceRepository must be used within MarketplaceRepositoryProvider');
  }

  return context;
}
