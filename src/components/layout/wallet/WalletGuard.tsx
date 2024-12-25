'use client';

import { PropsWithChildren } from 'react';
import { useAccount } from 'wagmi';
import { ConnectWalletPage } from './ConnectWalletPage';

export const WalletGuard = ({ children }: PropsWithChildren) => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return <ConnectWalletPage />;
  }

  return <>{children}</>;
};
