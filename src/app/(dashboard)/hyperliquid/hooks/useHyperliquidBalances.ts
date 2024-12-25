import { fetchHyperliquidBalances } from '@/utils/utils';
import { useQuery } from '@tanstack/react-query';

export const useHyperliquidBalances = (userAddress?: string) => {
  const { data } = useQuery({
    queryKey: ['hyperliquidBalances', userAddress],
    queryFn: () => {
      if (!userAddress) return;

      return fetchHyperliquidBalances(userAddress);
    },
    enabled: !!userAddress,
    staleTime: 1000 * 60 * 5,
  });

  return data;
};
