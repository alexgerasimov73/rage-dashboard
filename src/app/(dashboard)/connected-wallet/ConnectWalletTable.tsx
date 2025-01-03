'use client';

import numeral from 'numeral';
import { Amount } from '@/components/common/Amount';
import { Asset } from '@/components/common/Asset';
import { Table } from '@/components/common/Table';
import { Withdrawal } from '@/components/common/Withdrawal';
import { CommonTable, Network } from '@/config/types';
import { useTokenBalances } from './hooks/useTokenBalances';
import { DOLLAR_PATTERN } from '@/config/constants';

interface TableData {
  readonly amount?: number;
  readonly chain?: Network;
  readonly decimals?: number;
  readonly id?: string;
  readonly isLoading?: boolean;
  readonly price?: number;
  readonly symbol?: string;
  readonly usdValue?: number;
}

const walletTable: CommonTable<TableData>[] = [
  {
    title: 'Asset',
    render: (row) => <Asset name={row.id} symbol={`${row.symbol} (${row.chain})`} />,
    width: '30%',
  },
  {
    title: 'Amount',
    render: (row) => <Amount balance={row.amount} usdValue={row.usdValue} symbol={row.symbol} />,
    width: '30%',
  },
  {
    title: 'Price',
    render: (row) => <span>${numeral(row.price).format(DOLLAR_PATTERN)}</span>,
    width: '15%',
  },
  {
    title: '',
    render: (row) => (
      <Withdrawal
        amount={row.amount}
        decimals={row.decimals}
        chain={row.chain}
        symbol={row.symbol}
      />
    ),
    width: '25%',
  },
];

export const ConnectWalletTable = () => {
  const { isTokenBalancesLoading, tokenBalances } = useTokenBalances();

  if (isTokenBalancesLoading)
    return <div className="flex items-center justify-center w-full my-20">Loading...</div>;

  return <Table columns={walletTable} data={tokenBalances} />;
};
