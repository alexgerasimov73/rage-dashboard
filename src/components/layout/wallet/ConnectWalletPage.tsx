import { Block } from '@/components/common/Block';
import { ConnectWallet } from './ConnectWallet';

export const ConnectWalletPage = () => (
  <Block className="min-h-[calc(100vh_-_81px)]">
    <Block className="w-[350px] p-4">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-base font-semibold">Connect Your Wallet</h2>
        <p className="text-xs text-text-secondary text-center">
          This page requires access to your wallet.
          <br />
          Please connect your wallet to continue
        </p>
      </div>

      <ConnectWallet />
    </Block>
  </Block>
);
