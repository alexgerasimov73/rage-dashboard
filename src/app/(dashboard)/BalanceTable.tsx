'use client';

import { Table } from '@/components/common/Table';
import { Withdrawal } from '@/components/common/Withdrawal';
import { CommonTable } from '@/config/types';
import { useBalanceTableData } from '@/app/(dashboard)/hooks/useBalanceTableData';

interface TableData {
  readonly allocation: string;
  readonly balance: string;
  readonly chains: string;
  readonly icon?: string;
  readonly name: string;
}

const balanceTable: CommonTable<TableData>[] = [
  {
    title: 'Wallet',
    render: (row) => (
      <div className="flex items-center gap-1 text-sm text-text-primary">{row.name}</div>
    ),
    width: '20%',
  },
  {
    title: 'Allocation',
    render: (row) => <div>{row.allocation}%</div>,
    width: '20%',
  },
  {
    title: 'Chain',
    render: (row) => <div>{row.chains}</div>,
    width: '20%',
  },
  {
    title: 'Balance',
    render: (row) => <div>${row.balance}</div>,
    width: '15%',
  },
  {
    title: '',
    render: (row) => {
      if (row.name === 'Hyperliquid') return <></>;

      return <Withdrawal />;
    },
    width: '25%',
  },
];

export const BalanceTable = () => {
  const balanceTableData = useBalanceTableData();

  return <Table columns={balanceTable} data={balanceTableData} />;
};
