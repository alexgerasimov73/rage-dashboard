import { type Connector, useDisconnect } from 'wagmi';
import Image from 'next/image';
import type { Address } from 'viem';
import { Copy } from 'solar-icon-set';
import { Balance } from '@/components/common/Balance';
import { Button } from '@/components/common/Button';
import { copyToClipboard, truncateAddress } from '@/utils/utils';

interface Props {
  readonly address: Address;
  readonly connector: Connector;
}

export const PopoverContent = ({ address, connector }: Props) => {
  const { disconnect } = useDisconnect();

  const handleCopy = () => copyToClipboard(address);
  const handleDisconnect = () => disconnect();

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-1 text-xs font-semibold text-blue">
          {connector.icon && (
            <Image src={connector.icon} width={16} height={16} alt={connector.name} />
          )}
          {connector.name}
        </div>

        <Balance />
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-1 text-xs text-gray-icon" title={address}>
          {address && truncateAddress(address)}
          <Button variant="unstyled" onClick={handleCopy}>
            <Copy color="text-gray-icon" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button className="text-xs text-violet underline" variant="unstyled" onClick={handleCopy}>
            Switch
          </Button>
          <Button
            className="text-xs text-red underline"
            variant="unstyled"
            onClick={handleDisconnect}>
            Disconnect
          </Button>
        </div>
      </div>
    </>
  );
};
