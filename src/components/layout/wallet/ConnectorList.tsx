import { type Connector, useConnect } from 'wagmi';
import Image from 'next/image';
import { Button } from '@/components/common/Button';

export const ConnectorList = () => {
  const { connect, connectors, isPending } = useConnect();

  const handleConnect = (connector: Connector) => () => connect({ connector });

  return connectors.map((connector) => (
    <Button
      key={connector.uid}
      className="justify-between px-4 py-[10px] border border-bg-2 bg-gray-10"
      disabled={isPending}
      variant="secondary"
      onClick={handleConnect(connector)}>
      <div className="flex items-center gap-2">
        {connector.icon && (
          <Image src={connector.icon} width={20} height={20} alt={connector.name} />
        )}
        {connector.name}
      </div>
    </Button>
  ));
};
