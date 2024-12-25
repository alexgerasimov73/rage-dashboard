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
  readonly amount: number;
  readonly id: string;
  readonly chain: Network;
  readonly price: number;
  readonly symbol: string;
  readonly usdValue: number;
}

const walletTable: CommonTable<TableData>[] = [
  {
    title: 'Asset',
    render: (row) => <Asset name={row.id} symbol={row.symbol} />,
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
    render: (row) => <Withdrawal amount={row.amount} chain={row.chain} symbol={row.symbol} />,
    width: '25%',
  },
];

export const ConnectWalletTable = () => {
  const { tokenBalances } = useTokenBalances();

  return <Table columns={walletTable} data={tokenBalances} />;
};
