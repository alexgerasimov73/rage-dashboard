import { Logo } from '@/components/common/Logo';
import { Wallet } from '../wallet/Wallet';

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 border-b border-bg-2 bg-bg-1 backdrop-blur-md z-10">
    <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center px-6 py-3">
      <Logo />
      <Wallet />
    </div>
  </header>
);
