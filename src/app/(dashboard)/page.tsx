import type { Metadata } from 'next';
import { BalanceTable } from './BalanceTable';
import { NO_INDEX_PAGE } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Balance',
  ...NO_INDEX_PAGE,
};

const BalancePage = () => <BalanceTable />;

export default BalancePage;
