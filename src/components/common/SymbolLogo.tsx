import Image from 'next/image';
import { Network } from '@/config/types';
import { logoFor } from '@/utils/utils';
import { ARB, OP } from '@/assets/icons';

interface Props {
  readonly chain?: Network;
  readonly symbol: string;
}

export const SymbolLogo = ({ chain, symbol }: Props) => {
  return (
    <div className="relative">
      <Image src={logoFor(symbol)} width={32} height={32} alt="symbol" />
      {chain && symbol !== 'ARB' && (
        <Image
          className="absolute bottom-0 -right-[6px]"
          src={chain === Network.ARBITRUM ? ARB : OP}
          width={16}
          height={16}
          alt="chain"
        />
      )}
    </div>
  );
};
