import { createContext, useContext } from 'react';
import type { MarketplaceRepository } from '@/domain/repositories/marketplaceRepository';

export const MarketplaceRepositoryContext = createContext<MarketplaceRepository | null>(null);

/** Context에서 MarketplaceRepository 인스턴스를 가져온다. */
export function useMarketplaceRepository(): MarketplaceRepository {
  const context = useContext(MarketplaceRepositoryContext);

  if (!context) {
    throw new Error('useMarketplaceRepository must be used within MarketplaceRepositoryProvider');
  }

  return context;
}
