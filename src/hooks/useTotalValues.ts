import { useTokenBalances } from '@/app/(dashboard)/connected-wallet/hooks/useTokenBalances';
import { useHyperliquidData } from '@/app/(dashboard)/hyperliquid/hooks/useHyperliquidData';

export const useTotalValues = () => {
  const { totalValue: totalWalletValue } = useTokenBalances();
  const { totalValue: totalHyperliquidValue } = useHyperliquidData();

  const totalValue = totalWalletValue + totalHyperliquidValue;

  return {
    totalWalletValue: totalWalletValue,
    totalHyperliquidValue: totalHyperliquidValue,
    totalValue: totalValue,
  };
};
