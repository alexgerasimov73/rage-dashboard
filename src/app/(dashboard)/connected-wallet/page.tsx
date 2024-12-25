import type { Metadata } from 'next';
import { ConnectWalletTable } from './ConnectWalletTable';
import { NO_INDEX_PAGE } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Connected Wallet',
  ...NO_INDEX_PAGE,
};

const WalletPage = () => <ConnectWalletTable />;

export default WalletPage;
