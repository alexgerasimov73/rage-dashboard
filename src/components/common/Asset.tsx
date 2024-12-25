import Image from 'next/image';

interface Props {
  readonly icon?: string;
  readonly name?: string;
  readonly symbol: string;
}

export const Asset = ({ icon, name, symbol }: Props) => (
  <div className="flex items-center g-2">
    {icon && <Image src={icon} alt={symbol} />}
    <div className="flex flex-col">
      <b>{symbol}</b>
      {name && <span className="text-xxs text-text-secondary first-letter:capitalize">{name}</span>}
    </div>
  </div>
);
