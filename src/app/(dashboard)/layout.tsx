import type { PropsWithChildren } from 'react';
import { Block } from '@/components/common/Block';
import { Tags } from './Tags';
import { WalletGuard } from '@/components/layout/wallet/WalletGuard';

const DashboardLayout = ({ children }: PropsWithChildren) => (
  <WalletGuard>
    {/* TODO: */}
    <Block className="!items-start">
      <Tags />
      {children}
    </Block>
  </WalletGuard>
);

export default DashboardLayout;
