'use client';

import numeral from 'numeral';
import { useTotalValues } from '@/hooks/useTotalValues';
import { DOLLAR_PATTERN } from '@/config/constants';

export const Balance = () => {
  const { isTotalValueLoading, totalValue } = useTotalValues();

  return (
    <span className="text-sm font-semibold">
      {isTotalValueLoading ? 'Loading...' : `$${numeral(totalValue).format(DOLLAR_PATTERN)}`}
    </span>
  );
};
