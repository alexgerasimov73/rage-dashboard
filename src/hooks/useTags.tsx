import Image from 'next/image';
import { useAccount } from 'wagmi';
import numeral from 'numeral';
import { useTotalValues } from './useTotalValues';
import { DOLLAR_PATTERN } from '@/config/constants';

export const useTags = () => {
  const { connector } = useAccount();
  const { totalWalletValue, totalHyperliquidValue, totalValue } = useTotalValues();

  return [
    {
      key: 'balance',
      label: 'Balance',
      path: '/',
      totalValue: numeral(totalValue).format(DOLLAR_PATTERN),
    },
    {
      key: 'connected-wallet',
      label: () => (
        <div className="flex items-center gap-2">
          {connector ? (
            <>
              {connector.icon && (
                <Image src={connector.icon} width={20} height={20} alt={connector.name} />
              )}
              {connector.name}
            </>
          ) : (
            'Connected wallet'
          )}
        </div>
      ),
      path: '/connected-wallet',
      totalValue: numeral(totalWalletValue).format(DOLLAR_PATTERN),
    },
    {
      key: 'hyperliquid',
      label: 'Hyperliquid',
      path: '/hyperliquid',
      totalValue: numeral(totalHyperliquidValue).format(DOLLAR_PATTERN),
    },
  ];
};
