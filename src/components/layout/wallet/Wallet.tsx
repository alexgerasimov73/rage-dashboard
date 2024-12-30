'use client';

import { useAccount } from 'wagmi';
import { ConnectWallet } from './ConnectWallet';
import { ConnectedWallet } from './ConnectedWallet';

export const Wallet = () => {
  const { isConnected, isConnecting, isReconnecting } = useAccount();

  if (isConnecting || isReconnecting) return null;

  if (!isConnected) return <ConnectWallet isHeader />;

  return <ConnectedWallet />;
};
