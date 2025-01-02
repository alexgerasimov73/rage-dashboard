import { useAccount } from 'wagmi';
import numeral from 'numeral';
import { useTotalValues } from '../../../hooks/useTotalValues';
import { DOLLAR_PATTERN } from '@/config/constants';
import { Hyperliquid } from '@/assets/icons';

export const useBalanceTableData = () => {
  const { connector } = useAccount();
  const { isTotalValueLoading, totalWalletValue, totalHyperliquidValue, totalValue } =
    useTotalValues();

  return {
    balanceTableData: [
      {
        name: connector?.name || 'Connected Wallet',
        icon: connector?.icon || '',
        allocation: numeral((totalWalletValue / totalValue) * 100).format(DOLLAR_PATTERN),
        balance: numeral(totalWalletValue).format(DOLLAR_PATTERN),
        chains: 'ETH, ARB, OP',
      },
      {
        name: 'Hyperliquid',
        icon: Hyperliquid,
        allocation: numeral((totalHyperliquidValue / totalValue) * 100).format(DOLLAR_PATTERN),
        balance: numeral(totalHyperliquidValue).format(DOLLAR_PATTERN),
        chains: 'ARB',
      },
    ],
    isBalanceTableDataLoading: isTotalValueLoading,
  };
};
