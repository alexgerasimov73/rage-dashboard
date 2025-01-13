import { SymbolLogo } from './SymbolLogo';
import { Network } from '@/config/types';

interface Props {
  readonly chain?: Network;
  readonly name?: string;
  readonly symbol: string;
}

export const Asset = ({ chain, name, symbol }: Props) => (
  <div className="flex items-center gap-4">
    {symbol && <SymbolLogo chain={chain} symbol={symbol} />}

    <div className="flex flex-col">
      <b>{symbol}</b>
      {name && <span className="text-xxs text-text-secondary first-letter:capitalize">{name}</span>}
    </div>
  </div>
);
