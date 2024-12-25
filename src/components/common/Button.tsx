import type { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: 'primary' | 'secondary' | 'unstyled';
}

export const Button = ({ variant = 'primary', className, children, ...rest }: Props) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-4 text-base focus:outline-none focus:shadow-transparent transition';

  const variants = {
    primary: 'px-3 py-2 font-semibold bg-brand hover:bg-brand-1 focus:border-brand-2',
    secondary: 'px-3 py-2 font-semibold bg-gray-9 hover:bg-gray-8 focus:border-gray-6',
    unstyled: '',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className || ''}`} {...rest}>
      {children}
    </button>
  );
};
