import { Address } from 'viem';

export const enum Network {
  ARBITRUM = 'Arbitrum',
  OPTIMISM = 'Optimism',
  ETHEREUM = 'Ethereum',
}

export type CommonTable<T> = {
  readonly title: string;
  readonly width: string;
  readonly render: (row: T) => JSX.Element;
};

export type Token = {
  readonly id: string;
  readonly address?: Address;
  readonly network: Network;
  readonly symbol: string;
};

export type HyperliquidSpot = {
  readonly coin: string;
  readonly token: number;
  readonly hold: string;
  readonly total: string;
  readonly entryNtl: string;
};
