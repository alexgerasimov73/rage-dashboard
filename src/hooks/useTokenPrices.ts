import { fetchTokenPrices } from '@/utils/utils';
import { useQuery } from '@tanstack/react-query';

export const useTokenPrices = (isConnected: boolean, ids: string) => {
  const { data: tokenPrices } = useQuery({
    queryKey: ['tokenPrices', ids],
    queryFn: () => fetchTokenPrices(ids),
    enabled: isConnected,
    staleTime: 1000 * 60 * 5,
  });

  return tokenPrices;
};
