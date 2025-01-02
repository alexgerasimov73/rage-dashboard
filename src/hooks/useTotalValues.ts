import { useTokenBalances } from '@/app/(dashboard)/connected-wallet/hooks/useTokenBalances';
import { useHyperliquidData } from '@/app/(dashboard)/hyperliquid/hooks/useHyperliquidData';

export const useTotalValues = () => {
  const { isTokenBalancesLoading, totalValue: totalWalletValue } = useTokenBalances();
  const { isHyperliquidLoading, totalValue: totalHyperliquidValue } = useHyperliquidData();

  const totalValue = totalWalletValue + totalHyperliquidValue;

  return {
    isTotalValueLoading: isTokenBalancesLoading || isHyperliquidLoading,
    totalWalletValue: totalWalletValue,
    totalHyperliquidValue: totalHyperliquidValue,
    totalValue: totalValue,
  };
};
