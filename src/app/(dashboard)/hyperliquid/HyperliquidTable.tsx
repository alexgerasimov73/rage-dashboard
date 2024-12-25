'use client';

import { Amount } from '@/components/common/Amount';
import { Asset } from '@/components/common/Asset';
import { Table } from '@/components/common/Table';
import { CommonTable } from '@/config/types';
import { useHyperliquidData } from './hooks/useHyperliquidData';

interface TableData {
  readonly amount: number;
  readonly price: number;
  readonly symbol: string;
  readonly usdValue: number;
}

const hyperliquidTable: CommonTable<TableData>[] = [
  {
    title: 'Asset',
    render: (row) => <Asset symbol={row.symbol} />,
    width: '30%',
  },
  {
    title: 'Amount',
    render: (row) => <Amount balance={row.amount} usdValue={row.price} symbol={row.symbol} />,
    width: '30%',
  },
  {
    title: 'Price',
    render: (row) => <span>${row.price}</span>,
    width: '15%',
  },
  {
    title: '',
    render: () => <></>,
    width: '25%',
  },
];

export const HyperliquidTable = () => {
  const { hyperliquidData } = useHyperliquidData();

  if (!hyperliquidData.length)
    return (
      <div className="flex items-center justify-center w-full my-20">
        No balances to display. It seems you haven&#39;t used Hyperliquid yet.
      </div>
    );

  return <Table columns={hyperliquidTable} data={hyperliquidData} />;
};
