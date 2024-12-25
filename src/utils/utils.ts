import axios from 'axios';
import type { Address } from 'viem';
import { COINGECKO_API_URL, HYPERLIQUID_API_URL } from '@/config/constants';
import { HyperliquidSpot } from '@/config/types';

export const truncateAddress = (address: Address, chars = 4): string =>
  `${address.slice(0, chars)}...${address.slice(-chars)}`;

export const copyToClipboard = (text: string): void => void navigator.clipboard.writeText(text);

export const getDataForSelect = (data: string[]) =>
  data.map((item) => ({
    value: item,
    label: item,
  }));

export const fetchTokenPrices = async (
  ids: string,
): Promise<Record<string, Record<'usd', number>>> => {
  const response = await axios.get(COINGECKO_API_URL, {
    params: {
      ids,
      vs_currencies: 'usd',
    },
  });

  return response.data;
};

export const fetchHyperliquidBalances = async (
  userAddress: string,
): Promise<Record<'balances', HyperliquidSpot[]>> => {
  const response = await axios.post<Record<'balances', HyperliquidSpot[]>>(
    HYPERLIQUID_API_URL,
    {
      type: 'spotClearinghouseState',
      user: userAddress,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};
