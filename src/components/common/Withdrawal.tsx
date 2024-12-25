import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Button } from './Button';
import { WithdrawForm } from './WithdrawForm';
import { Network } from '@/config/types';

interface Props {
  readonly amount?: number;
  readonly chain?: Network;
  readonly symbol?: string;
}

export const Withdrawal = ({ amount, chain, symbol }: Props) => (
  <Root>
    <Trigger asChild>
      <Button className="w-full text-xxs font-semibold" variant="secondary">
        Withdraw
      </Button>
    </Trigger>

    <Portal>
      <Overlay className="fixed inset-0 flex items-center justify-center bg-bg-modal backdrop-blur z-20 data-[state=open]:animate-overlayShow" />
      <Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 min-w-[440px] p-3 rounded-4 border border-bg-2 bg-bg-trans-grey backdrop-blur-md z-30 data-[state=open]:animate-contentShow">
        <Title className="mb-4 text-base font-semibold">Withdraw</Title>
        <VisuallyHidden.Root>
          <Description />
        </VisuallyHidden.Root>

        <WithdrawForm amount={amount} chain={chain} symbol={symbol} />
        <Close asChild>
          <Button className="absolute top-2 right-2 px-0 text-lg text-gray-icon" variant="unstyled">
            ✕
          </Button>
        </Close>
      </Content>
    </Portal>
  </Root>
);
