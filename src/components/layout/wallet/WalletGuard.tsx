'use client';

import { PropsWithChildren } from 'react';
import { useAccount } from 'wagmi';
import { ConnectWalletPage } from './ConnectWalletPage';
import { Block } from '@/components/common/Block';

export const WalletGuard = ({ children }: PropsWithChildren) => {
  const { isConnected, isConnecting, isReconnecting } = useAccount();

  if (isConnecting || isReconnecting)
    return <Block className="min-h-[calc(100vh_-_81px)]">Loading...</Block>;

  if (!isConnected) return <ConnectWalletPage />;

  return <>{children}</>;
};
