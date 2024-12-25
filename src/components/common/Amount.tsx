import numeral from 'numeral';
import { DOLLAR_PATTERN, TOKEN_PATTERN } from '@/config/constants';

interface Props {
  readonly balance: number;
  readonly symbol: string;
  readonly usdValue: number;
}

export const Amount = ({ balance, symbol, usdValue }: Props) => (
  <div className="flex flex-col gap-1">
    <span className="text-xxs text-text-secondary">
      ${numeral(usdValue).format(DOLLAR_PATTERN)}
    </span>
    <b>
      {numeral(balance).format(TOKEN_PATTERN)} {symbol}
    </b>
  </div>
);
