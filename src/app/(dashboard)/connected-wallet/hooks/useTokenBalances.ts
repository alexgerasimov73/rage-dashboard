import { useAccount, useBalance } from 'wagmi';
import { useTokenPrices } from '../../../../hooks/useTokenPrices';
import { chainIds, SUPPORTED_TOKENS, tokenIds } from '@/config/constants';

export function useTokenBalances() {
  const { address, isConnected } = useAccount();
  const tokenPrices = useTokenPrices(isConnected, tokenIds.join(','));

  const balancesQuery = SUPPORTED_TOKENS.map((token) => ({
    ...useBalance({ address: token.address || address, chainId: chainIds[`${token.network}`] }),
  }));

  const tokenBalances = balancesQuery.map(({ data }, index) => {
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
    tokenBalances,
    totalValue: tokenBalances.reduce((acc, token) => acc + token.usdValue, 0),
  };
}
