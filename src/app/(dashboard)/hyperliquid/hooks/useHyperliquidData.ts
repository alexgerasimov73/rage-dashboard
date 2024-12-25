import { useHyperliquidBalances } from './useHyperliquidBalances';
import { useAccount } from 'wagmi';
import { useTokenPrices } from '../../../../hooks/useTokenPrices';

export const useHyperliquidData = () => {
  const { address, isConnected } = useAccount();
  const tokenBalances = useHyperliquidBalances(address);

  const coins =
    tokenBalances?.balances.map((balance) => balance.coin.toLowerCase()).join(',') || '';
  const tokenPrices = useTokenPrices(isConnected, coins);

  const hyperliquidData = tokenBalances
    ? tokenBalances.balances.map((balance) => {
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
    hyperliquidData,
    totalValue: hyperliquidData.reduce((acc, token) => acc + token.usdValue, 0),
  };
};
