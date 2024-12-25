import { useAccount } from 'wagmi';
import Image from 'next/image';
import { Content, Portal, Root, Trigger } from '@radix-ui/react-popover';
import { Button } from '@/components/common/Button';
import { PopoverContent } from './PopoverContent';
import { Balance } from '@/components/common/Balance';

export const ConnectedWallet = () => {
  const { address, connector } = useAccount();

  return (
    <Root>
      <Trigger asChild>
        <Button className="flex items-center min-w-24 h-9" variant="secondary">
          {connector?.icon && (
            <Image src={connector.icon} width={16} height={16} alt={connector.name} />
          )}
          <Balance />
        </Button>
      </Trigger>

      <Portal>
        <Content
          className="flex flex-col gap-2 w-[300px] px-4 py-4 rounded-4 border border-bg-2 bg-gray-9 will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade"
          align="end"
          sideOffset={16}>
          {address && connector && <PopoverContent address={address} connector={connector} />}
        </Content>
      </Portal>
    </Root>
  );
};
