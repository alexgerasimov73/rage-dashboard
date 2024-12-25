'use client';

import { useAccount } from 'wagmi';
import { ConnectWallet } from './ConnectWallet';
import { ConnectedWallet } from './ConnectedWallet';

export const Wallet = () => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return <ConnectWallet isHeader />;
  }

  return <ConnectedWallet />;
};
