import { memo, useRef, useState } from 'react';
import { AltArrowDown } from 'solar-icon-set';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface IOption {
  readonly label: string;
  readonly value: string;
}

interface Props {
  readonly className?: string;
  readonly data: IOption[];
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export const SingleSelect = memo(({ className, data, value, onChange }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef(null);

  const handleCloseSelect = () => setIsOpened(false);

  useOutsideClick(ref, handleCloseSelect, isOpened);

  const foundValue = data.find((item) => item.value === value)?.value;

  const handleSelectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpened((isOpened) => !isOpened);
  };

  const handleItemClick = (item: IOption) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onChange(item.value);
    handleCloseSelect();
  };

  return (
    <div className="relative" ref={ref}>
      <button
        className={`flex items-center justify-between min-w-32 p-3 rounded-4 border border-bg-2 bg-gray-10 text-base text-secondary hover:bg-gray-8 focus:ring-2 focus:ring-gray-6 focus:border-gray-6 ${
          className || ''
        }`}
        onClick={handleSelectClick}>
        {foundValue ? `${foundValue}` : <span className="truncate">Click for select</span>}
        <AltArrowDown />
      </button>

      {isOpened && (
        <div className="absolute left-0 top-full w-full p-2.5 rounded-4 bg-gray-9 z-30 slide">
          {data.map((item) => (
            <button
              key={item.value}
              className="flex w-full mb-4 capitalize last:mb-0 text-text-primary hover:text-text-secondary"
              onClick={handleItemClick(item)}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});
