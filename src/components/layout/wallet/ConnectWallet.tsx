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
import { Wallet } from 'solar-icon-set';
import { Button } from '../../common/Button';
import { ConnectorList } from './ConnectorList';

interface Props {
  readonly isHeader?: boolean;
}

export const ConnectWallet = ({ isHeader }: Props) => (
  <Root>
    <Trigger asChild>
      <Button className={isHeader ? '' : 'w-full'}>
        {isHeader ? (
          <>
            <Wallet iconStyle="BoldDuotone" /> Connect Wallet
          </>
        ) : (
          'Connect Your Wallet'
        )}
      </Button>
    </Trigger>

    <Portal>
      <Overlay className="fixed inset-0 flex items-center justify-center bg-bg-modal backdrop-blur z-20 data-[state=open]:animate-overlayShow" />
      <Content
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 min-w-96 p-3 rounded-4 border border-bg-2 bg-bg-trans-grey backdrop-blur-md z-30 data-[state=open]:animate-contentShow"
        aria-describedby={undefined}>
        <Title className="mb-4 text-base font-semibold">Connect Your Wallet</Title>
        <VisuallyHidden.Root>
          <Description />
        </VisuallyHidden.Root>

        <ConnectorList />

        <Close asChild>
          <Button className="absolute top-2 right-2 px-0 text-lg text-gray-icon" variant="unstyled">
            ✕
          </Button>
        </Close>
      </Content>
    </Portal>
  </Root>
);
