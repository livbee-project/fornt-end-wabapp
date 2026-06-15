import type { ReactNode } from 'react';
import { marketplaceRepository } from '@/data/repositories/marketplaceRepositoryImpl';
import type { MarketplaceRepository } from '@/domain/repositories/marketplaceRepository';
import { MarketplaceRepositoryContext } from '@/presentation/contexts/marketplaceRepositoryContext';

type MarketplaceRepositoryProviderProps = {
  children: ReactNode;
  repository?: MarketplaceRepository;
};

export function MarketplaceRepositoryProvider({
  children,
  repository = marketplaceRepository,
}: MarketplaceRepositoryProviderProps) {
  return (
    <MarketplaceRepositoryContext.Provider value={repository}>
      {children}
    </MarketplaceRepositoryContext.Provider>
  );
}
