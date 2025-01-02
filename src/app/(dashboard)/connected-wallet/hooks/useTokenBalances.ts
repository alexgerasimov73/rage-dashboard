import { useAccount } from 'wagmi';
import { getBalance } from 'wagmi/actions';
import { getConfig } from '@/config/wagmi';
import { useQueries } from '@tanstack/react-query';
import { useTokenPrices } from '../../../../hooks/useTokenPrices';
import { chainIds, SUPPORTED_TOKENS, tokenIds } from '@/config/constants';

export const useTokenBalances = () => {
  const { address, isConnected } = useAccount();
  const { isPricesLoading, tokenPrices } = useTokenPrices(isConnected, tokenIds.join(','));

  const balanceQueries = useQueries({
    queries: SUPPORTED_TOKENS.map((token) => ({
      queryKey: ['balance', token.address || address, token.network],
      queryFn: () =>
        getBalance(getConfig(), {
          address: token.address || address!,
          chainId: chainIds[token.network],
        }),
      enabled: isConnected,
    })),
  });

  const tokenBalances = balanceQueries.map(({ data }, index) => {
    const token = SUPPORTED_TOKENS[index];
    const price = tokenPrices?.[token.id]?.usd || 0;
    const amount = data ? Number(data.formatted) : 0;
    const usdValue = amount * price;

    return {
      amount,
      id: token.id,
      chain: token.network,
      price,
      symbol: token.symbol,
      usdValue,
    };
  });

  return {
    isTokenBalancesLoading: isPricesLoading,
    tokenBalances,
    totalValue: tokenBalances.reduce((acc, token) => acc + token.usdValue, 0),
  };
};
