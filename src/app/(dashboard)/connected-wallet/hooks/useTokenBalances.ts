import { useAccount } from 'wagmi';
import { getBalance } from 'wagmi/actions';
import { formatUnits } from 'viem';
import { useQueries } from '@tanstack/react-query';
import { getConfig } from '@/config/wagmi';
import { useTokenPrices } from '../../../../hooks/useTokenPrices';
import { chainIds, SUPPORTED_TOKENS, tokenIds } from '@/config/constants';

export const useTokenBalances = () => {
  const { address, isConnected } = useAccount();
  const { isPricesLoading, tokenPrices } = useTokenPrices(isConnected, tokenIds.join(','));

  const balanceQueries = useQueries({
    queries: SUPPORTED_TOKENS.map((token) => ({
      queryKey: ['balance', token.address || address, token.network],
      queryFn: () => {
        if (!address) return;

        return getBalance(getConfig(), {
          address,
          chainId: chainIds[token.network],
          token: token.address,
        });
      },
      enabled: isConnected,
    })),
  });

  const tokenBalances = balanceQueries.map(({ data }, index) => {
    if (!data)
      return {
        isLoading: true,
      };

    const token = SUPPORTED_TOKENS[index];
    const price = tokenPrices?.[token.id]?.usd || 0;
    const amount = Number(formatUnits(data.value, data.decimals));
    const usdValue = amount * price;

    return {
      amount,
      id: token.id,
      chain: token.network,
      decimals: data.decimals,
      price,
      symbol: data.symbol,
      usdValue,
    };
  });

  return {
    isTokenBalancesLoading: isPricesLoading,
    tokenBalances,
    totalValue: tokenBalances.reduce((acc, token) => acc + (token.usdValue || 0), 0),
  };
};
