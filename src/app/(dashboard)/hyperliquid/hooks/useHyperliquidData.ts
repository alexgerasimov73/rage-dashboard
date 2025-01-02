import { useHyperliquidBalances } from './useHyperliquidBalances';
import { useAccount } from 'wagmi';
import { useTokenPrices } from '../../../../hooks/useTokenPrices';

export const useHyperliquidData = () => {
  const { address, isConnected } = useAccount();
  const { isLoading, hyperliquidData } = useHyperliquidBalances(address);

  const coins =
    hyperliquidData?.balances.map((balance) => balance.coin.toLowerCase()).join(',') || '';
  const { isPricesLoading, tokenPrices } = useTokenPrices(isConnected, coins);

  const hyperliquidBalances = hyperliquidData
    ? hyperliquidData.balances.map((balance) => {
        const price = tokenPrices?.[balance.coin.toLowerCase()].usd || 0;
        const amount = Number(balance.total);
        const usdValue = amount * price;

        return {
          amount,
          price,
          symbol: balance.coin,
          usdValue,
        };
      })
    : [];

  return {
    isHyperliquidLoading: isLoading || isPricesLoading,
    hyperliquidBalances,
    totalValue: hyperliquidBalances.reduce((acc, token) => acc + token.usdValue, 0),
  };
};
