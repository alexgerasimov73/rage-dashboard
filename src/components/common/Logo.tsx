import Image from 'next/image';
import { LogoIcon, LogoText } from '@/assets/icons';

export const Logo = () => (
  <div className="flex items-center gap-6">
    <Image src={LogoIcon} alt="Logo" />
    <Image src={LogoText} alt="Rage Trade" />
  </div>
);
