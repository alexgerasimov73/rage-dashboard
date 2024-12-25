'use client';

import numeral from 'numeral';
import { useTotalValues } from '@/hooks/useTotalValues';
import { DOLLAR_PATTERN } from '@/config/constants';

export const Balance = () => {
  const { totalValue } = useTotalValues();

  return (
    <span className="text-sm font-semibold">${numeral(totalValue).format(DOLLAR_PATTERN)}</span>
  );
};
