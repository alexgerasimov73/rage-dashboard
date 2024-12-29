'use client';

import { useState } from 'react';

interface RadioOption {
  readonly activeStyles: string;
  readonly label: React.ReactNode;
  readonly value: string;
}

interface RadioGroupProps {
  readonly options: RadioOption[];
  readonly name: string;
  readonly value?: string;
  readonly onChange?: (value: string) => void;
}

export const RadioGroup = ({ options, name, value, onChange }: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(value || '');

  const handleChange = (value: string) => () => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex w-full gap-2">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex items-center justify-between flex-1 gap-2 px-4 py-[10px] border border-bg-2 bg-gray-10 rounded-4 text-base cursor-pointer ${
            selectedValue === option.value ? option.activeStyles : ''
          }`}>
          <input
            className="hidden"
            checked={selectedValue === option.value}
            name={name}
            type="radio"
            value={option.value}
            onChange={handleChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
