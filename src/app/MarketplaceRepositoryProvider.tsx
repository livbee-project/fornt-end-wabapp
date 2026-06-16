import type { ReactNode } from 'react';
import { marketplaceRepository } from '@/data/repositories/marketplaceRepositoryImpl';
import type { MarketplaceRepository } from '@/domain/repositories/marketplaceRepository';
import { MarketplaceRepositoryContext } from '@/presentation/contexts/marketplaceRepositoryContext';

type MarketplaceRepositoryProviderProps = {
  children: ReactNode;
  repository?: MarketplaceRepository;
};

/** MarketplaceRepository를 Context로 주입하는 Provider */
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
